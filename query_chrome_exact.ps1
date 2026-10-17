param()
try {
    Add-Type -Path "C:\Program Files\Microsoft Visual Studio\18\Community\Common7\IDE\Microsoft.Data.Sqlite.dll"
    $tempCopy = "$env:TEMP\chrome_exact_query.db"
    Copy-Item "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\History" $tempCopy -Force

    $conn = [Microsoft.Data.Sqlite.SqliteConnection]::new("Data Source=$tempCopy")
    $conn.Open()

    $cmd = $conn.CreateCommand()
    $cmd.CommandText = "SELECT url, title, visit_count, last_visit_time FROM urls WHERE url LIKE '%ph4nt0m%' OR url LIKE '%ruizen%' OR url LIKE '%phantom%' ORDER BY last_visit_time DESC"
    $reader = $cmd.ExecuteReader()

    Write-Output "=== EXACT CHROME HISTORY FORENSIC RESULTS ==="
    $found = 0
    while ($reader.Read()) {
        $found++
        $u = $reader.GetString(0)
        $t = if ($reader.IsDBNull(1)) { "" } else { $reader.GetString(1) }
        $vc = $reader.GetInt32(2)
        $lvt = $reader.GetInt64(3)
        $dt = if ($lvt -gt 0) {
            # Chrome timestamp is microseconds since Jan 1 1601 UTC
            ([DateTime]::FromFileTimeUtc($lvt * 10)).ToLocalTime().ToString("yyyy-MM-dd HH:mm:ss")
        } else {
            "N/A"
        }
        Write-Output "[$found] URL: $u"
        Write-Output "    Title: $t"
        Write-Output "    Visits: $vc"
        Write-Output "    Last Visit: $dt"
    }

    if ($found -eq 0) {
        Write-Output "No matching URLs found in Chrome history."
    }

    $conn.Close()
} catch {
    Write-Error $_
}
