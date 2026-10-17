param()
$filePath = "c:\Users\Administrator\Desktop\rr\app.js"
$text = Get-Content -Path $filePath -Raw -Encoding UTF8
$chars = $text.ToCharArray()

$b = 0
$p = 0
$k = 0

foreach ($ch in $chars) {
    if ($ch -eq '{') { $b++ }
    elseif ($ch -eq '}') { $b-- }
    elseif ($ch -eq '(') { $p++ }
    elseif ($ch -eq ')') { $p-- }
    elseif ($ch -eq '[') { $k++ }
    elseif ($ch -eq ']') { $k-- }
}

Write-Output "Braces diff: $b"
Write-Output "Parens diff: $p"
Write-Output "Brackets diff: $k"
Write-Output "Total characters: $($text.Length)"
