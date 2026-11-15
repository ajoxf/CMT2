const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();
for (const w of [600, 375]) {
  const p=await b.newPage({viewport:{width:w,height:900},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+'/email/email-higher-high.html',{waitUntil:'networkidle'});
  await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
  const r=await p.evaluate(()=>{const imgs=[...document.images].map(i=>i.getBoundingClientRect());
    const left=document.images[1].getBoundingClientRect(), right=document.images[2].getBoundingClientRect();
    const hit=(x,y)=>document.elementFromPoint(x,y)?.closest('a')?.getAttribute('href');
    // the visible buttons sit in the upper half of the button slices
    return {gaps:imgs.slice(1).map((r,i)=>Math.round((r.top-(i==1?imgs[0].bottom:imgs[i].bottom))*10)/10), heights:imgs.map(r=>Math.round(r.height)),
      free:hit(left.left+left.width/2, left.top+left.height*0.35), buy:hit(right.left+right.width/2, right.top+right.height*0.35)};});
  console.log(w, JSON.stringify(r));
  await p.screenshot({path:`/tmp/claude-0/-home-user/33cdf40c-2a7c-5c28-9bfd-f289d57975a5/scratchpad/email-${w}.png`,fullPage:true});
  if (w===600) for (const k of ['free','buy']) { const q=await b.newPage(); await q.goto(r[k].replace(/&amp;/g,'&'),{waitUntil:'networkidle'}); console.log(k,'->',q.url().replace('https://fincoursa.com',''),'|',(await q.title())); await q.close(); }
}
await b.close();})();
