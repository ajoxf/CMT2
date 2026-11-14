#!/usr/bin/env python3
"""Generate ORIGINAL chart-based questions for the CMT Level II question bank.

All price data is synthetic (seeded random walks / constructed paths). No chart,
figure, example or data from the curriculum is reproduced. Every numeric answer
is computed from the same data that is drawn, so the key always matches the chart.

Output:
  question_bank/chart_questions/Ch<X>.json   (same fields as the bank + "image")
  question_bank/chart_questions/img/*.png

Run:  python3 tools/generate_chart_questions.py
"""
import json
import os
from collections import defaultdict

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# CHART_OUT=<dir> writes to a private folder (for testing); CHART_ONLY=<module> runs one module only.
OUT = os.environ.get("CHART_OUT") or os.path.join(ROOT, "question_bank", "chart_questions")
IMG = os.path.join(OUT, "img")
os.makedirs(IMG, exist_ok=True)

UP, DOWN, INK, MUTED, ACCENT, ACCENT2 = "#2e7d32", "#c62828", "#222222", "#888888", "#1565c0", "#ef6c00"
plt.rcParams.update({
    "figure.dpi": 110, "savefig.dpi": 110, "font.size": 10, "axes.grid": True,
    "grid.alpha": 0.25, "axes.spines.top": False, "axes.spines.right": False,
})

BANK = defaultdict(list)  # key = TOC unit, e.g. "Ch9_1"
NEXT_ID = defaultdict(lambda: 101)  # chart question ids start at 101 to avoid clashes


def save(fig, name):
    path = os.path.join(IMG, name)
    fig.tight_layout()
    fig.savefig(path, facecolor="white")
    plt.close(fig)
    # The LMS importer only accepts absolute http(s) image links. Set CHART_IMAGE_BASE_URL to wherever the
    # img/ folder is hosted (e.g. a public storage bucket) to emit full links; otherwise a repo-relative path.
    base = os.environ.get("CHART_IMAGE_BASE_URL", "").rstrip("/")
    return f"{base}/{name}" if base else f"question_bank/chart_questions/img/{name}"


def add(ch, image, question, options, correct, concept):
    assert len(options) == 4 and len(set(options)) == 4 and 0 <= correct < 4
    qid = NEXT_ID[ch]
    NEXT_ID[ch] += 1
    BANK[ch].append({"id": qid, "question": question, "options": options, "correct": correct,
                     "hasImage": True, "image": image, "concept": concept})


def interp_path(knots, n_per_leg, rng, noise):
    """Piecewise-linear path through knots with small noise (noise 0 at knots)."""
    pts = []
    for a, b in zip(knots[:-1], knots[1:]):
        seg = np.linspace(a, b, n_per_leg, endpoint=False)
        jitter = rng.normal(0, noise, n_per_leg) * np.sin(np.linspace(0, np.pi, n_per_leg))
        pts.extend(seg + jitter)
    pts.append(knots[-1])
    return np.array(pts)


def ohlc_from_close(close, rng, spread=0.6):
    opn = np.r_[close[0], close[:-1]] + rng.normal(0, spread * 0.3, len(close))
    hi = np.maximum(opn, close) + np.abs(rng.normal(0, spread, len(close)))
    lo = np.minimum(opn, close) - np.abs(rng.normal(0, spread, len(close)))
    return opn, hi, lo, close


def draw_candles(ax, o, h, l, c, x0=0, width=0.6):
    for i, (oo, hh, ll, cc) in enumerate(zip(o, h, l, c)):
        col = UP if cc >= oo else DOWN
        x = x0 + i
        ax.vlines(x, ll, hh, color=col, lw=1)
        ax.add_patch(plt.Rectangle((x - width / 2, min(oo, cc)), width, max(abs(cc - oo), 0.05),
                                   facecolor=col, edgecolor=col))


def ema(x, n):
    a = 2 / (n + 1)
    out = np.empty_like(x, dtype=float)
    out[0] = x[0]
    for i in range(1, len(x)):
        out[i] = a * x[i] + (1 - a) * out[i - 1]
    return out


def rsi(close, n=14):
    d = np.diff(close, prepend=close[0])
    up, dn = np.clip(d, 0, None), np.clip(-d, 0, None)
    au, ad = np.zeros_like(close), np.zeros_like(close)
    au[n], ad[n] = up[1:n + 1].mean(), dn[1:n + 1].mean()
    for i in range(n + 1, len(close)):
        au[i] = (au[i - 1] * (n - 1) + up[i]) / n
        ad[i] = (ad[i - 1] * (n - 1) + dn[i]) / n
    r = 100 - 100 / (1 + au / np.where(ad == 0, 1e-9, ad))
    r[:n] = np.nan
    return r


def opts_with(correct_value, distractors, fmt):
    """Build 4 option strings; correct placed at index derived from value (stable, not always B)."""
    vals = [correct_value] + list(distractors)
    order = sorted(range(4), key=lambda i: vals[i])  # ascending numeric order reads naturally
    options = [fmt(vals[i]) for i in order]
    return options, order.index(0)


# --------------------------------------------------------------------------- Ch4_1
def ch4_1_head_and_shoulders():
    rng = np.random.default_rng(41)
    knots = [52, 61, 50, 72, 50, 60, 50, 43]
    p = interp_path(knots, 12, rng, 0.6)
    neck, head = 50, 72
    target = neck - (head - neck)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(p, color=INK, lw=1.4)
    ax.axhline(neck, color=ACCENT, ls="--", lw=1.2)
    ax.text(1, neck + 0.6, f"Neckline {neck}", color=ACCENT)
    ax.annotate(f"High {head}", (36, head), (40, head + 2), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.set_title("Stock QRS — daily closes (hypothetical)")
    ax.set_ylabel("Price ($)")
    ax.set_ylim(25, 80)
    img = save(fig, "ch4_1_hs_top.png")
    options, k = opts_with(target, [neck - 10, neck - (head - neck) / 2 - 4, neck - (head - neck) - 8],
                           lambda v: f"${v:.0f}")
    add("Ch4_1", img,
        "The chart shows a completed head-and-shoulders top that has just broken its neckline. Using the "
        "classical measuring technique (pattern height projected from the neckline), what is the minimum "
        "downside price objective?", options, k, "H&S top measured move")


def ch4_1_rectangle():
    rng = np.random.default_rng(42)
    lo, hi = 40, 46
    knots = [36, 46, 40, 46, 40, 46, 40.5, 46, 49]
    p = interp_path(knots, 10, rng, 0.35)
    target = hi + (hi - lo)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(p, color=INK, lw=1.4)
    for lvl, lab in [(hi, "Resistance 46"), (lo, "Support 40")]:
        ax.axhline(lvl, color=ACCENT, ls="--", lw=1.1)
        ax.text(1, lvl + 0.3, lab, color=ACCENT)
    ax.set_title("ETF LMN — weekly closes (hypothetical)")
    ax.set_ylabel("Price ($)")
    ax.set_ylim(33, 56)
    img = save(fig, "ch4_1_rectangle.png")
    options, k = opts_with(target, [49, 50, 58], lambda v: f"${v:.0f}")
    add("Ch4_1", img,
        "The chart shows a rectangle that has just been resolved by a close above resistance. Using the "
        "point (dollar) height of the range, what is the minimum upside price objective?",
        options, k, "Rectangle measured move")


# --------------------------------------------------------------------------- Ch4_2
def candle_chart(seed, closes, last_two, title, fname, highlight_n=2):
    rng = np.random.default_rng(seed)
    o, h, l, c = ohlc_from_close(np.array(closes, float), rng, 0.5)
    for i, (oo, hh, ll, cc) in enumerate(last_two):
        j = len(c) - len(last_two) + i
        o[j], h[j], l[j], c[j] = oo, hh, ll, cc
    fig, ax = plt.subplots(figsize=(8, 4.2))
    draw_candles(ax, o, h, l, c)
    n = len(c)
    ax.add_patch(plt.Rectangle((n - highlight_n - 0.6, min(l[-highlight_n:]) - 0.6), highlight_n + 0.2,
                               max(h[-highlight_n:]) - min(l[-highlight_n:]) + 1.2, fill=False,
                               edgecolor=ACCENT2, lw=1.5, ls="--"))
    ax.set_xlim(-1, n + 1)
    ax.set_title(title)
    ax.set_ylabel("Price")
    return save(fig, fname)


def ch4_2_patterns():
    down = list(np.linspace(60, 47, 18))
    img = candle_chart(421, down, [(47.6, 47.9, 46.2, 46.6), (46.1, 48.9, 45.9, 48.6)],
                       "Stock UVW — daily candles (hypothetical)", "ch4_2_engulfing.png")
    add("Ch4_2", img,
        "Which two-candle pattern is shown in the highlighted box at the end of this decline?",
        ["Bullish engulfing", "Bearish harami", "Dark cloud cover", "Tweezer top"], 0,
        "Bullish engulfing recognition")

    up = list(np.linspace(40, 55, 18))
    img = candle_chart(422, up, [(55.6, 55.9, 52.4, 55.4)], "Stock XYZ — daily candles (hypothetical)",
                       "ch4_2_hanging_man.png", highlight_n=1)
    add("Ch4_2", img,
        "The highlighted candle has a small real body near the top of its range and a lower shadow more than "
        "twice the body length. Given the trend in which it appears, how should it be classified, and what "
        "does it require before acting on it?",
        ["A hammer; it is bullish and needs no confirmation",
         "A hanging man; it is a potential top warning that needs bearish confirmation on the next session",
         "A shooting star; it confirms the uptrend will continue",
         "An inverted hammer; it signals an immediate downside breakaway gap"], 1,
        "Hammer vs hanging man context")


# --------------------------------------------------------------------------- Ch4_4
def ch4_4_point_and_figure():
    # columns: (type, low, high) with 1-point boxes, 3-box reversal
    cols = [("X", 20, 25), ("O", 21, 24), ("X", 22, 25), ("O", 22, 24), ("X", 23, 28)]
    fig, ax = plt.subplots(figsize=(6.5, 5))
    for i, (t, lo, hi) in enumerate(cols):
        for y in range(lo, hi + 1):
            ax.text(i, y, t, ha="center", va="center", fontsize=13,
                    color=UP if t == "X" else DOWN, fontweight="bold")
    ax.axhline(25.5, color=ACCENT, ls="--", lw=1)
    ax.set_xlim(-0.7, len(cols) - 0.3)
    ax.set_ylim(18.5, 29.5)
    ax.set_yticks(range(19, 30))
    ax.set_xticks(range(len(cols)), [f"C{i + 1}" for i in range(len(cols))])
    ax.set_title("Point-and-figure chart: $1 box, 3-box reversal (hypothetical)")
    ax.grid(True, alpha=0.35)
    img = save(fig, "ch4_4_pf_triple_top.png")
    add("Ch4_4", img,
        "In the point-and-figure chart, column C5 rises to 28. Columns C1 and C3 both topped at 25. Which signal "
        "did C5 generate when it printed an X at 26?",
        ["A double-bottom sell signal",
         "A triple-top buy signal, since it exceeded two prior X-column highs at the same level",
         "A bearish catapult",
         "No signal, because a 3-box reversal has not occurred"], 1, "P&F triple-top breakout")


# --------------------------------------------------------------------------- Ch5_1 / Ch5_2
def ch5_1_volume():
    rng = np.random.default_rng(51)
    p = interp_path([50, 58, 55, 62, 59, 64, 61], 10, rng, 0.4)
    vol = np.r_[np.linspace(1.0, 2.4, 10), np.linspace(1.2, 1.0, 10), np.linspace(1.0, 1.7, 10),
                np.linspace(1.1, 0.9, 10), np.linspace(0.9, 1.2, 10), np.linspace(0.9, 0.8, 10), [0.8]]
    vol = vol + rng.normal(0, 0.08, len(vol))
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.3]})
    a1.plot(p, color=INK, lw=1.4)
    a1.set_title("Stock DEF — price (top) and volume (bottom), hypothetical")
    a2.bar(range(len(vol)), vol, color=MUTED)
    a2.set_ylabel("Vol (M)")
    img = save(fig, "ch5_1_volume_divergence.png")
    add("Ch5_1", img,
        "Each successive rally in this chart reaches a higher price high, but volume is lighter on each rally. "
        "What is the most appropriate interpretation?",
        ["The advance is confirmed and buying pressure is increasing",
         "Demand is weakening beneath the uptrend, a warning that the trend may be nearing exhaustion",
         "Lighter volume shows sellers are absent, which confirms the advance",
         "It signals an immediate reversal, so the position should be reversed short now"], 1,
        "Volume non-confirmation")


def ch5_2_breadth():
    rng = np.random.default_rng(52)
    idx = interp_path([4000, 4400, 4250, 4520], 25, rng, 12)
    ad = interp_path([10000, 16000, 12500, 14200], 25, rng, 120)
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True)
    a1.plot(idx, color=INK, lw=1.4)
    a1.set_title("Broad index (top) and its cumulative advance-decline line (bottom), hypothetical")
    a2.plot(ad, color=ACCENT, lw=1.4)
    a2.set_ylabel("A-D line")
    img = save(fig, "ch5_2_ad_divergence.png")
    add("Ch5_2", img,
        "The index makes a higher high at the end of the chart, while its advance-decline line makes a lower "
        "high. What does this indicate?",
        ["Broad participation confirms the new high",
         "A bullish breadth divergence that often marks a bottom",
         "Narrowing participation: a bearish breadth divergence warning of a weakening advance",
         "A breadth thrust signal"], 2, "A-D line divergence")


# --------------------------------------------------------------------------- Ch6_1
def ch6_1_vix_range():
    spot, vix = 4800, 18
    sig_m = spot * vix / 100 * np.sqrt(1 / 12)
    sig_w = spot * vix / 100 * np.sqrt(1 / 52)
    rng = np.random.default_rng(61)
    hist = spot + np.cumsum(rng.normal(0, 18, 60))
    hist = hist - hist[-1] + spot
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(range(60), hist, color=INK, lw=1.3)
    t = np.arange(0, 22)
    band = spot * vix / 100 * np.sqrt(t / 252)
    ax.fill_between(59 + t, spot - band, spot + band, color=ACCENT, alpha=0.15)
    ax.text(61, spot + 20, f"Index = {spot:,}\nVIX = {vix}", color=ACCENT)
    ax.set_title("Index with 1-standard-deviation cone implied by VIX (hypothetical)")
    img = save(fig, "ch6_1_vix_cone.png")
    options, k = opts_with(round(sig_m), [round(sig_w), round(spot * vix / 100), round(sig_m * 2)],
                           lambda v: f"±{v:,.0f} points")
    add("Ch6_1", img,
        "Using the index level and VIX shown, and the square-root-of-time rule (12 months per year), what is "
        "the approximate one-standard-deviation expected move over the next month?",
        options, k, "VIX to 1-month expected range")
    p68 = 68
    add("Ch6_1", img,
        "Under the normal-distribution assumption, roughly what share of the time should the index finish the "
        "month inside the one-standard-deviation band shown, and what is the main caveat?",
        [f"About {p68}%; real returns have fatter tails, so large moves occur more often than predicted",
         "About 95%; the band is a two-standard-deviation band",
         "About 50%, because VIX measures the median expected move",
         "About 68%, and because VIX is a forward-looking estimate the normal model tends to overstate large moves"], 0, "1-sigma probability and fat tails")


# --------------------------------------------------------------------------- Ch6_3
def ch6_3_term_structure():
    months = ["M1", "M2", "M3", "M4", "M5", "M6", "M7"]
    a = [15.2, 16.6, 17.5, 18.1, 18.6, 19.0, 19.3]
    b = [34.0, 30.5, 28.6, 27.4, 26.6, 26.0, 25.6]
    fig, ax = plt.subplots(figsize=(7.5, 4.2))
    ax.plot(months, a, "o-", color=ACCENT, label="Curve A (date 1)")
    ax.plot(months, b, "s-", color=DOWN, label="Curve B (date 2)")
    ax.set_ylabel("VIX futures price")
    ax.set_title("VIX futures term structure on two dates (hypothetical)")
    ax.legend()
    img = save(fig, "ch6_3_term_structure.png")
    add("Ch6_3", img,
        "Which statement correctly describes the two VIX futures curves?",
        ["Curve A is in backwardation and is typical of a market panic",
         "Curve A is in contango, typical of calm markets; Curve B is in backwardation, typical of stress",
         "Both curves are in contango",
         "Curve B shows that traders expect volatility to rise further over the next seven months"], 1,
        "Contango vs backwardation")
    add("Ch6_3", img,
        "If the curve keeps the shape of Curve A and spot VIX stays unchanged, what tends to happen to a "
        "long position held in the second-month (M2) contract as it approaches expiry?",
        ["It gains, because futures converge up to spot",
         "It loses value as the futures price rolls down toward the lower spot level (negative roll yield)",
         "It gains, because the futures price rises toward the higher back-month prices",
         "It gains, because contango implies rising spot volatility"], 1, "Roll yield in contango")


# --------------------------------------------------------------------------- Ch9
def ch9_2_rsi_divergence():
    rng = np.random.default_rng(92)
    p = np.r_[np.linspace(100, 100, 15), interp_path([100, 120], 20, rng, 0.2)[:-1],
              interp_path([120, 112, 116, 113, 122.5], 6, rng, 0.15)]
    p = p + rng.normal(0, 0.15, len(p))
    r = rsi(p)
    peaks = [34, len(p) - 1]
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(p, color=INK, lw=1.3)
    a1.set_title("Stock GHI — price (top) and 14-period RSI (bottom), hypothetical")
    a2.plot(r, color=ACCENT, lw=1.3)
    for lvl in (70, 30):
        a2.axhline(lvl, color=MUTED, ls="--", lw=0.8)
    a2.set_ylim(0, 100)
    img = save(fig, "ch9_2_rsi_divergence.png")
    higher_price = p[peaks[1]] > p[peaks[0]]
    lower_rsi = r[peaks[1]] < r[peaks[0]]
    assert higher_price and lower_rsi, (p[peaks], r[peaks])
    add("Ch9_1", img,
        "Price makes a higher high at the end of the chart while RSI makes a lower high. What is this called "
        "and how should it be used?",
        ["A hidden bullish divergence that favours adding to long positions",
         "Bearish (negative) divergence; a warning of fading momentum that needs price confirmation, such as a "
         "break of support",
         "Bullish (positive) divergence; momentum is confirming the new high",
         "Positive reversal; it signals the uptrend will accelerate"], 1, "RSI bearish divergence")


def ch9_2_2_macd():
    rng = np.random.default_rng(922)
    p = interp_path([62, 44, 47, 43, 58], 18, rng, 0.35)
    macd = ema(p, 12) - ema(p, 26)
    sig = ema(macd, 9)
    hist = macd - sig
    cross = [i for i in range(30, len(p)) if hist[i - 1] < 0 <= hist[i] and macd[i] < -0.4]
    assert cross
    x = cross[-1]
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.8]})
    a1.plot(p, color=INK, lw=1.3)
    a1.set_title("Stock JKL — price (top) and MACD(12,26,9) (bottom), hypothetical")
    a2.plot(macd, color=ACCENT, label="MACD")
    a2.plot(sig, color=ACCENT2, label="Signal")
    a2.bar(range(len(hist)), hist, color=[UP if v >= 0 else DOWN for v in hist], alpha=0.4)
    a2.axhline(0, color=MUTED, lw=0.8)
    a2.annotate("X", (x, macd[x]), (x - 6, macd[x] + 1.2), arrowprops=dict(arrowstyle="->"), fontweight="bold")
    a2.legend(loc="upper right")
    img = save(fig, "ch9_2_2_macd_cross.png")
    add("Ch9_2", img,
        "What event occurs at point X on the MACD panel?",
        ["MACD crosses below its signal line above zero, a bearish signal",
         "MACD crosses above its signal line while still below zero, an early bullish signal",
         "MACD crosses above the zero line",
         "The histogram makes a bearish divergence"], 1, "MACD signal-line crossover")


def ch9_3_6_stochastics():
    rng = np.random.default_rng(936)
    c = interp_path([70, 58, 61, 55, 62], 15, rng, 0.5)
    h = c + np.abs(rng.normal(0.6, 0.3, len(c)))
    lo = c - np.abs(rng.normal(0.6, 0.3, len(c)))
    n = 14
    k_fast = np.full(len(c), np.nan)
    for i in range(n - 1, len(c)):
        hh, ll = h[i - n + 1:i + 1].max(), lo[i - n + 1:i + 1].min()
        k_fast[i] = 100 * (c[i] - ll) / (hh - ll)
    k = np.convolve(np.nan_to_num(k_fast), np.ones(3) / 3, mode="full")[:len(c)]
    k[:n + 2] = np.nan
    d = np.convolve(np.nan_to_num(k), np.ones(3) / 3, mode="full")[:len(c)]
    d[:n + 4] = np.nan
    cross = [i for i in range(n + 5, len(c)) if k[i - 1] < d[i - 1] and k[i] >= d[i] and d[i] < 25]
    assert cross
    x = cross[-1]
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(c, color=INK, lw=1.3)
    a1.set_title("Stock MNO — price (top) and slow stochastic 14,3,3 (bottom), hypothetical")
    a2.plot(k, color=ACCENT, label="%K")
    a2.plot(d, color=ACCENT2, label="%D")
    for lvl in (80, 20):
        a2.axhline(lvl, color=MUTED, ls="--", lw=0.8)
    a2.annotate("Y", (x, k[x]), (x - 5, k[x] + 30), arrowprops=dict(arrowstyle="->"), fontweight="bold")
    a2.set_ylim(0, 100)
    a2.legend(loc="upper left")
    img = save(fig, "ch9_3_6_stoch_cross.png")
    add("Ch9_2", img,
        "What does the stochastic oscillator show at point Y?",
        ["%K crosses below %D in overbought territory",
         "%K crosses above %D in or near oversold territory, a potential buy setup best taken in the direction "
         "of the larger trend",
         "%D crosses above 80, confirming a new uptrend",
         "A failure swing that signals a top"], 1, "Stochastic crossover in oversold zone")


def ch9_4_bollinger():
    rng = np.random.default_rng(94)
    rets = np.r_[rng.normal(0, 1.2, 40), rng.normal(0, 0.25, 35), rng.normal(0.9, 1.0, 12)]
    c = 100 + np.cumsum(rets)
    n = 20
    mid = np.array([c[max(0, i - n + 1):i + 1].mean() for i in range(len(c))])
    sd = np.array([c[max(0, i - n + 1):i + 1].std() for i in range(len(c))])
    up, dn = mid + 2 * sd, mid - 2 * sd
    mid[:n - 1] = up[:n - 1] = dn[:n - 1] = np.nan
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(c, color=INK, lw=1.3)
    ax.plot(mid, color=MUTED, lw=1)
    ax.plot(up, color=ACCENT, lw=1)
    ax.plot(dn, color=ACCENT, lw=1)
    bw = (up - dn) / mid
    j = int(np.nanargmin(bw[n:])) + n
    ax.axvspan(j - 7, j + 3, color=ACCENT2, alpha=0.12)
    ax.text(j - 6, np.nanmax(up[n:]) - 1, "Z", fontweight="bold")
    ax.set_title("Stock PQR with 20-period, 2-standard-deviation Bollinger Bands (hypothetical)")
    img = save(fig, "ch9_4_squeeze.png")
    add("Ch9_4", img,
        "What does the narrowing of the bands in shaded region Z represent, and what does it imply?",
        ["A trend that has ended; prices will stay range-bound",
         "A volatility contraction (squeeze) that often precedes an expansion in volatility; the direction of "
         "the breakout must come from other evidence",
         "A signal that the prior trend will resume in the same direction",
         "A bullish signal, because narrow bands mean the stock is consolidating above its average"], 1, "Bollinger squeeze")
    pbs = (c - dn) / (up - dn)
    i = max(k for k in range(n, len(c)) if 0.6 <= pbs[k] <= 0.85)
    pb = pbs[i]
    c, up, dn, mid = c[:i + 1], up[:i + 1], dn[:i + 1], mid[:i + 1]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(c[-40:], color=INK, lw=1.3)
    ax.plot(up[-40:], color=ACCENT, lw=1)
    ax.plot(dn[-40:], color=ACCENT, lw=1)
    ax.plot(mid[-40:], color=MUTED, lw=1)
    ax.text(25, np.nanmin(dn[-40:]) + 0.5,
            f"Last bar: close {c[i]:.2f}, upper band {up[i]:.2f}, lower band {dn[i]:.2f}", color=INK)
    ax.set_title("Stock PQR — latest 40 bars with Bollinger Bands (hypothetical)")
    img = save(fig, "ch9_4_percent_b.png")
    options, k = opts_with(round(pb, 2), [round(pb - 0.35, 2), round(1 - pb, 2) if abs(1 - 2 * pb) > 0.15
                                          else round(pb + 0.3, 2), round(pb + 0.6, 2)], lambda v: f"{v:.2f}")
    add("Ch9_4", img, "Using the values printed on the chart, what is %b for the last bar?", options, k,
        "%b calculation")


# --------------------------------------------------------------------------- Ch10
def ch10_1_rs_line():
    rng = np.random.default_rng(101)
    stock = 50 * np.exp(np.cumsum(rng.normal(0.002, 0.01, 120)))
    bench = 1000 * np.exp(np.cumsum(rng.normal(0.0045, 0.008, 120)))
    rs = stock / bench
    assert stock[-1] > stock[0] and rs[-1] < rs[0]
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True)
    a1.plot(stock, color=INK)
    a1.set_title("Stock STU price (top) and its ratio to a benchmark index (bottom), hypothetical")
    a2.plot(rs / rs[0] * 100, color=ACCENT)
    a2.set_ylabel("RS (start = 100)")
    img = save(fig, "ch10_1_rs_line.png")
    add("Ch10_1", img,
        "The stock's price has risen over the period, but its relative strength line has fallen. What is "
        "the correct conclusion?",
        ["The stock has outperformed the benchmark",
         "The stock has risen in absolute terms but underperformed the benchmark, which rose faster",
         "The benchmark has fallen while the stock has risen",
         "The stock has outperformed, because its price trend is up"], 1, "Absolute vs relative performance")


def ch10_1_2_rrg():
    tails = {
        "A": [(103, 103.5), (104, 102.5), (104.6, 101.2), (104.8, 99.6)],
        "B": [(96.5, 98.0), (97.0, 99.5), (97.4, 101.0), (97.9, 102.2)],
        "C": [(97.5, 97.0), (96.8, 97.6), (96.2, 98.2), (95.8, 98.5)],
        "D": [(101.0, 101.5), (102.0, 102.3), (103.0, 102.8), (104.1, 103.0)],
    }
    fig, ax = plt.subplots(figsize=(6.2, 6))
    ax.axhline(100, color=INK, lw=0.8)
    ax.axvline(100, color=INK, lw=0.8)
    for (x, y, lab) in [(103.5, 105.3, "LEADING"), (103.3, 94.8, "WEAKENING"), (95, 94.8, "LAGGING"),
                        (95, 105.3, "IMPROVING")]:
        ax.text(x, y, lab, color=MUTED, fontweight="bold")
    for name, pts in tails.items():
        xs, ys = zip(*pts)
        ax.plot(xs, ys, "-", color=ACCENT, lw=1)
        ax.plot(xs[:-1], ys[:-1], "o", color=ACCENT, ms=3)
        ax.plot(xs[-1], ys[-1], "o", color=ACCENT2, ms=8)
        ax.text(xs[-1] + 0.25, ys[-1] + 0.25, name, fontweight="bold")
    ax.set_xlim(94, 106)
    ax.set_ylim(94, 106)
    ax.set_xlabel("Relative-strength ratio (normalised, 100 = benchmark)")
    ax.set_ylabel("Relative-strength momentum (normalised)")
    ax.set_title("Relative rotation graph — four hypothetical sectors\n(large dot = latest week)")
    img = save(fig, "ch10_1_2_rrg.png")

    def quad(x, y):
        return ("LEADING" if y >= 100 else "WEAKENING") if x >= 100 else ("IMPROVING" if y >= 100 else "LAGGING")
    last = {k: v[-1] for k, v in tails.items()}
    imp = [k for k, (x, y) in last.items() if quad(x, y) == "IMPROVING"]
    weak = [k for k, (x, y) in last.items() if quad(x, y) == "WEAKENING"]
    assert len(imp) == 1 and len(weak) == 1
    names = sorted(tails)
    add("Ch10_1", img,
        "Which sector is currently in the IMPROVING quadrant (relative trend still below the benchmark, but "
        "relative momentum above 100)?", [f"Sector {n}" for n in names], names.index(imp[0]),
        "RRG quadrant reading")
    add("Ch10_1", img,
        "Sector A has just crossed into the WEAKENING quadrant. What does that tell you?",
        ["Its relative trend is now below the benchmark",
         "It is still outperforming on relative trend, but its relative momentum has dropped below 100, so "
         "outperformance is losing steam",
         "It has started a new period of leadership",
         "It has moved from LAGGING and is starting to outperform"], 1, "Leading to weakening rotation")


# --------------------------------------------------------------------------- Ch11
def ch11_1_translation():
    t = np.linspace(0, 1, 200)
    peak = 0.7
    y = np.where(t <= peak, np.sin(np.pi / 2 * t / peak), np.cos(np.pi / 2 * (t - peak) / (1 - peak)))
    y = 10 + 8 * y + 6 * t
    fig, ax = plt.subplots(figsize=(8, 4))
    ax.plot(t * 40, y, color=INK, lw=1.6)
    ax.axvline(20, color=ACCENT, ls="--")
    ax.text(20.4, y.min(), "cycle midpoint", color=ACCENT)
    ax.set_xlabel("Bars from cycle trough")
    ax.set_title("One idealised 40-bar cycle, trough to trough (hypothetical)")
    img = save(fig, "ch11_1_right_translation.png")
    add("Ch11_1", img,
        "The cycle's peak occurs well after the midpoint between its two troughs. What is this called, and "
        "what does it usually say about the underlying longer-term trend?",
        ["Left translation; the longer trend is bearish",
         "Right translation; the longer trend is bullish",
         "Right translation; the longer trend is bearish",
         "Left translation; the longer trend is bullish"], 1, "Cycle translation")


def ch11_4_elliott():
    pts = [(0, 100), (8, 120), (13, 110), (25, 150), (31, 117), (40, 160)]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    xs, ys = zip(*pts)
    ax.plot(xs, ys, color=INK, lw=1.6, marker="o")
    for i, (x, y) in enumerate(pts[1:], 1):
        ax.text(x + 0.4, y + (2 if i % 2 else -5), str(i), fontweight="bold", color=ACCENT)
    for (x, y) in pts:
        ax.text(x + 0.4, y - 5 if (x, y) in pts[1::2] else y + 2, f"{y}", color=MUTED, fontsize=8)
    ax.axhline(120, color=DOWN, ls=":", lw=1)
    ax.set_title("A proposed five-wave impulse count (hypothetical)")
    img = save(fig, "ch11_4_overlap.png")
    add("Ch11_4", img,
        "An analyst labels the advance as a five-wave impulse, as shown. Which rule of impulse waves does "
        "this count break?",
        ["Wave 2 retraced more than 100% of wave 1",
         "Wave 3 is the shortest of waves 1, 3 and 5",
         "Wave 4 has entered the price territory of wave 1",
         "Wave 5 is longer than wave 3, which is not permitted"], 2, "Impulse-wave overlap rule")


# --------------------------------------------------------------------------- Ch12
def ch12_1_trade_distribution():
    rng = np.random.default_rng(121)
    losses = -np.abs(rng.normal(1.0, 0.35, 140))
    wins = np.abs(rng.lognormal(0.9, 0.7, 60))
    r = np.r_[losses, wins]
    win_rate = (r > 0).mean()
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.hist(r, bins=40, color=ACCENT, alpha=0.8)
    ax.axvline(0, color=INK, lw=0.8)
    ax.set_xlabel("Trade result (multiples of initial risk, R)")
    ax.set_ylabel("Number of trades")
    ax.set_title(f"Distribution of 200 trades from a hypothetical system (win rate {win_rate:.0%})")
    img = save(fig, "ch12_1_trade_hist.png")
    add("Ch12_1", img,
        "This trade distribution has many small losses and a few very large winners. Which type of trading "
        "model typically produces this profile?",
        ["Mean-reversion model with a high win rate",
         "Trend-following model: low win rate, positively skewed results",
         "Market-making model with symmetric results",
         "A breakout model, which must have a win rate above 50% to be profitable"], 1, "Trend-following trade profile")


def ch12_2_drawdown():
    peak_v, trough_v = 148_000, 103_600
    rng = np.random.default_rng(122)
    eq = interp_path([100_000, 148_000, 103_600, 139_000], 30, rng, 1500)
    i_peak, i_trough = 30, 60
    eq[i_peak], eq[i_trough] = peak_v, trough_v
    mdd = (peak_v - trough_v) / peak_v
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(eq, color=INK, lw=1.4)
    ax.annotate(f"Peak ${peak_v:,.0f}", (i_peak, peak_v), (i_peak - 12, peak_v + 4000),
                arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate(f"Trough ${trough_v:,.0f}", (i_trough, trough_v), (i_trough - 6, trough_v - 9000),
                arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.set_ylim(85_000, 160_000)
    ax.set_title("Equity curve of a hypothetical strategy")
    ax.set_ylabel("Account equity ($)")
    img = save(fig, "ch12_2_drawdown.png")
    options, k = opts_with(round(mdd * 100), [round((peak_v - trough_v) / trough_v * 100) + 3,
                                             round((139_000 - trough_v) / 139_000 * 100) - 5, 44],
                           lambda v: f"{v:.0f}%")
    add("Ch12_2", img, "What is the maximum drawdown shown on this equity curve, measured from peak?",
        options, k, "Maximum drawdown")


CORE = [ch4_1_head_and_shoulders, ch4_1_rectangle, ch4_2_patterns, ch4_4_point_and_figure, ch5_1_volume,
        ch5_2_breadth, ch6_1_vix_range, ch6_3_term_structure, ch9_2_rsi_divergence, ch9_2_2_macd,
        ch9_3_6_stochastics, ch9_4_bollinger, ch10_1_rs_line, ch10_1_2_rrg, ch11_1_translation,
        ch11_4_elliott, ch12_1_trade_distribution, ch12_2_drawdown]


def main():
    """Run the core set, then every tools/charts/*.py module's register() function.

    Extension modules do `from generate_chart_questions import *` to reuse the helpers;
    file keys passed to add() use the official TOC numbering (e.g. "Ch9_1", "Ch11_2").
    """
    import glob
    import importlib.util
    import sys
    sys.modules.setdefault("generate_chart_questions", sys.modules[__name__])
    only = os.environ.get("CHART_ONLY")
    if not only:
        for fn in CORE:
            fn()
    for path in sorted(glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), "charts", "*.py"))):
        if only and os.path.basename(path)[:-3] != only:
            continue
        spec = importlib.util.spec_from_file_location(os.path.basename(path)[:-3], path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        mod.register()
    total = 0
    for ch, qs in sorted(BANK.items()):
        with open(os.path.join(OUT, f"{ch}.json"), "w") as f:
            json.dump(qs, f, indent=2)
        total += len(qs)
    print(f"{total} chart questions in {len(BANK)} files; images in {IMG}")
    for ch, qs in sorted(BANK.items()):
        print(f"  {ch}: {len(qs)}")


if __name__ == "__main__":
    main()
