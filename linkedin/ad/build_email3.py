"""Launch email: hero image (desktop 720px and a separate phone version), live text, fluid columns that stack on phones."""
import re, subprocess, json
from PIL import Image

U = "https://ifmpyoebramjefhpxqjl.supabase.co/storage/v1/object/public/course-images/site/ads/email"
VARIANTS = ["higher-high", "buy-the-dip", "breakout", "signal"]
LIME = "#d6fd3b"

def hero_css(w, pad, logo, pill, lock, h1, lab):
    return f"""
* {{ box-sizing:border-box; margin:0; padding:0; }}
body {{ width:{w}px; background:#000; font-family:"Satoshi",system-ui,sans-serif; color:#fff; }}
.hero {{ position:relative; width:{w}px; padding:{pad}px {pad}px 6px; overflow:hidden; }}
.bg {{ position:absolute; inset:0; background:url(../bg.jpg) center 30%/cover; filter:saturate(.7) brightness(.9); }}
.shade {{ position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.9) 45%, #000 100%); }}
.hero > *:not(.bg):not(.shade) {{ position:relative; }}
.top {{ display:flex; justify-content:space-between; align-items:center; gap:10px; }}
.top img {{ height:{logo}px; }}
.live {{ display:flex; align-items:center; gap:7px; border:1.5px solid rgba(214,253,59,.55); border-radius:999px; padding:5px 11px; font-size:{pill}px; color:rgba(255,255,255,.8); background:rgba(214,253,59,.06); white-space:nowrap; }}
.live b {{ color:#fff; font-weight:700; }}
.dot {{ width:7px; height:7px; border-radius:50%; background:{LIME}; box-shadow:0 0 0 3px rgba(214,253,59,.18), 0 0 10px rgba(214,253,59,.7); }}
.lockup {{ margin-top:{round(pad*1.15)}px; display:flex; align-items:center; gap:10px; font-size:{lock}px; font-weight:700; letter-spacing:-.01em; }}
.lockup::before {{ content:""; width:4px; height:{lock+1}px; border-radius:2px; background:{LIME}; }}
.lockup em, h1 em {{ font-style:normal; color:{LIME}; }}
h1 {{ margin-top:12px; font-size:{h1}px; font-weight:500; line-height:1.02; letter-spacing:-.04em; }}
h1 em {{ font-weight:700; }}
svg {{ display:block; margin-top:16px; width:{w-2*pad}px; height:auto; overflow:visible; }}
"""

def hero_html(n, mobile):
    src = open(f"ad-{n}.html").read()
    h1 = re.search(r"<h1>(.*?)</h1>", src).group(1)
    svg = re.search(r'<svg class="chart".*?</svg>', src, re.S).group(0).replace('class="chart" ', '')
    if mobile:
        css = hero_css(400, 20, 20, 11.5, 17, 42, None)
        svg = svg.replace('font-size="16"', 'font-size="32"').replace('font-size="18"', 'font-size="36"')
    else:
        css = hero_css(720, 36, 24, 13.5, 21, 60, None)
        svg = svg.replace('font-size="16"', 'font-size="27"').replace('font-size="18"', 'font-size="30"')
    return f"""<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"><style>{css}</style></head>
<body><div class="hero"><div class="bg"></div><div class="shade"></div>
<div class="top"><img src="../logo.png" alt=""><div class="live"><span class="dot"></span>Just launched: <b>fincoursa.com</b></div></div>
<div class="lockup"><span>CMT <em>Level II</em> Question Bank</span></div>
<h1>{h1}</h1>
{svg}
</div></body></html>"""

FONT = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased"
def T(size, color="#ffffff", weight="400", lh=None, extra=""):
    return f"{FONT};font-size:{size}px;line-height:{lh or round(size*1.45)}px;color:{color};font-weight:{weight};{extra}"

STYLE = """<style>
@media only screen and (max-width:620px) {
  .px { padding-left:20px !important; padding-right:20px !important; }
  .desk { display:none !important; max-height:0 !important; overflow:hidden !important; }
  .mob { display:block !important; max-height:none !important; overflow:visible !important; }
  .col { max-width:100% !important; width:100% !important; }
  .gap { padding-right:0 !important; padding-bottom:12px !important; }
  .lead { font-size:17px !important; line-height:26px !important; }
}
</style>"""

def email_html(n, v, unsubscribe):
    home = f"https://fincoursa.com/?utm_source=email&amp;utm_medium=email&amp;utm_campaign=cmt-launch-email&amp;utm_content={v}"
    course = f"https://fincoursa.com/go/cmt-launch-email?v={v}"
    sample = f"https://fincoursa.com/go/cmt-free-sample?v={v}"
    buy = f"https://fincoursa.com/go/cmt-launch-buy?v={v}"
    px = 'class="px" style="padding-left:36px;padding-right:36px'
    def img(src, w, alt, href):
        return f'<a href="{href}" target="_blank" style="display:block"><img src="{U}/{src}" width="{w}" alt="{alt}" border="0" style="display:block;width:100%;max-width:{w}px;height:auto;border:0"></a>'
    def col(width, inner, gap=True):
        g = f'class="gap" style="padding-right:12px"' if gap else 'style="padding-right:0"'
        return (f'<!--[if mso]><td width="{width}" valign="top"><![endif]--><div class="col" style="display:inline-block;width:100%;max-width:{width}px;vertical-align:top">'
                f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td {g}>{inner}</td></tr></table></div><!--[if mso]></td><![endif]-->')
    def row(inner):
        return f'<!--[if mso]><table role="presentation" width="648" cellpadding="0" cellspacing="0" border="0"><tr><![endif]-->{inner}<!--[if mso]></tr></table><![endif]-->'
    def tile(bg, border, k_color, label, price, strike, access, note, fg, note_color):
        s = f'<span style="{T(17, fg, "500", 20, "text-decoration:line-through;opacity:.5;letter-spacing:0")}">{strike}</span>' if strike else ""
        return (f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="{bg}" style="background-color:{bg};{border}border-radius:16px;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:16px">'
                f'<p style="margin:0;{T(11, k_color, "700", 15, "letter-spacing:1.3px;text-transform:uppercase")}">{label}</p>'
                f'<p style="margin:6px 0 0 0;{T(46, fg, "700", 50, "letter-spacing:-1.8px")}">{price} {s}</p>'
                f'<p style="margin:8px 0 0 0;{T(16, fg, "600", 22)}">{access}</p>'
                f'<p style="margin:4px 0 0 0;{T(13, note_color, "400", 19)}">{note}</p></td></tr></table>')
    def perk(label, html):
        return (f'<p style="margin:16px 0 0 0;{T(11, LIME, "700", 16, "letter-spacing:1.5px;text-transform:uppercase")}">{label}</p>'
                f'<p style="margin:5px 0 0 0;{T(15, "#bdbdbd", "400", 23)}">{html}</p>')
    def button(href, label, bg, fg, border, caption):
        return (f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" bgcolor="{bg}" style="background-color:{bg};border:1.5px solid {border};border-radius:999px">'
                f'<a href="{href}" target="_blank" style="display:block;padding-top:15px;padding-bottom:15px;{T(16, fg, "700", 22, "text-decoration:none;letter-spacing:0.2px")}">{label}</a></td></tr>'
                f'<tr><td align="center" style="padding-top:8px;{T(12, "#a3a3a3", "400", 16)}">{caption}</td></tr></table>')
    b = "<strong style='color:#ffffff;font-weight:600'>"
    unsub = ""
    if unsubscribe:
        unsub = (f'<tr><td {px};padding-top:6px;padding-bottom:30px"><p style="margin:0;{T(12, "#8a8a8a", "400", 18)}">You are receiving this because you asked to hear about FinCoursa. '
                 f'<a href="{{{{{{RESEND_UNSUBSCRIBE_URL}}}}}}" style="color:#8a8a8a;text-decoration:underline">Unsubscribe</a></p></td></tr>')
    mob = 'class="mob" style="display:none;max-height:0;overflow:hidden;mso-hide:all"'
    return f"""<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FinCoursa: CMT Level II Question Bank</title>{STYLE}</head>
<body style="margin:0;padding:0;background-color:#000000">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#000000">fincoursa.com is live. CMT Level II Question Bank: 1,100+ questions, 115 chart questions, US$79 launch price until 16 December 2026.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background-color:#000000"><tr><td align="center">
<table role="presentation" width="720" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="width:100%;max-width:720px;background-color:#000000">
<tr><td class="desk">{img(f"v3-{n}-head.jpg", 720, "FinCoursa. Just launched: fincoursa.com", home)}{img(f"v3-{n}-hero.jpg", 720, "CMT Level II Question Bank", course)}</td></tr>
<!--[if !mso]><!--><tr><td><div {mob}>{img(f"m-{n}-head.jpg", 400, "FinCoursa. Just launched: fincoursa.com", home)}{img(f"m-{n}-hero.jpg", 400, "CMT Level II Question Bank", course)}</div></td></tr><!--<![endif]-->
<tr><td {px};padding-top:6px"><p class="lead" style="margin:0;{T(18, "#d4d4d4", "400", 28, "letter-spacing:-0.1px")}"><span style="color:#ffffff;font-weight:600">1,100+ exam-style questions</span>, 115 chart questions, and every answer explained. Practice mode to learn, timed exam mode to prove it.</p></td></tr>
<tr><td {px};padding-top:22px;font-size:0;line-height:0">{row(col(330, tile(LIME, "", "#3a4a00", "Launch offer for CMT candidates", "$79", "$249", "Access for 90 days", "Limited time: ends 16 December 2026", "#0a0a0a", "#3a4a00")) + col(318, tile("#111111", "border:1px solid #2e2e2e;", "#bdbdbd", "Through the June exam", "$129", "", "Access until 30 June 2027", "Covers the June 2027 exam", "#ffffff", "#a3a3a3"), gap=False))}</td></tr>
<tr><td {px};padding-top:14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #262626;font-size:0;line-height:0;height:1px">&nbsp;</td></tr></table></td></tr>
<tr><td {px};padding-top:0;font-size:0;line-height:0">{row(col(216, perk("Cashback", f"{b}75% back as credit</strong>, or 100% when you share feedback and a review.*")) + col(216, perk("Downside capped", f"Sit December 2026 and don't pass? {b}Free extension to June 2027.</strong>&dagger;")) + col(216, perk("Paper-trade first", f"{b}A free sample set</strong> from every section, charts included. No payment needed."), gap=False))}</td></tr>
<tr><td {px};padding-top:26px;font-size:0;line-height:0">{row(col(330, button(sample, "Test-drive it free", "#000000", "#ffffff", "#5c5c5c", "No payment needed")) + col(318, button(buy, "Buy &rarr;", LIME, "#0a0a0a", LIME, "Straight to checkout"), gap=False))}</td></tr>
<tr><td {px};padding-top:22px"><p style="margin:0;{T(12, "#737373", "400", 18)}">* Credit, not cash: usable on future FinCoursa courses until 31 January 2027, not withdrawable or refundable. &dagger; Proof of result required. Prices exclude taxes. Not affiliated with or endorsed by the CMT Association.</p></td></tr>
<tr><td {px};padding-top:14px;padding-bottom:{'8' if unsubscribe else '30'}px"><p style="margin:0;{T(13, "#a3a3a3", "400", 20)}">FinCoursa &middot; <a href="{home}" style="color:{LIME};text-decoration:underline">fincoursa.com</a> &middot; Questions? Reply to this email.</p></td></tr>
{unsub}
</table></td></tr></table></body></html>"""

js = """
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const out={};
for (const n of %s) for (const m of ['d','m']) { const w = m==='m'?400:720; const p=await b.newPage({viewport:{width:w,height:800},deviceScaleFactor:m==='m'?3:2});
  await p.goto('file://'+process.cwd()+'/email/hero-'+m+'-'+n+'.html',{waitUntil:'networkidle'}); await p.evaluate(()=>document.fonts.ready);
  out[n+'-'+m]=await p.evaluate(()=>Math.round(document.querySelector('.top').getBoundingClientRect().bottom+12));
  await p.locator('.hero').screenshot({path:'email/hero-'+m+'-'+n+'.png'}); }
console.log(JSON.stringify(out)); await b.close();})();
""" % json.dumps(VARIANTS)

for n in VARIANTS:
    open(f"email/hero-d-{n}.html", "w").write(hero_html(n, False))
    open(f"email/hero-m-{n}.html", "w").write(hero_html(n, True))
open("email/_hero.js", "w").write(js)
cuts = json.loads(subprocess.check_output(["node", "email/_hero.js"]).decode().strip().splitlines()[-1])
for n in VARIANTS:
    for m, prefix, scale, W in (("d", "v3", 2, 1440), ("m", "m", 3, 1200)):
        im = Image.open(f"email/hero-{m}-{n}.png").convert("RGB")
        cut = cuts[f"{n}-{m}"] * scale
        im.crop((0, 0, W, cut)).save(f"email/{prefix}-{n}-head.jpg", quality=88, optimize=True, progressive=True)
        im.crop((0, cut, W, im.height)).save(f"email/{prefix}-{n}-hero.jpg", quality=88, optimize=True, progressive=True)
    open(f"email/email-{n}.html", "w").write(email_html(n, "email", False))
    open(f"email/broadcast-{n}.html", "w").write(email_html(n, "broadcast", True))
print(cuts)
