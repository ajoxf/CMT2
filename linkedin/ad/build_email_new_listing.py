"""Email design: 'New listing.' (FinCoursa is a CMT Association Participating Prep Provider). Hero image + live text."""
import json
U = "https://ifmpyoebramjefhpxqjl.supabase.co/storage/v1/object/public/course-images/site/ads/email"
REV = 2
LIME = "#d6fd3b"
FONT = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased"
def T(size, color="#ffffff", weight="400", lh=None, extra=""):
    return f"{FONT};font-size:{size}px;line-height:{lh or round(size*1.45)}px;color:{color};font-weight:{weight};{extra}"
cmt = "https://fincoursa.com/cmt?utm_source=email&amp;utm_medium=email&amp;utm_campaign=cmt-ppp-listing&amp;utm_content={{tag}}"
listing = "https://cmtassociation.org/cmt-program/prep-providers/"

def level_card(n, roman, about):
    url = f"https://fincoursa.com/programmes/cmt-level-{n}?utm_source=email&amp;utm_medium=email&amp;utm_campaign=cmt-ppp-listing&amp;utm_content={{{{tag}}}}"
    pts = "".join(f'<p style="margin:6px 0 0 0;{T(14, "#bdbdbd", "400", 20)}">&#8226;&nbsp; {p}</p>' for p in ["Study courses following the curriculum", "Question bank with chart questions", "Timed exam mode"])
    inner = (f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#111111" style="background-color:#111111;border:1px solid #2e2e2e;border-radius:16px;padding:20px 20px 22px 20px">'
             f'<p style="margin:0;{T(11, LIME, "700", 15, "letter-spacing:1.4px;text-transform:uppercase")}">Level {roman}</p>'
             f'<p style="margin:4px 0 0 0;{T(19, "#ffffff", "700", 25)}">CMT Level {roman} Programme</p>'
             f'<p style="margin:8px 0 0 0;{T(15, "#d4d4d4", "400", 22)}">{about}</p>{pts}'
             f'<p style="margin:16px 0 0 0"><a href="{url}" target="_blank" style="{T(15, LIME, "700", 20, "text-decoration:none")}">Explore Level {n} &rarr;</a></p></td></tr></table>')
    return inner
def col(width, inner, gap=True):
    g = 'class="gap" style="padding-right:12px;padding-bottom:12px"' if gap else 'style="padding-right:0;padding-bottom:12px"'
    return (f'<!--[if mso]><td width="{width}" valign="top"><![endif]--><div class="col" style="display:inline-block;width:100%;max-width:{width}px;vertical-align:top">'
            f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td {g}>{inner}</td></tr></table></div><!--[if mso]></td><![endif]-->')
LEVELS = ('<!--[if mso]><table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0"><tr><![endif]-->'
          + col(320, level_card(1, "I", "The foundations: the vocabulary and building blocks of technical analysis."))
          + col(320, level_card(2, "II", "Applying the tools: reading charts, combining indicators and testing an approach."), gap=False)
          + '<!--[if mso]></tr></table><![endif]-->')
px = 'class="px" style="padding-left:40px;padding-right:40px'
STYLE = "<style>@media only screen and (max-width:620px){ .px{padding-left:20px !important;padding-right:20px !important;} .lead{font-size:21px !important;line-height:29px !important;} .col{max-width:100% !important;width:100% !important;} .gap{padding-right:0 !important;} }</style>"
html = f"""<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>FinCoursa is now a CMT Association Participating Prep Provider</title>{STYLE}</head>
<body style="margin:0;padding:0;background-color:#000000">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#000000">FinCoursa is now a CMT Association Participating Prep Provider. Thank you to the CMT community for your support.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background-color:#000000"><tr><td align="center">
<table role="presentation" width="720" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="width:100%;max-width:720px;background-color:#000000">
<tr><td><a href="{cmt}" target="_blank" style="display:block"><img src="{U}/hero-new-listing.jpg?r={REV}" width="720" alt="New listing. FinCoursa is now a CMT Association Participating Prep Provider." border="0" style="display:block;width:100%;max-width:720px;height:auto;border:0"></a></td></tr>
{{{{note}}}}<tr><td {px};padding-top:22px"><p class="lead" style="margin:0;{T(26, "#ffffff", "500", 35)}">FinCoursa is now a <span style="color:{LIME};font-weight:700">CMT Association Participating Prep Provider</span>.</p></td></tr>
<tr><td {px};padding-top:12px"><p style="margin:0;{T(17, "#bdbdbd", "400", 26)}">You can find us on the CMT Association's <a href="{listing}" target="_blank" style="color:#ffffff;text-decoration:underline">prep providers page</a>. Thank you to the CMT community for your support.</p></td></tr>
<tr><td {px};padding-top:30px"><p style="margin:0;{T(12, LIME, "700", 16, "letter-spacing:1.6px;text-transform:uppercase")}">CMT Programmes</p><p style="margin:6px 0 0 0;{T(24, "#ffffff", "500", 30)}">A programme for each level</p></td></tr>
<tr><td {px};padding-top:16px;font-size:0;line-height:0">{LEVELS}</td></tr>
<tr><td {px};padding-top:28px"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" bgcolor="{LIME}" style="background-color:{LIME};border-radius:999px"><a href="{cmt}" target="_blank" style="display:block;padding:15px 34px;{T(17, "#0a0a0a", "700", 22, "text-decoration:none")}">Visit CMT Prep &rarr;</a></td></tr></table></td></tr>
<tr><td {px};padding-top:30px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #262626;font-size:0;line-height:0;height:1px">&nbsp;</td></tr></table></td></tr>
<tr><td {px};padding-top:16px"><p style="margin:0;{T(12, "#737373", "400", 18)}">FinCoursa is a CMT Association Participating Prep Provider. This does not imply endorsement, authorisation, accreditation or exclusivity by the CMT Association. CMT&reg; and Chartered Market Technician&reg; are trademarks of the CMT Association.</p></td></tr>
<tr><td {px};padding-top:14px;padding-bottom:8px"><p style="margin:0;{T(13, "#a3a3a3", "400", 20)}">FinCoursa &middot; <a href="{cmt}" style="color:{LIME};text-decoration:underline">fincoursa.com/cmt</a> &middot; Questions? Reply to this email.</p></td></tr>
<tr><td {px};padding-top:6px;padding-bottom:30px"><p style="margin:0;{T(12, "#8a8a8a", "400", 18)}">You are receiving this because you asked to hear about FinCoursa. <a href="{{{{unsubscribe_url}}}}" style="color:#8a8a8a;text-decoration:underline">Unsubscribe</a></p></td></tr>
</table></td></tr></table></body></html>"""
text = """New listing.

{{note_text}}

FinCoursa is now a CMT Association Participating Prep Provider.

You can find us on the CMT Association's prep providers page: https://cmtassociation.org/cmt-program/prep-providers/
Thank you to the CMT community for your support.

CMT Programmes: a programme for each level
- CMT Level I Programme: the foundations, the vocabulary and building blocks of technical analysis. https://fincoursa.com/programmes/cmt-level-1
- CMT Level II Programme: applying the tools, reading charts, combining indicators and testing an approach. https://fincoursa.com/programmes/cmt-level-2
Each includes study courses following the curriculum, a question bank with chart questions and timed exam mode.

Visit CMT Prep: https://fincoursa.com/cmt?utm_source=email&utm_medium=email&utm_campaign=cmt-ppp-listing&utm_content={{tag}}

FinCoursa is a CMT Association Participating Prep Provider. This does not imply endorsement, authorisation, accreditation or exclusivity by the CMT Association. CMT and Chartered Market Technician are trademarks of the CMT Association.
Questions? Reply to this email.
Unsubscribe: {{unsubscribe_url}}"""
open("email/email-new-listing.html", "w").write(html)
open("email/email-new-listing.txt", "w").write(text)
json.dump({"id": "announcement-new-listing", "name": "Announcement: New Listing",
  "description": "FinCoursa is now a CMT Association Participating Prep Provider: 'New listing.' hero with the official badge and chart, the news, thanks to the CMT community, Level I and Level II programme cards with Explore links, and a 'Visit CMT Prep' button. No prices.",
  "default_subject": "New listing: FinCoursa is now a CMT Association Participating Prep Provider",
  "html": html, "text_body": text, "status": "draft", "sort": 3}, open("/tmp/claude-0/-home-user/33cdf40c-2a7c-5c28-9bfd-f289d57975a5/scratchpad/design_nl.json", "w"))
print("ok", len(html))
