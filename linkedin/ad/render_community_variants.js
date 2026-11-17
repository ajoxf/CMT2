const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();
for (const n of ['zero-cost-basis','free-float','first-candles']) {
  const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+`/ad-community-${n}.html`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  console.log(n, await p.evaluate(()=>document.querySelector('h1').getBoundingClientRect().right));
  await p.screenshot({path:`whatsapp/FinCoursa-CMT-Level-II-free-sample-${n}.jpg`,type:'jpeg',quality:90});
  const q=await b.newPage({viewport:{width:1080,height:1350}});
  await q.goto('file://'+process.cwd()+`/ad-community-${n}.html`,{waitUntil:'networkidle'});await q.evaluate(()=>document.fonts.ready);
  await q.pdf({path:`FinCoursa-CMT-L2-QBank-ad-free-sample-${n}.pdf`,width:'1080px',height:'1350px',printBackground:true,pageRanges:'1'});
}
await b.close();})();
