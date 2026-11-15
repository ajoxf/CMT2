
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const out={};
for (const n of ["higher-high", "buy-the-dip", "breakout", "signal"]) for (const m of ['d','m']) { const w = m==='m'?400:720; const p=await b.newPage({viewport:{width:w,height:800},deviceScaleFactor:m==='m'?3:2});
  await p.goto('file://'+process.cwd()+'/email/hero-'+m+'-'+n+'.html',{waitUntil:'networkidle'}); await p.evaluate(()=>document.fonts.ready);
  out[n+'-'+m]=await p.evaluate(()=>Math.round(document.querySelector('.top').getBoundingClientRect().bottom+12));
  await p.locator('.hero').screenshot({path:'email/hero-'+m+'-'+n+'.png'}); }
console.log(JSON.stringify(out)); await b.close();})();
