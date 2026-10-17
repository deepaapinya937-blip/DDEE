window.REAL_SYSTEM_SCAN = {
    "scannedAt":  "2026-10-17T22:39:10",
    "hasThreat":  true,
    "threatCount":  3,
    "scannedSources":  [
                           "Google Chrome History",
                           "Desktop Files",
                           "Windows DNS Cache",
                           "Downloads Folder",
                           "Running Processes"
                       ],
    "threatsFound":  [
                         {
                             "name":  "Ph4nt0m Cheat",
                             "pkg":  "ph4nt0m.lol",
                             "url":  "https://ph4nt0m.lol/",
                             "cat":  "cheat",
                             "time":  "16:43:10",
                             "firstVisited":  "2026-10-16 02:51:51",
                             "lastVisited":  "2026-10-17 16:43:10",
                             "visitCount":  33,
                             "source":  "Google Chrome History",
                             "durationMin":  45,
                             "launchCount":  4,
                             "isThreat":  true,
                             "device":  "pc",
                             "deviceLabel":  "PC (Google Chrome)",
                             "supportedDevices":  [
                                                      "iOS (IPA)",
                                                      "Android (Mod)",
                                                      "PC Web"
                                                  ]
                         },
                         {
                             "name":  "Ruizen Team Client",
                             "pkg":  "client.ruizenteam.store",
                             "url":  "https://client.ruizenteam.store/",
                             "cat":  "cheat",
                             "time":  "14:04:48",
                             "firstVisited":  "2026-10-17 14:03:21",
                             "lastVisited":  "2026-10-17 14:04:48",
                             "visitCount":  5,
                             "source":  "Google Chrome History",
                             "durationMin":  65,
                             "launchCount":  5,
                             "isThreat":  true,
                             "device":  "pc",
                             "deviceLabel":  "PC (Google Chrome)",
                             "supportedDevices":  [
                                                      "Android (Client)",
                                                      "PC Web Store"
                                                  ]
                         },
                         {
                             "name":  "Phantom Reseller Bridge (Desktop Script)",
                             "pkg":  "phantom.k4ze.dev",
                             "url":  "https://phantom.k4ze.dev/",
                             "cat":  "cheat",
                             "time":  "01:44:17",
                             "firstVisited":  "2026-10-16",
                             "lastVisited":  "2026-10-15 01:44:17",
                             "visitCount":  324,
                             "source":  "Desktop (Start-DEKTHEP-Phantom-Bridge.bat)",
                             "durationMin":  30,
                             "launchCount":  1,
                             "isThreat":  true,
                             "device":  "pc",
                             "deviceLabel":  "PC (Windows Desktop Script)",
                             "supportedDevices":  [
                                                      "PC (Windows .NET)"
                                                  ]
                         }
                     ],
    "targetChecklist":  [
                            {
                                "target":  "Ph4nt0m Cheat Website",
                                "url":  "https://ph4nt0m.lol/",
                                "platform":  "PC Web / Chrome",
                                "status":  "found",
                                "hitCount":  33,
                                "source":  "Google Chrome History"
                            },
                            {
                                "target":  "Ruizen Team Client",
                                "url":  "https://client.ruizenteam.store/",
                                "platform":  "PC Web Store / Chrome",
                                "status":  "found",
                                "hitCount":  5,
                                "source":  "Google Chrome History"
                            },
                            {
                                "target":  "Phantom Reseller Key Bridge (.bat)",
                                "url":  "https://phantom.k4ze.dev/",
                                "platform":  "Windows Desktop",
                                "status":  "found",
                                "hitCount":  324,
                                "source":  "Desktop (Start-DEKTHEP-Phantom-Bridge.bat)"
                            },
                            {
                                "target":  "Ph4nt0m iOS IPA (com.bityou.ph4nt0m)",
                                "url":  "https://ph4nt0m.lol/ios",
                                "platform":  "iOS (Apple IPA)",
                                "status":  "not_found",
                                "hitCount":  0,
                                "source":  "iOS Sideload / Package"
                            },
                            {
                                "target":  "Ruizen Android Mod APK (com.ruizenteam.client)",
                                "url":  "https://client.ruizenteam.store/apk",
                                "platform":  "Android (APK Mod)",
                                "status":  "not_found",
                                "hitCount":  0,
                                "source":  "Android Storage / APK"
                            },
                            {
                                "target":  "iOS Sideload Tools (AltStore / Scarlet / TrollStore)",
                                "url":  "sideload://ios",
                                "platform":  "iOS",
                                "status":  "not_found",
                                "hitCount":  0,
                                "source":  "iOS Profiles / Provisioning"
                            },
                            {
                                "target":  "Memory Cheat (GameGuardian / GG)",
                                "url":  "gg://memory",
                                "platform":  "Android / Emulator",
                                "status":  "not_found",
                                "hitCount":  0,
                                "source":  "Active Processes"
                            }
                        ],
    "checkedUrls":  [
                        "https://ph4nt0m.lol/",
                        "https://client.ruizenteam.store/",
                        "https://phantom.k4ze.dev/"
                    ]
};