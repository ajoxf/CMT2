const { chromium } = require('playwright');
const file = process.argv[2];
(async()=>{const b=await chromium.launch();
for (const w of [600, 375]) {
  const p=await b.newPage({viewport:{width:w,height:900},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+'/'+file,{waitUntil:'networkidle'});
  await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
  const r=await p.evaluate(()=>{const R=[...document.images].map(i=>i.getBoundingClientRect());
    const hit=(rc)=>document.elementFromPoint(rc.left+rc.width/2, rc.top+rc.height*0.35)?.closest('a')?.getAttribute('href');
    return {seams:[R[1].top-R[0].bottom, R[2].top-R[1].bottom, R[3].top-R[1].bottom, R[4].top-R[2].bottom].map(x=>Math.round(x*10)/10),
      sideBySide: Math.round(R[3].left-R[2].right), header:hit(R[0]), body:hit(R[1]), free:hit(R[2]), buy:hit(R[3])};});
  console.log(w, JSON.stringify(r));
  await p.screenshot({path:`/tmp/claude-0/-home-user/33cdf40c-2a7c-5c28-9bfd-f289d57975a5/scratchpad/email-${w}.png`,fullPage:true});
  if (w===600) for (const k of ['header','free','buy']) { const q=await b.newPage(); await q.goto(r[k].replace(/&amp;/g,'&'),{waitUntil:'networkidle'}); console.log(' ',k,'->',q.url().replace('https://fincoursa.com','').slice(0,110)); await q.close(); }
}
await b.close();})();
