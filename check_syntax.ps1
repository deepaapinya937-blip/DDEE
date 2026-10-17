$txt = [System.IO.File]::ReadAllText("C:\Users\Administrator\Desktop\rr\app.js", [System.Text.Encoding]::UTF8)
$oB = 0; $cB = 0; $oP = 0; $cP = 0; $oS = 0; $cS = 0
for ($i = 0; $i -lt $txt.Length; $i++) {
    $c = $txt[$i]
    if ($c -eq '{') { $oB++ }
    elseif ($c -eq '}') { $cB++ }
    elseif ($c -eq '(') { $oP++ }
    elseif ($c -eq ')') { $cP++ }
    elseif ($c -eq '[') { $oS++ }
    elseif ($c -eq ']') { $cS++ }
}
Write-Output "Braces: $oB vs $cB"
Write-Output "Parens: $oP vs $cP"
Write-Output "Brackets: $oS vs $cS"
if ($oB -eq $cB -and $oP -eq $cP -and $oS -eq $cS) {
    Write-Output "SYNTAX BRACKETS MATCH 100%"
} else {
    Write-Output "SYNTAX MISMATCH DETECTED"
}
