@ECHO OFF
echo Dang cai dat file can thiet
if not exist node_modules\ (
	npm install
)
echo Da cai dat file can thiet
set /p username=Ten dang nhap:
set /p password=Mat khau:
node FTULogin.js %username% %password%
PAUSE