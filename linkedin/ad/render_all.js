const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();
for (const n of ['higher-high','buy-the-dip','breakout','signal']) {
  const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+`/ad-${n}.html`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  const r=await p.evaluate(()=>({h1:document.querySelector('h1').getBoundingClientRect().right, gap:document.querySelector('.cta').getBoundingClientRect().top - Math.max(...[...document.querySelectorAll('.perk p')].map(e=>e.getBoundingClientRect().bottom))}));
  console.log(n, JSON.stringify(r));
  await p.screenshot({path:`FinCoursa-CMT-L2-QBank-ad-${n}.jpg`,type:'jpeg',quality:90});
  const q=await b.newPage({viewport:{width:1080,height:1350}});
  await q.goto('file://'+process.cwd()+`/ad-${n}.html`,{waitUntil:'networkidle'});await q.evaluate(()=>document.fonts.ready);
  await q.pdf({path:`FinCoursa-CMT-L2-QBank-ad-${n}.pdf`,width:'1080px',height:'1350px',printBackground:true,pageRanges:'1'});
}
await b.close();})();
