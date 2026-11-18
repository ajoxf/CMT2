const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();
for (const [n,H] of [['portrait',1350],['square',1080]]) {
  const p=await b.newPage({viewport:{width:1080,height:H},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+`/ad-ppp3-${n}.html`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  console.log(n, await p.evaluate(()=>JSON.stringify({fine:Math.round(document.querySelector('.fine').getBoundingClientRect().bottom), thanks:Math.round(document.querySelector('.thanks').getBoundingClientRect().bottom), foot:Math.round(document.querySelector('.foot').getBoundingClientRect().top)})));
  await p.screenshot({path:`whatsapp/FinCoursa-CMT-New-Listing-${n}.jpg`,type:'jpeg',quality:92});
  const q=await b.newPage({viewport:{width:1080,height:H}});
  await q.goto('file://'+process.cwd()+`/ad-ppp3-${n}.html`,{waitUntil:'networkidle'});await q.evaluate(()=>document.fonts.ready);
  await q.pdf({path:`FinCoursa-CMT-New-Listing-${n}.pdf`,width:'1080px',height:H+'px',printBackground:true,pageRanges:'1'});
}
await b.close();})();
