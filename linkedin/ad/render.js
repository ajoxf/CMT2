const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
await p.goto('file://'+process.cwd()+'/ad.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
console.log('lowest bottom:',await p.evaluate(()=>Math.max(...[...document.querySelectorAll('.ad *')].map(e=>e.getBoundingClientRect().bottom))));
await p.screenshot({path:'FinCoursa-CMT-L2-QBank-ad.jpg',type:'jpeg',quality:90});await b.close();})();
