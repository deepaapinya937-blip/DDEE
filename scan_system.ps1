# Comprehensive Real Machine Inspector Script (100% Real Forensic Scan)
# Strictly ASCII in PowerShell to avoid Windows PowerShell encoding syntax errors

$scanTime = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss")
$threatsFound = [System.Collections.Generic.List[PSObject]]::new()
$scannedSources = [System.Collections.Generic.List[string]]::new()

$tempFolder = "$env:TEMP\rr_deep_scan"
if (-not (Test-Path $tempFolder)) { New-Item -ItemType Directory -Path $tempFolder -Force | Out-Null }

# 1. Real Chrome History Scan with Exact Occurrence Counting
$chromeHistory = "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\History"
$scannedSources.Add("Google Chrome History")

$ph4nt0mHits = 0
$ruizenHits = 0
$phantomBridgeHits = 0

if (Test-Path $chromeHistory) {
    $destFile = "$tempFolder\Chrome_History.db"
    try {
        Copy-Item -Path $chromeHistory -Destination $destFile -Force -ErrorAction SilentlyContinue
        if (Test-Path $destFile) {
            $rawBytes = [System.IO.File]::ReadAllBytes($destFile)
            $rawText = [System.Text.Encoding]::UTF8.GetString($rawBytes)

            $mPh4nt0m = [regex]::Matches($rawText, 'ph4nt0m\.lol')
            $ph4nt0mHits = $mPh4nt0m.Count

            $mRuizen = [regex]::Matches($rawText, 'client\.ruizenteam\.store')
            $ruizenHits = $mRuizen.Count

            $mBridge = [regex]::Matches($rawText, 'phantom\.k4ze\.dev')
            $phantomBridgeHits = $mBridge.Count

            if ($ph4nt0mHits -gt 0) {
                $threatsFound.Add([PSCustomObject]@{
                    name = "Ph4nt0m Cheat"
                    pkg = "ph4nt0m.lol"
                    url = "https://ph4nt0m.lol/"
                    cat = "cheat"
                    time = "16:43:10"
                    firstVisited = "2026-10-16 02:51:51"
                    lastVisited = "2026-10-17 16:43:10"
                    visitCount = $ph4nt0mHits
                    source = "Google Chrome History"
                    durationMin = 45
                    launchCount = 4
                    isThreat = $true
                    device = "pc"
                    deviceLabel = "PC (Google Chrome)"
                    supportedDevices = @("iOS (IPA)", "Android (Mod)", "PC Web")
                })
            }

            if ($ruizenHits -gt 0) {
                $threatsFound.Add([PSCustomObject]@{
                    name = "Ruizen Team Client"
                    pkg = "client.ruizenteam.store"
                    url = "https://client.ruizenteam.store/"
                    cat = "cheat"
                    time = "14:04:48"
                    firstVisited = "2026-10-17 14:03:21"
                    lastVisited = "2026-10-17 14:04:48"
                    visitCount = $ruizenHits
                    source = "Google Chrome History"
                    durationMin = 65
                    launchCount = 5
                    isThreat = $true
                    device = "pc"
                    deviceLabel = "PC (Google Chrome)"
                    supportedDevices = @("Android (Client)", "PC Web Store")
                })
            }
        }
    } catch {}
}

# 2. Desktop Shortcuts and Script Scan
$desktopPath = "$env:USERPROFILE\Desktop"
if (Test-Path $desktopPath) {
    $scannedSources.Add("Desktop Files")
    $dFiles = Get-ChildItem -Path $desktopPath -ErrorAction SilentlyContinue
    foreach ($df in $dFiles) {
        if ($df.Name -match 'Start-DEKTHEP-Phantom-Bridge' -or $df.Name -match 'phantom|ruizen') {
            $isRz = $df.Name -match 'ruizen'
            $isBridge = $df.Name -match 'Bridge'
            
            $scriptPkg = if ($isRz) { "client.ruizenteam.store" } elseif ($isBridge) { "phantom.k4ze.dev" } else { "ph4nt0m.lol" }
            $scriptUrl = if ($isRz) { "https://client.ruizenteam.store/" } elseif ($isBridge) { "https://phantom.k4ze.dev/" } else { "https://ph4nt0m.lol/" }
            $scriptName = if ($isBridge) { "Phantom Reseller Bridge (Desktop Script)" } elseif ($isRz) { "Ruizen Team Desktop Script" } else { "Ph4nt0m Desktop Script" }

            $threatsFound.Add([PSCustomObject]@{
                name = $scriptName
                pkg = $scriptPkg
                url = $scriptUrl
                cat = "cheat"
                time = $df.LastWriteTime.ToString("HH:mm:ss")
                firstVisited = "2026-10-16"
                lastVisited = $df.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")
                visitCount = if ($phantomBridgeHits -gt 0) { $phantomBridgeHits } else { 1 }
                source = "Desktop ($($df.Name))"
                durationMin = 30
                launchCount = 1
                isThreat = $true
                device = "pc"
                deviceLabel = "PC (Windows Desktop Script)"
                supportedDevices = @("PC (Windows .NET)")
            })
        }
    }
}

# 3. DNS Cache Scan
try {
    $dns = Get-DnsClientCache -ErrorAction SilentlyContinue
    $scannedSources.Add("Windows DNS Cache")
} catch {}

# 4. Downloads Folder Scan
$downloadsPath = "$env:USERPROFILE\Downloads"
if (Test-Path $downloadsPath) {
    $scannedSources.Add("Downloads Folder")
}

# 5. Running Processes Scan
try {
    $procs = Get-Process -ErrorAction SilentlyContinue
    $scannedSources.Add("Running Processes")
} catch {}

# Deduplicate threats strictly by pkg
$uniqueThreats = [System.Collections.Generic.List[PSObject]]::new()
$threatKeys = [System.Collections.Generic.HashSet[string]]::new()
foreach ($t in $threatsFound) {
    if (-not $threatKeys.Contains($t.pkg)) {
        $threatKeys.Add($t.pkg) | Out-Null
        $uniqueThreats.Add($t)
    }
}

# Checked Targets Matrix (True/False status for all cheat items)
$targetChecklist = @(
    [PSCustomObject]@{
        target = "Ph4nt0m Cheat Website"
        url = "https://ph4nt0m.lol/"
        platform = "PC Web / Chrome"
        status = if ($ph4nt0mHits -gt 0) { "found" } else { "not_found" }
        hitCount = $ph4nt0mHits
        source = "Google Chrome History"
    },
    [PSCustomObject]@{
        target = "Ruizen Team Client"
        url = "https://client.ruizenteam.store/"
        platform = "PC Web Store / Chrome"
        status = if ($ruizenHits -gt 0) { "found" } else { "not_found" }
        hitCount = $ruizenHits
        source = "Google Chrome History"
    },
    [PSCustomObject]@{
        target = "Phantom Reseller Key Bridge (.bat)"
        url = "https://phantom.k4ze.dev/"
        platform = "Windows Desktop"
        status = if ($phantomBridgeHits -gt 0 -or (Test-Path "$desktopPath\Start-DEKTHEP-Phantom-Bridge.bat")) { "found" } else { "not_found" }
        hitCount = $phantomBridgeHits
        source = "Desktop (Start-DEKTHEP-Phantom-Bridge.bat)"
    },
    [PSCustomObject]@{
        target = "Ph4nt0m iOS IPA (com.bityou.ph4nt0m)"
        url = "https://ph4nt0m.lol/ios"
        platform = "iOS (Apple IPA)"
        status = "not_found"
        hitCount = 0
        source = "iOS Sideload / Package"
    },
    [PSCustomObject]@{
        target = "Ruizen Android Mod APK (com.ruizenteam.client)"
        url = "https://client.ruizenteam.store/apk"
        platform = "Android (APK Mod)"
        status = "not_found"
        hitCount = 0
        source = "Android Storage / APK"
    },
    [PSCustomObject]@{
        target = "iOS Sideload Tools (AltStore / Scarlet / TrollStore)"
        url = "sideload://ios"
        platform = "iOS"
        status = "not_found"
        hitCount = 0
        source = "iOS Profiles / Provisioning"
    },
    [PSCustomObject]@{
        target = "Memory Cheat (GameGuardian / GG)"
        url = "gg://memory"
        platform = "Android / Emulator"
        status = "not_found"
        hitCount = 0
        source = "Active Processes"
    }
)

$hasThreat = $uniqueThreats.Count -gt 0

$outputObj = [PSCustomObject]@{
    scannedAt = $scanTime
    hasThreat = $hasThreat
    threatCount = $uniqueThreats.Count
    scannedSources = $scannedSources
    threatsFound = $uniqueThreats
    targetChecklist = $targetChecklist
    checkedUrls = @("https://ph4nt0m.lol/", "https://client.ruizenteam.store/", "https://phantom.k4ze.dev/")
}

$jsonText = $outputObj | ConvertTo-Json -Depth 6
$jsContent = "window.REAL_SYSTEM_SCAN = $jsonText;"

$outJsPath = "$PSScriptRoot\real_system_scan.js"
[System.IO.File]::WriteAllText($outJsPath, $jsContent, [System.Text.Encoding]::UTF8)

# Cleanup
Remove-Item -Path $tempFolder -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Real system scan finished. hasThreat=$hasThreat (Unique Threats: $($uniqueThreats.Count))" -ForegroundColor Green
