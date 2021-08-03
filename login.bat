@ECHO OFF
if exist node_modules\ (
	echo Da cai dat
	node FTULogin.js
) else (
	echo Dang cai dat file can thiet
	npm install
	node FTULogin.js
)
PAUSE