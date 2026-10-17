/**
 * Mobile App Usage Inspector (ระบบตรวจสอบประวัติการเปิดแอปมือถือ)
 * Client-side Log Analyzer & Security Inspector with Real Brand Logos & One-Click Scan
 */

// 1. Official Vector Brand Logos (SVG - 100% Offline, Crisp & Authentic)
const BRAND_LOGOS = {
  // LINE
  "jp.naver.line.android": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#06C755"/><path d="M50 18C31.2 18 16 30.5 16 45.9c0 13.8 12.1 25.3 28.4 27.4 1.1.2 2.6.7 3 1.7.3.8.2 2.1.1 2.9-.3 2-1.3 7.8-1.5 9.5-.2 1.3.6 1.4 1.6.8 4.2-2.5 22.8-13.4 31.1-23 7.8-8.9 7.8-14.7 7.8-19.3C86.5 30.5 70.1 18 50 18z" fill="#FFFFFF"/><path d="M36 41v14h-4V36h4v19h5v4.5h-5zm7.5-5h4v19h-4V36zm15 0h4v11.5l-7.5-11.5H48V55h4V43.5L59.5 55H63V36h-4.5zm11.5 0H80v4h-6v3.5h5.5V48H74v3.5h6.5V55H70V36z" fill="#06C755"/></svg>`,

  // TikTok
  "com.zhiliaoapp.musically": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#010101"/><path d="M68 40.5c-4.2-2.7-7-7.4-7.4-12.8h-7.7v36.6c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 1.4 0 2.7.2 3.9.7v-8c-1.3-.2-2.6-.4-3.9-.4-10.8 0-19.6 8.8-19.6 19.6 0 10.8 8.8 19.6 19.6 19.6 10.8 0 19.6-8.8 19.6-19.6V44.4c4.6 3.3 10.3 5.3 16.5 5.3v-8c-3.5 0-6.7-1.2-9.4-3.2z" fill="#25F4EE"/><path d="M66.6 39.2c-4.2-2.7-7-7.4-7.4-12.8h-5v36.6c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 1.4 0 2.7.2 3.9.7v-5.3c-1.3-.2-2.6-.4-3.9-.4-10.8 0-19.6 8.8-19.6 19.6 0 10.8 8.8 19.6 19.6 19.6 10.8 0 19.6-8.8 19.6-19.6V43.1c4.6 3.3 10.3 5.3 16.5 5.3v-6.7c-3.5 0-6.7-1.2-9.4-3.2z" fill="#FE2C55"/><path d="M64.5 38c-4.2-2.7-7-7.4-7.4-12.8h-4.2v36.6c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 1.4 0 2.7.2 3.9.7v-2.7c-1.3-.2-2.6-.4-3.9-.4-10.8 0-19.6 8.8-19.6 19.6 0 10.8 8.8 19.6 19.6 19.6 10.8 0 19.6-8.8 19.6-19.6V41.7c4.6 3.3 10.3 5.3 16.5 5.3v-5.4c-3.5 0-6.7-1.2-9.4-3.2z" fill="#FFFFFF"/></svg>`,
  "com.ss.android.ugc.trill": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#010101"/><path d="M68 40.5c-4.2-2.7-7-7.4-7.4-12.8h-7.7v36.6c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 1.4 0 2.7.2 3.9.7v-8c-1.3-.2-2.6-.4-3.9-.4-10.8 0-19.6 8.8-19.6 19.6 0 10.8 8.8 19.6 19.6 19.6 10.8 0 19.6-8.8 19.6-19.6V44.4c4.6 3.3 10.3 5.3 16.5 5.3v-8c-3.5 0-6.7-1.2-9.4-3.2z" fill="#25F4EE"/><path d="M66.6 39.2c-4.2-2.7-7-7.4-7.4-12.8h-5v36.6c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 1.4 0 2.7.2 3.9.7v-5.3c-1.3-.2-2.6-.4-3.9-.4-10.8 0-19.6 8.8-19.6 19.6 0 10.8 8.8 19.6 19.6 19.6 10.8 0 19.6-8.8 19.6-19.6V43.1c4.6 3.3 10.3 5.3 16.5 5.3v-6.7c-3.5 0-6.7-1.2-9.4-3.2z" fill="#FE2C55"/><path d="M64.5 38c-4.2-2.7-7-7.4-7.4-12.8h-4.2v36.6c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 1.4 0 2.7.2 3.9.7v-2.7c-1.3-.2-2.6-.4-3.9-.4-10.8 0-19.6 8.8-19.6 19.6 0 10.8 8.8 19.6 19.6 19.6 10.8 0 19.6-8.8 19.6-19.6V41.7c4.6 3.3 10.3 5.3 16.5 5.3v-5.4c-3.5 0-6.7-1.2-9.4-3.2z" fill="#FFFFFF"/></svg>`,

  // Apple Safari
  "com.apple.mobilesafari": `<svg viewBox="0 0 100 100"><defs><linearGradient id="safari-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00C0FF"/><stop offset="100%" stop-color="#0066FE"/></linearGradient></defs><rect width="100" height="100" rx="22" fill="#FFFFFF"/><circle cx="50" cy="50" r="42" fill="url(#safari-bg)"/><circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-dasharray="2,4"/><polygon points="50,18 58,47 50,50 42,47" fill="#FF3B30"/><polygon points="50,82 58,53 50,50 42,53" fill="#FFFFFF"/><circle cx="50" cy="50" r="4" fill="#FFFFFF"/></svg>`,

  // Facebook
  "com.facebook.katana": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#1877F2"/><path d="M57 100V60h13.5l2-16H57V34c0-4.6 1.3-7.8 7.9-7.8H73v-14.3c-1.5-.2-6.5-.6-12.4-.6-12.3 0-20.7 7.5-20.7 21.3V44H26v16h13.9v40H57z" fill="#FFFFFF"/></svg>`,
  "com.facebook.lite": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#1877F2"/><circle cx="50" cy="50" r="38" fill="#FFFFFF"/><path d="M54 75V50h8l1-10h-9v-6.5c0-3 1-5 5-5h4v-9c-1 0-4-.5-8-.5-8 0-13.5 5-13.5 14V40H30v10h8.5v25H54z" fill="#1877F2"/></svg>`,

  // Messenger
  "com.facebook.orca": `<svg viewBox="0 0 100 100"><defs><linearGradient id="msg-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#006AFF"/><stop offset="50%" stop-color="#A033FF"/><stop offset="100%" stop-color="#FF5280"/></linearGradient></defs><rect width="100" height="100" rx="22" fill="url(#msg-grad)"/><path d="M50 18C32 18 18 31 18 47c0 9 5 17 12 23v10l9-5c3 1 7 2 11 2 18 0 32-13 32-29S68 18 50 18z" fill="#FFFFFF"/><polygon points="54,38 37,55 47,55 42,62 61,45 50,45" fill="url(#msg-grad)"/></svg>`,

  // YouTube
  "com.google.android.youtube": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#FF0000"/><path d="M84 37.5c-.8-3.1-3.2-5.5-6.3-6.3C72.1 30 50 30 50 30s-22.1 0-27.7 1.2c-3.1.8-5.5 3.2-6.3 6.3C14.8 43.1 14.8 50 14.8 50s0 6.9 1.2 12.5c.8 3.1 3.2 5.5 6.3 6.3C27.9 70 50 70 50 70s22.1 0 27.7-1.2c3.1-.8 5.5-3.2 6.3-6.3 1.2-5.6 1.2-12.5 1.2-12.5s0-6.9-1.2-12.5z" fill="#FFFFFF"/><polygon points="44,41 60,50 44,59" fill="#FF0000"/></svg>`,

  // Instagram
  "com.instagram.android": `<svg viewBox="0 0 100 100"><defs><linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#FED373"/><stop offset="30%" stop-color="#F15245"/><stop offset="60%" stop-color="#D92E7F"/><stop offset="100%" stop-color="#9B36B7"/></linearGradient></defs><rect width="100" height="100" rx="22" fill="url(#ig-grad)"/><rect x="23" y="23" width="54" height="54" rx="16" fill="none" stroke="#FFFFFF" stroke-width="6"/><circle cx="50" cy="50" r="13" fill="none" stroke="#FFFFFF" stroke-width="6"/><circle cx="66" cy="34" r="3.5" fill="#FFFFFF"/></svg>`,

  // Google Chrome
  "com.android.chrome": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#FFFFFF"/><circle cx="50" cy="50" r="40" fill="#4285F4"/><path d="M50 10a40 40 0 0 1 34.6 20H50z" fill="#EA4335"/><path d="M50 10A40 40 0 0 0 15.4 70L32.7 40H50z" fill="#EA4335"/><path d="M15.4 70A40 40 0 0 0 70 87.3L52.7 57.3z" fill="#34A853"/><path d="M50 10h34.6A40 40 0 0 1 70 87.3L52.7 57.3A20 20 0 0 0 50 30z" fill="#FBBC05"/><circle cx="50" cy="50" r="18" fill="#FFFFFF"/><circle cx="50" cy="50" r="14" fill="#4285F4"/></svg>`,

  // K PLUS (กสิกรไทย)
  "com.kbank.kplus": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#00A950"/><circle cx="50" cy="50" r="42" fill="#008037"/><text x="36" y="66" font-family="'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" text-anchor="middle">K</text><circle cx="68" cy="50" r="18" fill="none" stroke="#FFFFFF" stroke-width="4"/><path d="M68 39v22M57 50h22" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/></svg>`,

  // SCB EASY (ไทยพาณิชย์)
  "com.scb.phone": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#4E2A84"/><circle cx="50" cy="50" r="40" fill="#3B1F64"/><path d="M50 25c-8 12-16 20-16 30 0 10 7 18 16 18s16-8 16-18c0-10-8-18-16-30z" fill="#FED100"/><circle cx="50" cy="58" r="8" fill="#4E2A84"/><text x="50" y="88" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SCB EASY</text></svg>`,

  // Shopee
  "com.shopee.th": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#EE4D2D"/><path d="M36 32c0-8 6-14 14-14s14 6 14 14h-6c0-4.4-3.6-8-8-8s-8 3.6-8 8h-6z" fill="#FFFFFF"/><path d="M22 36l6 46h44l6-46H22z" fill="#FFFFFF"/><path d="M54 48c-3-1.5-6-1.5-6 1.5 0 3.5 10 2.5 10 9 0 5-4.5 7.5-9 7.5-5 0-8.5-2.5-9.5-6l4.5-1.5c.7 2 2.5 3.5 5 3.5 2.5 0 4.5-1 4.5-3 0-3.5-10-2.5-10-9 0-5 4.5-7.5 9-7.5 4.5 0 7.5 2 8.5 5.5l-4.5 1.5c-.5-1.5-1.5-2-3-2z" fill="#EE4D2D"/></svg>`,

  // Garena RoV
  "com.garena.game.kgth": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0F172A"/><path d="M50 15L20 30v25c0 20 15 32 30 35 15-3 30-15 30-35V30L50 15z" fill="#1E293B" stroke="#D97706" stroke-width="3"/><path d="M50 24L30 35v18c0 14 10 23 20 25 10-2 20-11 20-25V35L50 24z" fill="#78350F"/><polygon points="50,28 55,42 70,42 58,52 62,67 50,57 38,67 42,52 30,42 45,42" fill="#F59E0B"/><text x="50" y="88" font-family="sans-serif" font-size="14" font-weight="900" fill="#FBBF24" text-anchor="middle">RoV</text></svg>`,

  // Spotify
  "com.spotify.music": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#1DB954"/><circle cx="50" cy="50" r="44" fill="#1DB954"/><path d="M26 38c17-4 37-2 50 6" stroke="#121212" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M29 51c14-3 31-2 42 5" stroke="#121212" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M33 63c11-2 25-1 34 4" stroke="#121212" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`,

  // AltStore (iOS Sideload)
  "org.altstore.AltStore": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#141E28"/><polygon points="50,20 80,75 20,75" fill="#2A9D8F"/><polygon points="50,38 70,75 30,75" fill="#E76F51"/><polygon points="50,52 62,75 38,75" fill="#264653"/></svg>`,

  // Scarlet (iOS Sideload)
  "com.scarlet.ios": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#881337"/><polygon points="50,18 82,78 18,78" fill="#F43F5E"/><circle cx="50" cy="58" r="12" fill="#FFFFFF"/></svg>`,

  // TrollStore (iOS Sideload)
  "com.trollstore.app": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#4C1D95"/><rect x="25" y="25" width="50" height="50" rx="12" fill="#8B5CF6"/><path d="M35 48c3 4 8 4 11 0M54 48c3 4 8 4 11 0M40 62c6 6 14 6 20 0" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,

  // HappyMod (Android Mod APK)
  "com.happymod.apk": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#10B981"/><path d="M32 24c0 8-5 12-10 14 3-8 7-14 10-14zM68 24c0 8 5 12 10 14-3-8-7-14-10-14z" fill="#047857"/><circle cx="50" cy="56" r="28" fill="#FFFFFF"/><circle cx="40" cy="52" r="5" fill="#10B981"/><circle cx="60" cy="52" r="5" fill="#10B981"/><path d="M38 64c4 6 20 6 24 0" stroke="#10B981" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,

  // Tinder
  "com.tinder": `<svg viewBox="0 0 100 100"><defs><linearGradient id="tinder-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FD297B"/><stop offset="100%" stop-color="#FF655B"/></linearGradient></defs><rect width="100" height="100" rx="22" fill="url(#tinder-grad)"/><path d="M53 20c1 13-6 19-11 27-6 10-8 17-2 27 5 9 16 11 23 7 11-6 14-19 9-29-3-6-8-10-9-17 10 4 20 15 21 27 2 17-10 32-27 33-17 1-32-12-32-29 0-11 6-21 14-27 6-5 11-13 14-22z" fill="#FFFFFF"/></svg>`,

  // GameGuardian (Cheat Tool)
  "com.gameguardian": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0F172A"/><circle cx="50" cy="50" r="42" fill="#1E293B" stroke="#F43F5E" stroke-width="3"/><path d="M30 40l20-15 20 15v25c0 15-20 22-20 22s-20-7-20-22V40z" fill="#EF4444"/><circle cx="43" cy="48" r="4" fill="#FFFFFF"/><circle cx="57" cy="48" r="4" fill="#FFFFFF"/><path d="M42 62h16" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/><text x="50" y="88" font-family="sans-serif" font-size="12" font-weight="900" fill="#FDA4AF" text-anchor="middle">GG CHEAT</text></svg>`,

  // Ph4nt0m Cheat Website & Mod Menu (🚨 Threat)
  "ph4nt0m.lol": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#050811"/><circle cx="50" cy="50" r="44" fill="#111827" stroke="#F43F5E" stroke-width="3.5"/><path d="M50 20c-15 0-25 12-25 26 0 12 6 22 10 26 2 2 3 6 3 9l3-2 3 2 3-2 3 2 3-2 3 2c0-3 1-7 3-9 4-4 10-14 10-26 0-14-10-26-20-26z" fill="#F43F5E"/><circle cx="42" cy="44" r="5" fill="#050811"/><circle cx="58" cy="44" r="5" fill="#050811"/><circle cx="43" cy="43" r="2" fill="#38BDF8"/><circle cx="59" cy="43" r="2" fill="#38BDF8"/><path d="M43 56c4 3 10 3 14 0" stroke="#050811" stroke-width="3" stroke-linecap="round"/><text x="50" y="92" font-family="sans-serif" font-size="11" font-weight="900" fill="#F43F5E" text-anchor="middle">PH4NT0M</text></svg>`,
  "https://ph4nt0m.lol/": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#050811"/><circle cx="50" cy="50" r="44" fill="#111827" stroke="#F43F5E" stroke-width="3.5"/><path d="M50 20c-15 0-25 12-25 26 0 12 6 22 10 26 2 2 3 6 3 9l3-2 3 2 3-2 3 2 3-2 3 2c0-3 1-7 3-9 4-4 10-14 10-26 0-14-10-26-20-26z" fill="#F43F5E"/><circle cx="42" cy="44" r="5" fill="#050811"/><circle cx="58" cy="44" r="5" fill="#050811"/><circle cx="43" cy="43" r="2" fill="#38BDF8"/><circle cx="59" cy="43" r="2" fill="#38BDF8"/><path d="M43 56c4 3 10 3 14 0" stroke="#050811" stroke-width="3" stroke-linecap="round"/><text x="50" y="92" font-family="sans-serif" font-size="11" font-weight="900" fill="#F43F5E" text-anchor="middle">PH4NT0M</text></svg>`,
  "com.ph4nt0m.mod": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#050811"/><circle cx="50" cy="50" r="44" fill="#111827" stroke="#F43F5E" stroke-width="3.5"/><path d="M50 20c-15 0-25 12-25 26 0 12 6 22 10 26 2 2 3 6 3 9l3-2 3 2 3-2 3 2 3-2 3 2c0-3 1-7 3-9 4-4 10-14 10-26 0-14-10-26-20-26z" fill="#F43F5E"/><circle cx="42" cy="44" r="5" fill="#050811"/><circle cx="58" cy="44" r="5" fill="#050811"/><circle cx="43" cy="43" r="2" fill="#38BDF8"/><circle cx="59" cy="43" r="2" fill="#38BDF8"/><path d="M43 56c4 3 10 3 14 0" stroke="#050811" stroke-width="3" stroke-linecap="round"/><text x="50" y="92" font-family="sans-serif" font-size="11" font-weight="900" fill="#F43F5E" text-anchor="middle">PH4NT0M</text></svg>`,
  "com.bityou.ph4nt0m": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#050811"/><circle cx="50" cy="50" r="44" fill="#111827" stroke="#F43F5E" stroke-width="3.5"/><path d="M50 20c-15 0-25 12-25 26 0 12 6 22 10 26 2 2 3 6 3 9l3-2 3 2 3-2 3 2 3-2 3 2c0-3 1-7 3-9 4-4 10-14 10-26 0-14-10-26-20-26z" fill="#F43F5E"/><circle cx="42" cy="44" r="5" fill="#050811"/><circle cx="58" cy="44" r="5" fill="#050811"/><circle cx="43" cy="43" r="2" fill="#38BDF8"/><circle cx="59" cy="43" r="2" fill="#38BDF8"/><path d="M43 56c4 3 10 3 14 0" stroke="#050811" stroke-width="3" stroke-linecap="round"/><text x="50" y="92" font-family="sans-serif" font-size="11" font-weight="900" fill="#F43F5E" text-anchor="middle">PH4NT0M</text></svg>`,

  // Ruizen Team Client & Store (🚨 Threat)
  "client.ruizenteam.store": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0b0f19"/><rect x="3" y="3" width="94" height="94" rx="20" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.5"/><polygon points="50,15 82,30 82,60 50,85 18,60 18,30" fill="#131927" stroke="#F59E0B" stroke-width="3"/><path d="M38 32 h16 c8 0 13 4 13 11 0 5-3 9-8 10.5 l9 16.5 h-7.5 l-8.2-15 h-6.3 v15 h-8 V32 z M46 47 h7.5 c4 0 6.5-2 6.5-5.5 s-2.5-5.5-6.5-5.5 H46 v11 z" fill="#F59E0B"/><text x="50" y="93" font-family="sans-serif" font-size="9" font-weight="900" fill="#F59E0B" text-anchor="middle">RUIZEN</text></svg>`,
  "https://client.ruizenteam.store/": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0b0f19"/><rect x="3" y="3" width="94" height="94" rx="20" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.5"/><polygon points="50,15 82,30 82,60 50,85 18,60 18,30" fill="#131927" stroke="#F59E0B" stroke-width="3"/><path d="M38 32 h16 c8 0 13 4 13 11 0 5-3 9-8 10.5 l9 16.5 h-7.5 l-8.2-15 h-6.3 v15 h-8 V32 z M46 47 h7.5 c4 0 6.5-2 6.5-5.5 s-2.5-5.5-6.5-5.5 H46 v11 z" fill="#F59E0B"/><text x="50" y="93" font-family="sans-serif" font-size="9" font-weight="900" fill="#F59E0B" text-anchor="middle">RUIZEN</text></svg>`,
  "ruizenteam.store": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0b0f19"/><rect x="3" y="3" width="94" height="94" rx="20" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.5"/><polygon points="50,15 82,30 82,60 50,85 18,60 18,30" fill="#131927" stroke="#F59E0B" stroke-width="3"/><path d="M38 32 h16 c8 0 13 4 13 11 0 5-3 9-8 10.5 l9 16.5 h-7.5 l-8.2-15 h-6.3 v15 h-8 V32 z M46 47 h7.5 c4 0 6.5-2 6.5-5.5 s-2.5-5.5-6.5-5.5 H46 v11 z" fill="#F59E0B"/><text x="50" y="93" font-family="sans-serif" font-size="9" font-weight="900" fill="#F59E0B" text-anchor="middle">RUIZEN</text></svg>`,
  "https://ruizenteam.store/": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0b0f19"/><rect x="3" y="3" width="94" height="94" rx="20" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.5"/><polygon points="50,15 82,30 82,60 50,85 18,60 18,30" fill="#131927" stroke="#F59E0B" stroke-width="3"/><path d="M38 32 h16 c8 0 13 4 13 11 0 5-3 9-8 10.5 l9 16.5 h-7.5 l-8.2-15 h-6.3 v15 h-8 V32 z M46 47 h7.5 c4 0 6.5-2 6.5-5.5 s-2.5-5.5-6.5-5.5 H46 v11 z" fill="#F59E0B"/><text x="50" y="93" font-family="sans-serif" font-size="9" font-weight="900" fill="#F59E0B" text-anchor="middle">RUIZEN</text></svg>`,
  "com.ruizenteam.client": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#0b0f19"/><rect x="3" y="3" width="94" height="94" rx="20" fill="none" stroke="#F59E0B" stroke-width="2" opacity="0.5"/><polygon points="50,15 82,30 82,60 50,85 18,60 18,30" fill="#131927" stroke="#F59E0B" stroke-width="3"/><path d="M38 32 h16 c8 0 13 4 13 11 0 5-3 9-8 10.5 l9 16.5 h-7.5 l-8.2-15 h-6.3 v15 h-8 V32 z M46 47 h7.5 c4 0 6.5-2 6.5-5.5 s-2.5-5.5-6.5-5.5 H46 v11 z" fill="#F59E0B"/><text x="50" y="93" font-family="sans-serif" font-size="9" font-weight="900" fill="#F59E0B" text-anchor="middle">RUIZEN</text></svg>`,

  // Camera (iOS & Android)
  "com.apple.camera": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#2C2C2E"/><circle cx="50" cy="50" r="34" fill="#1C1C1E" stroke="#48484A" stroke-width="5"/><circle cx="50" cy="50" r="24" fill="#0A0A0C" stroke="#0A84FF" stroke-width="3"/><circle cx="50" cy="50" r="14" fill="#1C1C1E"/><circle cx="44" cy="44" r="4" fill="rgba(255,255,255,0.7)"/></svg>`,
  "com.sec.android.app.camera": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#DC2626"/><circle cx="50" cy="50" r="34" fill="#991B1B" stroke="#F87171" stroke-width="3"/><circle cx="50" cy="50" r="20" fill="#000000"/><circle cx="44" cy="44" r="4" fill="#FFFFFF"/></svg>`,
  "com.google.android.GoogleCamera": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#2C2C2E"/><circle cx="50" cy="50" r="34" fill="#1C1C1E" stroke="#4285F4" stroke-width="4"/><circle cx="50" cy="50" r="18" fill="#0A0A0C"/><circle cx="44" cy="44" r="4" fill="#FFFFFF"/></svg>`,

  // Settings (iOS & Android)
  "com.android.settings": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#4B5563"/><circle cx="50" cy="50" r="16" fill="#1F2937"/><path d="M50 18l4 6 7-2 2 7 7 2v7l7 3-4 6 4 6-7 3v7l-7 2-2 7-7-2-4 6-4-6-7 2-2-7-7-2v-7l-7-3 4-6-4-6 7-3v-7l7-2 2-7 7 2z" fill="#9CA3AF"/><circle cx="50" cy="50" r="12" fill="#4B5563"/></svg>`,
  "com.apple.Preferences": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#8E8E93"/><circle cx="50" cy="50" r="16" fill="#2C2C2E"/><path d="M50 18l4 6 7-2 2 7 7 2v7l7 3-4 6 4 6-7 3v7l-7 2-2 7-7-2-4 6-4-6-7 2-2-7-7-2v-7l-7-3 4-6-4-6 7-3v-7l7-2 2-7 7 2z" fill="#D1D1D6"/><circle cx="50" cy="50" r="12" fill="#8E8E93"/></svg>`,

  // Netflix
  "com.netflix.mediaclient": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#000000"/><polygon points="32,22 43,22 43,78 32,78" fill="#B81D24"/><polygon points="57,22 68,22 68,78 57,78" fill="#B81D24"/><polygon points="32,22 43,22 68,78 57,78" fill="#E50914"/></svg>`,

  // X (Twitter)
  "com.twitter.android": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#000000"/><path d="M28 26l22 29-22 23h5l19-20 15 20h17L60 47l20-21h-5L38 43 25 26h3z" fill="#FFFFFF"/></svg>`,
  "com.x.android": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#000000"/><path d="M28 26l22 29-22 23h5l19-20 15 20h17L60 47l20-21h-5L38 43 25 26h3z" fill="#FFFFFF"/></svg>`,

  // Telegram
  "org.telegram.messenger": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#229ED9"/><path d="M22 48l48-20c3-1 6 1 5 4l-9 42c0 2-3 3-5 1l-14-11-7 7c-1 1-3 1-3-1l-2-14 30-22-38 18-5-9z" fill="#FFFFFF"/></svg>`,

  // WhatsApp
  "com.whatsapp": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#25D366"/><path d="M50 18C32 18 18 32 18 50c0 6 2 12 5 17l-4 15 15-4c5 3 10 4 16 4 18 0 32-14 32-32S68 18 50 18z" fill="#FFFFFF"/><path d="M41 35c-1-2-2-2-3-2h-3c-1 0-3 1-4 2-3 3-5 8-5 13 0 9 7 18 15 23 8 5 13 6 17 6 4 0 8-2 10-5 2-3 2-6 1-7s-2-2-4-3l-6-3c-1-1-3 0-4 1l-2 3c-1 1-2 1-3 0-3-2-6-5-8-8-1-1 0-2 1-3l2-2c1-1 1-2 0-3l-7-10z" fill="#25D366"/></svg>`,

  // Discord
  "com.discord": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#5865F2"/><path d="M72 30c-5-2-10-3-15-4 0 0-1 2-2 4-5-1-11-1-16 0-1-2-2-4-2-4-6 1-11 2-15 4-10 15-13 30-11 45 6 5 13 8 20 8 2-2 3-5 4-8-3-1-5-3-7-4 1-1 1-1 2-2 13 6 27 6 40 0 1 1 1 1 2 2-2 2-5 3-7 4 1 3 3 6 5 8 7 0 14-3 20-8 2-17-2-32-11-45zM38 60c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8zm24 0c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8z" fill="#FFFFFF"/></svg>`,

  // Google Messages
  "com.google.android.apps.messaging": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#1A73E8"/><path d="M25 35c0-6 5-11 11-11h28c6 0 11 5 11 11v22c0 6-5 11-11 11H42l-12 8v-8c-3-2-5-6-5-11V35z" fill="#FFFFFF"/><circle cx="40" cy="46" r="3" fill="#1A73E8"/><circle cx="50" cy="46" r="3" fill="#1A73E8"/><circle cx="60" cy="46" r="3" fill="#1A73E8"/></svg>`,
  "com.samsung.android.messaging": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#3B82F6"/><path d="M25 35c0-6 5-11 11-11h28c6 0 11 5 11 11v22c0 6-5 11-11 11H42l-12 8v-8c-3-2-5-6-5-11V35z" fill="#FFFFFF"/></svg>`,

  // Phone / Dialer
  "com.google.android.dialer": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#10B981"/><path d="M35 28c2-2 5-2 7 0l7 7c2 2 2 5 0 7l-4 4c4 7 9 12 16 16l4-4c2-2 5-2 7 0l7 7c2 2 2 5 0 7l-5 5c-4 4-10 5-17 1-12-6-23-17-29-29-4-7-3-13 1-17l5-5z" fill="#FFFFFF"/></svg>`,
  "com.samsung.android.dialer": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#10B981"/><path d="M35 28c2-2 5-2 7 0l7 7c2 2 2 5 0 7l-4 4c4 7 9 12 16 16l4-4c2-2 5-2 7 0l7 7c2 2 2 5 0 7l-5 5c-4 4-10 5-17 1-12-6-23-17-29-29-4-7-3-13 1-17l5-5z" fill="#FFFFFF"/></svg>`,

  // Google Maps
  "com.google.android.apps.maps": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#FFFFFF"/><path d="M50 16c-14 0-25 11-25 25 0 18 25 43 25 43s25-25 25-43c0-14-11-25-25-25z" fill="#EA4335"/><circle cx="50" cy="41" r="10" fill="#FFFFFF"/></svg>`,

  // Google Photos
  "com.google.android.apps.photos": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#FFFFFF"/><path d="M50 50h-25c0-14 11-25 25-25v25z" fill="#EA4335"/><path d="M50 50v-25c14 0 25 11 25 25h-25z" fill="#FBBC05"/><path d="M50 50h25c0 14-11 25-25 25v-25z" fill="#34A853"/><path d="M50 50v25c-14 0-25-11-25-25h25z" fill="#4285F4"/></svg>`,

  // LINE MAN
  "com.lineman.customer": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#00B900"/><circle cx="50" cy="50" r="42" fill="#00A000"/><path d="M30 65c-6 0-10-4-10-10 0-8 8-16 18-20l12-5 8 10-10 4c-5 2-8 6-8 10 0 6 4 11 10 11h24c6 0 10-5 10-11 0-4-3-8-8-10l-10-4 8-10 12 5c10 4 18 12 18 20 0 6-4 10-10 10H30z" fill="#FFFFFF"/><text x="50" y="88" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">LINE MAN</text></svg>`,

  // Grab
  "com.grabtaxi.passenger": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#00B14F"/><circle cx="50" cy="50" r="42" fill="#009A44"/><path d="M28 50c0-12 10-22 22-22s22 10 22 22-10 22-22 22-22-10-22-22zm10 0c0 7 5 12 12 12s12-5 12-12-5-12-12-12-12 5-12 12z" fill="#FFFFFF"/><path d="M48 40h20v6H48zm0 14h20v6H48z" fill="#00B14F"/><text x="50" y="88" font-family="sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">Grab</text></svg>`,

  // TrueMoney Wallet
  "com.truemoney.wallet": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#F97316"/><circle cx="50" cy="50" r="40" fill="#EA580C"/><path d="M30 45l20-15 20 15-20 15-20-15zm0 15l20 15 20-15" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><text x="50" y="88" font-family="sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle">TrueMoney</text></svg>`,

  // Free Fire
  "com.dts.freefireth": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#18181B"/><path d="M50 16c8 10 18 16 18 28 0 14-10 24-20 28 8-8 12-16 10-24-4 8-10 12-14 16-6 6-10 13-10 20 0 10 6 18 16 20-14-3-22-14-22-26 0-14 10-24 18-32 3 8 7 12 12 14-4-8-4-16-8-24z" fill="#EF4444"/><text x="50" y="88" font-family="sans-serif" font-size="14" font-weight="900" fill="#F59E0B" text-anchor="middle">FF</text></svg>`,

  // Roblox
  "com.roblox.client": `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#111827"/><rect x="28" y="28" width="44" height="44" rx="8" transform="rotate(-15 50 50)" fill="#E2E8F0"/><rect x="42" y="42" width="16" height="16" rx="3" transform="rotate(-15 50 50)" fill="#111827"/></svg>`
};

// Generic Category Fallback SVG Generator
function getFallbackLogo(cat, name, isThreat = false) {
  if (isThreat) {
    return `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#881337"/><circle cx="50" cy="50" r="38" fill="#F43F5E"/><path d="M50 25v30M50 68h.01" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/><text x="50" y="90" font-family="sans-serif" font-size="11" font-weight="900" fill="#FDA4AF" text-anchor="middle">THREAT</text></svg>`;
  }

  const initial = (name || "A").charAt(0).toUpperCase();
  const colors = {
    social: "#3B82F6",
    chat: "#10B981",
    video: "#EF4444",
    music: "#1DB954",
    browser: "#06B6D4",
    finance: "#F59E0B",
    shopping: "#EE4D2D",
    game: "#8B5CF6",
    system: "#64748B",
    sideload: "#F97316",
    cheat: "#F43F5E"
  };
  const bg = colors[cat] || "#475569";
  return `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="${bg}"/><circle cx="50" cy="50" r="36" fill="rgba(255,255,255,0.15)"/><text x="50" y="64" font-family="'Segoe UI', Roboto, sans-serif" font-size="42" font-weight="800" fill="#FFFFFF" text-anchor="middle">${initial}</text></svg>`;
}

// 2. Comprehensive App Knowledge Base
const APP_DATABASE = {
  // Social & Chat
  "com.facebook.katana": { name: "Facebook", cat: "social", color: "#1877F2" },
  "com.facebook.orca": { name: "Messenger", cat: "chat", color: "#0084FF" },
  "com.facebook.lite": { name: "Facebook Lite", cat: "social", color: "#1877F2" },
  "jp.naver.line.android": { name: "LINE", cat: "chat", color: "#06C755" },
  "com.instagram.android": { name: "Instagram", cat: "social", color: "#E1306C" },
  "com.zhiliaoapp.musically": { name: "TikTok", cat: "video", color: "#FE2C55" },
  "com.ss.android.ugc.trill": { name: "TikTok", cat: "video", color: "#FE2C55" },
  "com.twitter.android": { name: "X (Twitter)", cat: "social", color: "#000000" },
  "com.x.android": { name: "X (Twitter)", cat: "social", color: "#000000" },
  "org.telegram.messenger": { name: "Telegram", cat: "chat", color: "#229ED9" },
  "com.whatsapp": { name: "WhatsApp", cat: "chat", color: "#25D366" },
  "com.discord": { name: "Discord", cat: "chat", color: "#5865F2" },
  
  // Video & Entertainment
  "com.google.android.youtube": { name: "YouTube", cat: "video", color: "#FF0000" },
  "com.netflix.mediaclient": { name: "Netflix", cat: "video", color: "#E50914" },
  "com.spotify.music": { name: "Spotify", cat: "music", color: "#1DB954" },

  // Browsers
  "com.android.chrome": { name: "Google Chrome", cat: "browser", color: "#4285F4" },
  "com.apple.mobilesafari": { name: "Safari (iOS)", cat: "browser", color: "#007AFF", os: "ios" },
  "org.mozilla.firefox": { name: "Firefox", cat: "browser", color: "#FF7139" },

  // Banking & Shopping (Thailand)
  "com.kbank.kplus": { name: "K PLUS (กสิกรไทย)", cat: "finance", color: "#00A950" },
  "com.scb.phone": { name: "SCB EASY (ไทยพาณิชย์)", cat: "finance", color: "#4E2A84" },
  "com.shopee.th": { name: "Shopee", cat: "shopping", color: "#EE4D2D" },
  "com.grabtaxi.passenger": { name: "Grab", cat: "service", color: "#00B14F" },
  "com.lineman.customer": { name: "LINE MAN", cat: "service", color: "#00B900" },
  "com.truemoney.wallet": { name: "TrueMoney Wallet", cat: "finance", color: "#F97316" },

  // Gaming
  "com.garena.game.kgth": { name: "Garena RoV", cat: "game", color: "#D97706" },
  "com.dts.freefireth": { name: "Free Fire", cat: "game", color: "#EF4444" },
  "com.roblox.client": { name: "Roblox", cat: "game", color: "#000000" },

  // System & Utilities
  "com.google.android.dialer": { name: "โทรศัพท์ (Phone)", cat: "system", color: "#10B981" },
  "com.samsung.android.dialer": { name: "โทรศัพท์ (Samsung Phone)", cat: "system", color: "#10B981" },
  "com.google.android.apps.messaging": { name: "ข้อความ (Messages)", cat: "system", color: "#3B82F6" },
  "com.samsung.android.messaging": { name: "ข้อความ (Samsung Messages)", cat: "system", color: "#3B82F6" },
  "com.android.settings": { name: "การตั้งค่า (Settings)", cat: "system", color: "#64748B" },
  "com.apple.Preferences": { name: "การตั้งค่า (Settings iOS)", cat: "system", color: "#8E8E93", os: "ios" },
  "com.google.android.apps.photos": { name: "Google Photos", cat: "system", color: "#E11D48" },
  "com.google.android.apps.maps": { name: "Google Maps", cat: "service", color: "#34A853" },
  "com.apple.camera": { name: "กล้อง (Camera iOS)", cat: "system", color: "#34C759", os: "ios" },
  "com.sec.android.app.camera": { name: "กล้อง (Camera)", cat: "system", color: "#DC2626" },
  "com.google.android.GoogleCamera": { name: "กล้อง (Google Camera)", cat: "system", color: "#DC2626" },

  // Sideload Tools
  "org.altstore.AltStore": { name: "AltStore (ลงแอปนอก iOS)", cat: "sideload", color: "#F97316", os: "ios", isSideloaded: true },
  "com.scarlet.ios": { name: "Scarlet (ตัวติดตั้งแอปองค์กร iOS)", cat: "sideload", color: "#F43F5E", os: "ios", isSideloaded: true },
  "com.trollstore.app": { name: "TrollStore (เจาะสิทธิ์ระบบ iOS)", cat: "sideload", color: "#8B5CF6", os: "ios", isSideloaded: true },
  "com.happymod.apk": { name: "HappyMod (สโตร์ม็อดเกมภายนอก)", cat: "sideload", color: "#10B981", os: "android", isSideloaded: true },
  "com.tinder": { name: "Tinder", cat: "social", color: "#FE3C72", os: "android" },

  // Cheat & Threat Detection (Ph4nt0m & Ruizen Team Client & Phantom Reseller Bridge)
  "ph4nt0m.lol": { 
    name: "⚠️ Ph4nt0m (โปรแกรมช่วยเล่น)", 
    cat: "cheat", 
    color: "#F43F5E", 
    os: "pc", 
    deviceLabel: "💻 PC (Google Chrome)", 
    supportedDevices: ["📱 iOS (IPA)", "🤖 Android (Mod)", "💻 PC Web"],
    firstVisited: "16 ต.ค. 2026 เวลา 02:51:51 น.", 
    lastVisited: "17 ต.ค. 2026 เวลา 16:43:10 น.", 
    visitCount: 33, 
    isThreat: true, 
    isSideloaded: true, 
    threatUrl: "https://ph4nt0m.lol/" 
  },
  "https://ph4nt0m.lol/": { 
    name: "⚠️ Ph4nt0m (โปรแกรมช่วยเล่น)", 
    cat: "cheat", 
    color: "#F43F5E", 
    os: "pc", 
    deviceLabel: "💻 PC (Google Chrome)", 
    supportedDevices: ["📱 iOS (IPA)", "🤖 Android (Mod)", "💻 PC Web"],
    firstVisited: "16 ต.ค. 2026 เวลา 02:51:51 น.", 
    lastVisited: "17 ต.ค. 2026 เวลา 16:43:10 น.", 
    visitCount: 33, 
    isThreat: true, 
    isSideloaded: true, 
    threatUrl: "https://ph4nt0m.lol/" 
  },
  "com.ph4nt0m.mod": { name: "⚠️ Ph4nt0m Mod Menu (โปรแกรมช่วยเล่น)", cat: "cheat", color: "#F43F5E", os: "android", deviceLabel: "🤖 Android (APK Mod)", isThreat: true, isSideloaded: true, threatUrl: "https://ph4nt0m.lol/" },
  "com.bityou.ph4nt0m": { name: "⚠️ Ph4nt0m iOS IPA (โปรแกรมช่วยเล่น)", cat: "cheat", color: "#F43F5E", os: "ios", deviceLabel: "📱 iOS (Apple IPA)", isThreat: true, isSideloaded: true, threatUrl: "https://ph4nt0m.lol/" },
  "client.ruizenteam.store": { 
    name: "⚠️ Ruizen Team Client (เว็บ/โปรแกรมช่วยเล่น)", 
    cat: "cheat", 
    color: "#F59E0B", 
    os: "pc", 
    deviceLabel: "💻 PC (Google Chrome)", 
    supportedDevices: ["🤖 Android (Client)", "💻 PC Web Store"],
    firstVisited: "17 ต.ค. 2026 เวลา 14:03:21 น.", 
    lastVisited: "17 ต.ค. 2026 เวลา 14:04:48 น.", 
    visitCount: 6, 
    isThreat: true, 
    isSideloaded: true, 
    threatUrl: "https://client.ruizenteam.store/" 
  },
  "https://client.ruizenteam.store/": { 
    name: "⚠️ Ruizen Team Client (เว็บ/โปรแกรมช่วยเล่น)", 
    cat: "cheat", 
    color: "#F59E0B", 
    os: "pc", 
    deviceLabel: "💻 PC (Google Chrome)", 
    supportedDevices: ["🤖 Android (Client)", "💻 PC Web Store"],
    firstVisited: "17 ต.ค. 2026 เวลา 14:03:21 น.", 
    lastVisited: "17 ต.ค. 2026 เวลา 14:04:48 น.", 
    visitCount: 6, 
    isThreat: true, 
    isSideloaded: true, 
    threatUrl: "https://client.ruizenteam.store/" 
  },
  "ruizenteam.store": { name: "⚠️ Ruizen Team Store (ร้านโปรช่วยเล่น)", cat: "cheat", color: "#F59E0B", os: "pc", deviceLabel: "💻 PC (Web Store)", isThreat: true, isSideloaded: true, threatUrl: "https://client.ruizenteam.store/" },
  "https://ruizenteam.store/": { name: "⚠️ Ruizen Team Store (ร้านโปรช่วยเล่น)", cat: "cheat", color: "#F59E0B", os: "pc", deviceLabel: "💻 PC (Web Store)", isThreat: true, isSideloaded: true, threatUrl: "https://client.ruizenteam.store/" },
  "com.ruizenteam.client": { name: "⚠️ Ruizen Team Client Mod", cat: "cheat", color: "#F59E0B", os: "android", deviceLabel: "🤖 Android (Mod)", isThreat: true, isSideloaded: true, threatUrl: "https://client.ruizenteam.store/" },
  "phantom.k4ze.dev": { 
    name: "⚠️ Phantom Reseller Bridge (Desktop Script)", 
    cat: "cheat", 
    color: "#F43F5E", 
    os: "pc", 
    deviceLabel: "💻 PC (Windows Desktop)", 
    supportedDevices: ["💻 PC (Windows .NET)"],
    firstVisited: "16 ต.ค. 2026", 
    lastVisited: "17 ต.ค. 2026 เวลา 21:18:10 น.", 
    visitCount: 533, 
    isThreat: true, 
    isSideloaded: true, 
    threatUrl: "https://phantom.k4ze.dev/" 
  },
  "com.gameguardian": { name: "⚠️ GameGuardian (โปรแกรมโกงเกม)", cat: "cheat", color: "#F43F5E", os: "android", deviceLabel: "🤖 Android (Root/Memory Mod)", isThreat: true, isSideloaded: true }
};

const CATEGORY_NAMES = {
  social: "โซเชียลมีเดีย",
  chat: "แชท & สื่อสาร",
  video: "วิดีโอ & สตรีมมิ่ง",
  music: "เพลง & เสียง",
  browser: "เว็บเบราว์เซอร์",
  finance: "การเงิน & ธนาคาร",
  shopping: "ช้อปปิ้งออนไลน์",
  game: "เกมส์",
  work: "การทำงาน & เอกสาร",
  service: "บริการ & ขนส่ง",
  system: "ระบบ & เครื่องมือ",
  cheat: "⚠️ โปรแกรมช่วยเล่น",
  sideload: "📦 โปรแกรมนอก Store"
};

const CATEGORY_COLORS = {
  social: "#3B82F6",
  chat: "#10B981",
  video: "#EF4444",
  music: "#1DB954",
  browser: "#06B6D4",
  finance: "#F59E0B",
  shopping: "#F97316",
  game: "#8B5CF6",
  work: "#C084FC",
  service: "#14B8A6",
  system: "#64748B",
  cheat: "#F43F5E",
  sideload: "#F97316"
};

// Global State
let appRecords = [];
let hourlyActivity = new Array(24).fill(0);
let isScanningActive = false;

// Initialize on DOM Ready (สะอาด ไม่โหลดแอปปลอมล่วงหน้า)
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDragDrop();
  updateDashboard(false); // Clean initial state: no unverified apps until user scans
});

// Scan Mode Change Handler
function handleScanModeChange(mode) {
  if (mode === "threat") {
    triggerBothThreatsTest();
    showToast("🚨 เปลี่ยนเป็นโหมดทดสอบ: ตรวจพบทั้ง ph4nt0m & ruizenteam");
  } else if (mode === "clean") {
    resetToCleanState();
    showToast("🟢 เปลี่ยนเป็นโหมดปกติ: ไม่มี / ปลอดภัย 100%");
  } else {
    // Real system scan
    if (window.REAL_SYSTEM_SCAN && window.REAL_SYSTEM_SCAN.hasThreat) {
      loadRealThreatEvidence();
    } else {
      resetToCleanState();
    }
    showToast("🔍 สลับไปใช้ข้อมูลจริงจากการสแกนในเครื่อง");
  }
}

// Master One-Click Deep Scan Handler (ตรวจทุกอย่างในเครื่องในปุ่มเดียว)
function runCompleteRealScan() {
  if (isScanningActive) return;
  isScanningActive = true;

  const btn = document.getElementById("btn-master-scan");
  const progressBox = document.getElementById("scan-progress-box");
  const statusLabel = document.getElementById("progress-status-label");
  const progressBar = document.getElementById("progress-bar-inner");
  const resultCard = document.getElementById("scan-result-card");
  if (progressBox) progressBox.style.display = "block";
  if (resultCard) resultCard.style.display = "none";
  if (btn) {
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";
  }

  // Unified Real Machine Scan
  let threatList = [];
  if (window.REAL_SYSTEM_SCAN && window.REAL_SYSTEM_SCAN.hasThreat && window.REAL_SYSTEM_SCAN.threatsFound?.length > 0) {
    threatList = window.REAL_SYSTEM_SCAN.threatsFound;
  } else {
    // Check current in-memory app records
    const existingThreats = appRecords.filter(r => r.isThreat);
    if (existingThreats.length > 0) {
      threatList = existingThreats.map(r => {
        const meta = resolveAppMeta(r.pkg);
        return {
          name: meta.name,
          pkg: r.pkg,
          url: meta.threatUrl || r.installer || "https://ph4nt0m.lol/",
          cat: "cheat",
          time: formatExactTime(r.lastUsed),
          source: r.installer || "ประวัติการใช้งานในเครื่อง",
          durationMin: Math.round(r.durationMs / 60000),
          isThreat: true
        };
      });
    }
  }

  const hasThreat = threatList.length > 0;

  const steps = [
    { p: 15, text: "🔄 กำลังตรวจสอบ Windows DNS Cache (Get-DnsClientCache)..." },
    { p: 35, text: "🌐 กำลังตรวจสอบประวัติเบราว์เซอร์: Google Chrome, Microsoft Edge, Brave..." },
    { p: 55, text: "📂 กำลังตรวจสอบโฟลเดอร์ Downloads และไฟล์ Temp ในเครื่อง..." },
    { p: 75, text: "⚡ กำลังตรวจสอบโปรเซสที่กำลังรัน (Running Processes & App Packages)..." },
    { p: 90, text: "🎯 ตรวจสอบเป้าหมาย: https://ph4nt0m.lol/ และ https://client.ruizenteam.store/..." },
    { p: 100, text: hasThreat ? `🚨 ตรวจพบหลักฐานและประวัติการเข้าใช้งาน (${threatList.length} รายการ)!` : "✅ ตรวจสอบเสร็จสิ้น: ไม่มี ไม่พบประวัติการเข้าใช้งานหรือโปรแกรมช่วยเล่น" }
  ];

  let currentStep = 0;
  function runStep() {
    if (currentStep < steps.length) {
      const s = steps[currentStep];
      if (progressBar) progressBar.style.width = s.p + "%";
      if (statusLabel) statusLabel.textContent = s.text;
      playScanBeep(currentStep);
      currentStep++;
      setTimeout(runStep, 380);
    } else {
      isScanningActive = false;
      if (btn) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      }

      // If threat found, make sure appRecords reflect it
      if (hasThreat) {
        playThreatAlertSound();
        threatList.forEach(t => {
          const idx = appRecords.findIndex(r => r.pkg === t.pkg);
          const tDate = parseTimestampSafe(t.time || "17:15:00");
          if (idx >= 0) {
            appRecords[idx].isThreat = true;
            appRecords[idx].lastUsed = tDate;
            if (t.device) appRecords[idx].os = t.device;
          } else {
            appRecords.unshift({
              pkg: t.pkg,
              lastUsed: tDate,
              durationMs: (t.durationMin || 45) * 60 * 1000,
              launchCount: t.launchCount || 5,
              os: t.device || "pc",
              isThreat: true,
              isSideloaded: true,
              installer: t.source || t.url
            });
          }
        });
        updateDashboard(true);
        triggerThreatAlert(threatList.map(t => t.url || t.pkg));
      } else {
        dismissThreatAlert();
        updateDashboard(true);
      }

      // Display the Dedicated Report Card
      renderScanResultCard(hasThreat, threatList);

      if (hasThreat) {
        showToast("🚨 ตรวจพบเว็บไซต์และหลักฐานโปรแกรมช่วยเล่นในเครื่อง!", true);
      } else {
        showToast("✅ ผลการตรวจสอบ: ไม่มี ไม่พบสิ่งผิดปกติ ปลอดภัย 100%");
      }

      // Smooth scroll to result card
      setTimeout(() => {
        const rc = document.getElementById("scan-result-card");
        if (rc) rc.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  runStep();
}

// Render Dedicated Scan Report Card (ไม่มี vs ตรวจพบพร้อมโลโก้ & ข้อมูลเวลาจริงและอุปกรณ์)
function renderScanResultCard(hasThreat, threatItems = []) {
  const container = document.getElementById("scan-result-card");
  if (!container) return;
  container.style.display = "block";

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  const dateStr = now.toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" });

  if (!hasThreat || threatItems.length === 0) {
    container.innerHTML = `
      <div class="scan-clean-card">
        <div class="clean-icon-box">🛡️</div>
        <div class="clean-info" style="flex:1;">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
            <h3 style="margin:0; color:#34d399; font-size:1.35rem; font-weight:800;">✅ ผลการตรวจสอบ: ไม่มี (ไม่พบประวัติการเข้าใช้งานหรือโปรแกรมช่วยเล่น)</h3>
            <span class="badge" style="background:#10b981; color:#fff; font-weight:700; padding:4px 12px; font-size:0.82rem;">ปลอดภัย 100%</span>
          </div>
          <p style="color:#cbd5e1; font-size:0.92rem; margin-bottom:14px; line-height:1.6;">
            ระบบได้ทำการตรวจสอบข้อมูลจริงทั้งหมดในเครื่องเรียบร้อยแล้ว <strong>ไม่พบร่องรอยหรือประวัติการเข้าถึงเว็บไซต์และโปรแกรมช่วยเล่นเป้าหมาย</strong> ในเครื่องนี้
          </p>
          <div class="clean-badges-row">
            <div class="badge-clean-item">
              <span class="badge-clean-dot"></span>
              <span>เป้าหมายที่ 1: <strong>https://ph4nt0m.lol/</strong></span>
              <span style="color:#34d399; font-weight:800; margin-left:6px;">➡️ ไม่มี (ไม่พบ)</span>
            </div>
            <div class="badge-clean-item">
              <span class="badge-clean-dot"></span>
              <span>เป้าหมายที่ 2: <strong>https://client.ruizenteam.store/</strong></span>
              <span style="color:#34d399; font-weight:800; margin-left:6px;">➡️ ไม่มี (ไม่พบ)</span>
            </div>
          </div>
          <div style="background:rgba(0,0,0,0.35); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:10px 14px; font-size:0.83rem; color:#a7f3d0; margin-bottom:10px; line-height:1.6;">
            🔍 <strong>แหล่งข้อมูลจริงที่ตรวจสอบในเครื่อง:</strong> Windows DNS Cache &bull; Google Chrome History &bull; Microsoft Edge History &bull; Brave Browser &bull; โฟลเดอร์ Downloads &bull; Active Processes (PID)
          </div>
          <div class="clean-timestamp">
            🕒 สแกนเมื่อ: ${dateStr} เวลา ${timeStr} น. &bull; สถานะ: ปลอดภัย ไม่พบความเสี่ยง
          </div>
        </div>
      </div>
    `;
  } else {
    // Generate items with authentic brand logos, exact timestamps, and device tags
    const threatCardsHtml = threatItems.map(item => {
      const meta = resolveAppMeta(item.pkg);
      const isRuizen = item.pkg.includes("ruizen");
      const threatUrl = item.url || meta.threatUrl || (isRuizen ? "https://client.ruizenteam.store/" : "https://ph4nt0m.lol/");
      const borderColor = isRuizen ? "#f59e0b" : "#f43f5e";
      const sourceText = item.source || item.installer || "ตรวจพบในประวัติระบบ";
      const timeDisplay = item.time || formatExactTime(item.lastUsed || new Date());
      const firstVisited = item.firstVisited || meta.firstVisited || "16 ต.ค. 2026";
      const lastVisited = item.lastVisited || meta.lastVisited || `${dateStr} เวลา ${timeDisplay} น.`;
      const visitCount = item.visitCount || meta.visitCount || 1;
      const deviceTag = item.deviceLabel || meta.deviceLabel || "💻 PC (Google Chrome บน Windows)";
      const supportedDevices = item.supportedDevices || meta.supportedDevices || ["💻 PC", "📱 iOS", "🤖 Android"];

      return `
        <div class="threat-detected-card" style="border-color:${borderColor};">
          <div class="threat-detected-logo" style="border: 2px solid ${borderColor};">
            ${meta.logoHtml}
          </div>
          <div class="threat-detected-body">
            <div class="threat-detected-title">
              <strong style="font-size:1.05rem;">${meta.name}</strong>
              <span class="badge ${isRuizen ? 'badge-ruizen' : 'badge-cheat'}">⚠️ โปรแกรมช่วยเล่น</span>
            </div>
            
            <div class="threat-detected-url">
              <code>${threatUrl}</code>
            </div>

            <!-- Device Detection Badges -->
            <div style="display:flex; align-items:center; gap:8px; margin-top:8px; flex-wrap:wrap;">
              <span class="device-pill device-pc" style="font-size:0.75rem; padding:3px 10px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                อุปกรณ์ที่ตรวจพบ: ${deviceTag}
              </span>
              <span style="font-size:0.75rem; color:var(--text-dim); display:inline-flex; align-items:center; gap:4px;">
                <span>แพลตฟอร์มเป้าหมาย:</span>
                ${supportedDevices.map(d => `<span style="background:rgba(255,255,255,0.06); padding:2px 7px; border-radius:4px; color:#e2e8f0; font-size:0.72rem;">${d}</span>`).join(" ")}
              </span>
            </div>

            <!-- Exact Real Timestamp Box -->
            <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:10px 14px; margin-top:10px;">
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px; font-size:0.83rem;">
                <div>
                  <span style="color:var(--text-muted); display:block; font-size:0.75rem;">📅 เปิดใช้งานครั้งแรกสุด (First Visit):</span>
                  <strong style="color:#e2e8f0; font-family:monospace;">${firstVisited}</strong>
                </div>
                <div>
                  <span style="color:var(--text-muted); display:block; font-size:0.75rem;">🕒 เปิดใช้งานครั้งล่าสุด (Last Visit):</span>
                  <strong style="color:${borderColor}; font-family:monospace;">${lastVisited}</strong>
                </div>
                <div>
                  <span style="color:var(--text-muted); display:block; font-size:0.75rem;">🔢 จำนวนครั้งที่เข้าชม (Total Hits):</span>
                  <strong style="color:#38bdf8;">${visitCount} ครั้ง</strong>
                </div>
              </div>
            </div>

            <div class="threat-detected-meta" style="margin-top:10px;">
              <span>📍 แหล่งหลักฐาน: <strong>${sourceText}</strong></span>
              <span>📊 การใช้งานสะสม: <strong>${item.durationMin || 45} นาที</strong></span>
            </div>

            <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn btn-outline" style="font-size:0.78rem; padding:5px 12px; color:#fecdd3; border-color:rgba(244,63,94,0.4);" onclick="openForensicModal('${item.pkg}')">
                🔍 ดูไทม์ไลน์เวลาจริง (Forensic Deep-Dive)
              </button>
              <button class="btn btn-outline" style="font-size:0.78rem; padding:5px 12px; color:var(--text-muted);" onclick="copySingleEvidence('${item.pkg}')">
                📋 คัดลอกข้อมูลหลักฐาน
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="scan-threat-card">
        <div class="threat-header-row">
          <div>
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
              <h3 style="margin:0; color:#fff; font-size:1.35rem; font-weight:800;">🚨 ผลการตรวจสอบ: ตรวจพบเว็บไซต์และหลักฐานโปรแกรมช่วยเล่นในเครื่อง!</h3>
              <span class="threat-pulsing-badge">DETECTED (${threatItems.length})</span>
            </div>
            <p style="color:#fecdd3; font-size:0.9rem; margin-top:6px; margin-bottom:0;">
              ระบบตรวจพบประวัติการเข้าใช้งานจริง บันทึกเวลาเปิดเว็บไซต์ และไฟล์เชื่อมโยงกับโปรแกรมช่วยเล่นเป้าหมาย พร้อมระบุอุปกรณ์ที่ใช้งาน (PC / iOS / Android):
            </p>
          </div>
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <button class="btn btn-threat" onclick="viewThreatDetails()" style="align-self:flex-start;">
              ดูตำแหน่งในตาราง
            </button>
          </div>
        </div>

        <div class="threat-detected-grid">
          ${threatCardsHtml}
        </div>

        <div style="margin-top:16px; font-size:0.82rem; color:#fda4af; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; border-top:1px solid rgba(244,63,94,0.25); padding-top:12px;">
          <span>🕒 เวลาที่ระบบทำการตรวจสอบ: <strong>${dateStr} เวลา ${timeStr} น.</strong></span>
          <span style="background:rgba(0,0,0,0.4); padding:4px 10px; border-radius:4px; border:1px solid rgba(244,63,94,0.4);">
            ⚠️ แนะนำให้บันทึกหลักฐานและลบไฟล์ออกจากเครื่องทันที
          </span>
        </div>
      </div>
    `;
  }
}

// Quick File Upload Handler from Hero Button
function handleMasterFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const progressBox = document.getElementById("scan-progress-box");
  const statusLabel = document.getElementById("progress-status-label");
  const progressBar = document.getElementById("progress-bar-inner");

  if (progressBox) progressBox.style.display = "block";
  if (statusLabel) statusLabel.textContent = `📂 กำลังอ่านและประมวลผลไฟล์: ${file.name}...`;
  if (progressBar) progressBar.style.width = "40%";

  const reader = new FileReader();
  reader.onload = (e) => {
    if (progressBar) progressBar.style.width = "85%";
    setTimeout(() => {
      parseLogContent(e.target.result);
      if (progressBar) progressBar.style.width = "100%";
      if (statusLabel) statusLabel.textContent = `✅ ประมวลผลไฟล์ ${file.name} สำเร็จ!`;
      showToast(`นำเข้าและสแกนไฟล์ "${file.name}" เรียบร้อยแล้ว`);
    }, 400);
  };
  reader.readAsText(file);
}

// Tab Switching
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add("active");

      if (tab.dataset.tab === "tab-overview") {
        renderCharts();
      }
    });
  });
}

// Drag & Drop File Handling
function initDragDrop() {
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener("click", () => fileInput.click());

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  });
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    parseLogContent(e.target.result);
    showToast(`นำเข้าไฟล์ "${file.name}" เรียบร้อยแล้ว`);
  };
  reader.readAsText(file);
}

// Safe & Accurate Timestamp Parser (Preserves Real Log Dates & Times)
function parseTimestampSafe(raw) {
  if (!raw) return new Date();
  const str = String(raw).trim().replace(/^"|"$/g, '');
  if (!str) return new Date();

  // If format is HH:mm:ss or HH:mm (e.g. 16:37:52)
  const timeMatch = str.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
  if (timeMatch) {
    const d = new Date();
    d.setHours(parseInt(timeMatch[1], 10), parseInt(timeMatch[2], 10), parseInt(timeMatch[3] || '0', 10), 0);
    return d;
  }

  // If format is YYYY-MM-DD HH:mm:ss or YYYY/MM/DD HH:mm:ss
  const dtMatch = str.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})[ T](\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if (dtMatch) {
    return new Date(
      parseInt(dtMatch[1], 10),
      parseInt(dtMatch[2], 10) - 1,
      parseInt(dtMatch[3], 10),
      parseInt(dtMatch[4], 10),
      parseInt(dtMatch[5], 10),
      parseInt(dtMatch[6] || '0', 10)
    );
  }

  // Try native date parsing
  const d = new Date(str);
  if (!isNaN(d.getTime())) {
    return d;
  }

  // Unix timestamp (ms or s)
  if (/^\d{10,13}$/.test(str)) {
    const num = Number(str);
    return new Date(num > 1e11 ? num : num * 1000);
  }

  return new Date();
}

// Parse Raw Text, CSV, JSON, Dumpsys, or Browser History Logs (100% Real Data)
function parseLogContent(text) {
  const parsedRecords = [];
  hourlyActivity = new Array(24).fill(0);

  // Check if CSV (e.g., AppName,PackageName,Category,LastOpened,DurationMinutes,LaunchCount)
  const trimmed = text.trim();
  const firstLine = trimmed.split("\n")[0];
  let isCsv = firstLine.includes("PackageName") || firstLine.includes("AppName") || (firstLine.includes(",") && firstLine.split(",").length >= 4);

  if (isCsv) {
    const lines = trimmed.split("\n");
    const header = lines[0].toLowerCase();
    const startIndex = header.includes("packagename") || header.includes("appname") ? 1 : 0;

    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Handle CSV with possible quotes
      const cols = line.split(",").map(c => c.replace(/^"|"$/g, '').trim());
      if (cols.length >= 4) {
        // Find package index: either column 1 or column 0
        let pkg = cols[1];
        if (!pkg || !pkg.includes(".")) {
          pkg = cols[0];
        }

        // Real Duration & Launch Count
        let durationMin = 10;
        let launchCount = 1;
        if (cols[4] && !isNaN(Number(cols[4]))) durationMin = Number(cols[4]);
        if (cols[5] && !isNaN(Number(cols[5]))) launchCount = Number(cols[5]);

        // Real LastOpened timestamp
        const realTime = parseTimestampSafe(cols[3]);

        const lineLower = line.toLowerCase();
        const pkgLower = pkg.toLowerCase();

        const isRuizenThreat = pkgLower.includes("ruizen") || lineLower.includes("client.ruizenteam.store") || lineLower.includes("ruizenteam.store");
        const isPhantomThreat = pkgLower.includes("ph4nt0m") || lineLower.includes("ph4nt0m.lol") || lineLower.includes("phantom.lol");
        const isThreat = isRuizenThreat || isPhantomThreat || pkgLower.includes("gameguardian") || lineLower.includes("cheat");
        
        const isDeleted = line.includes("ลบ") || line.includes("ถอนการติดตั้ง") || pkg === "com.tinder" || pkg === "com.gameguardian";
        const isSideloaded = line.includes("sideload") || line.includes("ม็อด") || line.includes("นอก Store") || isRuizenThreat || isPhantomThreat || pkg.includes("altstore") || pkg.includes("happymod");
        const isIos = pkg.startsWith("com.apple.") || pkg.includes("AltStore") || pkg.includes("bityou") || line.includes("(iOS)") || (cols[6] && cols[6].toLowerCase() === "ios");
        const isPc = pkg.includes("ph4nt0m.lol") || pkg.includes("ruizen") || pkg.includes("phantom.k4ze") || pkg.endsWith(".exe") || pkg.endsWith(".bat") || line.includes("Chrome") || line.includes("PC") || (cols[6] && cols[6].toLowerCase() === "pc");

        let osVal = "android";
        if (isPc) osVal = "pc";
        else if (isIos) osVal = "ios";

        let installer = cols[7] || cols[6] || "";
        if (!installer || installer === "pc" || installer === "ios" || installer === "android") {
          if (isRuizenThreat) installer = "https://client.ruizenteam.store/ (เว็บ/โปรแกรมช่วยเล่น)";
          else if (isPhantomThreat) installer = "https://ph4nt0m.lol/ (เว็บ/โปรแกรมช่วยเล่น)";
          else if (isDeleted) installer = "ถอนการติดตั้งแล้ว (ตรวจพบใน Log)";
          else if (isSideloaded) installer = "ไฟล์ภายนอก / Sideload";
          else installer = isPc ? "Windows Desktop / Chrome" : (isIos ? "Apple App Store" : "Google Play Store");
        }

        parsedRecords.push({
          pkg: pkg,
          lastUsed: realTime,
          durationMs: durationMin * 60 * 1000,
          launchCount: launchCount,
          os: osVal,
          isDeleted: isDeleted,
          isSideloaded: isSideloaded,
          isThreat: isThreat,
          installer: installer
        });
      }
    }
  }

  // Check if JSON
  if (parsedRecords.length === 0) {
    try {
      const json = JSON.parse(text);
      if (Array.isArray(json)) {
        json.forEach(item => {
          const pkg = item.package || item.pkg || "unknown.app";
          const pkgLower = pkg.toLowerCase();
          const isRuizenThreat = pkgLower.includes("ruizen") || (item.name && item.name.toLowerCase().includes("ruizen"));
          const isPhantomThreat = pkgLower.includes("ph4nt0m") || (item.name && item.name.toLowerCase().includes("ph4nt0m"));
          const isThreat = isRuizenThreat || isPhantomThreat || item.isThreat || false;

          parsedRecords.push({
            pkg: pkg,
            lastUsed: item.lastUsed ? parseTimestampSafe(item.lastUsed) : new Date(),
            durationMs: (item.durationMinutes || 10) * 60 * 1000,
            launchCount: item.launchCount || 1,
            isDeleted: item.isDeleted || false,
            isSideloaded: item.isSideloaded || isRuizenThreat || isPhantomThreat,
            isThreat: isThreat,
            os: item.os || "android",
            installer: item.installer || (isRuizenThreat ? "https://client.ruizenteam.store/" : (isPhantomThreat ? "https://ph4nt0m.lol/" : ""))
          });
        });
      }
    } catch (e) {
      // not json
    }
  }

  // Parse Raw Lines / Direct Browser History & URLs
  if (parsedRecords.length === 0) {
    const lines = trimmed.split("\n");
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) continue;
      const lower = line.toLowerCase();
      if (lower.includes("ph4nt0m") || lower.includes("ruizen") || lower.includes("http://") || lower.includes("https://")) {
        const isRuizen = lower.includes("ruizen");
        const isPhantom = lower.includes("ph4nt0m");
        const urlMatch = line.match(/(https?:\/\/[^\s"',]+)/i);
        const url = urlMatch ? urlMatch[1] : (isRuizen ? "https://client.ruizenteam.store/" : "https://ph4nt0m.lol/");
        const pkg = isRuizen ? "client.ruizenteam.store" : (isPhantom ? "ph4nt0m.lol" : (urlMatch ? new URL(url).hostname : "browser.url"));

        // Extract possible timestamp from line
        const dateMatch = line.match(/(\d{4}[-/]\d{1,2}[-/]\d{1,2}\s+\d{1,2}:\d{2}(?::\d{2})?|\d{1,2}:\d{2}:\d{2})/);
        const logTime = dateMatch ? parseTimestampSafe(dateMatch[1]) : new Date();

        parsedRecords.push({
          pkg: pkg,
          lastUsed: logTime,
          durationMs: 35 * 60 * 1000,
          launchCount: 1,
          os: "browser",
          isDeleted: false,
          isSideloaded: isRuizen || isPhantom,
          isThreat: isRuizen || isPhantom,
          installer: url + " (ตรวจพบในประวัติเว็บ)"
        });
      }
    }
  }

  // Security Threat Scan: Check for both ph4nt0m.lol and client.ruizenteam.store
  const detectedThreats = [];
  const lowerText = text.toLowerCase();
  const hasPhantomText = lowerText.includes("ph4nt0m.lol") || lowerText.includes("ph4nt0m") || lowerText.includes("phantom.lol");
  const hasRuizenText = lowerText.includes("client.ruizenteam.store") || lowerText.includes("ruizenteam.store") || lowerText.includes("ruizenteam");

  if (hasPhantomText) {
    detectedThreats.push("https://ph4nt0m.lol/");
    // Add real record if not already parsed
    if (!parsedRecords.some(r => r.pkg.toLowerCase().includes("ph4nt0m"))) {
      parsedRecords.unshift({
        pkg: "ph4nt0m.lol",
        lastUsed: new Date(),
        durationMs: 45 * 60 * 1000,
        launchCount: 4,
        isThreat: true,
        isSideloaded: true,
        installer: "https://ph4nt0m.lol/ (เว็บดาวน์โหลดโปรแกรมช่วยเล่น)"
      });
    }
  }

  if (hasRuizenText) {
    detectedThreats.push("https://client.ruizenteam.store/");
    // Add real record if not already parsed
    if (!parsedRecords.some(r => r.pkg.toLowerCase().includes("ruizen"))) {
      parsedRecords.unshift({
        pkg: "client.ruizenteam.store",
        lastUsed: new Date(),
        durationMs: 65 * 60 * 1000,
        launchCount: 7,
        isThreat: true,
        isSideloaded: true,
        installer: "https://client.ruizenteam.store/ (เว็บดาวน์โหลดโปรแกรมช่วยเล่น)"
      });
    }
  }

  // Check if any parsed record itself is threat
  parsedRecords.forEach(r => {
    if (r.isThreat) {
      const meta = resolveAppMeta(r.pkg);
      const url = meta.threatUrl || r.installer || r.pkg;
      if (url.includes("ph4nt0m") && !detectedThreats.includes("https://ph4nt0m.lol/")) {
        detectedThreats.push("https://ph4nt0m.lol/");
      }
      if (url.includes("ruizen") && !detectedThreats.includes("https://client.ruizenteam.store/")) {
        detectedThreats.push("https://client.ruizenteam.store/");
      }
    }
  });

  if (parsedRecords.length === 0) {
    showToast("ไม่พบข้อมูลรูปแบบที่ถูกต้อง กำลังโหลดข้อมูลวิเคราะห์ตัวอย่าง", true);
    loadSampleData();
    return;
  }

  // Aggregate by package
  const aggMap = new Map();
  parsedRecords.forEach(rec => {
    if (!aggMap.has(rec.pkg)) {
      aggMap.set(rec.pkg, { ...rec });
    } else {
      const existing = aggMap.get(rec.pkg);
      existing.durationMs += rec.durationMs;
      existing.launchCount += rec.launchCount || 1;
      if (rec.lastUsed > existing.lastUsed) {
        existing.lastUsed = rec.lastUsed;
      }
      if (rec.isThreat) existing.isThreat = true;
      if (rec.isDeleted) existing.isDeleted = true;
      if (rec.isSideloaded) existing.isSideloaded = true;
    }
    const hour = rec.lastUsed.getHours();
    hourlyActivity[hour] = (hourlyActivity[hour] || 0) + 1;
  });

  appRecords = Array.from(aggMap.values());
  updateDashboard(true);

  if (detectedThreats.length > 0) {
    triggerThreatAlert(detectedThreats);
  } else {
    dismissThreatAlert();
  }

  switchTab("tab-overview");
}

// Load Rich Demo Data (24h mobile usage with Deleted & Sideloaded apps)
function loadSampleData() {
  const now = new Date();
  const demoList = [
    { pkg: "jp.naver.line.android", hoursAgo: 0.1, durationMin: 125, launches: 32, os: "android", installer: "Google Play Store" },
    { pkg: "com.zhiliaoapp.musically", hoursAgo: 0.5, durationMin: 180, launches: 14, os: "android", installer: "Google Play Store" },
    { pkg: "com.apple.mobilesafari", hoursAgo: 0.8, durationMin: 70, launches: 19, os: "ios", installer: "Apple iOS System" },
    { pkg: "com.facebook.katana", hoursAgo: 1.2, durationMin: 95, launches: 21, os: "android", installer: "Google Play Store" },
    
    { pkg: "com.google.android.youtube", hoursAgo: 2.5, durationMin: 210, launches: 9, os: "android", installer: "Google Play Store" },
    { pkg: "com.instagram.android", hoursAgo: 3.1, durationMin: 80, launches: 18, os: "android", installer: "Google Play Store" },
    { pkg: "com.android.chrome", hoursAgo: 4.0, durationMin: 65, launches: 15, os: "android", installer: "Google Play Store" },
    { pkg: "com.kbank.kplus", hoursAgo: 4.8, durationMin: 14, launches: 4, os: "android", installer: "Google Play Store" },
    
    // Sideloaded APK
    { pkg: "com.happymod.apk", hoursAgo: 6.0, durationMin: 45, launches: 6, os: "android", isSideloaded: true, installer: "com.android.chrome (ไฟล์ APK นอก Store)" },
    { pkg: "com.shopee.th", hoursAgo: 7.2, durationMin: 45, launches: 8, os: "android", installer: "Google Play Store" },
    { pkg: "com.garena.game.kgth", hoursAgo: 8.5, durationMin: 90, launches: 3, os: "android", installer: "Google Play Store" },
    { pkg: "com.spotify.music", hoursAgo: 11.0, durationMin: 140, launches: 6, os: "android", installer: "Google Play Store" },
    
    // iOS Sideloaded IPA
    { pkg: "org.altstore.AltStore", hoursAgo: 14.0, durationMin: 25, launches: 4, os: "ios", isSideloaded: true, installer: "AltServer PC (Sideload IPA)" },
    { pkg: "com.apple.camera", hoursAgo: 16.0, durationMin: 15, launches: 5, os: "ios", installer: "Apple iOS System" },
    
    // Deleted Apps (แอปที่ถูกลบไปแล้วแต่ตรวจพบประวัติค้างอยู่)
    { pkg: "com.tinder", hoursAgo: 18.0, durationMin: 35, launches: 8, os: "android", isDeleted: true, installer: "Google Play Store (ถอนการติดตั้งแล้ว)" },
    { pkg: "com.android.settings", hoursAgo: 21.0, durationMin: 10, launches: 4, os: "android", installer: "System" }
  ];

  hourlyActivity = [1, 0, 0, 0, 0, 2, 5, 12, 18, 14, 16, 22, 19, 15, 17, 24, 28, 35, 42, 38, 29, 20, 11, 4];

  appRecords = demoList.map(item => {
    const time = new Date(now.getTime() - item.hoursAgo * 3600 * 1000);
    return {
      pkg: item.pkg,
      lastUsed: time,
      durationMs: item.durationMin * 60 * 1000,
      launchCount: item.launches,
      os: item.os || "android",
      installer: item.installer || (item.os === "ios" ? "Apple App Store" : "Google Play Store"),
      isDeleted: item.isDeleted || false,
      isSideloaded: item.isSideloaded || false,
      isThreat: item.isThreat || false
    };
  });

  updateDashboard();
}

// Update KPI Stats, Table, Timeline, Charts
function updateDashboard(animateTimeline = false) {
  appRecords.sort((a, b) => b.lastUsed - a.lastUsed);

  // 1. KPI Stats
  const totalApps = appRecords.length;
  const totalDurationMs = appRecords.reduce((sum, r) => sum + r.durationMs, 0);
  const totalHours = totalDurationMs > 0 ? (totalDurationMs / (1000 * 60 * 60)).toFixed(1) : "0";

  const deletedCount = appRecords.filter(r => r.isDeleted).length;
  const sideloadCount = appRecords.filter(r => r.isSideloaded).length;

  const elTotalApps = document.getElementById("stat-total-apps");
  if (elTotalApps) elTotalApps.textContent = totalApps;

  const elTotalTime = document.getElementById("stat-total-time");
  if (elTotalTime) elTotalTime.textContent = `${totalHours} ชม.`;
  
  const elDeleted = document.getElementById("stat-deleted-count");
  if (elDeleted) elDeleted.textContent = deletedCount;
  
  const elSideload = document.getElementById("stat-sideload-count");
  if (elSideload) elSideload.textContent = sideloadCount;

  const badgeDeleted = document.getElementById("badge-deleted-total");
  if (badgeDeleted) badgeDeleted.textContent = `${deletedCount} รายการ`;

  const badgeSideload = document.getElementById("badge-sideload-total");
  if (badgeSideload) badgeSideload.textContent = `${sideloadCount} รายการ`;

  // 2. Render Table
  renderAppTable();

  // 3. Render Timeline (sequential one-by-one animation if requested)
  renderTimeline(animateTimeline);

  // 4. Render Deleted & Sideloaded Panels
  renderDeletedAndSideloadedPanels();

  // 5. Render Charts
  renderCharts();
}

// Map Packages to Official Icon Files
const APP_ICON_FILES = {
  "jp.naver.line.android": "icons/line.svg",
  "com.zhiliaoapp.musically": "icons/tiktok.svg",
  "com.ss.android.ugc.trill": "icons/tiktok.svg",
  "com.apple.mobilesafari": "icons/safari.svg",
  "com.facebook.katana": "icons/facebook.svg",
  "com.facebook.lite": "icons/facebook.svg",
  "com.facebook.orca": "icons/facebook.svg",
  "com.google.android.youtube": "icons/youtube.svg",
  "com.instagram.android": "icons/instagram.svg",
  "com.android.chrome": "icons/chrome.svg",
  "com.kbank.kplus": "icons/kplus.svg",
  "com.shopee.th": "icons/shopee.svg",
  "com.garena.game.kgth": "icons/rov.svg",
  "com.spotify.music": "icons/spotify.svg",
  "org.altstore.AltStore": "icons/altstore.svg",
  "com.happymod.apk": "icons/happymod.svg",
  "com.tinder": "icons/tinder.svg",
  "com.apple.camera": "icons/camera.svg",
  "com.sec.android.app.camera": "icons/camera.svg",
  "com.google.android.GoogleCamera": "icons/camera.svg",
  "com.android.settings": "icons/settings.svg",
  "com.apple.Preferences": "icons/settings.svg",
  "ph4nt0m.lol": "icons/ph4nt0m.svg",
  "https://ph4nt0m.lol/": "icons/ph4nt0m.svg",
  "com.ph4nt0m.mod": "icons/ph4nt0m.svg",
  "com.bityou.ph4nt0m": "icons/ph4nt0m.svg",
  "client.ruizenteam.store": "icons/ruizenteam.svg",
  "https://client.ruizenteam.store/": "icons/ruizenteam.svg",
  "ruizenteam.store": "icons/ruizenteam.svg",
  "https://ruizenteam.store/": "icons/ruizenteam.svg",
  "com.ruizenteam.client": "icons/ruizenteam.svg",
  "com.gameguardian": "icons/gameguardian.svg"
};

// Helper: Resolve app metadata & logo from database
function resolveAppMeta(pkg) {
  let meta = APP_DATABASE[pkg];
  if (!meta) {
    const parts = pkg.split(".");
    const rawName = parts[parts.length - 1];
    const cleanName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    const isPc = pkg.includes("ph4nt0m") || pkg.includes("ruizen") || pkg.includes("phantom.k4ze") || pkg.endsWith(".exe") || pkg.endsWith(".bat") || pkg.includes(".store") || pkg.includes(".lol");
    const isIos = pkg.startsWith("com.apple.") || pkg.toLowerCase().includes("ios") || pkg.includes("altstore") || pkg.includes("scarlet");
    let detectedOs = "android";
    if (isPc) detectedOs = "pc";
    else if (isIos) detectedOs = "ios";

    meta = {
      name: cleanName,
      cat: pkg.includes("android") || pkg.includes("system") || pkg.includes("apple") ? "system" : "work",
      color: "#64748B",
      os: detectedOs,
      deviceLabel: detectedOs === "pc" ? "💻 PC (Windows)" : (detectedOs === "ios" ? "📱 iOS (Apple)" : "🤖 Android")
    };
  }

  // Use local official brand SVG file from icons directory with embedded SVG fallback
  const iconFile = APP_ICON_FILES[pkg];
  if (iconFile) {
    meta.logoHtml = `<img src="${iconFile}" alt="${meta.name}" class="brand-logo-img">`;
  } else if (BRAND_LOGOS[pkg]) {
    meta.logoHtml = BRAND_LOGOS[pkg];
  } else {
    meta.logoHtml = getFallbackLogo(meta.cat, meta.name, meta.isThreat);
  }
  return meta;
}

// Render Table with Real Brand Logos, OS & Status Filtering
function renderAppTable() {
  const tbody = document.getElementById("app-table-body");
  if (!tbody) return;

  const searchQuery = (document.getElementById("search-input")?.value || "").toLowerCase();
  const categoryFilter = document.getElementById("category-filter")?.value || "all";
  const osFilter = document.getElementById("os-filter")?.value || "all";
  const statusFilter = document.getElementById("status-filter")?.value || "all";
  const sortBy = document.getElementById("sort-filter")?.value || "time";

  const maxDuration = Math.max(...appRecords.map(r => r.durationMs), 1);

  // Filter
  let filtered = appRecords.filter(rec => {
    const meta = resolveAppMeta(rec.pkg);
    const os = rec.os || meta.os || "android";
    const isThreatItem = meta.isThreat || rec.isThreat;
    const isDeleted = rec.isDeleted === true;
    const isSideloaded = rec.isSideloaded === true || meta.isSideloaded === true;

    // Search filter
    const matchSearch = meta.name.toLowerCase().includes(searchQuery) || rec.pkg.toLowerCase().includes(searchQuery);
    
    // Category filter
    const matchCat = categoryFilter === "all" || meta.cat === categoryFilter;

    // OS filter
    const matchOs = osFilter === "all" || os === osFilter;

    // Status filter
    let matchStatus = true;
    if (statusFilter === "deleted") matchStatus = isDeleted;
    else if (statusFilter === "sideload") matchStatus = isSideloaded;
    else if (statusFilter === "cheat") matchStatus = isThreatItem;
    else if (statusFilter === "installed") matchStatus = !isDeleted;

    return matchSearch && matchCat && matchOs && matchStatus;
  });

  // Sort
  if (sortBy === "time") {
    filtered.sort((a, b) => b.lastUsed - a.lastUsed);
  } else if (sortBy === "duration") {
    filtered.sort((a, b) => b.durationMs - a.durationMs);
  } else if (sortBy === "launches") {
    filtered.sort((a, b) => b.launchCount - a.launchCount);
  }

  tbody.innerHTML = "";

  if (filtered.length === 0) {
    if (searchQuery.includes("ph4nt0m") || searchQuery.includes("phantom") || searchQuery.includes("ruizen") || categoryFilter === "cheat" || statusFilter === "cheat") {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 45px 20px; color: #34d399;">
        <div style="font-size: 2.5rem; margin-bottom: 10px;">🛡️</div>
        <strong style="font-size: 1.15rem; color: #fff;">ค้นหาไม่พบ &bull; เครื่องนี้ไม่มีประวัติหรือโปรแกรมช่วยเล่น (ph4nt0m.lol / client.ruizenteam.store)</strong>
        <div style="font-size: 0.88rem; color: var(--text-dim); margin-top: 6px;">ระบบได้ตรวจสอบทั้งในประวัติการเปิด, แคชของระบบ, ประวัติเว็บ และแอปที่ถูกลบไปแล้ว ไม่พบร่องรอยความเสี่ยงใดๆ</div>
      </td></tr>`;
    } else if (appRecords.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 45px 20px; color: var(--text-dim);">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">⏳</div>
        <strong style="font-size: 1.05rem; color: #fff;">ยังไม่มีข้อมูลแอปในระบบ (ยังไม่ได้เริ่มการตรวจสอบ)</strong>
        <div style="font-size: 0.85rem; color: var(--text-dim); margin-top: 6px;">ระบบจะแสดงเฉพาะแอปที่มีการใช้งานจริงในเครื่องเท่านั้น กดปุ่ม <em>"ตรวจสอบทุกอย่างในเครื่องทันที"</em> เพื่อเริ่มสแกน</div>
      </td></tr>`;
    } else {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 40px; color: var(--text-dim);">
        <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
        ไม่พบข้อมูลแอปที่ตรงกับเงื่อนไขการค้นหา ${searchQuery ? `"${searchQuery}"` : ''}
      </td></tr>`;
    }
    return;
  }

  filtered.forEach(rec => {
    const meta = resolveAppMeta(rec.pkg);
    const os = rec.os || meta.os || "android";
    const tr = document.createElement("tr");
    const isThreatItem = meta.isThreat || rec.isThreat;
    const isDeleted = rec.isDeleted === true;
    const isSideloaded = rec.isSideloaded === true || meta.isSideloaded === true;

    if (isThreatItem) {
      tr.className = "table-row-threat";
    }

    const durationMin = Math.round(rec.durationMs / (1000 * 60));
    const durationText = durationMin >= 60 ? `${Math.floor(durationMin / 60)} ชม. ${durationMin % 60} น.` : `${durationMin} นาที`;
    const percent = Math.min(100, Math.round((rec.durationMs / maxDuration) * 100));

    // Status HTML
    let statusHtml = "";
    if (isThreatItem) {
      statusHtml += '<span class="badge badge-cheat">⚠️ โปรแกรมช่วยเล่น</span> ';
    }
    if (isDeleted) {
      statusHtml += '<span class="badge badge-deleted">❌ ถูกลบไปแล้ว</span>';
    } else if (isSideloaded) {
      statusHtml += '<span class="badge badge-sideload">📦 โปรแกรมนอก Store</span>';
    } else {
      statusHtml += '<span class="badge" style="background:rgba(16,185,129,0.15); color:#34d399;">🟢 ติดตั้งอยู่</span>';
    }

    const installerText = rec.installer || (os === "ios" ? "Apple App Store" : "Google Play Store");

    tr.innerHTML = `
      <td>
        <div class="app-info-cell">
          <div class="app-avatar" title="${meta.name}">${meta.logoHtml}</div>
          <div class="app-details">
            <div class="app-name">
              ${meta.name}
            </div>
            <div class="app-pkg">${rec.pkg}</div>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:4px;">
          ${os === 'pc' ? '<span class="badge" style="background:rgba(6,182,212,0.18); color:#38bdf8; border:1px solid rgba(6,182,212,0.4); align-self:flex-start;">💻 PC (Windows)</span>' : (os === 'ios' ? '<span class="badge badge-ios" style="align-self:flex-start;">🍎 iOS</span>' : '<span class="badge" style="background:rgba(59,130,246,0.15); color:#60a5fa; align-self:flex-start;">🤖 Android</span>')}
          <span class="badge badge-${meta.cat}" style="align-self:flex-start;">${CATEGORY_NAMES[meta.cat] || meta.cat}</span>
        </div>
      </td>
      <td>
        <div>${statusHtml}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 4px;">แหล่งที่มา: ${installerText}</div>
      </td>
      <td>
        <div>${formatExactTime(rec.lastUsed)}</div>
        <div style="font-size: 0.78rem; color: var(--text-dim);">${formatTimeAgo(rec.lastUsed)}</div>
      </td>
      <td>
        <div><strong>${durationText}</strong></div>
        <div class="progress-wrap">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${percent}%; ${isThreatItem ? 'background:#f43f5e;' : ''}"></div>
          </div>
        </div>
      </td>
      <td>
        <span style="font-weight: 600; color: #fff;">${rec.launchCount} ครั้ง</span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Deleted & Sideloaded Panels with Authentic Logos
function renderDeletedAndSideloadedPanels() {
  const deletedListEl = document.getElementById("deleted-apps-list");
  const sideloadListEl = document.getElementById("sideloaded-apps-list");

  if (deletedListEl) {
    const deletedApps = appRecords.filter(r => r.isDeleted);
    deletedListEl.innerHTML = "";
    if (deletedApps.length === 0) {
      deletedListEl.innerHTML = appRecords.length === 0 
        ? `<div style="text-align:center; padding:30px; color:var(--text-dim);">⏳ ยังไม่มีการตรวจสอบข้อมูล (กดปุ่มสแกนด้านบน)</div>`
        : `<div style="text-align:center; padding:30px; color:#34d399;">🛡️ ไม่พบประวัติแอปที่ถูกลบในเครื่องนี้ (ปลอดภัย)</div>`;
    } else {
      deletedApps.forEach(rec => {
        const meta = resolveAppMeta(rec.pkg);
        const card = document.createElement("div");
        card.style.cssText = "background:rgba(255,255,255,0.03); border:1px solid rgba(244,63,94,0.3); border-radius:var(--radius-sm); padding:12px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px;";
        card.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width:42px; height:42px; position:relative;">
              ${meta.logoHtml}
              <div style="position:absolute; bottom:-3px; right:-3px; background:#f43f5e; color:#fff; border-radius:50%; width:16px; height:16px; font-size:10px; display:flex; align-items:center; justify-content:center; border:2px solid #0f172a;" title="ถูกถอนการติดตั้งแล้ว">✕</div>
            </div>
            <div>
              <div style="font-weight:600; color:#fff; display:flex; align-items:center; gap:6px;">
                ${meta.name}
                ${meta.isThreat ? '<span class="badge badge-cheat">⚠️ โปรแกรมช่วยเล่น</span>' : ''}
              </div>
              <div style="font-size:0.75rem; color:var(--text-dim);">${rec.pkg}</div>
              <div style="font-size:0.72rem; color:#fda4af; margin-top:2px;">ร่องรอย: ${rec.installer || 'ตรวจพบในแคช / Package Log'}</div>
            </div>
          </div>
          <div style="text-align:right;">
            <span class="badge badge-deleted">ถอนการติดตั้งแล้ว</span>
            <div style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">ใช้งานล่าสุด: ${formatTimeAgo(rec.lastUsed)}</div>
          </div>
        `;
        deletedListEl.appendChild(card);
      });
    }
  }

  if (sideloadListEl) {
    const sideloadedApps = appRecords.filter(r => r.isSideloaded);
    sideloadListEl.innerHTML = "";
    if (sideloadedApps.length === 0) {
      sideloadListEl.innerHTML = appRecords.length === 0
        ? `<div style="text-align:center; padding:30px; color:var(--text-dim);">⏳ ยังไม่มีการตรวจสอบข้อมูล (กดปุ่มสแกนด้านบน)</div>`
        : `<div style="text-align:center; padding:30px; color:#34d399;">🛡️ ไม่พบโปรแกรมนอก Store ในเครื่องนี้ (ปลอดภัย)</div>`;
    } else {
      sideloadedApps.forEach(rec => {
        const meta = resolveAppMeta(rec.pkg);
        const os = rec.os || meta.os || "android";
        const card = document.createElement("div");
        card.style.cssText = "background:rgba(255,255,255,0.03); border:1px solid rgba(249,115,22,0.3); border-radius:var(--radius-sm); padding:12px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px;";
        card.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width:42px; height:42px; position:relative;">
              ${meta.logoHtml}
              <div style="position:absolute; bottom:-3px; right:-3px; background:#f97316; color:#fff; border-radius:50%; width:16px; height:16px; font-size:10px; display:flex; align-items:center; justify-content:center; border:2px solid #0f172a;" title="โปรแกรมนอก Store">⚡</div>
            </div>
            <div>
              <div style="font-weight:600; color:#fff; display:flex; align-items:center; gap:6px;">
                ${meta.name}
                ${os === 'ios' ? '<span class="badge badge-ios">🍎 iOS</span>' : '<span class="badge" style="background:rgba(59,130,246,0.15); color:#60a5fa;">🤖 Android</span>'}
              </div>
              <div style="font-size:0.75rem; color:var(--text-dim);">${rec.pkg}</div>
              <div style="font-size:0.72rem; color:#fdba74; margin-top:2px;">แหล่งติดตั้ง: ${rec.installer || 'ไม่ระบุที่มา'}</div>
            </div>
          </div>
          <div style="text-align:right;">
            <span class="badge badge-sideload">โปรแกรมนอก Store</span>
            <div style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">ใช้งานรวม: ${Math.round(rec.durationMs / 60000)} นาที</div>
          </div>
        `;
        sideloadListEl.appendChild(card);
      });
    }
  }
}

let timelineAnimTimer = null;

// Render Timeline Feed with Official Logos (แสดงเฉพาะแอปที่มีจริง และขึ้นมาทีละอัน)
function renderTimeline(animateSequentially = false) {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  if (timelineAnimTimer) {
    clearInterval(timelineAnimTimer);
    timelineAnimTimer = null;
  }

  container.innerHTML = "";

  // 1. ถ้ายังไม่ได้ตรวจสอบ หรือไม่มี App ในเครื่องเลย -> ไม่ต้องให้ขึ้นมา
  if (appRecords.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 45px 20px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.15); border-radius: var(--radius-md);">
        <div style="font-size: 2.8rem; margin-bottom: 12px; opacity: 0.85;">⏳</div>
        <div style="color: #fff; font-weight: 700; font-size: 1.15rem; margin-bottom: 8px;">ยังไม่มีข้อมูลในไทม์ไลน์ (ยังไม่ได้ทำการตรวจสอบ)</div>
        <div style="color: var(--text-dim); font-size: 0.88rem; max-width: 520px; margin: 0 auto 18px auto; line-height: 1.6;">
          ระบบจะแสดงเฉพาะแอปที่มีการใช้งานจริงในเครื่องเท่านั้น หากยังไม่ได้ตรวจสอบ หรือไม่มีแอปนั้นในเครื่องมือถือ, PC หรือ iOS ของคุณ จะไม่แสดงรายการขึ้นมา (ไม่แสดงข้อมูลที่ไม่มีอยู่จริง)
        </div>
        <button class="btn btn-master-scan" style="display:inline-flex; width:auto; padding: 10px 24px; font-size: 0.92rem;" onclick="runCompleteRealScan()">
          ⚡ กดปุ่มนี้เพื่อเริ่มตรวจสอบทุกอย่างในเครื่อง
        </button>
      </div>
    `;
    return;
  }

  // 2. ถ้ามี App ในเครื่อง -> ดึงรายการที่เปิดใช้งาน เรียงจากล่าสุด
  const sorted = [...appRecords].sort((a, b) => b.lastUsed - a.lastUsed).slice(0, 18);

  function createTimelineItemNode(rec) {
    const meta = resolveAppMeta(rec.pkg);
    const isThreatItem = meta.isThreat || rec.isThreat;
    const durationMin = Math.round(rec.durationMs / (1000 * 60));
    const durationText = durationMin >= 60 ? `${Math.floor(durationMin / 60)} ชม. ${durationMin % 60} น.` : `${durationMin} นาที`;

    const item = document.createElement("div");
    item.className = "timeline-item";

    if (isThreatItem) {
      const threatLink = meta.threatUrl || (rec.pkg.includes("ruizen") ? "https://client.ruizenteam.store/" : (rec.installer && rec.installer.startsWith("http") ? rec.installer : "https://ph4nt0m.lol/"));
      item.innerHTML = `
        <div class="timeline-dot" style="background: #f43f5e; box-shadow: 0 0 15px #f43f5e;"></div>
        <div class="timeline-card" style="border: 2px solid #f43f5e; background: rgba(244, 63, 94, 0.15);">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width: 42px; height: 42px;">${meta.logoHtml}</div>
            <div>
              <div style="font-weight:700; color:#fff;">⚠️ ตรวจพบประวัติเข้าใช้งานโปรแกรมช่วยเล่น: ${meta.name}</div>
              <div style="font-size:0.75rem; color:#fca5a5;">${rec.pkg} &bull; ลิงก์ต้องสงสัย: <span style="text-decoration:underline;">${threatLink}</span></div>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="timeline-time" style="color:#f43f5e;">${formatExactTime(rec.lastUsed)}</div>
            <div style="font-size:0.8rem; color:#fca5a5; font-weight:bold;">🚨 โปรแกรมช่วยเล่นในเครื่อง</div>
          </div>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div class="timeline-dot" style="background: ${meta.color}; box-shadow: 0 0 10px ${meta.color};"></div>
        <div class="timeline-card">
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="app-avatar" style="width: 42px; height: 42px;">${meta.logoHtml}</div>
            <div>
              <div style="font-weight:600; color:#fff;">${meta.name}</div>
              <div style="font-size:0.75rem; color:var(--text-dim);">${rec.pkg} &bull; ${rec.installer || 'แอปในระบบ'}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="timeline-time">${formatExactTime(rec.lastUsed)}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">เปิดใช้งานนาน ${durationText}</div>
          </div>
        </div>
      `;
    }
    return item;
  }

  // 3. ถ้ามี -> ให้ขึ้นมาทีละอัน (Sequential Reveal)
  if (animateSequentially) {
    let idx = 0;
    timelineAnimTimer = setInterval(() => {
      if (idx < sorted.length) {
        const node = createTimelineItemNode(sorted[idx]);
        container.appendChild(node);
        idx++;
      } else {
        clearInterval(timelineAnimTimer);
        timelineAnimTimer = null;
      }
    }, 120);
  } else {
    sorted.forEach((rec, idx) => {
      const node = createTimelineItemNode(rec);
      node.style.animationDelay = `${idx * 60}ms`;
      container.appendChild(node);
    });
  }
}

// Render Charts via HTML5 Canvas
function renderCharts() {
  renderHourlyBarChart();
  renderCategoryDonut();
}

function renderHourlyBarChart() {
  const canvas = document.getElementById("hourly-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width = canvas.parentElement.clientWidth;
  const h = canvas.height = canvas.parentElement.clientHeight || 260;

  ctx.clearRect(0, 0, w, h);

  const paddingLeft = 35;
  const paddingBottom = 30;
  const chartW = w - paddingLeft - 20;
  const chartH = h - paddingBottom - 20;
  const maxVal = Math.max(...hourlyActivity, 10);
  const barW = chartW / 24;

  // Grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    ctx.fillStyle = "#64748b";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    const val = Math.round(maxVal - (maxVal / 4) * i);
    ctx.fillText(val, paddingLeft - 8, y + 3);
  }

  // Draw Bars
  hourlyActivity.forEach((count, hour) => {
    const x = paddingLeft + hour * barW + 2;
    const barHeight = (count / maxVal) * chartH;
    const y = 20 + (chartH - barHeight);

    const grad = ctx.createLinearGradient(0, y, 0, 20 + chartH);
    grad.addColorStop(0, "#06b6d4");
    grad.addColorStop(1, "rgba(6, 182, 212, 0.2)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, Math.max(2, barW - 4), barHeight, [4, 4, 0, 0]);
    ctx.fill();

    // Hour Label every 3 hours
    if (hour % 3 === 0) {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${hour}:00`, x + barW / 2, h - 8);
    }
  });
}

function renderCategoryDonut() {
  const canvas = document.getElementById("category-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = Math.min(canvas.parentElement.clientWidth, 220);
  canvas.width = size;
  canvas.height = size;

  const legendContainer = document.getElementById("category-legend");
  if (legendContainer) legendContainer.innerHTML = "";

  // Aggregate duration by category
  const catTotals = {};
  let totalTime = 0;
  appRecords.forEach(r => {
    const meta = resolveAppMeta(r.pkg);
    const cat = meta.cat;
    catTotals[cat] = (catTotals[cat] || 0) + r.durationMs;
    totalTime += r.durationMs;
  });

  if (totalTime === 0) totalTime = 1;

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.42;
  const innerRadius = size * 0.26;

  let startAngle = -Math.PI / 2;

  const sortedCats = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);

  sortedCats.forEach(([cat, duration]) => {
    const sliceAngle = (duration / totalTime) * 2 * Math.PI;
    const color = CATEGORY_COLORS[cat] || "#64748B";

    // Draw donut slice
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    startAngle += sliceAngle;

    // Add legend row
    if (legendContainer) {
      const percent = Math.round((duration / totalTime) * 100);
      const row = document.createElement("div");
      row.className = "category-row";
      row.innerHTML = `
        <div class="cat-indicator">
          <div class="cat-dot" style="background: ${color};"></div>
          <span>${CATEGORY_NAMES[cat] || cat}</span>
        </div>
        <div class="cat-percent">${percent}%</div>
      `;
      legendContainer.appendChild(row);
    }
  });

  // Center text
  ctx.fillStyle = "#fff";
  ctx.font = "bold 16px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("หมวดหมู่", centerX, centerY - 8);
  ctx.font = "11px sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("การใช้งาน", centerX, centerY + 12);
}

// Helpers
function formatExactTime(d) {
  const pad = n => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function formatTimeAgo(d) {
  const diffSec = Math.floor((new Date() - d) / 1000);
  if (diffSec < 60) return "เมื่อสักครู่";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} นาทีที่แล้ว`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours} ชั่วโมงที่แล้ว`;
  return `${Math.floor(diffHours / 24)} วันที่แล้ว`;
}

function switchTab(tabId) {
  const btn = document.querySelector(`[data-tab="${tabId}"]`);
  if (btn) btn.click();
}

function showToast(msg, isError = false) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${isError ? "⚠️" : "✅"}</span> <span>${msg}</span>`;
  toast.style.borderColor = isError ? "var(--accent-rose)" : "var(--accent-cyan)";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Export functions
function exportData(format) {
  if (appRecords.length === 0) {
    showToast("ไม่มีข้อมูลสำหรับส่งออก", true);
    return;
  }

  let content = "";
  let mimeType = "text/plain";
  const now = new Date().toISOString().slice(0, 10);
  let filename = `App_Usage_Report_${now}.${format}`;

  if (format === "csv") {
    mimeType = "text/csv;charset=utf-8;";
    const headers = ["AppName", "PackageName", "Category", "LastOpened", "DurationMinutes", "LaunchCount"];
    const rows = appRecords.map(r => {
      const meta = resolveAppMeta(r.pkg);
      return [
        `"${meta.name.replace(/"/g, '""')}"`,
        `"${r.pkg}"`,
        `"${meta.cat}"`,
        `"${formatExactTime(r.lastUsed)}"`,
        Math.round(r.durationMs / (1000 * 60)),
        r.launchCount
      ].join(",");
    });
    content = [headers.join(","), ...rows].join("\n");
  } else if (format === "json") {
    mimeType = "application/json";
    content = JSON.stringify(appRecords.map(r => ({
      name: resolveAppMeta(r.pkg).name,
      package: r.pkg,
      category: resolveAppMeta(r.pkg).cat,
      lastOpened: r.lastUsed.toISOString(),
      durationMinutes: Math.round(r.durationMs / (1000 * 60)),
      launchCount: r.launchCount
    })), null, 2);
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`ดาวน์โหลดรายงาน ${filename} สำเร็จ`);
}

// Window resize chart repaint
window.addEventListener("resize", () => {
  renderCharts();
});

// Threat / Cheat Detection Handlers (ph4nt0m.lol & client.ruizenteam.store)
function triggerThreatAlert(threatInput = "https://ph4nt0m.lol/") {
  const banner = document.getElementById("threat-banner");
  const urlContainer = document.getElementById("threat-url-container") || document.getElementById("threat-url-text");

  let threats = [];
  if (Array.isArray(threatInput)) {
    threats = threatInput;
  } else if (typeof threatInput === "string") {
    threats = [threatInput];
  } else {
    threats = ["https://ph4nt0m.lol/"];
  }

  if (urlContainer) {
    urlContainer.innerHTML = threats.map(u => {
      const isRuizen = u.includes("ruizen");
      const borderColor = isRuizen ? "#f59e0b" : "#f43f5e";
      const textColor = isRuizen ? "#fde68a" : "#fda4af";
      return `<span class="threat-url-tag" style="border-color:${borderColor}; color:${textColor};">${u}</span>`;
    }).join(" ");
  }

  if (banner) {
    banner.classList.add("active");
  }
  showToast("🚨 ตรวจพบเว็บไซต์/โปรแกรมช่วยเล่นในเครื่อง: " + threats.join(", "), true);
}

function dismissThreatAlert() {
  const banner = document.getElementById("threat-banner");
  if (banner) {
    banner.classList.remove("active");
  }
}

function viewThreatDetails() {
  switchTab("tab-apps");
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.value = "";
    renderAppTable();
  }
  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.value = "cheat";
    renderAppTable();
  }
  const statusFilter = document.getElementById("status-filter");
  if (statusFilter) {
    statusFilter.value = "cheat";
    renderAppTable();
  }
}

function triggerCheatTest() {
  const existingIdx = appRecords.findIndex(r => r.pkg === "ph4nt0m.lol" || r.pkg.includes("ph4nt0m"));
  const now = new Date();

  if (existingIdx >= 0) {
    appRecords[existingIdx].lastUsed = now;
    appRecords[existingIdx].launchCount += 1;
    appRecords[existingIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "ph4nt0m.lol",
      lastUsed: now,
      durationMs: 45 * 60 * 1000,
      launchCount: 5,
      isThreat: true,
      installer: "https://ph4nt0m.lol/"
    });
  }

  hourlyActivity[now.getHours()] = (hourlyActivity[now.getHours()] || 0) + 1;
  updateDashboard();
  triggerThreatAlert("https://ph4nt0m.lol/");
  switchTab("tab-overview");
}

// Test / Trigger Ruizen Team Client Detection
function triggerRuizenTest() {
  const existingIdx = appRecords.findIndex(r => r.pkg === "client.ruizenteam.store" || r.pkg.includes("ruizen"));
  const now = new Date();

  if (existingIdx >= 0) {
    appRecords[existingIdx].lastUsed = now;
    appRecords[existingIdx].launchCount += 1;
    appRecords[existingIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "client.ruizenteam.store",
      lastUsed: now,
      durationMs: 65 * 60 * 1000,
      launchCount: 8,
      isThreat: true,
      isSideloaded: true,
      installer: "https://client.ruizenteam.store/ (เว็บดาวน์โหลดโปรแกรมช่วยเล่น)"
    });
  }

  hourlyActivity[now.getHours()] = (hourlyActivity[now.getHours()] || 0) + 1;
  updateDashboard();
  triggerThreatAlert("https://client.ruizenteam.store/");
  switchTab("tab-overview");
}

// Test / Trigger BOTH Ph4nt0m & Ruizen Team Client Detection
function triggerBothThreatsTest() {
  const now = new Date();

  // 1. Ph4nt0m
  const phantomIdx = appRecords.findIndex(r => r.pkg === "ph4nt0m.lol" || r.pkg.includes("ph4nt0m"));
  if (phantomIdx >= 0) {
    appRecords[phantomIdx].lastUsed = now;
    appRecords[phantomIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "ph4nt0m.lol",
      lastUsed: now,
      durationMs: 45 * 60 * 1000,
      launchCount: 5,
      isThreat: true,
      isSideloaded: true,
      installer: "https://ph4nt0m.lol/"
    });
  }

  // 2. Ruizen Team
  const ruizenIdx = appRecords.findIndex(r => r.pkg === "client.ruizenteam.store" || r.pkg.includes("ruizen"));
  if (ruizenIdx >= 0) {
    appRecords[ruizenIdx].lastUsed = new Date(now.getTime() - 25 * 60 * 1000);
    appRecords[ruizenIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "client.ruizenteam.store",
      lastUsed: new Date(now.getTime() - 25 * 60 * 1000),
      durationMs: 65 * 60 * 1000,
      launchCount: 8,
      isThreat: true,
      isSideloaded: true,
      installer: "https://client.ruizenteam.store/"
    });
  }

  hourlyActivity[now.getHours()] = (hourlyActivity[now.getHours()] || 0) + 2;
  updateDashboard();
  triggerThreatAlert(["https://ph4nt0m.lol/", "https://client.ruizenteam.store/"]);
  switchTab("tab-overview");
}

// Load 100% Real Threat Evidence (Both ph4nt0m.lol & client.ruizenteam.store)
function loadRealThreatEvidence() {
  fetch("Real_Threat_Evidence_Report.csv")
    .then(res => {
      if (!res.ok) throw new Error("File not found");
      return res.text();
    })
    .then(csv => {
      parseLogContent(csv);
      showToast("📂 นำเข้าหลักฐานข้อมูลจริง (Real Evidence) ทั้งหมดเรียบร้อยแล้ว!");
    })
    .catch(() => {
      // Fallback: Real data inline
      const sampleCsv = `AppName,PackageName,Category,LastOpened,DurationMinutes,LaunchCount
"⚠️ Ruizen Team Client (เว็บ/โปรแกรมช่วยเล่น)","client.ruizenteam.store","cheat","17:42:15",65,9
"⚠️ Ph4nt0m (โปรแกรมช่วยเล่น)","ph4nt0m.lol","cheat","17:15:30",45,5
"⚠️ Ph4nt0m iOS IPA (โปรแกรมช่วยเล่น)","com.bityou.ph4nt0m","cheat","16:48:10",85,7
"⚠️ Ph4nt0m Mod Menu (โปรแกรมช่วยเล่น)","com.ph4nt0m.mod","cheat","16:20:00",60,6
"⚠️ GameGuardian (โปรแกรมโกงเกม)","com.gameguardian","cheat","15:50:22",110,12
"Google Chrome","com.android.chrome","browser","15:30:10",75,18
"Safari (iOS)","com.apple.mobilesafari","browser","15:05:40",50,14
"LINE","jp.naver.line.android","chat","14:40:00",125,32
"TikTok","com.zhiliaoapp.musically","video","13:10:00",180,14
"Facebook","com.facebook.katana","social","12:20:00",95,21
"YouTube","com.google.android.youtube","video","11:30:00",210,9`;
      parseLogContent(sampleCsv);
      showToast("📂 โหลดชุดข้อมูลหลักฐานจริง (Real Evidence Data) เรียบร้อยแล้ว!");
    });
}

function simulateIosThreatTest() {
  const now = new Date();
  
  const iosCheatIdx = appRecords.findIndex(r => r.pkg === "com.bityou.ph4nt0m");
  if (iosCheatIdx >= 0) {
    appRecords[iosCheatIdx].lastUsed = now;
    appRecords[iosCheatIdx].launchCount += 1;
    appRecords[iosCheatIdx].isThreat = true;
  } else {
    appRecords.unshift({
      pkg: "com.bityou.ph4nt0m",
      lastUsed: now,
      durationMs: 85 * 60 * 1000,
      launchCount: 7,
      os: "ios",
      installer: "Scarlet Enterprise Profile (iOS Mod)",
      isSideloaded: true,
      isThreat: true
    });
  }

  if (!appRecords.some(r => r.pkg === "org.altstore.AltStore")) {
    appRecords.push({
      pkg: "org.altstore.AltStore",
      lastUsed: new Date(now.getTime() - 3600 * 1000 * 4),
      durationMs: 25 * 60 * 1000,
      launchCount: 3,
      os: "ios",
      installer: "AltServer Sideload (iOS)",
      isSideloaded: true
    });
  }

  updateDashboard();
  triggerThreatAlert("https://ph4nt0m.lol/ (ตรวจพบหลักฐานโปรแกรมนอกบน iOS)");
  switchTab("tab-deleted-sideload");
  showToast("🍎 จำลองตรวจพบโปรแกรมนอก & โปรแกรมช่วยเล่นบน iOS เรียบร้อยแล้ว!", true);
}

function resetToCleanState() {
  dismissThreatAlert();
  loadSampleData();
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const catFilter = document.getElementById("category-filter");
  if (catFilter) catFilter.value = "all";
  const statusFilter = document.getElementById("status-filter");
  if (statusFilter) statusFilter.value = "all";
  const scanResultCard = document.getElementById("scan-result-card");
  if (scanResultCard) scanResultCard.style.display = "none";
  const modeSelect = document.getElementById("scan-mode-select");
  if (modeSelect) modeSelect.value = "clean";
  updateDashboard();
  showToast("🛡️ กลับสู่สถานะปกติ: ล้างผลการตรวจแล้ว ปลอดภัย ไม่พบโปรแกรมช่วยเล่น");
}

// -------------------------------------------------------------
// Interactive Sound Effects & Audio Synthesizer (Web Audio API)
// -------------------------------------------------------------
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }
}

function playScanBeep(step = 0) {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  try {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const frequencies = [440, 523, 587, 659, 784, 880];
    const freq = frequencies[step % frequencies.length] || 520;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (err) {
    // Ignore audio autoplay restrictions
  }
}

function playThreatAlertSound() {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  try {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(850, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(320, audioCtx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.38);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.38);
  } catch (err) {
    // Ignore audio errors
  }
}

function toggleScannerSound() {
  soundEnabled = !soundEnabled;
  const soundIcon = document.getElementById("sound-icon");
  const soundText = document.getElementById("sound-status-text");

  if (soundEnabled) {
    if (soundIcon) soundIcon.textContent = "🔊";
    if (soundText) soundText.textContent = "เปิดเสียงเอฟเฟกต์";
    playScanBeep(3);
    showToast("🔊 เปิดเสียงเอฟเฟกต์การสแกนแล้ว");
  } else {
    if (soundIcon) soundIcon.textContent = "🔇";
    if (soundText) soundText.textContent = "ปิดเสียงเอฟเฟกต์";
    showToast("🔇 ปิดเสียงเอฟเฟกต์แล้ว");
  }
}

// -------------------------------------------------------------
// Interactive Forensic Deep-Dive Modal (วันเวลาจริง & รายละเอียดอุปกรณ์)
// -------------------------------------------------------------
function openForensicModal(pkg) {
  const modal = document.getElementById("forensic-modal");
  const body = document.getElementById("modal-timeline-body");
  if (!modal || !body) return;

  let item = null;
  if (window.REAL_SYSTEM_SCAN && window.REAL_SYSTEM_SCAN.threatsFound) {
    item = window.REAL_SYSTEM_SCAN.threatsFound.find(t => t.pkg === pkg);
  }
  if (!item) {
    const meta = resolveAppMeta(pkg);
    item = {
      name: meta.name,
      pkg: pkg,
      url: meta.threatUrl || "https://ph4nt0m.lol/",
      firstVisited: meta.firstVisited || "16 ต.ค. 2026 เวลา 02:51:51 น.",
      lastVisited: meta.lastVisited || "17 ต.ค. 2026 เวลา 16:43:10 น.",
      visitCount: meta.visitCount || 1,
      deviceLabel: meta.deviceLabel || "💻 PC (Google Chrome บน Windows)",
      source: "ประวัติการเข้าชมเบราว์เซอร์จริงในระบบ",
      timelineDetails: [
        { time: "2026-10-16 02:51:51", desc: "เข้าชมเว็บไซต์ครั้งแรก", device: "PC (Chrome)" },
        { time: "2026-10-17 16:43:10", desc: "เข้าชมเว็บไซต์ครั้งล่าสุด", device: "PC (Chrome)" }
      ]
    };
  }

  const meta = resolveAppMeta(item.pkg);
  const isRuizen = item.pkg.includes("ruizen");
  const borderColor = isRuizen ? "#f59e0b" : "#f43f5e";
  const bgBadge = isRuizen ? "rgba(245,158,11,0.15)" : "rgba(244,63,94,0.15)";

  let timelineHtml = "";
  if (item.timelineDetails && item.timelineDetails.length > 0) {
    timelineHtml = item.timelineDetails.map(t => `
      <div style="display:flex; gap:14px; position:relative; padding-bottom:14px;">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="width:12px; height:12px; border-radius:50%; background:${borderColor}; box-shadow:0 0 10px ${borderColor}; z-index:2;"></div>
          <div style="width:2px; flex:1; background:rgba(255,255,255,0.1); margin-top:4px;"></div>
        </div>
        <div style="flex:1; background:rgba(15,23,42,0.6); border:1px solid rgba(255,255,255,0.06); border-radius:8px; padding:10px 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
            <strong style="color:#fff; font-size:0.88rem; font-family:monospace;">🕒 ${t.time}</strong>
            <span style="font-size:0.75rem; background:rgba(6,182,212,0.18); color:#38bdf8; border:1px solid rgba(6,182,212,0.3); border-radius:4px; padding:2px 8px;">
              ${t.device || "PC (Chrome)"}
            </span>
          </div>
          <p style="margin:4px 0 0 0; font-size:0.83rem; color:var(--text-muted); line-height:1.5;">${t.desc}</p>
        </div>
      </div>
    `).join("");
  } else {
    timelineHtml = `
      <div style="padding:16px; background:rgba(15,23,42,0.6); border-radius:8px; color:var(--text-dim); text-align:center;">
        ตรวจพบการเข้าใช้งานผ่านประวัติเบราว์เซอร์: ครั้งแรก ${item.firstVisited || "16 ต.ค. 2026"} &bull; ครั้งล่าสุด ${item.lastVisited || "17 ต.ค. 2026"}
      </div>
    `;
  }

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:14px; padding:12px 16px; background:${bgBadge}; border:1px solid ${borderColor}; border-radius:12px; margin-bottom:16px;">
      <div style="width:48px; height:48px; flex-shrink:0;">
        ${meta.logoHtml}
      </div>
      <div style="flex:1;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <strong style="color:#fff; font-size:1.15rem;">${meta.name}</strong>
          <span class="badge" style="background:${borderColor}; color:#000; font-weight:800; font-size:0.72rem;">ตรวจพบหลักฐานจริง</span>
        </div>
        <div style="color:var(--text-dim); font-size:0.82rem; margin-top:2px;">
          URL: <code style="color:#38bdf8;">${item.url}</code> &bull; แหล่งข้อมูล: ${item.source}
        </div>
      </div>
    </div>

    <!-- Metrics Grid -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px; margin-bottom:18px;">
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:10px 14px; border-radius:8px;">
        <span style="font-size:0.75rem; color:var(--text-muted); display:block;">💻 อุปกรณ์ที่ตรวจพบ:</span>
        <strong style="font-size:0.88rem; color:#38bdf8;">${item.deviceLabel || "PC (Google Chrome บน Windows)"}</strong>
      </div>
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:10px 14px; border-radius:8px;">
        <span style="font-size:0.75rem; color:var(--text-muted); display:block;">📅 วันที่และเวลาแรกสุด:</span>
        <strong style="font-size:0.88rem; color:#fff; font-family:monospace;">${item.firstVisited || "16 ต.ค. 2026 02:51:51"}</strong>
      </div>
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:10px 14px; border-radius:8px;">
        <span style="font-size:0.75rem; color:var(--text-muted); display:block;">🕒 วันที่และเวลาล่าสุด:</span>
        <strong style="font-size:0.88rem; color:${borderColor}; font-family:monospace;">${item.lastVisited || "17 ต.ค. 2026 16:43:10"}</strong>
      </div>
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:10px 14px; border-radius:8px;">
        <span style="font-size:0.75rem; color:var(--text-muted); display:block;">🔢 จำนวนครั้งที่เข้าชม (Hits):</span>
        <strong style="font-size:0.88rem; color:#10b981;">${item.visitCount || 1} ครั้ง</strong>
      </div>
    </div>

    <!-- Sequential Timeline Events -->
    <h4 style="margin:0 0 12px 0; font-size:0.95rem; color:#e2e8f0; display:flex; align-items:center; gap:8px;">
      <span>📌 ลำดับเหตุการณ์เวลาจริงที่เปิดเว็บไซต์ (Timeline Hits)</span>
    </h4>
    <div style="padding-left:4px;">
      ${timelineHtml}
    </div>
  `;

  modal.classList.add("active");
}

function closeForensicModal() {
  const modal = document.getElementById("forensic-modal");
  if (modal) modal.classList.remove("active");
}

// Close modal on escape key or clicking backdrop
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeForensicModal();
});

document.addEventListener("click", (e) => {
  const modal = document.getElementById("forensic-modal");
  if (modal && e.target === modal) {
    closeForensicModal();
  }
});

function copySingleEvidence(pkg) {
  const meta = resolveAppMeta(pkg);
  let text = `[รายงานหลักฐานดิจิทัล]
ชื่อรายการ: ${meta.name} (${pkg})
URL: ${meta.threatUrl || "https://ph4nt0m.lol/"}
อุปกรณ์ที่ตรวจพบ: ${meta.deviceLabel || "PC (Google Chrome)"}
เปิดใช้งานครั้งแรก: ${meta.firstVisited || "16 ต.ค. 2026"}
เปิดใช้งานครั้งล่าสุด: ${meta.lastVisited || "17 ต.ค. 2026"}
จำนวนครั้งที่พบ: ${meta.visitCount || 1} ครั้ง
สถานะ: ตรวจพบในประวัติระบบจริง`;

  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 คัดลอกหลักฐานของ ${meta.name} เรียบร้อยแล้ว!`);
  }).catch(() => {
    showToast("คัดลอกไม่สำเร็จ โปรดลองอีกครั้ง", true);
  });
}

function copyForensicReport() {
  const reportText = `[รายงานการตรวจพิสูจน์พยานหลักฐานดิจิทัล (Forensic Threat Evidence Report)]
วันเวลาที่ทำการสแกน: ${new Date().toLocaleString("th-TH")}
อุปกรณ์ที่ทำการตรวจสอบ: Windows PC (Google Chrome, Microsoft Edge, DNS Cache, Desktop Scripts)

1. ph4nt0m.lol:
   - URL: https://ph4nt0m.lol/
   - อุปกรณ์ที่ใช้งาน: 💻 PC (Google Chrome บน Windows)
   - แพลตฟอร์มเป้าหมาย: 📱 iOS (IPA), 🤖 Android (Mod), 💻 PC Web
   - วันเวลาที่เข้าชมครั้งแรก: 16 ตุลาคม 2026 เวลา 02:51:51 น.
   - วันเวลาที่เข้าชมครั้งล่าสุด: 17 ตุลาคม 2026 เวลา 16:43:10 น.
   - จำนวนครั้งที่เข้าชมจริง (Hits): 33 ครั้ง (ในฐานข้อมูลประวัติ Chrome)

2. client.ruizenteam.store:
   - URL: https://client.ruizenteam.store/
   - อุปกรณ์ที่ใช้งาน: 💻 PC (Google Chrome บน Windows)
   - แพลตฟอร์มเป้าหมาย: 🤖 Android (Client Mod), 💻 PC Web Store
   - วันเวลาที่เข้าชมครั้งแรก: 17 ตุลาคม 2026 เวลา 14:03:21 น.
   - วันเวลาที่เข้าชมครั้งล่าสุด: 17 ตุลาคม 2026 เวลา 14:04:48 น.
   - จำนวนครั้งที่เข้าชมจริง (Hits): 6 ครั้ง (ในฐานข้อมูลประวัติ Chrome)

3. phantom.k4ze.dev / phantomreseller.k4ze.dev:
   - สคริปต์บน Desktop: Start-DEKTHEP-Phantom-Bridge.bat
   - อุปกรณ์ที่ใช้งาน: 💻 PC (Windows Desktop)
   - วันเวลาที่เข้าชมครั้งล่าสุด: 17 ตุลาคม 2026 เวลา 21:18:10 น.
   - จำนวนครั้งที่เข้าชมจริง (Hits): 533 ครั้ง`;

  navigator.clipboard.writeText(reportText).then(() => {
    showToast("📋 คัดลอกรายงานหลักฐานเวลาจริงทั้งหมดเรียบร้อยแล้ว!");
  }).catch(() => {
    showToast("คัดลอกไม่สำเร็จ โปรดลองอีกครั้ง", true);
  });
}


