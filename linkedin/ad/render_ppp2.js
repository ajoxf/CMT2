const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();
for (const n of ['breakout-confirmed','new-listing','signal-confirmed']) for (const [pre,H] of [['ppp2-',1350],['ppp2-sq-',1080]]) {
  const p=await b.newPage({viewport:{width:1080,height:H},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+`/ad-${pre}${n}.html`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  const r=await p.evaluate(()=>{const g=s=>document.querySelector(s).getBoundingClientRect();return {chartBottom:Math.round(g('.chart').bottom),statement:[Math.round(g('.statement').top),Math.round(g('.statement').bottom)],foot:Math.round(g('.foot').top),h1:Math.round(g('h1').right)}});
  console.log(pre+n, JSON.stringify(r));
  await p.screenshot({path:`whatsapp/FinCoursa-CMT-PPP-${pre==='ppp2-'?'portrait':'square'}-${n}.jpg`,type:'jpeg',quality:90});
}
await b.close();})();
