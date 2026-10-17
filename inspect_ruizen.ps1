param()
$tempCopy = "$env:TEMP\chrome_forensic_actual.db"
$bytes = [System.IO.File]::ReadAllBytes($tempCopy)
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

$idx = $text.IndexOf("ruizen")
$count = 0
while ($idx -ge 0 -and $count -lt 10) {
    $start = [Math]::Max(0, $idx - 60)
    $len = [Math]::Min(140, $text.Length - $start)
    $snip = $text.Substring($start, $len) -replace '[^\x20-\x7E]', ' '
    Write-Output "Snippet: $snip"
    $count++
    $idx = $text.IndexOf("ruizen", $idx + 1)
}
Write-Output "Total matches: $count"
