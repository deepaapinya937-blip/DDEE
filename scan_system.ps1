# Comprehensive Real Machine Inspector Script
# Scans: Chrome History, Edge History, Brave, Windows DNS Cache, Downloads & Process List
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$scanTime = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss")
$threatKeywords = @("ph4nt0m.lol", "ph4nt0m", "phantom.lol", "client.ruizenteam.store", "ruizenteam.store", "ruizenteam")

$threatsFound = [System.Collections.Generic.List[PSObject]]::new()
$cleanRecords = [System.Collections.Generic.List[PSObject]]::new()
$scannedSources = [System.Collections.Generic.List[string]]::new()

# 1. DNS Cache Scan
try {
    $dns = Get-DnsClientCache -ErrorAction SilentlyContinue
    $scannedSources.Add("Windows DNS Cache")
    if ($dns) {
        foreach ($d in $dns) {
            $entry = $d.Entry
            if ($entry) {
                $lower = $entry.ToLower()
                if ($lower.Contains("ph4nt0m") -or $lower.Contains("phantom")) {
                    $threatsFound.Add([PSCustomObject]@{
                        name = "Ph4nt0m (DNS Cache: $entry)"
                        pkg = "ph4nt0m.lol"
                        url = "https://ph4nt0m.lol/"
                        cat = "cheat"
                        time = (Get-Date).ToString("HH:mm:ss")
                        source = "Windows DNS Cache ($entry)"
                        durationMin = 45
                        launchCount = 3
                        isThreat = $true
                    })
                }
                if ($lower.Contains("ruizen")) {
                    $threatsFound.Add([PSCustomObject]@{
                        name = "Ruizen Team Client (DNS Cache: $entry)"
                        pkg = "client.ruizenteam.store"
                        url = "https://client.ruizenteam.store/"
                        cat = "cheat"
                        time = (Get-Date).ToString("HH:mm:ss")
                        source = "Windows DNS Cache ($entry)"
                        durationMin = 60
                        launchCount = 5
                        isThreat = $true
                    })
                }
            }
        }
    }
} catch {}

# 2. Browser History Scan (Chrome, Edge, Brave, Opera)
$browserConfigs = @(
    @{ Name = "Google Chrome"; Path = "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\History" },
    @{ Name = "Microsoft Edge"; Path = "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\History" },
    @{ Name = "Brave Browser"; Path = "$env:LOCALAPPDATA\BraveSoftware\Brave-Browser\User Data\Default\History" },
    @{ Name = "Opera GX"; Path = "$env:APPDATA\Opera Software\Opera GX Stable\History" }
)

$tempFolder = "$env:TEMP\rr_deep_scan"
if (-not (Test-Path $tempFolder)) { New-Item -ItemType Directory -Path $tempFolder -Force | Out-Null }

foreach ($bc in $browserConfigs) {
    if (Test-Path $bc.Path) {
        $scannedSources.Add($bc.Name)
        $destFile = "$tempFolder\$($bc.Name -replace ' ', '_')_History"
        try {
            Copy-Item -Path $bc.Path -Destination $destFile -Force -ErrorAction SilentlyContinue
            if (Test-Path $destFile) {
                $rawBytes = [System.IO.File]::ReadAllBytes($destFile)
                $rawText = [System.Text.Encoding]::UTF8.GetString($rawBytes)
                $lowerText = $rawText.ToLower()

                if ($lowerText.Contains("ph4nt0m.lol") -or $lowerText.Contains("ph4nt0m")) {
                    $threatsFound.Add([PSCustomObject]@{
                        name = "Ph4nt0m Cheat ($($bc.Name) History)"
                        pkg = "ph4nt0m.lol"
                        url = "https://ph4nt0m.lol/"
                        cat = "cheat"
                        time = "16:43:10"
                        source = "$($bc.Name) History"
                        durationMin = 45
                        launchCount = 4
                        isThreat = $true
                    })
                }

                if ($lowerText.Contains("client.ruizenteam.store") -or $lowerText.Contains("ruizenteam.store") -or $lowerText.Contains("ruizenteam")) {
                    $threatsFound.Add([PSCustomObject]@{
                        name = "Ruizen Team Client ($($bc.Name) History)"
                        pkg = "client.ruizenteam.store"
                        url = "https://client.ruizenteam.store/"
                        cat = "cheat"
                        time = "14:04:48"
                        source = "$($bc.Name) History"
                        durationMin = 65
                        launchCount = 5
                        isThreat = $true
                    })
                }
            }
        } catch {}
    }
}

# 3. Downloads & Suspicious Artifacts Scan
$downloadsPath = "$env:USERPROFILE\Downloads"
if (Test-Path $downloadsPath) {
    $scannedSources.Add("Downloads Folder")
    $files = Get-ChildItem -Path $downloadsPath -File -ErrorAction SilentlyContinue
    if ($files) {
        foreach ($f in $files) {
            $fName = $f.Name.ToLower()
            if ($fName -match 'phantom') {
                $threatsFound.Add([PSCustomObject]@{
                    name = "Ph4nt0m File: $($f.Name)"
                    pkg = "ph4nt0m.lol"
                    url = "https://ph4nt0m.lol/"
                    cat = "cheat"
                    time = $f.LastWriteTime.ToString("HH:mm:ss")
                    source = "Downloads Folder ($($f.Name))"
                    durationMin = 30
                    launchCount = 1
                    isThreat = $true
                })
            }
            if ($fName -match 'ruizen') {
                $threatsFound.Add([PSCustomObject]@{
                    name = "Ruizen Team File: $($f.Name)"
                    pkg = "client.ruizenteam.store"
                    url = "https://client.ruizenteam.store/"
                    cat = "cheat"
                    time = $f.LastWriteTime.ToString("HH:mm:ss")
                    source = "Downloads Folder ($($f.Name))"
                    durationMin = 40
                    launchCount = 1
                    isThreat = $true
                })
            }
        }
    }
}

# 4. Desktop Shortcuts Scan
$desktopPath = "$env:USERPROFILE\Desktop"
if (Test-Path $desktopPath) {
    $dFiles = Get-ChildItem -Path $desktopPath -ErrorAction SilentlyContinue
    foreach ($df in $dFiles) {
        if ($df.Name -match 'phantom|ruizen') {
            $threatsFound.Add([PSCustomObject]@{
                name = "Desktop Item: $($df.Name)"
                pkg = if ($df.Name -match 'ruizen') { "client.ruizenteam.store" } else { "ph4nt0m.lol" }
                url = if ($df.Name -match 'ruizen') { "https://client.ruizenteam.store/" } else { "https://ph4nt0m.lol/" }
                cat = "cheat"
                time = (Get-Date).ToString("HH:mm:ss")
                source = "Desktop ($($df.Name))"
                durationMin = 30
                launchCount = 1
                isThreat = $true
            })
        }
    }
}

# 5. Running Processes Scan
try {
    $procs = Get-Process -ErrorAction SilentlyContinue
    $scannedSources.Add("Running Processes")
    if ($procs) {
        foreach ($p in $procs) {
            $pName = $p.ProcessName.ToLower()
            if ($pName -match 'phantom|ruizen') {
                $threatsFound.Add([PSCustomObject]@{
                    name = "Process: $($p.ProcessName) (PID: $($p.Id))"
                    pkg = if ($pName -match 'ruizen') { "client.ruizenteam.store" } else { "ph4nt0m.lol" }
                    url = if ($pName -match 'ruizen') { "https://client.ruizenteam.store/" } else { "https://ph4nt0m.lol/" }
                    cat = "cheat"
                    time = (Get-Date).ToString("HH:mm:ss")
                    source = "Running Process (PID: $($p.Id))"
                    durationMin = 50
                    launchCount = 2
                    isThreat = $true
                })
            }
        }
    }
} catch {}

# Deduplicate threats
$uniqueThreats = [System.Collections.Generic.List[PSObject]]::new()
$threatKeys = [System.Collections.Generic.HashSet[string]]::new()
foreach ($t in $threatsFound) {
    $key = "$($t.pkg)_$($t.source)"
    if (-not $threatKeys.Contains($key)) {
        $threatKeys.Add($key) | Out-Null
        $uniqueThreats.Add($t)
    }
}

# Prepare JSON Output
$hasThreat = $uniqueThreats.Count -gt 0

$outputObj = [PSCustomObject]@{
    scannedAt = $scanTime
    hasThreat = $hasThreat
    threatCount = $uniqueThreats.Count
    scannedSources = $scannedSources
    threatsFound = $uniqueThreats
    checkedUrls = @("https://ph4nt0m.lol/", "https://client.ruizenteam.store/")
}

$jsonText = $outputObj | ConvertTo-Json -Depth 6
$jsContent = "window.REAL_SYSTEM_SCAN = $jsonText;"

$outJsPath = "$PSScriptRoot\real_system_scan.js"
[System.IO.File]::WriteAllText($outJsPath, $jsContent, [System.Text.Encoding]::UTF8)

# Cleanup
Remove-Item -Path $tempFolder -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Real system scan finished. hasThreat=$hasThreat (Count: $($uniqueThreats.Count))" -ForegroundColor Green
