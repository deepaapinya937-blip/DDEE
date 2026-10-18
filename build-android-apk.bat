@echo off
chcp 65001 >nul
title เครื่องมือแปลงเป็น Application มือถือ (Mobile App Builder)
color 0b
cls
echo ==============================================================================
echo    📱 เครื่องมือสร้าง Application บนมือถือ (Mobile App Packaging Guide)
echo ==============================================================================
echo.
echo  ระบบนี้ถูกออกแบบให้เป็น Mobile Application ได้ 2 รูปแบบ:
echo.
echo  [วิธีที่ 1] ติดตั้งทันทีผ่านมือถือ (PWA - ไม่ต้องเขียนโค้ดเพิ่ม)
echo   1. เปิดเว็บไซต์นี้บนมือถือ (Android หรือ iPhone)
echo   2. บน Android: กดปุ่ม "📲 ติดตั้งแอปบนมือถือ" ด้านบน หรือกดเมนู Chrome แล้วเลือก "ติดตั้งแอป"
echo   3. บน iPhone: กดปุ่มแชร์ (Share) แล้วเลือก "เพิ่มไปยังหน้าจอโฮม (Add to Home Screen)"
echo   ^> จะได้ไอคอนแอปบนหน้าจอมือถือทันที เปิดใช้งานเต็มจอเสมือนแอปแท้ 100%%
echo.
echo ------------------------------------------------------------------------------
echo  [วิธีที่ 2] บิลด์เป็นไฟล์ APK สำหรับ Android (ผ่าน Capacitor)
echo ------------------------------------------------------------------------------
echo   หากเครื่องของคุณมี Node.js และ Android SDK/Studio ติดตั้งอยู่แล้ว:
echo.
echo   คำสั่งบิลด์:
echo   1) npm init -y
echo   2) npm install @capacitor/core @capacitor/cli @capacitor/android
echo   3) npx cap init "App Inspector" "com.security.appinspector" --web-dir "."
echo   4) npx cap add android
echo   5) npx cap open android
echo.
echo ==============================================================================
pause
