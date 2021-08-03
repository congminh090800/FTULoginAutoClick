const puppeteer = require("puppeteer");

(async () => {
    const url = "http://ftugate.ftu.edu.vn/default.aspx?page=gioithieu&fbclid=IwAR3bbFbRIAxVVSuZuDX1NR6VC_H10NKwqFIeUIeHRTMh8dYUtyDysGH5vAw";
    const browser = await puppeteer.launch(
        {
          headless: false, //defaults to true 
          defaultViewport: null, //Defaults to an 800x600 viewport
          args:['--start-maximized' ]
        });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });
    while(true) {
        await page.type('input[id="ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_txtTaiKhoa"]', '2011530029');
        await page.type('input[id="ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_txtMatKhau"]', '245417190');
        await page.click('input[id="ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_btnDangNhap"]', {delay: 500});
        await page.waitForNavigation({
            waitUntil: 'networkidle2',
        }) 
        let result = await page.evaluate( async () => {
            const failed = document.getElementById("ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_lblError");
            document.getElementById("ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_txtTaiKhoa").value = "";
            document.getElementById("ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_txtMatKhau").value = "";
            if (failed) {
                return false;
            }
        });
        if (result) {
            break;
        }
    }
    const chiOngNauPage = await browser.newPage();
    const chiOngNau = "https://www.youtube.com/watch?v=60SAgs1z7HU"
    await chiOngNauPage.goto(chiOngNau);
})();