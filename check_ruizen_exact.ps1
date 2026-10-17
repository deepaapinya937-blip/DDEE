param()
$tempCopy = "$env:TEMP\chrome_forensic_actual.db"
$bytes = [System.IO.File]::ReadAllBytes($tempCopy)
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

Write-Output "=== REAL VERIFICATION CHECK ==="
Write-Output "Contains 'ruizen': $($text.Contains('ruizen'))"
Write-Output "Contains 'ruizenteam': $($text.Contains('ruizenteam'))"
Write-Output "Contains 'client.ruizenteam.store': $($text.Contains('client.ruizenteam.store'))"
Write-Output "Contains 'ph4nt0m.lol': $($text.Contains('ph4nt0m.lol'))"
Write-Output "Contains 'phantom.k4ze.dev': $($text.Contains('phantom.k4ze.dev'))"
Write-Output "Contains 'bityou': $($text.Contains('bityou'))"
Write-Output "Contains 'AltStore': $($text.Contains('AltStore'))"
