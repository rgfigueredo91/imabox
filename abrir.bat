@echo off
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --user-data-dir="%~dp0chrome-temp" "%~dp0garzon.html"
