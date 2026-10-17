@echo off
chcp 65001 >nul
title ระบบตรวจสอบประวัติและโปรแกรมช่วยเล่นในเครื่อง (Deep Scan)
echo ========================================================
echo  กำลังสแกนประวัติการใช้งานจริงภายในเครื่อง...
echo  เป้าหมาย: ph4nt0m.lol ^& client.ruizenteam.store
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scan_system.ps1"
start "" "%~dp0index.html"
