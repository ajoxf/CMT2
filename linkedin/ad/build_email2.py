"""Email version of the ad: a hero image drawn at email width (600px, rendered 2x) plus live HTML text and buttons."""
import re, subprocess, json
from PIL import Image

U = "https://ifmpyoebramjefhpxqjl.supabase.co/storage/v1/object/public/course-images/site/ads/email"
VARIANTS = ["higher-high", "buy-the-dip", "breakout", "signal"]

HERO_CSS = """
* { box-sizing:border-box; margin:0; padding:0; }
body { width:720px; background:#000; font-family:"Satoshi",system-ui,sans-serif; color:#fff; }
.hero { position:relative; width:720px; padding:28px 36px 6px; overflow:hidden; }
.bg { position:absolute; inset:0; background:url(../bg.jpg) center 30%/cover; filter:saturate(.7) brightness(.9); }
.shade { position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.9) 45%, #000 100%); }
.hero > *:not(.bg):not(.shade) { position:relative; }
.top { display:flex; justify-content:space-between; align-items:center; height:40px; }
.top img { height:24px; }
.live { display:flex; align-items:center; gap:8px; border:1.5px solid rgba(214,253,59,.55); border-radius:999px; padding:6px 13px; font-size:13.5px; color:rgba(255,255,255,.8); background:rgba(214,253,59,.06); }
.live b { color:#fff; font-weight:700; }
.dot { width:8px; height:8px; border-radius:50%; background:#d6fd3b; box-shadow:0 0 0 4px rgba(214,253,59,.18), 0 0 12px rgba(214,253,59,.7); }
.lockup { margin-top:34px; display:flex; align-items:center; gap:11px; font-size:21px; font-weight:700; letter-spacing:-.01em; }
.lockup::before { content:""; width:4px; height:22px; border-radius:2px; background:#d6fd3b; }
.lockup em, h1 em { font-style:normal; color:#d6fd3b; }
h1 { margin-top:14px; font-size:60px; font-weight:500; line-height:1; letter-spacing:-.04em; }
h1 em { font-weight:700; }
svg { display:block; margin-top:18px; width:648px; height:auto; overflow:visible; }
"""

def hero_html(n):
    src = open(f"ad-{n}.html").read()
    h1 = re.search(r"<h1>(.*?)</h1>", src).group(1)
    svg = re.search(r'<svg class="chart".*?</svg>', src, re.S).group(0)
    # bigger chart labels for the narrower email: 16 -> 27, 18 -> 30 viewBox units
    svg = svg.replace('font-size="16"', 'font-size="27"').replace('font-size="18"', 'font-size="30"').replace('class="chart" ', '')
    return f"""<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"><style>{HERO_CSS}</style></head>
<body><div class="hero"><div class="bg"></div><div class="shade"></div>
<div class="top"><img src="../logo.png" alt=""><div class="live"><span class="dot"></span>Just launched: <b>fincoursa.com</b></div></div>
<div class="lockup"><span>CMT <em>Level II</em> Question Bank</span></div>
<h1>{h1}</h1>
{svg}
</div></body></html>"""

F = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased"
def T(size, color="#ffffff", weight="400", lh=None, extra=""):
    return f"{F};font-size:{size}px;line-height:{lh or round(size*1.45)}px;color:{color};font-weight:{weight};{extra}"

def email_html(n, v, unsubscribe, header_h):
    home = f"https://fincoursa.com/?utm_source=email&amp;utm_medium=email&amp;utm_campaign=cmt-launch-email&amp;utm_content={v}"
    course = f"https://fincoursa.com/go/cmt-launch-email?v={v}"
    sample = f"https://fincoursa.com/go/cmt-free-sample?v={v}"
    buy = f"https://fincoursa.com/go/cmt-launch-buy?v={v}"
    lime, muted = "#d6fd3b", "#a3a3a3"
    pad = "padding-left:36px;padding-right:36px"
    def perk(label, html, last=False):
        return (f'<!--[if mso]><td width="216" valign="top"><![endif]--><div style="display:inline-block;width:100%;max-width:216px;vertical-align:top">'
                f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-top:16px;padding-right:{0 if last else 16}px">'
                f'<p style="margin:0;{T(11, lime, "700", 16, "letter-spacing:1.5px;text-transform:uppercase")}">{label}</p>'
                f'<p style="margin:5px 0 0 0;{T(15, "#bdbdbd", "400", 23)}">{html}</p></td></tr></table></div><!--[if mso]></td><![endif]-->')
    unsub = ""
    if unsubscribe:
        unsub = (f'<tr><td style="{pad};padding-top:6px;padding-bottom:30px"><p style="margin:0;{T(12, "#8a8a8a", "400", 18)}">'
                 f'You are receiving this because you asked to hear about FinCoursa. <a href="{{{{{{RESEND_UNSUBSCRIBE_URL}}}}}}" style="color:#8a8a8a;text-decoration:underline">Unsubscribe</a></p></td></tr>')
    return f"""<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FinCoursa: CMT Level II Question Bank</title></head>
<body style="margin:0;padding:0;background-color:#000000">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#000000">fincoursa.com is live. CMT Level II Question Bank: 1,100+ questions, 115 chart questions, US$79 launch price until 16 December 2026.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background-color:#000000"><tr><td align="center">
<table role="presentation" width="720" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="width:100%;max-width:720px;background-color:#000000">
<tr><td><a href="{home}" target="_blank" style="display:block"><img src="{U}/v3-{n}-head.jpg" width="720" alt="FinCoursa. Just launched: fincoursa.com" border="0" style="display:block;width:100%;max-width:720px;height:auto;border:0"></a></td></tr>
<tr><td><a href="{course}" target="_blank" style="display:block"><img src="{U}/v3-{n}-hero.jpg" width="720" alt="CMT Level II Question Bank" border="0" style="display:block;width:100%;max-width:720px;height:auto;border:0"></a></td></tr>
<tr><td style="{pad};padding-top:6px"><p style="margin:0;{T(18, "#d4d4d4", "400", 28, "letter-spacing:-0.1px")}"><span style="color:#ffffff;font-weight:600">1,100+ exam-style questions</span>, 115 chart questions, and every answer explained. Practice mode to learn, timed exam mode to prove it.</p></td></tr>
<tr><td style="{pad};padding-top:22px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="48%" valign="top" bgcolor="{lime}" style="background-color:{lime};border-radius:16px;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:16px">
<p style="margin:0;{T(11, "#0a0a0a", "700", 15, "letter-spacing:1.3px;text-transform:uppercase;opacity:.8")}">Launch offer for CMT candidates</p>
<p style="margin:6px 0 0 0;{T(46, "#0a0a0a", "700", 50, "letter-spacing:-1.8px")}">$79 <span style="{T(17, "#0a0a0a", "500", 20, "text-decoration:line-through;opacity:.5;letter-spacing:0")}">$249</span></p>
<p style="margin:8px 0 0 0;{T(16, "#0a0a0a", "600", 22)}">Access for 90 days</p>
<p style="margin:4px 0 0 0;{T(13, "#0a0a0a", "400", 19, "opacity:.75")}">Limited time: ends 16 December 2026</p></td>
<td width="4%" style="font-size:0;line-height:0">&nbsp;</td>
<td width="48%" valign="top" bgcolor="#111111" style="background-color:#111111;border:1px solid #2e2e2e;border-radius:16px;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:16px">
<p style="margin:0;{T(11, "#bdbdbd", "700", 15, "letter-spacing:1.3px;text-transform:uppercase")}">Through the June exam</p>
<p style="margin:6px 0 0 0;{T(46, "#ffffff", "700", 50, "letter-spacing:-1.8px")}">$129</p>
<p style="margin:8px 0 0 0;{T(16, "#ffffff", "600", 22)}">Access until 30 June 2027</p>
<p style="margin:4px 0 0 0;{T(13, "#a3a3a3", "400", 19)}">Covers the June 2027 exam</p></td>
</tr></table></td></tr>
<tr><td style="{pad};padding-top:26px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #262626;font-size:0;line-height:0;height:1px">&nbsp;</td></tr></table></td></tr>
<tr><td style="{pad};padding-top:4px;font-size:0;line-height:0"><!--[if mso]><table role="presentation" width="648" cellpadding="0" cellspacing="0" border="0"><tr><![endif]-->{perk("Cashback", "<strong style='color:#ffffff;font-weight:600'>75% back as credit</strong>, or 100% when you share feedback and a review.*")}{perk("Downside capped", "Sit December 2026 and don't pass? <strong style='color:#ffffff;font-weight:600'>Free extension to June 2027.</strong>&dagger;")}{perk("Paper-trade first", "<strong style='color:#ffffff;font-weight:600'>A free sample set</strong> from every section, charts included. No payment needed.", True)}<!--[if mso]></tr></table><![endif]--></td></tr>
<tr><td style="{pad};padding-top:26px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="48%" align="center" style="border:1.5px solid #5c5c5c;border-radius:999px"><a href="{sample}" target="_blank" style="display:block;padding-top:15px;padding-bottom:15px;{T(16, "#ffffff", "600", 22, "text-decoration:none;letter-spacing:0.2px")}">Test-drive it free</a></td>
<td width="4%" style="font-size:0;line-height:0">&nbsp;</td>
<td width="48%" align="center" bgcolor="{lime}" style="background-color:{lime};border-radius:999px"><a href="{buy}" target="_blank" style="display:block;padding-top:15px;padding-bottom:15px;{T(16, "#0a0a0a", "700", 22, "text-decoration:none;letter-spacing:0.2px")}">Buy &rarr;</a></td>
</tr><tr>
<td align="center" style="padding-top:8px;{T(12, muted, "400", 16)}">No payment needed</td><td></td>
<td align="center" style="padding-top:8px;{T(12, muted, "400", 16)}">Straight to checkout</td>
</tr></table></td></tr>
<tr><td style="{pad};padding-top:26px"><p style="margin:0;{T(12, "#737373", "400", 18)}">* Credit, not cash: usable on future FinCoursa courses until 31 January 2027, not withdrawable or refundable. &dagger; Proof of result required. Prices exclude taxes. Not affiliated with or endorsed by the CMT Association.</p></td></tr>
<tr><td style="{pad};padding-top:14px;padding-bottom:{'8' if unsubscribe else '30'}px"><p style="margin:0;{T(13, muted, "400", 20)}">FinCoursa &middot; <a href="{home}" style="color:{lime};text-decoration:underline">fincoursa.com</a> &middot; Questions? Reply to this email.</p></td></tr>
{unsub}
</table></td></tr></table></body></html>"""

js = """
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const out={};
for (const n of %s) { const p=await b.newPage({viewport:{width:720,height:800},deviceScaleFactor:2});
  await p.goto('file://'+process.cwd()+'/email/hero-'+n+'.html',{waitUntil:'networkidle'}); await p.evaluate(()=>document.fonts.ready);
  const h=await p.evaluate(()=>({hero:Math.ceil(document.querySelector('.hero').getBoundingClientRect().height), head:Math.round(document.querySelector('.top').getBoundingClientRect().bottom+12)}));
  await p.locator('.hero').screenshot({path:'email/hero-'+n+'.png'}); out[n]=h; }
console.log(JSON.stringify(out)); await b.close();})();
""" % json.dumps(VARIANTS)

for n in VARIANTS:
    open(f"email/hero-{n}.html", "w").write(hero_html(n))
open("email/_hero.js", "w").write(js)
sizes = json.loads(subprocess.check_output(["node", "email/_hero.js"]).decode().strip().splitlines()[-1])
for n in VARIANTS:
    im = Image.open(f"email/hero-{n}.png").convert("RGB")
    cut = sizes[n]["head"] * 2
    im.crop((0, 0, 1440, cut)).save(f"email/v3-{n}-head.jpg", quality=88, optimize=True, progressive=True)
    im.crop((0, cut, 1440, im.height)).save(f"email/v3-{n}-hero.jpg", quality=88, optimize=True, progressive=True)
    open(f"email/email-{n}.html", "w").write(email_html(n, "email", False, cut))
    open(f"email/broadcast-{n}.html", "w").write(email_html(n, "broadcast", True, cut))
print(sizes)
