
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const out={};
for (const n of ["higher-high", "buy-the-dip", "breakout", "signal"]) { const p=await b.newPage({viewport:{width:600,height:800},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+'/email/hero-'+n+'.html',{waitUntil:'networkidle'}); await p.evaluate(()=>document.fonts.ready);
  const h=await p.evaluate(()=>({hero:Math.ceil(document.querySelector('.hero').getBoundingClientRect().height), head:Math.round(document.querySelector('.top').getBoundingClientRect().bottom+12)}));
  await p.locator('.hero').screenshot({path:'email/hero-'+n+'.png'}); out[n]=h; }
console.log(JSON.stringify(out)); await b.close();})();
