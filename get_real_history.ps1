param()
$tempCopy = "$env:TEMP\chrome_forensic_actual.db"
$bytes = [System.IO.File]::ReadAllBytes($tempCopy)
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

$matches = [regex]::Matches($text, 'https?://[a-zA-Z0-9\.\-_/]+')
$counts = @{}

foreach ($m in $matches) {
    $val = $m.Value.ToLower()
    if ($val.Length -gt 10 -and -not $val.EndsWith(".js") -and -not $val.EndsWith(".css") -and -not $val.EndsWith(".png") -and -not $val.EndsWith(".svg")) {
        $counts[$val] = ($counts[$val] + 1)
    }
}

Write-Output "=== TOP VISITED URLS IN CHROME ==="
$counts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 35 | ForEach-Object {
    Write-Output "$($_.Value) hits: $($_.Key)"
}
