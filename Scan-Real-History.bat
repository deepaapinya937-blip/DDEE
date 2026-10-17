@echo off
chcp 65001 >nul
title ตรวจสอบประวัติการเข้าเว็บจริง (ph4nt0m.lol & client.ruizenteam.store)
echo ========================================================
echo  เริ่มการสแกนประวัติจริงจากเบราว์เซอร์ และระบบในเครื่อง
echo  เป้าหมาย: https://ph4nt0m.lol/
echo          https://client.ruizenteam.store/
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scan_history.ps1"
pause
