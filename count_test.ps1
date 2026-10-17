param()
$tempCopy = "$env:TEMP\chrome_forensic_actual.db"
$bytes = [System.IO.File]::ReadAllBytes($tempCopy)
$text = [System.Text.Encoding]::UTF8.GetString($bytes)
$m1 = [regex]::Matches($text, 'ph4nt0m\.lol')
$m2 = [regex]::Matches($text, 'client\.ruizenteam\.store')
$m3 = [regex]::Matches($text, 'phantom\.k4ze\.dev')
$m4 = [regex]::Matches($text, 'dekthepstore\.dekhere\.pro')
Write-Output "ph4nt0m.lol count: $($m1.Count)"
Write-Output "client.ruizenteam.store count: $($m2.Count)"
Write-Output "phantom.k4ze.dev count: $($m3.Count)"
Write-Output "dekthepstore.dekhere.pro count: $($m4.Count)"
