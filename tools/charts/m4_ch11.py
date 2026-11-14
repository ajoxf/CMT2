"""Chart questions for Ch11 (cycles, applied cycle analysis, Elliott Wave). All data synthetic."""
from generate_chart_questions import *  # noqa: F401,F403

P = "m4_ch11_"


# --------------------------------------------------------------------------- helpers
def cycle_path(troughs, trough_prices, peak_frac, amp, rng, noise=0.25, tail=0, tail_end=None):
    """Price path whose cycle troughs fall exactly on `troughs` (bar numbers).

    Each trough-to-trough segment = linear drift between trough prices + a bump that peaks at
    `peak_frac` of the segment (translation). `tail` extra bars after the last trough (partial cycle)."""
    pf = peak_frac if np.iterable(peak_frac) else [peak_frac] * (len(troughs) - 1)
    xs, ys = [], []
    for i in range(len(troughs) - 1):
        L = troughs[i + 1] - troughs[i]
        u = np.arange(L) / L
        f = pf[i]
        bump = np.where(u <= f, np.sin(np.pi / 2 * u / f), np.cos(np.pi / 2 * (u - f) / (1 - f)))
        base = trough_prices[i] + (trough_prices[i + 1] - trough_prices[i]) * u
        y = base + amp * bump + rng.normal(0, noise, L) * np.sin(np.pi * u)
        xs.extend(troughs[i] + np.arange(L))
        ys.extend(y)
    xs.append(troughs[-1])
    ys.append(trough_prices[-1])
    if tail:
        L = tail
        u = np.arange(1, L + 1) / L
        f = pf[-1]
        end = tail_end
        bump = np.where(u <= f, np.sin(np.pi / 2 * u / f), np.cos(np.pi / 2 * (u - f) / (1 - f)) * 1.0)
        base = trough_prices[-1] + (end - trough_prices[-1]) * u
        y = base + amp * bump + rng.normal(0, noise, L) * np.sin(np.pi * u)
        xs.extend(troughs[-1] + np.arange(1, L + 1))
        ys.extend(y)
    return np.array(xs), np.array(ys)


def wave_plot(ax, pts, labels=None, show_prices=True, color=INK, label_color=ACCENT, fmt="{:.2f}",
              price_idx=None):
    """Zigzag polyline with wave labels and printed prices at turning points."""
    xs, ys = zip(*pts)
    ax.plot(xs, ys, color=color, lw=1.6, marker="o", ms=3.5)
    span = max(ys) - min(ys)
    off = 0.045 * span
    for i, (x, y) in enumerate(pts):
        prev_y = ys[i - 1] if i > 0 else ys[i + 1]
        nxt_y = ys[i + 1] if i < len(pts) - 1 else ys[i - 1]
        high = y >= prev_y and y >= nxt_y
        lab = labels[i] if labels else None
        if lab:
            ax.text(x, y + (off * 1.0 if high else -off * 1.9), lab, ha="center", fontweight="bold",
                    color=label_color, fontsize=10)
        if show_prices and (price_idx is None or i in price_idx):
            ax.text(x, y + (off * 2.5 if high else -off * 3.0) if lab else y + (off * 0.8 if high else -off * 1.6),
                    fmt.format(y), ha="center", color=MUTED, fontsize=8)
    ax.set_ylim(min(ys) - span * 0.22, max(ys) + span * 0.25)


def hurst_rs(x):
    """Rescaled-range Hurst estimate on a series of increments."""
    ns = [8, 16, 32, 64, 128]
    rs = []
    for n in ns:
        vals = []
        for k in range(len(x) // n):
            c = x[k * n:(k + 1) * n]
            z = np.cumsum(c - c.mean())
            s = c.std()
            if s > 0:
                vals.append((z.max() - z.min()) / s)
        rs.append(np.mean(vals))
    return np.polyfit(np.log(ns), np.log(rs), 1)[0]


# --------------------------------------------------------------------------- Ch11_1
def ch11_1_period_projection():
    rng = np.random.default_rng(1101)
    troughs = [10, 45, 77, 112, 146]
    tp = [48, 50.5, 52, 55, 56.5]
    x, y = cycle_path(troughs, tp, 0.5, 7, rng, tail=18, tail_end=60)
    periods = np.diff(troughs)
    avg = periods.mean()
    assert avg == int(avg)
    nxt = troughs[-1] + avg
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(x, y, color=INK, lw=1.4)
    for i, (tb, tv) in enumerate(zip(troughs, tp), 1):
        ax.plot(tb, tv, "o", color=ACCENT)
        ax.annotate(f"T{i}\nbar {tb}", (tb, tv), (tb, tv - 4.2), ha="center", color=ACCENT, fontsize=8)
    ax.set_ylim(40, 68)
    ax.set_xlim(0, 175)
    ax.set_xlabel("Bar number")
    ax.set_ylabel("Price ($)")
    ax.set_title("Index XYZ — daily closes with cycle troughs marked (hypothetical)")
    img = save(fig, P + "period_projection.png")
    span = troughs[-1] - troughs[0]
    options, k = opts_with(nxt, [troughs[-1] + avg / 2, troughs[-1] + span / len(troughs),
                                 troughs[-1] + 2 * avg], lambda v: f"Around bar {v:.0f}")
    add("Ch11_1", img,
        "The marked troughs T1–T5 belong to the same dominant cycle. Using the average trough-to-trough "
        "period of the four completed cycles, around which bar is the next cycle trough (T6) due?",
        options, k, "Measuring cycle period trough-to-trough and projecting the next trough")


def ch11_1_summation():
    t = np.arange(0, 241)
    long_c = -6 * np.cos(2 * np.pi * t / 120)
    short_c = -2 * np.cos(2 * np.pi * t / 30)
    comp = 50 + long_c + short_c
    assert np.argmin(comp[60:180]) + 60 == 120
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [1.4, 1]})
    a1.plot(t, comp, color=INK, lw=1.5)
    a1.set_title("Composite series (upper) and its two component cycles (lower) — hypothetical")
    a1.set_ylabel("Composite")
    for tb in (0, 120, 240):
        a1.axvline(tb, color=ACCENT2, ls=":", lw=1)
        a2.axvline(tb, color=ACCENT2, ls=":", lw=1)
    a2.plot(t, long_c, color=ACCENT, lw=1.4, label="Cycle 1")
    a2.plot(t, short_c, color=DOWN, lw=1.2, label="Cycle 2")
    a2.legend(loc="upper right", fontsize=8, ncol=2)
    a2.set_xlabel("Bar number")
    a2.set_xticks(range(0, 241, 30))
    a2.set_ylabel("Component")
    img = save(fig, P + "summation.png")
    add("Ch11_1", img,
        "The upper series is exactly the sum of Cycle 1 and Cycle 2. Which cycle principle does this "
        "illustrate, and what does it imply about the deepest lows of the composite (dotted lines)?",
        ["Principle of synchronicity; the deepest lows occur because the two cycles have the same period",
         "Principle of proportionality; Cycle 2 has the larger amplitude, so its troughs set the deepest lows",
         "Principle of harmonicity; the deepest lows occur where Cycle 2 peaks while Cycle 1 bottoms",
         "Principle of summation; the deepest lows come where both cycles bottom together"], 3,
        "Principle of summation")


def ch11_1_harmonicity():
    t = np.arange(0, 241)
    periods = {"Cycle A": 80, "Cycle B": 40, "Cycle C": 20}
    fig, ax = plt.subplots(figsize=(8, 4.4))
    for (name, per), offset, col in zip(periods.items(), (20, 10, 0), (ACCENT, ACCENT2, DOWN)):
        amp = 3.5 * per / 80 + 1
        ax.plot(t, offset - amp * np.cos(2 * np.pi * t / per), color=col, lw=1.4)
        ax.text(243, offset, name, color=col, va="center", fontsize=9)
    ax.set_xticks(range(0, 241, 20))
    ax.set_yticks([])
    ax.set_xlim(0, 262)
    ax.set_xlabel("Bar number (gridlines every 20 bars)")
    ax.set_title("Three idealised cycles in the same market (hypothetical)")
    img = save(fig, P + "harmonicity.png")
    ratio = periods["Cycle A"] // periods["Cycle C"]
    assert ratio == 4
    add("Ch11_1", img,
        "Measure each cycle trough to trough. How many complete Cycle C periods fit into one Cycle A period, "
        "and which principle describes the regular relationship between neighbouring cycles?",
        ["Two; the principle of harmonicity",
         "Four; the principle of harmonicity",
         "Four; the principle of proportionality",
         "Eight; the principle of nominality"], 1, "Principle of harmonicity")


def ch11_1_left_translation():
    rng = np.random.default_rng(1104)
    troughs = [5, 45, 84, 125]
    tp = [80, 74, 68.5, 62]
    x, y = cycle_path(troughs, tp, 0.28, 9, rng, noise=0.3)
    peaks = []
    for a, b in zip(troughs[:-1], troughs[1:]):
        m = (x >= a) & (x <= b)
        pk = x[m][np.argmax(y[m])]
        peaks.append(pk)
        assert pk < (a + b) / 2  # peak before midpoint
    assert all(np.diff(tp) < 0)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(x, y, color=INK, lw=1.4)
    for a, b in zip(troughs[:-1], troughs[1:]):
        ax.axvline((a + b) / 2, color=ACCENT, ls="--", lw=0.9)
    ax.text((troughs[0] + troughs[1]) / 2 + 1, 88, "cycle\nmidpoint", color=ACCENT, fontsize=8)
    for i, (tb, tv) in enumerate(zip(troughs, tp), 1):
        ax.plot(tb, tv, "o", color=ACCENT2)
        ax.text(tb, tv - 2.5, f"T{i}", ha="center", color=ACCENT2, fontsize=9)
    ax.set_ylim(55, 93)
    ax.set_xlabel("Bar number")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock DEF — daily closes, three complete cycles (hypothetical)")
    img = save(fig, P + "left_translation.png")
    add("Ch11_1", img,
        "Each cycle peaks before its midpoint (dashed lines) and each trough is below the one before. How is "
        "this best interpreted, and what is expected of the next cycle trough?",
        ["Left translation in a bearish longer-term trend; the next trough is likely to be lower than T4",
         "Right translation in a bullish longer-term trend; the next trough is likely to be higher than T4",
         "Left translation showing early strength; the next trough is likely to be higher than T4",
         "Cycle inversion; the next peak is likely to occur where a trough was expected"], 0,
        "Left translation and trend")


# --------------------------------------------------------------------------- Ch11_2
def ch11_2_projection_window():
    rng = np.random.default_rng(1201)
    troughs = [5, 46, 83, 126, 165]
    tp = [101, 99, 102, 100, 103]
    x, y = cycle_path(troughs, tp, 0.55, 8, rng, noise=0.35, tail=22, tail_end=104)
    per = np.diff(troughs)
    avg = per.mean()
    dev = np.max(np.abs(per - avg))
    assert avg == 40 and dev == 3
    lo, hi = troughs[-1] + avg - dev, troughs[-1] + avg + dev
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(x, y, color=INK, lw=1.4)
    for i, (a, b) in enumerate(zip(troughs[:-1], troughs[1:])):
        ax.annotate("", (b, 92.5), (a, 92.5), arrowprops=dict(arrowstyle="<->", color=MUTED, lw=0.8))
        ax.text((a + b) / 2, 93.0, f"{b - a} bars", ha="center", fontsize=8, color=MUTED)
    for i, (tb, tv) in enumerate(zip(troughs, tp), 1):
        ax.plot(tb, tv, "o", color=ACCENT)
        ax.text(tb, tv - 2.3, f"bar {tb}", ha="center", color=ACCENT, fontsize=8)
    ax.set_ylim(89, 115)
    ax.set_xlim(0, 215)
    ax.set_xlabel("Bar number")
    ax.set_ylabel("Price")
    ax.set_title("Commodity Future QRS — cycle troughs and periods (hypothetical)")
    img = save(fig, P + "projection_window.png")
    opts = [f"Bars {troughs[-1] + avg / 2 - dev:.0f}–{troughs[-1] + avg / 2 + dev:.0f}",
            f"Bars {troughs[-1] + avg - 2 * dev:.0f}–{troughs[-1] + avg + 2 * dev:.0f}",
            f"Bars {lo:.0f}–{hi:.0f}",
            f"Bars {troughs[-1] + avg:.0f}–{troughs[-1] + avg + 2 * dev:.0f}"]
    add("Ch11_2", img,
        "Project a time window for the next cycle low as the last trough plus the average period, plus or "
        "minus the largest deviation of any single completed period from that average. Which window results?",
        opts, 2, "Cycle-low projection window")


def ch11_2_failed_cycle():
    rng = np.random.default_rng(1202)
    troughs = [4, 34, 63, 93]
    tp = [70.0, 74.5, 77.0, 80.0]
    x, y = cycle_path(troughs, tp, [0.65, 0.62, 0.66], 8, rng, noise=0.25)
    # current cycle: early (left-translated) peak, then a fall through the T4 low
    u = np.arange(1, 25) / 24
    tail = np.where(u <= 0.25, 80 + 4.5 * np.sin(np.pi / 2 * u / 0.25), 84.5 - 8.0 * (u - 0.25) / 0.75)
    tail = tail + rng.normal(0, 0.2, 24) * np.sin(np.pi * u)
    tail[-1] = 76.5
    x, y = np.r_[x, troughs[-1] + np.arange(1, 25)], np.r_[y, tail]
    assert y[-1] < tp[-1]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(x, y, color=INK, lw=1.4)
    for i, (tb, tv) in enumerate(zip(troughs, tp), 1):
        ax.plot(tb, tv, "o", color=ACCENT)
        ax.text(tb, tv - 2.0, f"T{i} {tv:.1f}", ha="center", color=ACCENT, fontsize=8)
    ax.axhline(tp[-1], color=DOWN, ls=":", lw=1)
    ax.text(x[-1] + 0.5, y[-1], f"Latest {y[-1]:.1f}", color=DOWN, fontsize=8, va="center")
    ax.set_xlim(0, 128)
    ax.set_ylim(64, 92)
    ax.set_xlabel("Bar number")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock GHI — a ~30-bar cycle; current cycle began at T4 (hypothetical)")
    img = save(fig, P + "failed_cycle.png")
    add("Ch11_2", img,
        "The current cycle began at T4. Price has now fallen below the T4 low. How should a cycle analyst "
        "read this?",
        ["Right translation is confirmed, so the longer-term trend is still bullish",
         "The cycle has failed; the next-longer cycle is likely turning down, a bearish warning",
         "The break marks the new cycle trough, so a long position can be taken immediately",
         "The cycle period has simply lengthened; the break carries no trend information"], 1,
        "Failed cycle")


def ch11_2_gann_1x1():
    rng = np.random.default_rng(1203)
    unit = 2.0  # $ per week for the 1x1
    low_wk, low_p = 3, 40.0
    wk_q = 18
    knots = [47, 40, 52, 57, 62, 64]
    p = interp_path(knots, 3, rng, 0.5)  # 16 points, weeks 0..15
    p = np.r_[p, [63.0, 64.5, 64.0, 63.2]][:wk_q + 4]
    weeks = np.arange(len(p))
    p[low_wk] = low_p
    p[wk_q] = 64.0
    assert p.min() == low_p
    line = low_p + unit * (wk_q - low_wk)
    assert line == 70 and p[wk_q] < line
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(weeks, p, color=INK, lw=1.5, marker="o", ms=3)
    ax.annotate(f"Low ${low_p:.2f} (week {low_wk})", (low_wk, low_p), (low_wk + 2, low_p - 3),
                arrowprops=dict(arrowstyle="->", color=MUTED), fontsize=9)
    ax.annotate(f"${p[wk_q]:.2f} (week {wk_q})", (wk_q, p[wk_q]), (wk_q - 5, p[wk_q] + 6),
                arrowprops=dict(arrowstyle="->", color=MUTED), fontsize=9)
    ax.set_xticks(range(0, len(p), 3))
    ax.set_ylim(33, 78)
    ax.set_xlabel("Week")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock JKL — weekly closes; chart scale: 1 time unit = 1 week, 1 price unit = $2 (hypothetical)")
    ax.title.set_fontsize(9.5)
    img = save(fig, P + "gann_1x1.png")
    wrong_from0 = low_p + unit * wk_q
    wrong_unit = low_p + 1 * (wk_q - low_wk)
    add("Ch11_2", img,
        "Using the stated scale, a 1×1 (one price unit per time unit) line is drawn up from the week-3 low. "
        "Where is that line in week 18, and what does price's position relative to it suggest?",
        [f"${line:.0f}; price is below the 1×1, suggesting the advance has lost momentum",
         f"${wrong_unit:.0f}; price is above the 1×1, so the advance remains strong",
         f"${wrong_from0:.0f}; price is below the 1×1, suggesting the advance has lost momentum",
         f"${line:.0f}; trading below the 1×1 shows a steeper, stronger trend than a 45° advance"], 0,
        "Gann-style 1x1 price/time line")


def ch11_2_td_setup():
    c = np.array([50.0, 50.8, 51.5, 52.4, 53.1, 53.8, 54.4, 54.0, 53.4, 52.9, 52.2, 52.6, 51.8, 51.3,
                  52.4, 51.0, 50.4, 50.9, 49.8, 49.2, 49.6, 48.7, 48.1, 48.5, 47.9, 48.4])
    n = len(c)
    bars = np.arange(1, n + 1)
    # TD-style buy setup: count closes < close 4 bars earlier, starting at a bearish price flip; reset on failure
    count, done, flip_bars, qual = 0, None, [], []
    for i in range(4, n):
        if c[i] < c[i - 4]:
            qual.append(i)
            if count == 0:
                if i >= 5 and c[i - 1] >= c[i - 5]:
                    count = 1
                    flip_bars.append(i)
            else:
                count += 1
            if count == 9 and done is None:
                done = i
        else:
            count = 0
    assert done is not None
    correct = bars[done]
    first_flip = flip_bars[0]
    q_after = [i for i in qual if i >= first_flip]
    ignore_reset = bars[q_after[8]]
    nine_from_flip = bars[first_flip + 8]
    late = bars[done + 1]
    assert len({correct, ignore_reset, nine_from_flip, late}) == 4
    rng = np.random.default_rng(1204)
    o = np.r_[c[0] - 0.3, c[:-1]] + rng.normal(0, 0.1, n)
    h = np.maximum(o, c) + np.abs(rng.normal(0.2, 0.08, n))
    lo = np.minimum(o, c) - np.abs(rng.normal(0.2, 0.08, n))
    fig, ax = plt.subplots(figsize=(8.6, 4.6))
    draw_candles(ax, o, h, lo, c, x0=1)
    for b, cc, hh in zip(bars, c, h):
        ax.text(b, hh + 0.25, f"{cc:.1f}", rotation=90, ha="center", va="bottom", fontsize=7.5, color=INK)
    ax.set_xticks(bars)
    ax.tick_params(axis="x", labelsize=7.5)
    ax.set_xlim(0, n + 1)
    ax.set_ylim(c.min() - 1.5, c.max() + 2.6)
    ax.set_xlabel("Bar number (closing price printed above each bar)")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock MNO — daily candles (hypothetical)")
    img = save(fig, P + "td_setup.png")
    options, k = opts_with(correct, [ignore_reset, nine_from_flip, late], lambda v: f"Bar {v:.0f}")
    add("Ch11_2", img,
        "A DeMark-style buy setup needs nine consecutive closes, each below the close four bars earlier, "
        "starting after a bearish price flip; any bar that fails the test cancels the count. A count begins at "
        f"bar {bars[first_flip]}. On which bar is a completed nine-bar buy setup first recorded?",
        options, k, "TD-style setup count")


def ch11_2_hurst():
    rng = np.random.default_rng(1205)
    N = 1024
    e1, e2 = rng.normal(0, 1, N), rng.normal(0, 1, N)
    a, b = np.zeros(N), np.zeros(N)
    a = e1 - 0.9 * np.r_[0.0, e1[:-1]]  # MA(1) increments: anti-persistent
    for i in range(1, N):
        b[i] = 0.6 * b[i - 1] + e2[i]  # AR(1) increments: persistent
    b = b + 0.06
    h_top, h_bot = hurst_rs(a), hurst_rs(b)
    assert h_top < 0.4 and h_bot > 0.6, (h_top, h_bot)
    top = 100 + np.cumsum(a) * 0.3
    bot = 100 + np.cumsum(b) * 0.3
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True)
    a1.plot(top, color=ACCENT, lw=1.0)
    a1.set_title("Series P (hypothetical)")
    a2.plot(bot, color=ACCENT2, lw=1.0)
    a2.set_title("Series Q (hypothetical)")
    a2.set_xlabel("Bar number")
    for ax in (a1, a2):
        ax.set_ylabel("Level")
    img = save(fig, P + "hurst.png")
    lo_h, hi_h = f"{h_top:.2f}", f"{h_bot:.2f}"
    add("Ch11_2", img,
        f"Rescaled-range analysis gives a Hurst exponent of about {lo_h} for one series and about {hi_h} for "
        "the other. Which statement matches the charts?",
        [f"P has H ≈ {hi_h}: persistent, so it suits trend-following; Q has H ≈ {lo_h}: anti-persistent",
         f"Q has H ≈ {lo_h}; an exponent below 0.5 indicates persistence, so Q suits trend-following",
         f"P has H ≈ {lo_h}: anti-persistent (mean-reverting); Q has H ≈ {hi_h}: persistent, suiting trend-following",
         f"Q has H ≈ {hi_h}; an exponent above 0.5 means moves tend to reverse, so Q suits mean-reversion"], 2,
        "Hurst exponent: persistent vs anti-persistent")


# --------------------------------------------------------------------------- Ch11_4
def ch11_4_flat():
    pts = [(0, 88.0), (8, 100.0), (11, 95.0), (13, 97.5), (17, 92.0), (20, 96.0), (22, 94.5), (26, 99.4),
           (28, 96.5), (30, 97.8), (34, 93.0), (36, 94.2), (39, 90.8)]
    labels = ["", "", "", "", "A", "", "", "B", "", "", "", "", "C"]
    A = pts[1][1] - pts[4][1]
    B = pts[7][1] - pts[4][1]
    pct = B / A * 100
    assert 85 < pct < 100 and pts[7][1] < pts[1][1]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, labels, price_idx={1, 4, 7, 12})
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price")
    ax.set_title("Stock PQR — correction after an advance (hypothetical)")
    img = save(fig, P + "flat.png")
    add("Ch11_4", img,
        f"Count the internal swings of legs A, B and C. Wave B retraces {pct:.0f}% of wave A and does not exceed "
        "the start of A. Which correction is this?",
        ["Zigzag (5-3-5)",
         "Contracting triangle (3-3-3-3-3)",
         "Expanded flat, because C ends beyond the end of A",
         "Regular flat (3-3-5)"], 3, "Flat correction structure")


def ch11_4_truncated_fifth():
    pts = [(0, 100.0), (6, 115.0), (10, 107.0), (22, 135.0), (27, 122.0), (29, 127.0), (30, 124.5),
           (33, 130.0), (34, 128.2), (36, 132.0), (42, 116.0)]
    labels = ["0", "1", "2", "3", "4", "", "", "", "", "5", ""]
    w1, w3, w5 = 15, 28, 10
    assert pts[1][1] - pts[0][1] == w1 and pts[3][1] - pts[2][1] == w3 and pts[9][1] - pts[4][1] == w5
    assert pts[4][1] > pts[1][1] and pts[9][1] < pts[3][1] and not w3 < min(w1, w5)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, labels, price_idx={0, 1, 2, 3, 4, 9, 10})
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price")
    ax.set_title("Index STU — five-wave advance and the decline that followed (hypothetical)")
    img = save(fig, P + "truncated_fifth.png")
    add("Ch11_4", img,
        "Wave 5 subdivides into five waves but ends below the wave 3 high, after which price falls sharply. "
        "What is wave 5 called, and what does it signal?",
        ["An extended fifth wave; it signals that the trend has more to run",
         "A truncated fifth wave; it signals underlying weakness and often precedes a sharp reversal",
         "An invalid count, because wave 5 must always exceed the end of wave 3",
         "A running flat in wave 4; the true wave 5 high is still ahead"], 1, "Truncated fifth wave")


def ch11_4_extended_third():
    pts = [(0, 100.0), (5, 110.0), (8, 105.0), (12, 114.0), (14, 109.5), (21, 133.0), (23, 126.5),
           (27, 140.0), (31, 131.5), (36, 142.0)]
    labels = ["0", "1", "2", "(i)", "(ii)", "(iii)", "(iv)", "3", "4", "5"]
    w1 = pts[1][1] - pts[0][1]
    w3 = pts[7][1] - pts[2][1]
    w5 = pts[9][1] - pts[8][1]
    assert w3 > 1.618 * max(w1, w5) and abs(w5 - w1) / w1 < 0.1 and pts[8][1] > pts[1][1]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, labels, price_idx={0, 1, 2, 7, 8, 9})
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price")
    ax.set_title("Stock VWX — impulse with one subdivided motive wave (hypothetical)")
    img = save(fig, P + "extended_third.png")
    add("Ch11_4", img,
        f"Wave 1 = {w1:.1f} points, wave 3 = {w3:.1f} and wave 5 = {w5:.1f}. Which wave is extended, and what "
        "guideline does that support for the other two motive waves?",
        ["Wave 5 is extended; wave 3 will then be the shortest motive wave",
         "Wave 1 is extended; waves 3 and 5 should each be 0.618 of wave 1",
         "Wave 3 is extended; waves 1 and 5 tend toward equality in size",
         "Wave 3 is extended; wave 5 should therefore extend as well"], 2, "Extended third wave")


def ch11_4_wave2_invalid():
    pts = [(0, 50.0), (6, 58.0), (11, 48.6), (24, 66.0), (29, 60.2), (35, 69.5)]
    labels = ["0", "1", "2", "3", "4", "5"]
    w1, w3, w5 = 8.0, 66.0 - 48.6, 69.5 - 60.2
    assert pts[2][1] < pts[0][1] and pts[4][1] > pts[1][1] and w3 > min(w1, w5)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, labels)
    ax.axhline(pts[0][1], color=DOWN, ls=":", lw=1)
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price")
    ax.set_title("A proposed five-wave impulse count on Stock YZA (hypothetical)")
    img = save(fig, P + "wave2_invalid.png")
    add("Ch11_4", img,
        "An analyst labels this advance as a five-wave impulse. Is the count acceptable?",
        ["No; wave 4 has entered the price territory of wave 1",
         "No; wave 2 has moved beyond the start of wave 1, which an impulse does not allow",
         "No; wave 3 is the shortest of the three motive waves",
         "Yes; wave 2 may exceed the start of wave 1 when it forms an expanded flat"], 1,
        "Wave 2 retracement rule")


# --------------------------------------------------------------------------- Ch11_5
def ch11_5_wave3_target():
    pts = [(0, 50.00), (9, 62.40), (15, 55.80)]
    w1 = pts[1][1] - pts[0][1]
    tgt = pts[2][1] + 1.618 * w1
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, ["0", "1", "2"])
    ax.plot([15, 22], [55.80, 61.5], color=MUTED, ls="--", lw=1)
    ax.text(22.3, 61.5, "wave 3 in progress?", color=MUTED, fontsize=9)
    ax.set_xlim(-2, 32)
    ax.set_ylim(44, 70)
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock BCD — waves 1 and 2 complete (hypothetical)")
    img = save(fig, P + "wave3_target.png")
    options, k = opts_with(round(tgt, 2), [round(pts[1][1] + 1.618 * w1, 2), round(pts[2][1] + w1, 2),
                                          round(pts[0][1] + 1.618 * w1, 2)], lambda v: f"${v:.2f}")
    add("Ch11_5", img,
        "Using the common guideline that wave 3 equals 1.618 times the length of wave 1, projected from the "
        "end of wave 2, what is the wave 3 price target?", options, k, "Wave 3 Fibonacci projection")


def ch11_5_wave5_equality():
    pts = [(0, 40.00), (8, 48.50), (13, 44.20), (30, 66.90), (37, 60.30)]
    w1 = pts[1][1] - pts[0][1]
    w3 = pts[3][1] - pts[2][1]
    assert w3 > 1.618 * w1
    tgt = pts[4][1] + w1
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, ["0", "1", "2", "3", "4"])
    ax.set_xlim(-2, 46)
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price ($)")
    ax.set_title("ETF EFG — waves 1 to 4 complete (hypothetical)")
    img = save(fig, P + "wave5_equality.png")
    options, k = opts_with(round(tgt, 2), [round(pts[4][1] + 0.618 * (pts[3][1] - pts[0][1]), 2),
                                          round(pts[3][1] + w1, 2), round(pts[4][1] + 1.618 * w1, 2)],
                           lambda v: f"${v:.2f}")
    add("Ch11_5", img,
        "Wave 3 is clearly the extended wave in this count. Applying the guideline most appropriate to that "
        "situation, what is the wave 5 price target?", options, k, "Wave 5 equality with wave 1")


def ch11_5_alternation():
    pts = [(0, 80.0), (12, 96.0), (13, 90.5), (14, 93.0), (16, 86.1), (34, 118.0)]
    labels = ["0", "1", "a", "b", "2", "3"]
    retr = (pts[1][1] - pts[4][1]) / (pts[1][1] - pts[0][1]) * 100
    assert 58 < retr < 66
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, labels, price_idx={0, 1, 4, 5})
    ax.set_xlim(-2, 46)
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock HIJ — waves 1 to 3, wave 4 not yet begun (hypothetical)")
    img = save(fig, P + "alternation.png")
    add("Ch11_5", img,
        f"Wave 2 was a sharp three-wave correction lasting four bars and retracing {retr:.0f}% of wave 1. "
        "Under the guideline of alternation, what form is wave 4 most likely to take?",
        ["Another sharp zigzag, about as deep as wave 2",
         "A deep decline back below $96 to mirror the depth of wave 2",
         "A brief, sharp correction, because wave 4 normally takes less time than wave 2",
         "A sideways correction such as a flat or triangle, likely shallower"], 3, "Guideline of alternation")


def ch11_5_channel():
    pts = [(0, 100.0), (10, 118.0), (16, 110.0), (34, 146.0), (42, 136.0)]
    x_t = 52
    slope = (pts[4][1] - pts[2][1]) / (pts[4][0] - pts[2][0])
    upper = pts[3][1] + slope * (x_t - pts[3][0])
    base = pts[4][1] + slope * (x_t - pts[4][0])
    s13 = (pts[3][1] - pts[1][1]) / (pts[3][0] - pts[1][0])
    line13 = pts[3][1] + s13 * (x_t - pts[3][0])
    eq = pts[4][1] + (pts[1][1] - pts[0][1])
    vals = [upper, base, line13, eq]
    assert len({round(v) for v in vals}) == 4
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, ["0", "1", "2", "3", "4"], show_prices=False)
    for i, (x, y) in enumerate(pts):
        high = i % 2 == 1
        ax.text(x, y + 6.5 if high else y - 9.5, f"{y:.0f} (bar {x})", ha="center", fontsize=8, color=MUTED)
    ax.plot([pts[2][0], pts[4][0]], [pts[2][1], pts[4][1]], color=ACCENT, ls="--", lw=1.1)
    ax.axvline(x_t, color=ACCENT2, ls=":", lw=1)
    ax.text(x_t + 0.5, 104, f"bar {x_t}", color=ACCENT2, fontsize=8)
    ax.set_xlim(-2, 58)
    ax.set_ylim(84, 166)
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price")
    ax.set_title("Index KLM — waves 0 to 4 with the 2–4 line drawn (hypothetical)")
    img = save(fig, P + "channel.png")
    options, k = opts_with(round(upper), [round(base), round(line13), round(eq)], lambda v: f"About {v:.0f}")
    add("Ch11_5", img,
        "Draw a line parallel to the 2–4 line (dashed) through the end of wave 3. If wave 5 tops out at that "
        f"upper channel line on bar {x_t}, what is the approximate price target?",
        options, k, "Elliott channelling for wave 5")


def ch11_5_prior_fourth():
    pts = [(0, 200.0), (6, 220.0), (10, 210.0), (14, 225.0), (16, 218.0), (24, 245.0), (27, 236.0),
           (31, 252.0), (34, 241.0)]
    labels = ["0", "1", "2", "(i)", "(ii)", "(iii)", "(iv)", "3", ""]
    assert pts[6][1] > pts[1][1]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    wave_plot(ax, pts, labels, price_idx={0, 1, 2, 5, 6, 7})
    ax.annotate(f"current {pts[-1][1]:.0f}", (pts[-1][0], pts[-1][1]), (pts[-1][0] + 2, pts[-1][1] - 10),
                arrowprops=dict(arrowstyle="->", color=MUTED), fontsize=9)
    ax.set_xlim(-2, 44)
    ax.set_xlabel("Bar")
    ax.set_ylabel("Price ($)")
    ax.set_title("Stock NOP — wave 4 under way (hypothetical)")
    img = save(fig, P + "prior_fourth.png")
    add("Ch11_5", img,
        "Wave 4 has begun from the wave 3 high at $252. Based on Elliott guidelines, where is wave 4 most likely "
        "to end?",
        ["Near $245, the high of subwave (iii) of wave 3",
         "Near $236, the prior fourth wave of lesser degree, subwave (iv)",
         "Near $220, the wave 1 high, which wave 4 normally tests",
         "Near $210, the end of wave 2, matching the depth of the earlier correction"], 1,
        "Wave 4 and the prior fourth wave of lesser degree")


def register():
    ch11_1_period_projection()
    ch11_1_summation()
    ch11_1_harmonicity()
    ch11_1_left_translation()
    ch11_2_projection_window()
    ch11_2_failed_cycle()
    ch11_2_gann_1x1()
    ch11_2_td_setup()
    ch11_2_hurst()
    ch11_4_flat()
    ch11_4_truncated_fifth()
    ch11_4_extended_third()
    ch11_4_wave2_invalid()
    ch11_5_wave3_target()
    ch11_5_wave5_equality()
    ch11_5_alternation()
    ch11_5_channel()
    ch11_5_prior_fourth()
