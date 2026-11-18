const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();
for (const n of ['breakout-confirmed','new-listing','signal-confirmed']) {
  const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+`/ad-ppp-${n}.html`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  console.log(n, JSON.stringify(await p.evaluate(()=>({sub:document.querySelector('.sub').getBoundingClientRect().right, fine:document.querySelector('.fine').getBoundingClientRect().bottom}))));
  await p.screenshot({path:`whatsapp/FinCoursa-CMT-Prep-Provider-${n}.jpg`,type:'jpeg',quality:90});
  const q=await b.newPage({viewport:{width:1080,height:1350}});
  await q.goto('file://'+process.cwd()+`/ad-ppp-${n}.html`,{waitUntil:'networkidle'});await q.evaluate(()=>document.fonts.ready);
  await q.pdf({path:`FinCoursa-CMT-Prep-Provider-${n}.pdf`,width:'1080px',height:'1350px',printBackground:true,pageRanges:'1'});
}
await b.close();})();
