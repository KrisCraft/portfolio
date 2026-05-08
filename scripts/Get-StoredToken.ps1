<#
.SYNOPSIS
  Read a generic credential from Windows Credential Manager (DPAPI-encrypted).

.PARAMETER Target
  The credential target name (e.g. "figma-pat", "jira-delta").

.OUTPUT
  Prints the token to stdout. Exits with code 1 if the credential is missing.

.EXAMPLE
  $tok = & .\scripts\Get-StoredToken.ps1 -Target figma-pat
#>
param(
  [Parameter(Mandatory=$true)][string]$Target
)

$sig = @'
[DllImport("advapi32", CharSet=CharSet.Unicode, SetLastError=true)]
public static extern bool CredReadW(string target, int type, int flags, out IntPtr cred);
[DllImport("advapi32")]
public static extern void CredFree(IntPtr buffer);
[StructLayout(LayoutKind.Sequential, CharSet=CharSet.Unicode)]
public struct CREDENTIAL {
    public int Flags; public int Type; public string TargetName; public string Comment;
    public System.Runtime.InteropServices.ComTypes.FILETIME LastWritten;
    public int CredentialBlobSize; public IntPtr CredentialBlob;
    public int Persist; public int AttributeCount; public IntPtr Attributes;
    public string TargetAlias; public string UserName;
}
'@
Add-Type -MemberDefinition $sig -Name C -Namespace W -ErrorAction SilentlyContinue

$ptr = [IntPtr]::Zero
if (-not [W.C]::CredReadW($Target, 1, 0, [ref]$ptr)) {
    Write-Error "Credential '$Target' not found in Credential Manager."
    exit 1
}
try {
    $cred  = [System.Runtime.InteropServices.Marshal]::PtrToStructure($ptr, [type][W.C+CREDENTIAL])
    $bytes = New-Object byte[] $cred.CredentialBlobSize
    [System.Runtime.InteropServices.Marshal]::Copy($cred.CredentialBlob, $bytes, 0, $cred.CredentialBlobSize)
    [System.Console]::Out.Write([System.Text.Encoding]::Unicode.GetString($bytes))
} finally {
    [W.C]::CredFree($ptr) | Out-Null
}
