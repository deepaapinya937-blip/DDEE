param()
$chromeHistory = "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\History"
$tempCopy = "$env:TEMP\chrome_forensic_actual.db"

if (Test-Path $chromeHistory) {
    Copy-Item $chromeHistory $tempCopy -Force
    $bytes = [System.IO.File]::ReadAllBytes($tempCopy)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)

    $urls = @()
    # Simple regex extraction of http urls from SQLite file
    $matches = [regex]::Matches($text, 'https?://[a-zA-Z0-9\.\-_/]+')
    foreach ($m in $matches) {
        $val = $m.Value
        if ($val -match 'ph4nt0m|ruizen|phantom|roblox|freefire|dekthep') {
            $urls += $val
        }
    }
    $uniqueUrls = $urls | Select-Object -Unique
    Write-Output "=== Matching URLs in Chrome History ==="
    $uniqueUrls | ForEach-Object { Write-Output $_ }
    Write-Output "Total matches: $($uniqueUrls.Count)"
} else {
    Write-Output "Chrome history not found"
}
