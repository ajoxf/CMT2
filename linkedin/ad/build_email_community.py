"""Community email: complimentary 50-question sample. Hero image (desktop 720 and phone 400) + live text; stored as an email design."""
import re, sys
sys.argv = sys.argv[:1]
src = open("ad-community.html").read()
H1 = re.search(r"<h1>(.*?)</h1>", src).group(1)
SVG = re.search(r'<svg class="chart".*?</svg>', src, re.S).group(0).replace('class="chart" ', '')
LIME = "#d6fd3b"
exec(open("build_email3.py").read().split("FONT =")[0].split("def hero_html")[0])  # hero_css, squeeze_x, PHONE_LABELS

def hero(mobile):
    svg = SVG
    if mobile:
        css = hero_css(400, 20, 20, 11.5, 17, 42, None)
        svg = squeeze_x("x", svg).replace("Full practice", "Practice")
    else:
        css = hero_css(720, 36, 24, 13.5, 21, 60, None)
        svg = svg.replace('font-size="16"', 'font-size="27"').replace('font-size="18"', 'font-size="30"')
    return f"""<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"><style>{css}</style></head>
<body><div class="hero"><div class="bg"></div><div class="shade"></div>
<div class="top"><img src="../logo.png" alt=""><div class="live"><span class="dot"></span>Complimentary for the <b>CMT community</b></div></div>
<div class="lockup"><span><small>Chartered Market Technician (CMT)</small><b><em>Level II</em> Question Bank</b></span></div>
<h1>{H1}</h1>
{svg}
</div></body></html>"""
open("email/hero-community.html", "w").write(hero(False))
open("email/hero-m-community.html", "w").write(hero(True))
print("ok")

# ---- the email (design placeholders: {{tag}}, {{note}}, {{note_text}}, {{unsubscribe_url}}, {{first_name}}) ----
U = "https://ifmpyoebramjefhpxqjl.supabase.co/storage/v1/object/public/course-images/site/ads/email"
REV = 2
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
  .big { font-size:38px !important; line-height:42px !important; }
}
</style>"""
sample = "https://fincoursa.com/go/cmt-free-sample?v={{tag}}"
home = "https://fincoursa.com/?utm_source=email&amp;utm_medium=email&amp;utm_campaign=cmt-community-sample&amp;utm_content={{tag}}"
px = 'class="px" style="padding-left:36px;padding-right:36px'
def img(src, w, alt):
    return f'<a href="{sample}" target="_blank" style="display:block"><img src="{U}/{src}?r={REV}" width="{w}" alt="{alt}" border="0" style="display:block;width:100%;max-width:{w}px;height:auto;border:0"></a>'
def col(width, inner, gap=True):
    g = 'class="gap" style="padding-right:12px"' if gap else 'style="padding-right:0"'
    return (f'<!--[if mso]><td width="{width}" valign="top"><![endif]--><div class="col" style="display:inline-block;width:100%;max-width:{width}px;vertical-align:top">'
            f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td {g}>{inner}</td></tr></table></div><!--[if mso]></td><![endif]-->')
def row(inner):
    return f'<!--[if mso]><table role="presentation" width="648" cellpadding="0" cellspacing="0" border="0"><tr><![endif]-->{inner}<!--[if mso]></tr></table><![endif]-->'
def tile(bg, border, kc, label, big, small, line1, line2, fg, nc):
    return (f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="{bg}" style="background-color:{bg};{border}border-radius:16px;padding:20px 16px 20px 20px">'
            f'<p style="margin:0;{T(11, kc, "700", 15, "letter-spacing:1.3px;text-transform:uppercase")}">{label}</p>'
            f'<p class="big" style="margin:6px 0 0 0;{T(46, fg, "700", 50, "letter-spacing:-1.8px")}">{big} <span style="{T(17, fg, "500", 22, "letter-spacing:0")}">{small}</span></p>'
            f'<p style="margin:8px 0 0 0;{T(16, fg, "600", 22)}">{line1}</p>'
            f'<p style="margin:4px 0 0 0;{T(13, nc, "400", 19)}">{line2}</p></td></tr></table>')
def perk(label, html):
    return (f'<p style="margin:16px 0 0 0;{T(11, LIME, "700", 16, "letter-spacing:1.5px;text-transform:uppercase")}">{label}</p>'
            f'<p style="margin:5px 0 0 0;{T(15, "#bdbdbd", "400", 23)}">{html}</p>')
b = "<strong style='color:#ffffff;font-weight:600'>"
mob = 'class="mob" style="display:none;max-height:0;overflow:hidden;mso-hide:all"'
html = f"""<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FinCoursa: CMT Level II practice questions, on us</title>{STYLE}</head>
<body style="margin:0;padding:0;background-color:#000000">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#000000">A complimentary CMT Level II sample set: questions from every section, charts included, every answer explained.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background-color:#000000"><tr><td align="center">
<table role="presentation" width="720" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="width:100%;max-width:720px;background-color:#000000">
<tr><td class="desk">{img("hero-community.jpg", 720, "FinCoursa: CMT Level II practice questions, on us")}</td></tr>
<!--[if !mso]><!--><tr><td><div {mob}>{img("hero-m-community.jpg", 400, "FinCoursa: CMT Level II practice questions, on us")}</div></td></tr><!--<![endif]-->
{{{{note}}}}<tr><td {px};padding-top:18px"><p class="lead" style="margin:0;{T(18, "#cfcfcf", "400", 28)}">To support everyone preparing for the Chartered Market Technician (CMT) Level II exam, we are making a sample set from our Question Bank {b}complimentary</strong>: exam-style questions from every section, charts included, with every answer explained.</p></td></tr>
<tr><td {px};padding-top:22px;font-size:0;line-height:0">{row(col(330, tile(LIME, "", "#3a4a00", "Complimentary for CMT candidates", "Free", "sample set", "Start today, at your own pace", "Free FinCoursa account. No payment needed.", "#0a0a0a", "#3a4a00")) + col(318, tile("#111111", "border:1px solid #2e2e2e;", "#bdbdbd", "The full Question Bank", "1,100+", "questions", "115 chart questions, timed exam mode", "Enrolment opens soon", "#ffffff", "#a3a3a3"), gap=False))}</td></tr>
<tr><td {px};padding-top:14px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #262626;font-size:0;line-height:0;height:1px">&nbsp;</td></tr></table></td></tr>
<tr><td {px};padding-top:0;font-size:0;line-height:0">{row(col(216, perk("Every section", f"{b}Exam-style questions</strong> across the Level II curriculum.")) + col(216, perk("Chart questions", f"{b}Read the chart</strong> to find the answer, as in the exam.")) + col(216, perk("Explained", f"{b}Why each option</strong> is right or wrong, not just the answer."), gap=False))}</td></tr>
<tr><td {px};padding-top:28px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" bgcolor="{LIME}" style="background-color:{LIME};border-radius:999px"><a href="{sample}" target="_blank" style="display:block;padding:17px 10px;{T(18, "#0a0a0a", "700", 24, "text-decoration:none")}">Get the free questions &rarr;</a></td></tr><tr><td align="center" style="padding-top:8px;{T(12, "#a3a3a3", "400", 16)}">Free FinCoursa account. No card or payment details.</td></tr></table></td></tr>
<tr><td {px};padding-top:24px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="4" bgcolor="{LIME}" style="background-color:{LIME};border-radius:2px;font-size:0;line-height:0">&nbsp;</td><td style="padding-left:12px"><p style="margin:0;{T(15, "#bdbdbd", "400", 22)}">{b}Preparing with others?</strong> Forward this to your study group. It is free for every CMT candidate.</p></td></tr></table></td></tr>
<tr><td {px};padding-top:22px"><p style="margin:0;{T(12, "#737373", "400", 18)}">Not affiliated with or endorsed by the CMT Association.</p></td></tr>
<tr><td {px};padding-top:14px;padding-bottom:8px"><p style="margin:0;{T(13, "#a3a3a3", "400", 20)}">FinCoursa &middot; <a href="{home}" style="color:{LIME};text-decoration:underline">fincoursa.com</a> &middot; Questions? Reply to this email.</p></td></tr>
<tr><td {px};padding-top:6px;padding-bottom:30px"><p style="margin:0;{T(12, "#8a8a8a", "400", 18)}">You are receiving this because you asked to hear about FinCoursa. <a href="{{{{unsubscribe_url}}}}" style="color:#8a8a8a;text-decoration:underline">Unsubscribe</a></p></td></tr>
</table></td></tr></table></body></html>"""
text = """CMT Level II practice questions, on us

{{note_text}}

To support everyone preparing for the Chartered Market Technician (CMT) Level II exam, we are making a sample set from our Question Bank complimentary: exam-style questions from every section, charts included, with every answer explained.

Get the free questions: https://fincoursa.com/go/cmt-free-sample?v={{tag}}
Free FinCoursa account. No card or payment details.

The full Question Bank: 1,100+ questions, 115 chart questions, practice and timed exam modes. Enrolment opens soon.

Preparing with others? Forward this to your study group. It is free for every CMT candidate.

Not affiliated with or endorsed by the CMT Association.
Questions? Reply to this email.
Unsubscribe: {{unsubscribe_url}}"""
open("email/email-community.html", "w").write(html)
open("email/email-community.txt", "w").write(text)
print("email ok", len(html))
