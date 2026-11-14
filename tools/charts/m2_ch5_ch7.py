"""Chart questions for Ch5 (volume & breadth), Ch6 (volatility) and Ch7 (sentiment).

All data synthetic; every numeric key is computed from the plotted data.
"""
from generate_chart_questions import *  # noqa: F401,F403

P = "m2_ch5_ch7"


def place(correct, distractors, pos):
    """Insert the correct option at index pos among three distractors."""
    opts = list(distractors)
    opts.insert(pos, correct)
    assert len(opts) == 4
    return opts, pos


def two_panel(ratio=(3, 1.4)):
    return plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": list(ratio)})


# =========================================================================== Ch5_1
def ch5_1_obv_divergence():
    rng = np.random.default_rng(5101)
    p = interp_path([40, 52, 45, 55, 53.5], 15, rng, 0.5)
    p[:30] = np.minimum(p[:30], 51.6)
    p[15] = 52
    p = np.minimum(p, 55)
    n = len(p)
    vol = np.r_[np.full(15, 2.2), np.full(15, 2.0), np.full(15, 0.8), np.full(16, 1.0)] + rng.normal(0, 0.12, n)
    vol = np.clip(vol, 0.3, None)
    d = np.sign(np.diff(p, prepend=p[0]))
    obv = np.cumsum(d * vol)
    i1, i2 = 15, 45
    assert p[i2] > p[i1] and obv[i2] < obv[i1]
    assert p.argmax() == i2 and p[:30].argmax() == i1
    fig, (a1, a2) = two_panel()
    a1.plot(p, color=INK, lw=1.4)
    a1.annotate(f"High {p[i1]:.0f}", (i1, p[i1]), (i1 - 6, p[i1] + 2.5), arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.annotate(f"Higher high {p[i2]:.0f}", (i2, p[i2]), (i2 - 14, p[i2] + 1.5),
                arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.set_ylim(36, 60)
    a1.set_ylabel("Price ($)")
    a1.set_title("Stock GHJ — price (top) and On-Balance Volume (bottom), hypothetical")
    a2.plot(obv, color=ACCENT, lw=1.4)
    a2.plot([i1, i2], [obv[i1], obv[i2]], "o--", color=ACCENT2, ms=4)
    a2.text(i1 + 1, obv[i1] + 1, f"OBV {obv[i1]:.1f}M", color=ACCENT2, fontsize=9)
    a2.text(i2 + 1, obv[i2] + 1, f"OBV {obv[i2]:.1f}M", color=ACCENT2, fontsize=9)
    a2.set_ylim(obv.min() - 3, obv.max() + 6)
    a2.set_ylabel("OBV (M)")
    img = save(fig, f"{P}_obv_divergence.png")
    opts, k = place(
        "A bearish divergence: volume flow is not confirming the new price high, warning of distribution",
        ["A bullish confirmation: OBV is still well above its starting level, so accumulation remains intact "
         "and the higher price high is validated",
         "A bullish divergence, because OBV fell while price rose, implying sellers are exhausted",
         "No signal, because OBV only matters when it crosses its own zero line"], 2)
    add("Ch5_1", img,
        "Price makes a higher high at the end of the chart while On-Balance Volume makes a lower high. "
        "What is the best interpretation?", opts, k, "OBV divergence")


def ch5_1_selling_climax():
    rng = np.random.default_rng(5102)
    close = np.r_[interp_path([70, 64, 66, 57], 10, rng, 0.5), np.linspace(56, 51.5, 5)[1:]]
    o, h, l, c = ohlc_from_close(close, rng, 0.5)
    # climax bar, then automatic rally
    cl = (51.0, 51.6, 45.2, 49.8)
    rally = [(49.9, 51.4, 49.6, 51.1), (51.0, 52.6, 50.8, 52.4), (52.5, 53.9, 52.2, 53.6)]
    o = np.r_[o, [cl[0]], [r[0] for r in rally]]
    h = np.r_[h, [cl[1]], [r[1] for r in rally]]
    l = np.r_[l, [cl[2]], [r[2] for r in rally]]
    c = np.r_[c, [cl[3]], [r[3] for r in rally]]
    n = len(c)
    ic = n - 4
    vol = np.r_[1.2 + rng.normal(0, 0.12, ic), [6.1], [2.6, 2.1, 1.8]]
    avg = vol[:ic].mean()
    ratio = vol[ic] / avg
    assert ratio > 4 and l[ic] == l.min()
    fig, (a1, a2) = two_panel()
    draw_candles(a1, o, h, l, c)
    a1.annotate(f"Low {l[ic]:.1f}", (ic, l[ic]), (ic - 8, l[ic] - 0.5), arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.set_ylim(42, 74)
    a1.set_ylabel("Price ($)")
    a1.set_title("Stock KLM — daily candles and volume, hypothetical")
    cols = [MUTED] * n
    cols[ic] = DOWN
    a2.bar(range(n), vol, color=cols)
    a2.axhline(avg, color=ACCENT, ls="--", lw=1)
    a2.text(0.5, avg + 0.3, f"Avg prior volume {avg:.2f}M", color=ACCENT, fontsize=9)
    a2.text(ic - 9.5, vol[ic] - 0.8, f"{vol[ic]:.1f}M (≈{ratio:.1f}× avg)", color=DOWN, fontsize=9)
    a2.set_ylim(0, 7.5)
    a2.set_ylabel("Vol (M)")
    a2.set_xlim(-1, n + 1)
    img = save(fig, f"{P}_selling_climax.png")
    opts, k = place(
        "A selling climax; a bottom is better confirmed if a later retest of the low area occurs on much lighter "
        "volume and holds above the climax low",
        ["A selling climax; a bottom is confirmed only if the retest undercuts the climax low on even heavier volume",
         "A breakaway move lower; the heavy volume confirms a new leg of the downtrend has begun",
         "A blow-off top; the long lower shadow shows that supply is now overwhelming demand"], 0)
    add("Ch5_1", img,
        f"After an extended decline, Stock KLM trades on about {ratio:.1f}× its average volume with a wide range "
        "and a close well off the low, followed by a sharp bounce. What is this, and what would best confirm a "
        "durable low?", opts, k, "Selling climax and secondary test")


def ch5_1_breakout_volume():
    rng = np.random.default_rng(5103)
    res = 48.0
    n = 90
    p = np.r_[interp_path([42, 47.4, 43, 47.5, 47.2], 10, rng, 0.3),
              [48.6, 48.3, 47.6, 46.4, 45.5],  # breakout A then failure
              interp_path([45.5, 47.2, 44.6, 47.4, 47.3], 8, rng, 0.25),
              [48.9, 49.6, 50.4, 51.3, 51.8, 52.6, 53.1, 53.9, 54.2, 55.0, 55.6, 56.1, 56.8, 57.2, 57.9, 58.3,
               58.9, 59.2]]
    n = len(p)
    iA, iB = 41, 79
    p[:iA] = np.minimum(p[:iA], 47.7)
    p[iA + 1:iB] = np.minimum(p[iA + 1:iB], 47.7)
    assert p[iA] > res and p[iA - 1] < res and p[iB] > res and p[iB - 1] < res, (p[iA - 1:iA + 1], p[iB - 1:iB + 1])
    vol = 1.4 + rng.normal(0, 0.15, n)
    vol[iA] = 1.1
    vol[iB] = 3.4
    vol[iB + 1:iB + 5] = [2.6, 2.3, 2.1, 1.9]
    avg20 = np.array([vol[max(0, i - 20):i].mean() if i > 0 else vol[0] for i in range(n)])  # prior 20 days
    rA, rB = vol[iA] / avg20[iA], vol[iB] / avg20[iB]
    assert rA < 1 and rB > 2
    fig, (a1, a2) = two_panel()
    a1.plot(p, color=INK, lw=1.4)
    a1.axhline(res, color=ACCENT, ls="--", lw=1.1)
    a1.text(1, res + 0.4, f"Resistance {res:.0f}", color=ACCENT)
    for i, lab in [(iA, "A"), (iB, "B")]:
        a1.annotate(f"Breakout {lab}", (i, p[i]), (i - 6, p[i] + 4), arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.set_ylim(38, 64)
    a1.set_ylabel("Price ($)")
    a1.set_title("Stock NOP — closes, volume and 20-day average volume, hypothetical")
    cols = [MUTED] * n
    cols[iA] = cols[iB] = ACCENT2
    a2.bar(range(n), vol, color=cols)
    a2.plot(avg20, color=ACCENT, lw=1.2, label="20-day avg volume")
    a2.text(iA - 13, 3.2, f"A: {vol[iA]:.1f}M vs avg {avg20[iA]:.2f}M", fontsize=8.5, color=INK)
    a2.text(iB - 22, 3.9, f"B: {vol[iB]:.1f}M vs avg {avg20[iB]:.2f}M", fontsize=8.5, color=INK)
    a2.set_ylim(0, 4.6)
    a2.set_ylabel("Vol (M)")
    a2.legend(loc="upper left", fontsize=8)
    img = save(fig, f"{P}_breakout_volume.png")
    opts, k = place(
        f"Breakout B, at about {rB:.1f}× average volume; A came on below-average volume and lacked conviction",
        [f"Breakout A, because a breakout on light volume ({rA:.1f}× average) shows there are few sellers left",
         f"Breakout B, at about {vol[iB] - avg20[iB]:.1f}× average volume, though volume is irrelevant to breakout validity",
         "Both equally, since each produced a close above resistance"], 1)
    add("Ch5_1", img,
        "Two closes above resistance are marked A and B. Using the breakout-day volume relative to its 20-day "
        "average (values annotated), which breakout carried stronger volume confirmation?", opts, k,
        "Breakout volume confirmation")


def ch5_1_downtrend_volume():
    rng = np.random.default_rng(5104)
    knots = [80, 70, 74, 63, 67, 56, 59, 50]
    p = interp_path(knots, 10, rng, 0.45)
    n = len(p)
    leg_vol = [2.4, 1.1, 2.6, 1.0, 2.8, 0.9, 3.0]
    vol = np.concatenate([[leg_vol[0]]] + [np.full(10, v) for v in leg_vol]) + rng.normal(0, 0.15, n)
    means = [vol[i * 10 + 1:(i + 1) * 10 + 1].mean() for i in range(7)]
    assert min(means[0::2]) > max(means[1::2]) * 1.8
    fig, (a1, a2) = two_panel()
    a1.plot(p, color=INK, lw=1.4)
    a1.set_ylim(44, 86)
    a1.set_ylabel("Price ($)")
    a1.set_title("Stock QRS — price and volume by swing leg, hypothetical")
    for i in range(7):
        col = DOWN if i % 2 == 0 else UP
        a2.bar(range(i * 10 + 1, (i + 1) * 10 + 1), vol[i * 10 + 1:(i + 1) * 10 + 1], color=col, alpha=0.75)
        a2.text(i * 10 + 2, 3.7, f"{means[i]:.1f}M", fontsize=8.5, color=col)
    a2.set_ylim(0, 4.4)
    a2.set_ylabel("Vol (M)")
    a2.set_title("Volume — figure above each leg = its average daily volume", fontsize=9)
    img = save(fig, f"{P}_downtrend_volume.png")
    opts, k = place(
        "Volume expands on declines and contracts on rebounds, confirming the downtrend; rebounds look corrective",
        ["Heavy volume on each decline signals capitulation, so the downtrend is likely complete",
         "Light volume on rebounds shows sellers are absent, a bullish sign that the trend is turning",
         "Volume is not informative in downtrends because prices can fall of their own weight"], 3)
    add("Ch5_1", img,
        "Average volume is annotated for each swing leg (red = declining legs, green = rebounds). What does the "
        "volume pattern say about the trend?", opts, k, "Volume-confirmed downtrend")


# =========================================================================== Ch5_2
def ch5_2_pct_above_200():
    rng = np.random.default_rng(5201)
    idx = interp_path([4300, 4800, 4550, 4950], 30, rng, 18)
    pct = interp_path([60, 78, 55, 54], 30, rng, 2.0)
    i1, i2 = 30, 90
    assert idx[i2] > idx[i1] and pct[i2] < pct[i1] - 15
    fig, (a1, a2) = two_panel((3, 1.8))
    a1.plot(idx, color=INK, lw=1.4)
    a1.annotate(f"{idx[i1]:,.0f}", (i1, idx[i1]), (i1 - 8, idx[i1] + 60), arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.annotate(f"{idx[i2]:,.0f}", (i2, idx[i2]), (i2 - 12, idx[i2] + 30), arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.set_ylim(4150, 5100)
    a1.set_title("Index XYZ (top) and % of members above their 200-day MA (bottom), hypothetical")
    a2.plot(pct, color=ACCENT, lw=1.4)
    a2.plot([i1, i2], [pct[i1], pct[i2]], "o", color=ACCENT2)
    a2.text(i1 + 1, pct[i1] + 2, f"{pct[i1]:.0f}%", color=ACCENT2)
    a2.text(i2 - 6, pct[i2] + 5, f"{pct[i2]:.0f}%", color=ACCENT2)
    a2.set_ylim(35, 95)
    a2.set_ylabel("% > 200-day MA")
    img = save(fig, f"{P}_pct_above_200.png")
    opts, k = place(
        "A bearish breadth divergence: the advance rests on narrowing leadership",
        ["Confirmation of the new high, because more than half of the members remain above their 200-day moving "
         "average, the usual threshold for a healthy market",
         "A bullish signal, because the indicator has reset from overbought and has room to rise",
         "An oversold reading that typically marks an intermediate bottom"], 0)
    add("Ch5_2", img,
        f"The index rises from about {idx[i1]:,.0f} to a new high near {idx[i2]:,.0f}, while the percentage of "
        f"members above their 200-day moving average falls from {pct[i1]:.0f}% to {pct[i2]:.0f}%. What does "
        "this indicate?", opts, k, "% above 200-day MA divergence")


def ch5_2_new_highs_lows():
    rng = np.random.default_rng(5202)
    idx = interp_path([2100, 2400, 2280, 2460], 20, rng, 10)
    n = len(idx)
    nh = np.clip(interp_path([120, 210, 90, 95], 20, rng, 15), 5, None)
    nl = np.clip(interp_path([40, 25, 90, 120], 20, rng, 10), 5, None)
    i1, i2 = 20, 60
    nh[i1], nl[i1], nh[i2], nl[i2] = 210, 25, 95, 120
    net1, net2 = nh[i1] - nl[i1], nh[i2] - nl[i2]
    assert idx[i2] > idx[i1] and net2 < 0 < net1
    fig, (a1, a2) = two_panel((2.6, 2))
    a1.plot(idx, color=INK, lw=1.4)
    a1.plot([i1, i2], [idx[i1], idx[i2]], "o", color=ACCENT2)
    a1.text(i1 - 3, idx[i1] + 20, "High 1", color=ACCENT2)
    a1.text(i2 - 6, idx[i2] + 20, "High 2", color=ACCENT2)
    a1.set_ylim(2050, 2530)
    a1.set_title("Index RST (top); daily new 52-week highs and lows (bottom), hypothetical")
    a2.bar(range(n), nh, color=UP, alpha=0.7, label="New highs")
    a2.bar(range(n), -nl, color=DOWN, alpha=0.7, label="New lows (shown negative)")
    a2.axhline(0, color=INK, lw=0.8)
    a2.text(i1 + 1, 220, f"NH {nh[i1]:.0f} / NL {nl[i1]:.0f}", fontsize=8.5)
    a2.text(i2 - 18, 160, f"NH {nh[i2]:.0f} / NL {nl[i2]:.0f}", fontsize=8.5)
    a2.set_ylim(-190, 260)
    a2.legend(loc="lower left", fontsize=8)
    img = save(fig, f"{P}_nh_nl.png")
    opts, k = place(
        f"{net2:+.0f}; net new highs turned negative at a price high, a bearish non-confirmation",
        [f"{nh[i2] + nl[i2]:+.0f}; total new-high and new-low activity is rising, confirming the trend",
         f"{-net2:+.0f}; net new highs remain positive, confirming the new price high",
         f"{net2:+.0f}; negative net new highs at a price high is a bullish sign of a washed-out market"], 3)
    add("Ch5_2", img,
        "Read the new-highs and new-lows counts annotated at High 2. What is the net new highs (NH − NL) "
        "reading on that day, and what does it imply?", opts, k, "New highs - new lows")


def ch5_2_mcclellan():
    rng = np.random.default_rng(5203)
    n = 90
    net = np.r_[rng.normal(-250, 300, 45), rng.normal(380, 260, 45)]
    osc_full = ema(net, 19) - ema(net, 39)
    osc = np.round(osc_full)
    s0_i = n - 5
    assert s0_i == 85
    summ = np.cumsum(osc) + 800
    shown = osc[s0_i + 1:]
    s0 = summ[s0_i]
    ans = s0 + shown.sum()
    assert np.all(shown > 0) and np.isclose(ans, summ[-1])
    fig, ax = plt.subplots(figsize=(8, 4.2))
    cols = [UP if v >= 0 else DOWN for v in osc]
    for i in range(s0_i, n):
        cols[i] = ACCENT2
    ax.bar(range(n), osc, color=cols, alpha=0.8)
    ax.axhline(0, color=INK, lw=0.8)
    lines = [f"Summation Index at close of day {s0_i}: {s0:,.0f}", "Oscillator readings:"]
    lines += [f"   day {i}: {osc[i]:+.0f}" for i in range(s0_i + 1, n)]
    ax.text(2, osc.max() * 1.4, "\n".join(lines), fontsize=9, va="top",
            bbox=dict(fc="white", ec=ACCENT2, alpha=0.95))
    ax.set_xlim(-1, n + 1)
    ax.set_ylim(min(osc.min() * 1.3, -40), osc.max() * 1.45)
    ax.set_xlabel("Trading day (orange bars = days 85–89)")
    ax.set_ylabel("McClellan Oscillator")
    ax.set_title("McClellan Oscillator (19/39-day EMAs of net advances), hypothetical")
    img = save(fig, f"{P}_mcclellan.png")
    opts, k = opts_with(ans, [s0 + shown[-1], s0 - shown.sum(), s0 + shown.mean()], lambda v: f"{v:,.0f}")
    add("Ch5_2", img,
        "The McClellan Summation Index is the running total of the daily McClellan Oscillator. Using the "
        "Summation Index value marked and the four subsequent oscillator readings annotated, what is the "
        "Summation Index at the end of the chart?", opts, k, "McClellan Summation Index")


def ch5_2_breadth_thrust():
    rng = np.random.default_rng(5204)
    ratio = np.r_[rng.uniform(0.42, 0.58, 30), rng.uniform(0.18, 0.36, 12), rng.uniform(0.78, 0.92, 9),
                  rng.uniform(0.55, 0.68, 14)]
    e = ema(ratio, 10)
    below = np.where(e < 0.40)[0]
    above = np.where(e > 0.615)[0]
    d1 = above[above > below.min()][0]
    d0 = below[below < d1].max()
    days = d1 - d0
    assert 0 < days <= 10 and d1 - below.min() > 10, days
    n = len(e)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(e * 100, color=ACCENT, lw=1.6, label="10-day EMA of advances / (advances + declines)")
    ax.axhline(40, color=DOWN, ls="--", lw=1)
    ax.axhline(61.5, color=UP, ls="--", lw=1)
    ax.text(1, 41, "40%", color=DOWN)
    ax.text(1, 62.5, "61.5%", color=UP)
    ax.plot([d0, d1], [e[d0] * 100, e[d1] * 100], "o", color=ACCENT2)
    ax.annotate(f"Day {d0}: {e[d0] * 100:.1f}%\n(last reading < 40%)", (d0, e[d0] * 100), (d0 - 22, 26),
                arrowprops=dict(arrowstyle="->", color=MUTED), fontsize=9)
    ax.annotate(f"Day {d1}: {e[d1] * 100:.1f}%", (d1, e[d1] * 100), (d1 + 3, 72),
                arrowprops=dict(arrowstyle="->", color=MUTED), fontsize=9)
    ax.set_ylim(20, 80)
    ax.set_xlim(0, n)
    ax.set_xlabel("Trading day")
    ax.set_ylabel("%")
    ax.legend(loc="upper left", fontsize=8)
    ax.set_title("Breadth thrust indicator, hypothetical exchange")
    img = save(fig, f"{P}_breadth_thrust.png")
    opts, k = place(
        f"Yes: the move from below 40% to above 61.5% took {days} trading days, within the 10-day window; a bullish signal",
        [f"No: the count must start from the first reading below 40% (day {below.min()}), so the move took {d1 - below.min()} days, too slow",
         f"Yes, but it is bearish: after {days} days of heavy buying the market is overbought and due to fall",
         f"No: the daily ratio must exceed 61.5% on a single day, so the {days}-day average move does not count"], 2)
    add("Ch5_2", img,
        "A breadth thrust is defined here as the 10-day EMA of advances / (advances + declines) rising from below "
        "40% to above 61.5% within 10 trading days. Using the annotated days, did a breadth thrust occur?",
        opts, k, "Breadth thrust")


# =========================================================================== Ch6_1
def ch6_1_weekly_sigma():
    spot, vix = 5200, 22
    sw = spot * vix / 100 / np.sqrt(52)
    sd = spot * vix / 100 / np.sqrt(252)
    sm = spot * vix / 100 / np.sqrt(12)
    rng = np.random.default_rng(6101)
    hist = spot + np.cumsum(rng.normal(0, 25, 80))
    hist = hist - hist[-1] + spot
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(hist, color=INK, lw=1.3)
    ax.plot(79, spot, "o", color=ACCENT)
    ax.text(50, hist.max() + 30, f"Latest close = {spot:,}\nVIX = {vix}", color=ACCENT,
            bbox=dict(fc="white", ec=ACCENT, alpha=0.9))
    ax.set_ylim(hist.min() - 100, hist.max() + 200)
    ax.set_xlabel("Trading day")
    ax.set_title("Index XYZ daily closes with current VIX reading (hypothetical)")
    img = save(fig, f"{P}_weekly_sigma.png")
    opts, k = opts_with(sw, [sd, sm, spot * vix / 100 / 52], lambda v: f"±{v:,.0f} points")
    add("Ch6_1", img,
        "Using the index level and VIX shown and the square-root-of-time rule (52 weeks per year), what is the "
        "approximate one-standard-deviation expected move over the next week?", opts, k, "Weekly 1σ from VIX")


def ch6_1_daily_2sigma():
    spot, vix = 3950, 28
    sd = spot * vix / 100 / np.sqrt(252)
    rng = np.random.default_rng(6102)
    hist = spot + np.cumsum(rng.normal(0, 45, 60))
    hist = hist - hist[-1] + spot
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(hist, color=INK, lw=1.3)
    ax.fill_between([59, 60], [spot - 2 * sd] * 2, [spot + 2 * sd] * 2, color=ACCENT2, alpha=0.25)
    ax.fill_between([59, 60], [spot - sd] * 2, [spot + sd] * 2, color=ACCENT, alpha=0.3)
    ax.text(38, hist.max() + 40, f"Close = {spot:,}\nVIX = {vix}", color=ACCENT, bbox=dict(fc="white", ec=ACCENT))
    ax.text(60.4, spot, "next-day\n1σ / 2σ\nbands", fontsize=8, color=MUTED, va="center")
    ax.set_xlim(0, 65)
    ax.set_ylim(hist.min() - 150, hist.max() + 220)
    ax.set_xlabel("Trading day")
    ax.set_title("Index XYZ with next-day volatility bands implied by VIX (hypothetical)")
    img = save(fig, f"{P}_daily_2sigma.png")
    f = lambda w: f"{spot - w:,.0f} to {spot + w:,.0f}"  # noqa: E731
    vals = [2 * sd, sd, 2 * spot * vix / 100 / np.sqrt(52), 2 * spot * vix / 100 / 252]
    order = [1, 0, 3, 2]  # key at position of 2*sd
    opts = [f(vals[i]) for i in order]
    k = order.index(0)
    add("Ch6_1", img,
        "Using the close and VIX shown and 252 trading days per year, which range approximates the TWO-standard-"
        "deviation expected range for the next trading day?", opts, k, "Daily 2σ range from VIX")


def ch6_1_realised_vs_implied():
    start, vix = 4500, 16
    sm = start * vix / 100 / np.sqrt(12)
    rng = np.random.default_rng(6103)
    end = 4120
    path = interp_path([start, 4440, 4290, 4330, end], 5, rng, 15)
    path[0], path[-1] = start, end
    z = (start - end) / sm
    assert 1 < z < 2
    t = np.linspace(0, 21, len(path))
    band = start * vix / 100 * np.sqrt(t / 252)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.fill_between(t, start - band, start + band, color=ACCENT, alpha=0.15, label="1σ cone from VIX at start")
    ax.fill_between(t, start - 2 * band, start - band, color=ACCENT2, alpha=0.10, label="1σ–2σ zone")
    ax.plot(t, path, color=INK, lw=1.5, label="Index XYZ")
    ax.text(0.5, start + 330, f"Start = {start:,}, VIX = {vix}", color=ACCENT)
    ax.annotate(f"Day 21 close = {end:,}", (t[-1], end), (12, 3880), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.set_ylim(3750, 4950)
    ax.set_xlabel("Trading days after start (21 = one month)")
    ax.legend(loc="upper right", fontsize=8)
    ax.set_title("One month of index closes vs VIX-implied range (hypothetical)")
    img = save(fig, f"{P}_realised_vs_implied.png")
    opts, k = place(
        f"About {z:.1f}σ: outside the 1σ range but inside 2σ, a larger move than VIX implied but not extreme",
        [f"About {(start - end) / (start * vix / 100):.1f}σ: well within the expected range",
         f"About {(start - end) / (start * vix / 100 / np.sqrt(52)):.1f}σ: beyond 3σ, a statistically extreme event",
         f"About {(start - end) / (start * vix / 100 / np.sqrt(252)):.1f}σ: a crash far beyond anything VIX allowed for"], 1)
    add("Ch6_1", img,
        "Measured against the one-month one-standard-deviation move implied by VIX at the start (12 months per "
        "year), how large was the index's realised decline over the month?", opts, k, "Realised vs implied move")


# =========================================================================== Ch6_2
def ch6_2_vrp_series():
    rng = np.random.default_rng(6201)
    n = 130
    t = np.arange(n)
    shock = lambda c, w: np.exp(-0.5 * ((t - c) / w) ** 2)  # noqa: E731
    rv = 11.5 + rng.normal(0, 0.8, n) + 24 * shock(70, 3.5) + 6 * shock(80, 8)
    iv = 15.5 + rng.normal(0, 0.6, n) + 22 * shock(75, 4.5) + 9 * shock(84, 10)
    spread = iv - rv
    neg = spread < 0
    assert neg.mean() < 0.15 and neg[64:72].sum() >= 4 and not neg[:55].any() and not neg[90:].any()
    fig, ax = plt.subplots(figsize=(8, 4.4))
    ax.plot(t, iv, color=ACCENT, lw=1.4, label="Implied vol at week t")
    ax.plot(t, rv, color=INK, lw=1.2, label="Realised vol over the following 4 weeks")
    ax.fill_between(t, rv, iv, where=~neg, color=UP, alpha=0.25, interpolate=True, label="Implied > realised")
    ax.fill_between(t, rv, iv, where=neg, color=DOWN, alpha=0.45, interpolate=True, label="Realised > implied")
    ax.set_xlabel("Week")
    ax.set_ylabel("Annualised volatility (%)")
    ax.legend(loc="upper left", fontsize=8)
    ax.set_title("Index XYZ: implied vs subsequent realised volatility (hypothetical)")
    img = save(fig, f"{P}_vrp_series.png")
    opts, k = place(
        "A positive volatility risk premium: implied volatility usually exceeds the volatility later realised",
        ["A negative volatility risk premium: option buyers are usually over-compensated",
         "Implied volatility is an unbiased forecast, so the gap is random noise around zero",
         "Realised volatility leads implied volatility, so implied is usually too low"], 3)
    add("Ch6_2", img,
        "For most of the sample the green area shows implied volatility above the volatility subsequently "
        "realised. What does this persistent gap represent?", opts, k, "Positive VRP")
    opts, k = place(
        "Realised volatility exceeded what options had priced: the premium turned negative and option sellers lost",
        ["Option sellers profited most in this window, because implied volatility was rising and they had "
         "collected premium at elevated levels",
         "Implied volatility rose ahead of the shock and fully anticipated the realised move",
         "The red window marks a calm market in which implied volatility fell below a low realised level"], 1)
    add("Ch6_2", img,
        "Around weeks 63–72 the shading turns red. Which statement best describes what happened in that window?",
        opts, k, "Negative VRP in stress")


def ch6_2_vrp_compute():
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    iv = np.array([16.2, 15.0, 17.8, 14.6, 19.5, 21.0])
    rv = np.array([12.1, 11.8, 13.0, 10.9, 27.4, 15.8])
    vrp = iv - rv
    avg = vrp.mean()
    x = np.arange(6)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.bar(x - 0.2, iv, 0.4, color=ACCENT, label="Implied vol at start of month")
    ax.bar(x + 0.2, rv, 0.4, color=MUTED, label="Realised vol during month")
    for i in range(6):
        ax.text(i - 0.2, iv[i] + 0.4, f"{iv[i]:.1f}", ha="center", fontsize=8.5)
        ax.text(i + 0.2, rv[i] + 0.4, f"{rv[i]:.1f}", ha="center", fontsize=8.5)
    ax.set_xticks(x, months)
    ax.set_ylim(0, 32)
    ax.set_ylabel("Annualised vol (%)")
    ax.legend(loc="upper left", fontsize=8)
    ax.set_title("Index XYZ: one-month implied vs realised volatility (hypothetical)")
    img = save(fig, f"{P}_vrp_compute.png")
    pos_avg = vrp[vrp > 0].mean()
    opts, k = opts_with(avg, [-avg, pos_avg, (iv / rv).mean()], lambda v: f"{v:+.1f} vol points")
    add("Ch6_2", img,
        "Defining the volatility risk premium as implied minus subsequently realised volatility, what is the "
        "average monthly VRP over the six months shown?", opts, k, "Compute VRP")
    opts, k = place(
        "Short-volatility strategies earned the premium in most months, but one stress month gave back a large "
        "share of it: the payoff is negatively skewed, so position size and tail risk matter",
        ["Because the average premium is positive, selling options here was effectively a riskless arbitrage",
         "Option buyers had the edge over the period, because realised volatility exceeded implied on average",
         "The May result shows the premium is a forecasting error that disappears once realised volatility rises"], 0)
    add("Ch6_2", img,
        "What does this six-month record imply for a trader who systematically sells one-month index options?",
        opts, k, "VRP implication for option sellers")


def ch6_2_buywrite_crash():
    rng = np.random.default_rng(6203)
    r = np.r_[rng.normal(0.012, 0.03, 24), [-0.09, -0.14, -0.06], [0.08, 0.07, 0.06, 0.05, 0.04]]
    prem, cap = 0.008, 0.03
    bw = np.minimum(r, cap) + prem
    ix = 100 * np.r_[1, np.cumprod(1 + r)]
    bwv = 100 * np.r_[1, np.cumprod(1 + bw)]
    pk = 24
    tr = 27
    ddi = ix[tr] / ix[pk] - 1
    ddb = bwv[tr] / bwv[pk] - 1
    rei = ix[-1] / ix[tr] - 1
    reb = bwv[-1] / bwv[tr] - 1
    assert ddb > ddi and reb < rei and ix[:tr + 1].argmax() == pk
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(ix, color=INK, lw=1.5, label="Index XYZ (total return)")
    ax.plot(bwv, color=ACCENT2, lw=1.5, label="Buy-write (long index, short 3% OTM 1-month calls)")
    ax.axvspan(pk, tr, color=DOWN, alpha=0.08)
    ax.text(pk - 9, min(ix.min(), bwv.min()) - 2, f"Crash: index {ddi:.0%}, buy-write {ddb:.0%}", fontsize=9, color=DOWN)
    ax.text(tr + 0.3, max(ix[-1], bwv[-1]) + 4, f"Rebound: index +{rei:.0%},\nbuy-write +{reb:.0%}", fontsize=9, color=UP)
    ax.set_xlabel("Month")
    ax.set_ylabel("Value (start = 100)")
    ax.set_ylim(min(ix.min(), bwv.min()) - 6, max(ix.max(), bwv.max()) + 12)
    ax.legend(loc="upper left", fontsize=8)
    ax.set_title("Index vs buy-write strategy through a crash (hypothetical)")
    img = save(fig, f"{P}_buywrite_crash.png")
    opts, k = place(
        "It fell slightly less than the index thanks to premium, then lagged in the rebound as the calls capped upside",
        ["It was protected from most of the crash, because the short calls behave like a protective put once "
         "the index falls below the strike",
         "The buy-write fell more than the index, because short calls add leverage on the downside",
         "The buy-write outperformed in both phases, because higher implied volatility lifted the premium it collected"], 2)
    add("Ch6_2", img,
        "Using the crash and rebound figures annotated, which statement best describes how the buy-write behaved "
        "relative to the index?", opts, k, "Buy-write in a crash")


# =========================================================================== Ch6_3
def ch6_3_vix_inverse():
    rng = np.random.default_rng(6301)
    idx = interp_path([4600, 4640, 4050, 4330, 4380], 12, rng, 12)
    vix = interp_path([14, 13.5, 35, 24, 22], 12, rng, 0.5)
    i0, i1 = 12, 24
    idx[i0], idx[i1], vix[i0], vix[i1] = 4600, 4050, 14, 35
    ri, rv = idx[i1] / idx[i0] - 1, vix[i1] / vix[i0] - 1
    fig, (a1, a2) = two_panel((2, 2))
    a1.plot(idx, color=INK, lw=1.4)
    a1.plot([i0, i1], [idx[i0], idx[i1]], "o", color=ACCENT2)
    a1.text(i0 - 4, idx[i0] + 40, f"{idx[i0]:,.0f}", color=ACCENT2)
    a1.text(i1 + 1, idx[i1] - 60, f"{idx[i1]:,.0f}", color=ACCENT2)
    a1.set_ylim(3900, 4800)
    a1.set_title("Index XYZ (top) and VIX (bottom), daily, hypothetical")
    a2.plot(vix, color=DOWN, lw=1.4)
    a2.plot([i0, i1], [vix[i0], vix[i1]], "o", color=ACCENT2)
    a2.text(i0 - 3, vix[i0] + 3, f"{vix[i0]:.0f}", color=ACCENT2)
    a2.text(i1 + 1, vix[i1] + 0.5, f"{vix[i1]:.0f}", color=ACCENT2)
    a2.set_ylim(8, 42)
    a2.set_ylabel("VIX")
    img = save(fig, f"{P}_vix_inverse.png")
    opts, k = place(
        f"VIX rose about {rv:.0%} while the index fell about {abs(ri):.0%}: VIX moves inversely and far more in "
        "percentage terms, spiking during sell-offs",
        [f"VIX rose about {vix[i1] - vix[i0]:.0f}% while the index fell about {abs(ri):.0%}: the two move roughly in proportion",
         f"VIX rose about {rv:.0%}, showing that VIX spiked before the decline and predicted it",
         f"VIX and the index both fell about {abs(ri):.0%}, showing a positive correlation in stress"], 0)
    add("Ch6_3", img,
        "Using the marked points, compare the percentage moves of the index and VIX during the sell-off. Which "
        "statement is correct?", opts, k, "VIX vs index asymmetry")


def ch6_3_m1_m2_spread():
    rng = np.random.default_rng(6302)
    n = 60
    idx = interp_path([3800, 3880, 3860, 3600], 20, rng, 10)[:n]
    m1 = interp_path([15.5, 15.0, 17.5, 26.4], 20, rng, 0.25)[:n]
    sp = interp_path([1.8, 2.0, 1.4, -1.5], 20, rng, 0.12)[:n]
    m1[-1], sp[-1] = 26.4, -1.5
    m2 = m1 + sp
    m2[-1] = 24.9
    sp = m2 - m1
    cross = np.where(sp < 0)[0][0]
    assert np.all(sp[:cross] > 0) and np.isclose(sp[-1], -1.5)
    fig, (a1, a2) = two_panel((2, 2))
    a1.plot(idx, color=INK, lw=1.4)
    a1.set_title("Index XYZ (top) and VIX futures spread M2 − M1 (bottom), hypothetical")
    a2.plot(sp, color=ACCENT, lw=1.4)
    a2.axhline(0, color=INK, lw=0.9)
    a2.fill_between(range(n), sp, 0, where=sp < 0, color=DOWN, alpha=0.3, interpolate=True)
    a2.text(n - 21, 1.6, f"Last day: M1 = {m1[-1]:.1f}, M2 = {m2[-1]:.1f}", fontsize=9,
            bbox=dict(fc="white", ec=MUTED))
    a2.set_ylabel("M2 − M1 (vol pts)")
    a2.set_ylim(-2.5, 3)
    a2.set_xlabel("Trading day")
    img = save(fig, f"{P}_m1_m2_spread.png")
    opts, k = place(
        "−1.5: the front of the curve has inverted into backwardation, signalling acute near-term stress",
        ["+1.5: the curve is in normal contango, consistent with a calm market",
         "−1.5: the curve is in deeper contango, signalling complacency among option buyers",
         "+1.5: the curve is in backwardation, so long front-month VIX futures face negative roll yield"], 2)
    add("Ch6_3", img,
        "On the final day, the first- and second-month VIX futures are as annotated. What is the M2 − M1 spread "
        "and what does its move below zero indicate?", opts, k, "VIX futures spread inversion")


def ch6_3_vix_call_convexity():
    x = np.linspace(0.10, -0.25, 141)
    vix = 16 * np.exp(-4.2 * x)
    strike, prem, calls = 20, 1.5, 100
    call_pl = calls * 100 * (np.maximum(vix - strike, 0) - prem)
    fut_pl = -200_000 * x
    v10 = calls * 100 * (max(16 * np.exp(0.42) - strike, 0) - prem)
    v20 = calls * 100 * (max(16 * np.exp(0.84) - strike, 0) - prem)
    assert v20 > 4 * v10 > 0
    fig, ax = plt.subplots(figsize=(8, 4.4))
    ax.plot(x * 100, call_pl / 1000, color=ACCENT2, lw=1.8, label="Long 100 VIX 20 calls (cost 1.50)")
    ax.plot(x * 100, fut_pl / 1000, color=ACCENT, lw=1.8, label="Short $200k index futures")
    ax.axhline(0, color=INK, lw=0.8)
    for xv in (-10, -20):
        c = calls * 100 * (max(16 * np.exp(-4.2 * xv / 100) - strike, 0) - prem) / 1000
        f = -200 * xv / 100
        ax.plot([xv, xv], [f, c], "o", color=INK, ms=4)
        ax.text(xv + 1.8, c + 4, f"{c:.0f}k", color=ACCENT2, fontsize=9)
        ax.text(xv + 1.8, f - 12, f"{f:.0f}k", color=ACCENT, fontsize=9)
    ax.invert_xaxis()
    ax.set_xlabel("Index move at hedge expiry (%) — declines to the right")
    ax.set_ylabel("Hedge P/L ($ thousands)")
    ax.legend(loc="upper left", fontsize=8)
    ax.set_title("Stylised hedge payoffs vs index move (assumed VIX–index relationship, hypothetical)")
    img = save(fig, f"{P}_vix_call_convexity.png")
    opts, k = place(
        "The VIX calls are convex: limited cost in rallies and accelerating gains as the decline deepens",
        ["Both hedges are linear in the index move; the VIX calls simply carry a larger hedge ratio, which is why "
         "their payoff is higher at −20%",
         "The VIX call payoff roughly doubles when the decline doubles, exactly like the futures hedge",
         "The futures hedge is convex because its losses are capped in a rally"], 1)
    add("Ch6_3", img,
        "Compare the two hedges using the payoffs annotated at −10% and −20% index moves. Which statement is "
        "correct?", opts, k, "VIX call convexity")


# =========================================================================== Ch7_1
def ch7_1_bull_bear():
    rng = np.random.default_rng(7101)
    idx = interp_path([3000, 3350, 3200, 2650, 2800, 3150], 20, rng, 15)
    spread = interp_path([15, 38, 10, -27, -5, 12], 20, rng, 3)
    iA = 60
    spread[iA] = -27
    assert spread.argmin() == iA and idx.argmin() in range(iA - 3, iA + 4)
    fig, (a1, a2) = two_panel((2.4, 2))
    a1.plot(idx, color=INK, lw=1.4)
    a1.set_title("Index XYZ (top) and weekly survey bulls minus bears (bottom), hypothetical")
    a2.plot(spread, color=ACCENT, lw=1.4)
    a2.axhline(30, color=DOWN, ls="--", lw=1)
    a2.axhline(-20, color=UP, ls="--", lw=1)
    a2.text(1, 32, "+30", color=DOWN, fontsize=8.5)
    a2.text(1, -18, "−20", color=UP, fontsize=8.5)
    a2.axhline(0, color=INK, lw=0.6)
    a2.annotate(f"A: {spread[iA]:.0f}", (iA, spread[iA]), (iA + 6, -34), arrowprops=dict(arrowstyle="->", color=MUTED))
    a2.set_ylim(-42, 50)
    a2.set_ylabel("Bulls − bears (%)")
    a2.set_xlabel("Week")
    img = save(fig, f"{P}_bull_bear.png")
    opts, k = place(
        "Bearish sentiment is extreme: as a contrarian indicator this is bullish, best acted on once price begins to turn up",
        ["The survey confirms the downtrend, so new short positions are favoured",
         "Bullish because survey respondents have been correct at major turns",
         "Neutral, because a bulls-minus-bears spread only has meaning above +30"], 3)
    add("Ch7_1", img,
        "At point A the bulls-minus-bears spread reaches the value annotated as the index falls. How should a "
        "contrarian interpret this reading?", opts, k, "Bull-bear spread extreme")


def ch7_1_insider_cluster():
    rng = np.random.default_rng(7102)
    px = interp_path([80, 62, 40, 52, 58], 9, rng, 1.2)
    n = len(px)
    buys = rng.integers(0, 2, n)
    sells = rng.integers(2, 6, n)
    buys[17:21] = [5, 7, 6, 4]
    sells[17:21] = [1, 0, 1, 1]
    assert px[17:21].min() == px.min() or abs(px[17:21].min() - px.min()) < 2
    fig, (a1, a2) = two_panel((2.4, 2))
    a1.plot(px, color=INK, lw=1.4)
    a1.set_ylabel("Price ($)")
    a1.set_title("Stock UVW: monthly price (top) and insiders buying / selling (bottom), hypothetical")
    a2.bar(range(n), buys, color=UP, label="Insiders buying (open market)")
    a2.bar(range(n), -sells, color=DOWN, label="Insiders selling")
    a2.axhline(0, color=INK, lw=0.8)
    a2.axvspan(16.5, 20.5, color=ACCENT2, alpha=0.12)
    a2.set_ylim(-8, 9)
    a2.set_ylabel("Insiders")
    a2.set_xlabel("Month")
    a2.legend(loc="upper left", fontsize=8)
    img = save(fig, f"{P}_insider_cluster.png")
    opts, k = place(
        "Bullish: clustered open-market buying near a low is more informative than routine insider selling",
        ["Bearish, because insiders typically buy to support the price ahead of bad news",
         "Not informative, because insider selling outnumbered insider buying in most months of the chart, so "
         "the net balance is still negative",
         "Bullish only if insider selling stops completely, since selling is the more reliable signal"], 0)
    add("Ch7_1", img,
        "In the shaded months several different insiders bought shares in the open market after a large decline. "
        "What is the best interpretation?", opts, k, "Insider buying cluster")


def ch7_1_short_interest():
    months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    si = np.array([9.8, 11.2, 12.9, 13.6, 15.0, 18.6])
    adv = np.array([2.1, 2.2, 2.0, 2.3, 2.5, 2.4])
    dtc = si[-1] / adv[-1]
    x = np.arange(6)
    fig, (ax, ax2) = two_panel((2.4, 1.6))
    ax.bar(x, si, color=ACCENT, alpha=0.8, width=0.6)
    for i in range(6):
        ax.text(i, si[i] + 0.4, f"{si[i]:.1f}", ha="center", fontsize=9)
    ax.set_ylim(0, 22)
    ax.set_ylabel("Short interest\n(M shares)")
    ax.set_title("Stock WXY: short interest (top) and average daily volume (bottom), hypothetical")
    ax2.plot(x, adv, "o-", color=ACCENT2)
    for i in range(6):
        ax2.text(i, adv[i] + 0.25, f"{adv[i]:.1f}", color=ACCENT2, fontsize=9, ha="center")
    ax2.set_ylim(1.0, 3.2)
    ax2.set_ylabel("Avg daily vol\n(M shares)")
    ax2.set_xticks(x, months)
    img = save(fig, f"{P}_short_interest.png")
    opts, k = opts_with(dtc, [adv[-1] / si[-1], si[-2] / adv[-2], si[-1] / adv[0]], lambda v: f"{v:.2f} days")
    add("Ch7_1", img,
        "What is the short interest ratio (days to cover) for October?", opts, k, "Short interest ratio")


def ch7_1_put_call():
    rng = np.random.default_rng(7104)
    idx = interp_path([2200, 2280, 2240, 1980, 2150], 20, rng, 10)
    pc = interp_path([0.60, 0.55, 0.62, 0.95, 0.65], 20, rng, 0.015)
    iL = 60
    pc[iL] = 0.95
    assert pc.argmax() == iL and abs(idx.argmin() - iL) <= 3
    fig, (a1, a2) = two_panel((2.4, 2))
    a1.plot(idx, color=INK, lw=1.4)
    a1.set_title("Index XYZ (top) and 10-day avg equity-only put/call ratio (bottom), hypothetical")
    a2.plot(pc, color=ACCENT, lw=1.4)
    a2.axhline(0.80, color=UP, ls="--", lw=1)
    a2.axhline(0.50, color=DOWN, ls="--", lw=1)
    a2.text(1, 0.81, "0.80", color=UP, fontsize=8.5)
    a2.text(1, 0.51, "0.50", color=DOWN, fontsize=8.5)
    a2.annotate(f"{pc[iL]:.2f}", (iL, pc[iL]), (iL + 6, 0.98), arrowprops=dict(arrowstyle="->", color=MUTED))
    a2.set_ylim(0.4, 1.08)
    a2.set_ylabel("Put/call")
    img = save(fig, f"{P}_put_call.png")
    opts, k = place(
        "Heavy put buying by speculators signals excessive fear, a contrarian bullish reading; the equity-only "
        "ratio is used because index options are dominated by institutional hedging",
        ["Heavy put buying confirms the decline, so the reading is bearish; the equity-only ratio is used because "
         "it includes institutional hedging",
         "The spike shows complacency, a contrarian bearish reading, because puts are cheap at market lows",
         "It is a bullish reading only if the index put/call ratio reaches the same level, since index options "
         "reflect speculators"], 1)
    add("Ch7_1", img,
        "The 10-day average equity-only put/call ratio peaks at the value annotated as the index makes its low. "
        "What is the best interpretation, and why is the equity-only ratio preferred here?", opts, k,
        "Equity put/call extreme")


def ch7_1_margin_debt():
    rng = np.random.default_rng(7105)
    idx = interp_path([3000, 3600, 3500, 3900], 15, rng, 25)
    md = interp_path([700, 860, 950, 820], 15, rng, 8)
    ipk, iend = 30, 45
    md[ipk], md[iend] = 950, 820
    assert md.argmax() == ipk and idx.argmax() == iend
    dec = (md[ipk] - md[iend]) / md[ipk]
    wrong = (md[ipk] - md[iend]) / md[iend]
    fig, (a1, a2) = two_panel((2.4, 2))
    a1.plot(idx, color=INK, lw=1.4)
    a1.annotate("New high", (iend, idx[iend]), (iend - 10, idx[iend] + 80), arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.set_ylim(2850, 4100)
    a1.set_title("Index XYZ (top) and margin debt (bottom), monthly, hypothetical")
    a2.plot(md, color=ACCENT, lw=1.4)
    a2.plot([ipk, iend], [md[ipk], md[iend]], "o", color=ACCENT2)
    a2.text(ipk - 6, md[ipk] + 12, f"Peak ${md[ipk]:.0f}bn", color=ACCENT2, fontsize=9)
    a2.text(iend - 7, md[iend] - 40, f"${md[iend]:.0f}bn", color=ACCENT2, fontsize=9)
    a2.set_ylim(650, 1010)
    a2.set_ylabel("Margin debt ($bn)")
    a2.set_xlabel("Month")
    img = save(fig, f"{P}_margin_debt.png")
    opts, k = place(
        f"Down about {dec:.0%} from its peak while the index makes a new high: leverage is being withdrawn, a "
        "non-confirmation that has often preceded tops",
        [f"Down about {wrong:.0%} from its peak while the index makes a new high: leverage is being withdrawn, a "
         "non-confirmation that has often preceded tops",
         f"Down about {dec:.0%} from its peak: lower leverage removes forced-selling risk, confirming the new high",
         f"Down about {wrong:.0%} from its peak: falling margin debt is a contrarian buy signal at new highs"], 0)
    add("Ch7_1", img,
        "Using the annotated values, by how much has margin debt fallen from its peak, and how should the "
        "pattern relative to the index be read?", opts, k, "Margin debt divergence")


def register():
    ch5_1_obv_divergence()
    ch5_1_selling_climax()
    ch5_1_breakout_volume()
    ch5_1_downtrend_volume()
    ch5_2_pct_above_200()
    ch5_2_new_highs_lows()
    ch5_2_mcclellan()
    ch5_2_breadth_thrust()
    ch6_1_weekly_sigma()
    ch6_1_daily_2sigma()
    ch6_1_realised_vs_implied()
    ch6_2_vrp_series()
    ch6_2_vrp_compute()
    ch6_2_buywrite_crash()
    ch6_3_vix_inverse()
    ch6_3_m1_m2_spread()
    ch6_3_vix_call_convexity()
    ch7_1_bull_bear()
    ch7_1_insider_cluster()
    ch7_1_short_interest()
    ch7_1_put_call()
    ch7_1_margin_debt()
