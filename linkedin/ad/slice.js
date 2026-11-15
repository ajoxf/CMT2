const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const out={};
for (const n of ['higher-high','buy-the-dip','breakout','signal']) {
  const p=await b.newPage({viewport:{width:1080,height:1350}});
  await p.goto('file://'+process.cwd()+`/ad-${n}.html`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  out[n]=await p.evaluate(()=>{const c=[...document.querySelectorAll('.cta .c')].map(e=>e.getBoundingClientRect());const line=document.querySelector('.cta').getBoundingClientRect();return {top:Math.round(line.top+1), bottom:Math.round(Math.max(...c.map(r=>r.bottom))+8)};});
}
console.log(JSON.stringify(out));await b.close();})();
