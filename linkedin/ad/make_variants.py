import re, subprocess
base = open('ad.html').read()
lines = base.split('\n')
h1_i = next(i for i,l in enumerate(lines) if '<h1>' in l)
svg_s = next(i for i,l in enumerate(lines) if '<svg class="chart"' in l)
svg_e = next(i for i,l in enumerate(lines) if '</svg>' in l)
old_svg = '\n'.join(lines[svg_s:svg_e+1])

LBL = 'font-family="Satoshi, sans-serif" font-size="16" fill="rgba(255,255,255,.62)"'
def pts(p): return ' '.join(f'L{x} {y}' for x,y in p)[1:]
def svg(body): return f'''  <svg class="chart" viewBox="0 14 936 222" fill="none">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6fd3b" stop-opacity=".22"/><stop offset="1" stop-color="#d6fd3b" stop-opacity="0"/></linearGradient></defs>
    <g stroke="rgba(255,255,255,.07)"><line x1="0" y1="60" x2="936" y2="60"/><line x1="0" y1="130" x2="936" y2="130"/><line x1="0" y1="200" x2="936" y2="200"/></g>
{body}
  </svg>'''
def line(p): 
    d='M'+pts(p)
    return f'    <path d="{d} L{p[-1][0]} 250 L{p[0][0]} 250 Z" fill="url(#g)"/>\n    <path d="{d}" stroke="#d6fd3b" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>'
def node(x,y,t,dx=12,dy=28): return f'      <circle cx="{x}" cy="{y}" r="6" fill="#000" stroke="#fff" stroke-width="2"/><text x="{x+dx}" y="{y+dy}">{t}</text>'
def hot(x,y,t,anchor='end',dx=-32,dy=6): return f'      <circle cx="{x}" cy="{y}" r="9" fill="#d6fd3b"/><circle cx="{x}" cy="{y}" r="18" fill="#d6fd3b" fill-opacity=".18"/>\n      <text x="{x+dx}" y="{y+dy}" text-anchor="{anchor}" fill="#fff" font-weight="700" font-size="18">{t}</text>'

# 2: buy the dip in exam stress (falling line)
dip=[(0,40),(70,58),(120,46),(190,84),(250,68),(330,116),(390,98),(470,142),(540,126),(620,168),(690,154),(770,196),(820,188),(900,222)]
dip_svg = svg(line(dip)+f'\n    <g {LBL}>\n'+node(120,46,'Day one: "How hard can it be?"',12,-14)+'\n'+node(390,98,'Practice mode',12,-14)+'\n'+node(690,154,'Mock exams',12,-14)+'\n'+hot(900,222,'Exam day: calm',dx=-30,dy=12)+'\n    </g>')
# 3: breakout from a range
br=[(0,186),(60,160),(120,188),(180,158),(240,190),(300,162),(360,186),(420,160),(480,184),(540,158),(600,176),(650,128),(700,140),(770,86),(820,96),(900,36)]
br_svg = svg('    <path d="M0 154 L936 154" stroke="rgba(255,255,255,.4)" stroke-width="1.5" stroke-dasharray="6 7"/>\n'+line(br)+f'\n    <g {LBL}>\n      <text x="0" y="144">Resistance: "I know the theory"</text>\n'+node(300,162,'Practice',-30,52)+'\n'+node(650,128,'Breakout',-100,-16)+'\n'+hot(900,36,'Exam day')+'\n    </g>')
# 4: noise vs signal
import random; random.seed(7)
noise=[(x, (206 - x*160/900) + random.uniform(-1,1)*60*(1-x/900)**1.3) for x in range(0,901,20)]
nd='M'+' '.join(f'L{x} {y:.0f}' for x,y in noise)[1:]
sig=[(0,206),(900,46)]
sg_svg = svg(f'    <path d="{nd}" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-linejoin="round"/>\n'+line([(0,206),(300,166),(600,110),(900,46)])+f'\n    <g {LBL}>\n      <text x="10" y="70" fill="rgba(255,255,255,.5)">Noise: scattered notes, forums, guesswork</text>\n      <text x="330" y="196" fill="#d6fd3b" font-weight="700">Signal: one curriculum-mapped question bank</text>\n'+hot(900,46,'Exam day',dy=-12)+'\n    </g>')

variants = {
 'higher-high': ('Make your score<br>a <em>higher high.</em>', old_svg),
 'buy-the-dip': ('Buy the dip<br>in <em>exam stress.</em>', dip_svg),
 'breakout':    ('Range-bound prep?<br>Time for a <em>breakout.</em>', br_svg),
 'signal':      ('Less noise.<br><em>More signal.</em>', sg_svg),
}
common = base
common = common.replace('<div class="perk"><div class="k">Free test drive</div><p><b>50 sample questions</b>, charts included. No payment needed.</p></div>',
  '<div class="perk"><div class="k">Paper-trade first</div><p><b>A free sample set</b> from every section, charts included. No payment needed.</p></div>')
common = common.replace('<a class="btn ghost" href="https://fincoursa.com/go/cmt-free-sample?v=pdf">Try 50 free questions</a>',
  '<a class="btn ghost" href="https://fincoursa.com/go/cmt-free-sample?v=pdf">Test-drive it free</a>')
common = common.replace('<a class="btn" href="https://fincoursa.com/courses/cmtl2-qbank?v=pdf">Buy the course &rarr;</a><div class="u">fincoursa.com/courses/cmtl2-qbank</div>',
  '<a class="btn" href="https://fincoursa.com/checkout?course=cmtl2-qbank&amp;v=pdf">Buy the course &rarr;</a><div class="u">Straight to checkout</div>')
assert common.count('Test-drive it free')==1 and common.count('checkout?course')==1 and 'Paper-trade first' in common
for name,(h1,sv) in variants.items():
    s = common.replace(lines[h1_i].strip(), f'<h1>{h1.replace("<br>", " ")}</h1>').replace(old_svg, sv)
    open(f'ad-{name}.html','w').write(s)
print('ok')
