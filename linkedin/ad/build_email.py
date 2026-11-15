"""Slice the rendered ads into email images and build email HTML (Gmail paste) and Resend broadcast HTML."""
from PIL import Image
U = "https://ifmpyoebramjefhpxqjl.supabase.co/storage/v1/object/public/course-images/site/ads/email"
HEAD, CTA_TOP, CTA_BOT = 130 * 2, 1104 * 2, 1244 * 2   # 2x pixel rows: header strip, button row
PRE = "fincoursa.com is live. CMT Level II Question Bank: 1,100+ questions, 115 chart questions, US$79 launch price until 16 December 2026."
ALT_TOP = ("CMT Level II Question Bank: 1,100+ exam-style questions, 115 chart questions. Launch offer US$79 for 90 days, or US$129 until "
           "30 June 2027. 75% back as credit, or 100% with feedback and a review. Free extension to June 2027 if you sit December 2026 and do not pass.")
ALT_FOOT = "Credit, not cash, usable until 31 January 2027. Proof of result required. Prices exclude taxes. Not affiliated with or endorsed by the CMT Association."

def links(v):
    return {
        "home": f"https://fincoursa.com/?utm_source=email&amp;utm_medium=email&amp;utm_campaign=cmt-launch-email&amp;utm_content={v}",
        "course": f"https://fincoursa.com/go/cmt-launch-email?v={v}",
        "sample": f"https://fincoursa.com/go/cmt-free-sample?v={v}",
        "buy": f"https://fincoursa.com/go/cmt-launch-buy?v={v}",
    }

def build(n, v, unsubscribe):
    L = links(v)
    def img(k, w, alt, href):
        return (f'<a href="{href}" target="_blank" style="display:block;text-decoration:none"><img src="{U}/{n}-{k}.jpg" width="{w}" alt="{alt}" '
                f'border="0" style="display:block;width:100%;max-width:{w}px;height:auto;border:0;outline:none"></a>')
    foot = ""
    if unsubscribe:
        foot = ('<tr><td colspan="2" bgcolor="#000000" style="background-color:#000000;padding-top:8px;padding-bottom:28px;padding-left:36px;padding-right:36px;'
                'font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#8a8a8a">'
                f'FinCoursa &middot; <a href="{L["home"]}" style="color:#8a8a8a;text-decoration:underline">fincoursa.com</a> &middot; Questions? Reply to this email.<br>'
                'You are receiving this because you asked to hear about FinCoursa. '
                '<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#8a8a8a;text-decoration:underline">Unsubscribe</a></td></tr>')
    return f'''<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FinCoursa: CMT Level II Question Bank</title></head>
<body style="margin:0;padding:0;background:#000000">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#000000">{PRE}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000000"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#000000">
<tr><td colspan="2">{img("0-head", 600, "FinCoursa. Just launched: fincoursa.com", L["home"])}</td></tr>
<tr><td colspan="2">{img("1-top", 600, ALT_TOP, L["course"])}</td></tr>
<tr><td width="300" style="width:50%">{img("2-free", 300, "Test-drive it free", L["sample"])}</td><td width="300" style="width:50%">{img("3-buy", 300, "Buy", L["buy"])}</td></tr>
<tr><td colspan="2">{img("4-foot", 600, ALT_FOOT, L["course"])}</td></tr>
{foot}
</table></td></tr></table></body></html>'''

for n in ["higher-high", "buy-the-dip", "breakout", "signal"]:
    im = Image.open(f"FinCoursa-CMT-L2-QBank-ad-{n}.jpg").convert("RGB")
    parts = {"0-head": im.crop((0, 0, 2160, HEAD)), "1-top": im.crop((0, HEAD, 2160, CTA_TOP)),
             "2-free": im.crop((0, CTA_TOP, 1080, CTA_BOT)), "3-buy": im.crop((1080, CTA_TOP, 2160, CTA_BOT)), "4-foot": im.crop((0, CTA_BOT, 2160, 2700))}
    for k, part in parts.items():
        w = 600 if k in ("2-free", "3-buy") else 1200
        part.resize((w, round(part.height * w / part.width)), Image.LANCZOS).save(f"email/{n}-{k}.jpg", quality=86, optimize=True, progressive=True)
    open(f"email/email-{n}.html", "w").write(build(n, "email", False))
    open(f"email/broadcast-{n}.html", "w").write(build(n, "broadcast", True))
print("ok")
