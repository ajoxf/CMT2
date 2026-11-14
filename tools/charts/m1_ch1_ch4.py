"""Chart questions for Ch1_1, Ch1_2, Ch4_1, Ch4_2, Ch4_3, Ch4_4 (module m1_ch1_ch4).

All data synthetic; every keyed value is computed from the drawn data.
"""
from generate_chart_questions import *  # noqa: F401,F403

P = "m1_ch1_ch4"


def _opts(correct, distractors, fmt):
    vals = [correct] + list(distractors)
    strs = [fmt(v) for v in vals]
    assert len(set(strs)) == 4, strs
    return opts_with(correct, distractors, fmt)


def _order(options, correct_text):
    assert correct_text in options and len(set(options)) == 4
    return options, options.index(correct_text)


# =========================================================================== Ch1_1 Alpha & Beta
def ch1_1_scatter_beta():
    rng = np.random.default_rng(1101)
    x = rng.normal(0.6, 4.0, 60)
    y = 0.5 + 1.4 * x + rng.normal(0, 1.8, 60)
    b, a = np.polyfit(x, y, 1)
    x1, x2 = -8, 8
    y1, y2 = round(a + b * x1, 1), round(a + b * x2, 1)
    beta_read = (y2 - y1) / (x2 - x1)
    corr = np.corrcoef(x, y)[0, 1]
    fig, ax = plt.subplots(figsize=(7.5, 5))
    ax.scatter(x, y, s=16, color=MUTED, alpha=0.8, label="Monthly returns")
    xs = np.linspace(-10, 10, 50)
    ax.plot(xs, a + b * xs, color=ACCENT, lw=1.6, label="Fitted regression line")
    for xx, yy, dx, dy in [(x1, y1, 1.5, -4), (x2, y2, -6.5, 3)]:
        ax.plot(xx, yy, "o", color=ACCENT2, ms=7, zorder=5)
        ax.annotate(f"({xx}%, {yy}%)", (xx, yy), (xx + dx, yy + dy), color=ACCENT2,
                    arrowprops=dict(arrowstyle="->", color=ACCENT2))
    ax.axhline(0, color=INK, lw=0.6)
    ax.axvline(0, color=INK, lw=0.6)
    ax.set_xlabel("Index XYZ monthly return (%)")
    ax.set_ylabel("Fund ABC monthly return (%)")
    ax.set_title("Fund ABC vs Index XYZ, 60 monthly returns (hypothetical)")
    ax.legend(loc="upper left")
    img = save(fig, f"{P}_scatter_beta.png")
    d = [1 / beta_read, corr, y2 / x2]
    assert min(abs(v - beta_read) for v in d) > 0.08 and abs(d[0] - d[1]) > 0.08 and abs(d[1] - d[2]) > 0.08, d
    options, k = _opts(beta_read, d, lambda v: f"{v:.2f}")
    add("Ch1_1", img,
        "Two points on the fitted regression line of Fund ABC's returns against Index XYZ's returns are "
        "labelled. What is the fund's beta relative to the index?", options, k,
        "Beta as the regression slope")


def ch1_1_jensens_alpha():
    rp, rm, rf, beta = 14.0, 10.0, 3.0, 1.3
    alpha = rp - (rf + beta * (rm - rf))
    fig, ax = plt.subplots(figsize=(7.5, 4.2))
    names = ["Portfolio QRS", "Benchmark XYZ", "Risk-free (T-bill)"]
    vals = [rp, rm, rf]
    bars = ax.bar(names, vals, color=[ACCENT, MUTED, "#bbbbbb"], width=0.55)
    for bb, v in zip(bars, vals):
        ax.text(bb.get_x() + bb.get_width() / 2, v + 0.3, f"{v:.1f}%", ha="center", fontweight="bold")
    ax.text(2.3, 13.3, f"Portfolio beta vs\nbenchmark = {beta:.2f}", ha="right", va="top",
            bbox=dict(boxstyle="round", fc="white", ec=ACCENT2))
    ax.set_ylim(0, 16)
    ax.set_ylabel("Annual return (%)")
    ax.set_title("One-year returns (hypothetical)")
    img = save(fig, f"{P}_jensen.png")
    treynor = (rp - rf) / beta
    no_rf = rp - beta * rm
    options, k = _opts(alpha, [rp - rm, no_rf, treynor], lambda v: f"{v:+.1f}%")
    add("Ch1_1", img,
        "Using the returns and beta shown, what is the portfolio's Jensen's alpha for the year?",
        options, k, "Jensen's alpha = Rp − [Rf + β(Rm − Rf)]")


def ch1_1_two_portfolios():
    rng = np.random.default_rng(1103)
    rf = 2.0
    ends = {"Portfolio A (β = 1.5)": (16.0, 1.5, ACCENT2), "Portfolio B (β = 0.7)": (11.0, 0.7, ACCENT),
            "Benchmark": (12.0, 1.0, INK)}
    rm = ends["Benchmark"][0]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    t = np.arange(13)
    for name, (end, b, col) in ends.items():
        path = 100 + end * t / 12 + np.r_[0, rng.normal(0, 1.2, 11) * b, 0]
        ax.plot(t, path, color=col, lw=1.8 if name != "Benchmark" else 1.3,
                ls="-" if name != "Benchmark" else "--", marker="o", ms=3, label=name)
        ax.text(12.15, 100 + end, f"+{end:.0f}%", color=col, va="center", fontweight="bold")
    ax.set_xlim(0, 13.2)
    ax.set_xticks(t)
    ax.set_xlabel("Month")
    ax.set_ylabel("Growth of 100")
    ax.set_title(f"Twelve-month cumulative returns; risk-free rate = {rf:.0f}% (hypothetical)")
    ax.legend(loc="upper left")
    img = save(fig, f"{P}_two_portfolios.png")
    alpha = {n: e - (rf + b * (rm - rf)) for n, (e, b, _) in ends.items()}
    aA, aB = alpha["Portfolio A (β = 1.5)"], alpha["Portfolio B (β = 0.7)"]
    assert aA < 0 < aB, alpha
    options, k = _order(["Both A and B", "Neither A nor B", "Portfolio A only", "Portfolio B only"],
                        "Portfolio B only")
    add("Ch1_1", img,
        "After adjusting for each portfolio's beta with the CAPM, which portfolio(s) earned a positive "
        "Jensen's alpha over the twelve months?", options, k,
        "Raw outperformance vs beta-adjusted alpha")


def ch1_1_drawdown_beta():
    rng = np.random.default_rng(1104)
    idx = np.r_[interp_path([90, 100], 40, rng, 0.8)[:-1], interp_path([100, 80, 86], 30, rng, 0.8)]
    ip = 40
    i_tr = 70
    idx[ip], idx[i_tr] = 100, 80
    idx[:ip] = np.minimum(idx[:ip], 99.5)
    idx[ip + 1:] = np.minimum(idx[ip + 1:], 99.5)
    idx[ip + 1:] = np.maximum(idx[ip + 1:], 80.2)
    idx[i_tr] = 80
    rel = idx / 100 - 1
    h = 100 * (1 + 1.5 * rel)
    l_ = 100 * (1 + 0.5 * rel)

    def dd(s):
        pk = s[:i_tr + 1].max()
        return (s[i_tr:].min() / pk - 1) * 100

    ddi, ddh, ddl = dd(idx), dd(h), dd(l_)
    bh, bl = ddh / ddi, ddl / ddi
    assert abs(bh - 1.5) < 0.05 and abs(bl - 0.5) < 0.05, (bh, bl)
    fig, ax = plt.subplots(figsize=(8, 4.4))
    ax.plot(idx, color=INK, lw=1.4, label="Index XYZ")
    ax.plot(h, color=DOWN, lw=1.4, label="Stock H")
    ax.plot(l_, color=UP, lw=1.4, label="Stock L")
    ax.axvline(ip, color=MUTED, ls=":", lw=1)
    ax.text(ip + 0.5, 101.5, "Common peak (rebased to 100)", color=MUTED)
    for s, v, col in [(idx, ddi, INK), (h, ddh, DOWN), (l_, ddl, UP)]:
        ax.annotate(f"{v:.0f}%", (i_tr, s[i_tr]), (i_tr + 6, s[i_tr] - 1.5), color=col, fontweight="bold",
                    arrowprops=dict(arrowstyle="->", color=col))
    ax.set_ylim(64, 104)
    ax.set_xlabel("Trading day")
    ax.set_ylabel("Rebased price")
    ax.set_title("Peak-to-trough declines during a market correction (hypothetical)")
    ax.legend(loc="lower left")
    img = save(fig, f"{P}_drawdown_beta.png")
    options, k = _order(["H ≈ 1.5 and L ≈ 0.5",
                         "H ≈ 0.67 and L ≈ 2.0",
                         "H ≈ 3.0 and L ≈ 1.0",
                         "H ≈ 1.5 and L ≈ −0.5"], "H ≈ 1.5 and L ≈ 0.5")
    options = [options[1], options[3], options[0], options[2]]
    k = options.index("H ≈ 1.5 and L ≈ 0.5")
    add("Ch1_1", img,
        "During the correction the index fell 20% from the common peak. If each stock's decline is explained by "
        "its sensitivity to the index, which pair of beta estimates is most consistent with the chart?",
        options, k, "High- vs low-beta behaviour in a drawdown")


def ch1_1_rolling_beta():
    rng = np.random.default_rng(1105)
    n, w = 500, 60
    r_m = rng.normal(0.0004, 0.01, n)
    true_b = np.r_[np.full(250, 0.8), np.full(250, 1.6)]
    r_s = true_b * r_m + rng.normal(0, 0.006, n)
    rb = np.full(n, np.nan)
    for i in range(w, n):
        xm, xs = r_m[i - w:i], r_s[i - w:i]
        rb[i] = np.cov(xs, xm)[0, 1] / np.var(xm, ddof=1)
    first, last = round(rb[w], 2), round(rb[-1], 2)
    avg = round(np.nanmean(rb), 2)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(rb, color=ACCENT, lw=1.4)
    ax.axhline(1.0, color=MUTED, ls="--", lw=0.9)
    ax.text(5, 1.03, "β = 1", color=MUTED)
    ax.annotate(f"First reading {first:.2f}", (w, rb[w]), (w + 30, rb[w] - 0.35),
                arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate(f"Latest {last:.2f}", (n - 1, rb[-1]), (n - 90, rb[-1] + 0.3),
                arrowprops=dict(arrowstyle="->", color=ACCENT2), color=ACCENT2, fontweight="bold")
    ax.set_xlim(0, n + 5)
    ax.set_ylim(0, 2.4)
    ax.set_xlabel("Trading day")
    ax.set_ylabel("60-day rolling beta")
    ax.set_title(f"Stock DEF: 60-day rolling beta vs Index XYZ (series average {avg:.2f}), hypothetical")
    img = save(fig, f"{P}_rolling_beta.png")
    move = -5 * last
    d = [-5 * first, -5 / last, -5 * avg]
    assert min(abs(v - move) for v in d) > 0.5
    options, k = _opts(move, d, lambda v: f"{v:.1f}%")
    add("Ch1_1", img,
        "Using the most relevant beta estimate on the chart, what is the expected percentage move in Stock DEF "
        "if Index XYZ falls 5% tomorrow (ignoring alpha)?", options, k,
        "Using the current rolling beta")


# =========================================================================== Ch1_2 Fusion analysis
def ch1_2_estimates_divergence():
    rng = np.random.default_rng(1201)
    p = interp_path([40, 48, 45, 54, 51, 60, 57, 64], 15, rng, 0.7)
    n = len(p)
    eps = np.r_[np.linspace(3.80, 4.20, 60), np.linspace(4.20, 3.70, n - 60)] + rng.normal(0, 0.01, n)
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5.2), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(p, color=INK, lw=1.4)
    a1.plot(ema(p, 30), color=ACCENT, lw=1, label="30-day EMA")
    a1.annotate("New closing high", (n - 1, p[-1]), (n - 40, p[-1] + 2.5),
                arrowprops=dict(arrowstyle="->", color=MUTED))
    a1.set_ylim(36, 70)
    a1.set_ylabel("Price ($)")
    a1.legend(loc="upper left")
    a1.set_title("Stock JKL price (top) and consensus next-year EPS estimate (bottom), hypothetical")
    a2.plot(eps, color=ACCENT2, lw=1.4)
    a2.text(64, 4.25, "Estimate peak $4.20", color=ACCENT2)
    a2.text(n - 32, 3.78, "Now $3.70", color=ACCENT2)
    a2.set_ylabel("EPS est. ($)")
    a2.set_ylim(3.6, 4.35)
    img = save(fig, f"{P}_eps_divergence.png")
    assert p[-1] == p.max() and eps[-1] < eps[60]
    correct = ("The disciplines disagree, so conviction is lower; hold with tighter stops and let a break of "
               "trend confirm the warning")
    options, k = _order([
        "Both disciplines agree, because price leads earnings and the market is looking through the cuts, "
        "so add to the position",
        correct,
        "Sell short immediately, because downward estimate revisions reliably lead price lower within weeks",
        "Disregard the revisions, since a new closing high means the technical evidence now outweighs them",
    ], correct)
    add("Ch1_2", img,
        "Stock JKL is making new highs while the consensus EPS estimate has been cut for several months. "
        "What is the most appropriate fusion-analysis conclusion?", options, k,
        "Fundamental/technical divergence lowers conviction")


def ch1_2_surprise_breakout():
    rng = np.random.default_rng(1202)
    base = interp_path([46, 49.5, 46.5, 49.5, 47, 49], 8, rng, 0.4)
    abc = np.r_[base, interp_path([49, 52.5, 51, 54, 56], 4, rng, 0.3)[1:]]
    deff = np.r_[base, interp_path([49, 51.2, 50.6, 48.5, 46, 44.5], 4, rng, 0.3)[1:]]
    e = len(base) - 1
    fig, axs = plt.subplots(1, 2, figsize=(9.5, 4.2), sharey=True)
    for ax, s, nm in [(axs[0], abc, "Stock ABC"), (axs[1], deff, "Stock DEF")]:
        ax.plot(s, color=INK, lw=1.4)
        ax.axhline(50, color=ACCENT, ls="--", lw=1)
        ax.text(1, 50.3, "Resistance 50", color=ACCENT)
        ax.axvline(e + 1, color=ACCENT2, ls=":", lw=1.2)
        ax.text(e + 1.5, 43.4, "Earnings:\n+15% surprise", color=ACCENT2, fontsize=9)
        ax.set_title(f"{nm} (hypothetical)")
        ax.set_xlabel("Day")
    axs[0].set_ylabel("Price ($)")
    axs[0].set_ylim(43, 58)
    img = save(fig, f"{P}_surprise_breakout.png")
    assert abc[-1] > 55 and deff[e + 4] > 50 and deff[-1] < 46
    correct = "ABC: the surprise is confirmed by a sustained breakout; DEF's failure after good news is a warning"
    options, k = _order([
        "DEF: the pullback after good news offers a cheaper entry into the same improved fundamental story",
        "They are equally attractive, since both had the same surprise and both broke above resistance",
        "DEF: a breakout that fails after good news is a bullish shakeout that usually precedes a stronger advance",
        correct,
    ], correct)
    add("Ch1_2", img,
        "Both stocks reported the same positive earnings surprise and briefly traded above resistance. Which "
        "offers the stronger fusion (fundamental + technical) long set-up?", options, k,
        "Earnings catalyst confirmed vs failed breakout")


def ch1_2_sector_rs_revisions():
    rng = np.random.default_rng(1203)
    rs = interp_path([1.00, 0.90, 0.95, 0.87, 0.93, 0.98, 1.04, 1.08], 20, rng, 0.004)
    rr = interp_path([0.70, 0.60, 0.55, 0.62, 0.80, 0.92, 1.15, 1.30], 20, rng, 0.01)
    pts = {"A": 62, "B": 92, "C": 118, "D": 138}
    lvl = 0.95
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5.4), sharex=True, gridspec_kw={"height_ratios": [2.4, 1.6]})
    a1.plot(rs, color=INK, lw=1.4)
    a1.axhline(lvl, color=ACCENT, ls="--", lw=1)
    a1.text(140, lvl - 0.017, "RS resistance 0.95 (prior swing high)", color=ACCENT, ha="right")
    a1.set_ylabel("RS: sector / index")
    a1.set_title("Sector GHI: RS vs index (top), analyst upgrade/downgrade ratio (bottom), hypothetical",
                 fontsize=10)
    a2.plot(rr, color=ACCENT2, lw=1.4)
    a2.axhline(1.0, color=MUTED, ls="--", lw=1)
    a2.text(2, 1.02, "Ratio = 1 (upgrades = downgrades)", color=MUTED)
    a2.set_ylabel("Upgrades ÷ downgrades")
    for lab, i in pts.items():
        for ax in (a1, a2):
            ax.axvline(i, color=MUTED, ls=":", lw=0.9)
        a1.text(i, 1.105, lab, ha="center", fontweight="bold", color=ACCENT2)
    a1.set_ylim(0.84, 1.12)
    a2.set_ylim(0.45, 1.4)
    img = save(fig, f"{P}_sector_rs_rev.png")
    tech = {k: rs[i] > lvl and rs[:i + 1].max() > lvl for k, i in pts.items()}
    fund = {k: rr[i] > 1.0 for k, i in pts.items()}
    assert not tech["A"] and not fund["A"] and tech["B"] and not fund["B"] and tech["C"] and fund["C"]
    options, k = ["Point A", "Point B", "Point C", "Point D"], 2
    add("Ch1_2", img,
        "A fusion analyst will overweight Sector GHI only when its relative strength has broken above "
        "resistance AND upgrades outnumber downgrades. At which marked point are both conditions first met?",
        options, k, "Sector RS breakout plus improving revisions")


def ch1_2_multiple_expansion():
    rng = np.random.default_rng(1204)
    p = interp_path([50, 58, 55, 68, 64, 80, 76, 90], 18, rng, 0.8)
    n = len(p)
    eps = 3.0 + rng.normal(0, 0.01, n)
    pe = p / eps
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5.2), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(p, color=INK, lw=1.4, label="Price")
    a1.plot(ema(p, 40), color=ACCENT, lw=1.1, label="40-day EMA")
    a1.legend(loc="upper left")
    a1.set_ylabel("Price ($)")
    a1.text(n - 55, 52, "Trailing EPS unchanged at ≈ $3.00", color=MUTED)
    a1.set_title("Stock MNO price (top) and trailing P/E (bottom), hypothetical")
    a2.plot(pe, color=ACCENT2, lw=1.4)
    a2.axhline(18, color=MUTED, ls="--", lw=1)
    a2.text(2, 15.0, "10-year average P/E 18× (dashed)", color=MUTED)
    a2.text(n - 6, pe[-1] + 1.2, f"{pe[-1]:.0f}×", color=ACCENT2, fontweight="bold")
    a2.set_ylabel("P/E (×)")
    a2.set_ylim(12, 34)
    img = save(fig, f"{P}_multiple_expansion.png")
    assert pe[-1] > 28 and p[-1] > ema(p, 40)[-1]
    correct = "Accept the valuation risk but let the trend time the exit: stay long until a technical breakdown"
    options, k = _order([
        correct,
        "Sell short now, because a P/E this far above its long-run average signals that a major top is imminent",
        "Add to the position, because the expanding P/E confirms that earnings growth is about to accelerate",
        "Close the position now and re-enter only after the P/E has reverted to its 18× ten-year average",
    ], correct)
    add("Ch1_2", img,
        "Stock MNO's rally has come entirely from P/E expansion while earnings have been flat. Which response "
        "best reflects a fusion approach for a current holder?", options, k,
        "Valuation is a poor timing tool; technicals time it")


def ch1_2_value_downtrend():
    rng = np.random.default_rng(1205)
    p = interp_path([84, 86, 80, 76, 78, 68, 71, 61, 64, 55, 58, 52], 28, rng, 0.9)
    n = len(p)
    ma = np.array([p[max(0, i - 199):i + 1].mean() for i in range(n)])
    eps = np.linspace(5.6, 5.8, n)
    pe = p / eps
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5.2), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(p, color=INK, lw=1.3, label="Price")
    a1.plot(np.arange(199, n), ma[199:], color=DOWN, lw=1.2, label="200-day SMA (falling)")
    a1.legend(loc="upper right")
    a1.set_ylabel("Price ($)")
    a1.annotate("Screen flags stock\nas undervalued", (n - 1, p[-1]), (n - 70, p[-1] - 2),
                arrowprops=dict(arrowstyle="->", color=ACCENT2), color=ACCENT2, va="top")
    a1.set_ylim(40, 92)
    a1.set_title("Stock PQR price (top) and trailing P/E (bottom), hypothetical")
    a2.plot(pe, color=ACCENT2, lw=1.4)
    a2.axhline(14, color=MUTED, ls="--", lw=1)
    a2.text(2, 13.4, "Sector average P/E 14×", color=MUTED, va="top")
    a2.text(n - 6, pe[-1] + 1.3, f"{pe[-1]:.0f}×", color=ACCENT2, fontweight="bold")
    a2.set_ylabel("P/E (×)")
    a2.set_ylim(7, 16)
    img = save(fig, f"{P}_value_downtrend.png")
    assert p[-1] < ma[-1] and ma[-1] < ma[-30] and pe[-1] < 10
    correct = "Watch-list it and wait for technical evidence of a trend change, such as a sustained close above the 200-day average"
    options, k = _order([
        "Buy now, because a P/E well below the sector average limits downside risk regardless of the price trend",
        "Buy half now and average down on further weakness, lowering the cost basis toward fair value",
        correct,
        "Sell short, because the falling P/E confirms that the company's fundamentals are deteriorating",
    ], correct)
    add("Ch1_2", img,
        "A fundamental screen flags Stock PQR as undervalued at the latest bar. What would a fusion analyst do?",
        options, k, "Fundamentals select, technicals time the entry")


# =========================================================================== Ch4_1 Chart patterns
def ch4_1_ascending_triangle():
    rng = np.random.default_rng(4101)
    p = interp_path([38, 50, 42, 50, 44.5, 50, 47, 50, 53], 10, rng, 0.35)
    res, low1 = 50, 42
    target = res + (res - low1)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(p, color=INK, lw=1.4)
    ax.axhline(res, color=ACCENT, ls="--", lw=1.1)
    ax.text(1, res + 0.4, "Resistance 50", color=ACCENT)
    ax.plot([20, 60], [42, 47], color=ACCENT2, ls="--", lw=1.1)
    ax.annotate("First reaction low 42", (20, 42), (24, 39.5), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Last low 47", (60, 47), (62, 44), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Breakout close 53", (80, 53), (66, 55), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.set_ylim(35, 60)
    ax.set_title("Stock STU — daily closes (hypothetical)")
    ax.set_ylabel("Price ($)")
    img = save(fig, f"{P}_asc_triangle.png")
    options, k = _opts(target, [res + (res - 47), 53 + (res - low1), res + 2 * (res - low1)], lambda v: f"${v:.0f}")
    add("Ch4_1", img,
        "The ascending triangle has broken out above resistance. Measuring the pattern at its widest point and "
        "projecting from the breakout level, what is the minimum price objective?", options, k,
        "Triangle measured target from widest part")


def ch4_1_flag():
    rng = np.random.default_rng(4102)
    knots = [30, 30.3, 30, 36, 42, 39, 41, 38, 40, 42.5, 44]
    p = interp_path(knots, 5, rng, 0.25)
    pole_lo, pole_hi, brk = 30, 42, 40
    target = brk + (pole_hi - pole_lo)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(p, color=INK, lw=1.4, marker="o", ms=2)
    ax.plot([20, 40], [42, 40], color=ACCENT, ls="--", lw=1)
    ax.plot([25, 40], [39, 37.5], color=ACCENT, ls="--", lw=1)
    ax.annotate("Flagpole starts 30", (10, 30), (12, 27.5), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Flagpole top 42", (20, 42), (6, 44), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Flag low 38", (35, 38), (30, 34.5), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Breakout from flag at 40", (40, 40), (41, 36), color=ACCENT2,
                arrowprops=dict(arrowstyle="->", color=ACCENT2))
    ax.set_ylim(25, 48)
    ax.set_xlim(-1, 52)
    ax.set_title("Stock VWX — daily closes (hypothetical)")
    ax.set_ylabel("Price ($)")
    img = save(fig, f"{P}_flag.png")
    options, k = _opts(target, [pole_hi + (pole_hi - pole_lo), brk + (pole_hi - 38), brk + (pole_hi - pole_lo) / 2],
                       lambda v: f"${v:.0f}")
    add("Ch4_1", img,
        "A bull flag has formed after a sharp advance and has just broken out. Using the flagpole measured move, "
        "what is the price objective?", options, k, "Flag measured move (flagpole from breakout)")


def ch4_1_double_bottom():
    rng = np.random.default_rng(4103)
    p = interp_path([56, 40, 48, 40.5, 47, 49.5], 14, rng, 0.45)
    p[28] = 48
    lo, peak = 40, 48
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(p, color=INK, lw=1.4)
    ax.axhline(peak, color=ACCENT, ls="--", lw=1)
    ax.annotate("Low 40.0", (14, 40), (2, 38), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Low 40.5", (42, 40.5), (46, 38), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate("Intervening peak 48", (28, 48), (18, 51), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.set_ylim(35, 58)
    ax.set_title("Stock YZA — daily closes (hypothetical)")
    ax.set_ylabel("Price ($)")
    img = save(fig, f"{P}_double_bottom.png")
    assert p[29:57].max() < peak and p[-1] > peak and p[:28].max() < 57
    correct = "Close above 48; minimum target 56"
    options, k = _order([
        "Second low at 40.5; minimum target 48",
        "Close above 44 (midpoint); minimum target 52",
        "Close above 48; minimum target 64",
        correct,
    ], correct)
    options = [options[0], correct, options[1], options[2]]
    k = 1
    add("Ch4_1", img,
        "The chart shows a potential double bottom. At what level is the pattern confirmed, and what is the "
        "classical minimum price objective?", options, k, "Double bottom confirmation and target")


# =========================================================================== candle helpers
def _candles(seed, closes, overrides, spread=0.45):
    rng = np.random.default_rng(seed)
    closes = np.array(closes, float)
    for j, v in overrides.items():
        closes[j] = v[3]
    o, h, l, c = ohlc_from_close(closes, rng, spread)
    for j, (oo, hh, ll, cc) in overrides.items():
        o[j], h[j], l[j], c[j] = oo, hh, ll, cc
    return o, h, l, c


def _box(ax, i0, i1, l, h):
    ax.add_patch(plt.Rectangle((i0 - 0.6, min(l[i0:i1 + 1]) - 0.5), i1 - i0 + 1.2,
                               max(h[i0:i1 + 1]) - min(l[i0:i1 + 1]) + 1.0, fill=False,
                               edgecolor=ACCENT2, lw=1.4, ls="--"))


# =========================================================================== Ch4_2 Candlesticks
def ch4_2_morning_star():
    closes = list(np.linspace(62, 51.5, 18))
    n = 21
    ov = {18: (51.4, 51.7, 47.5, 47.8), 19: (47.0, 47.4, 46.3, 46.8), 20: (47.6, 50.8, 47.4, 50.5)}
    o, h, l, c = _candles(4201, closes + [0, 0, 0], ov)
    assert max(o[19], c[19]) < c[18] and c[20] > (o[18] + c[18]) / 2
    fig, ax = plt.subplots(figsize=(8, 4.2))
    draw_candles(ax, o, h, l, c)
    _box(ax, 18, 20, l, h)
    ax.set_xlim(-1, n + 1)
    ax.set_title("Stock BCD — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_morning_star.png")
    options, k = _order(["Evening star", "Bullish harami", "Morning star", "Three black crows"], "Morning star")
    add("Ch4_2", img,
        "Which three-candle pattern is outlined at the end of this decline?", options, k,
        "Morning star recognition")


def ch4_2_dark_cloud_midpoint():
    closes = list(np.linspace(42, 49.8, 16))
    ov = {16: (50.0, 56.3, 49.8, 56.0), 17: (56.8, 57.2, 53.7, 54.0)}
    o, h, l, c = _candles(4202, closes + [0, 0], ov)
    mid = (o[16] + c[16]) / 2
    assert o[17] > h[16] and c[17] > mid and c[17] < c[16]
    fig, ax = plt.subplots(figsize=(8, 4.4))
    draw_candles(ax, o, h, l, c)
    _box(ax, 16, 17, l, h)
    ax.text(1, 56.3, "Day 1: O 50.0  H 56.3  C 56.0", fontsize=9)
    ax.text(1, 55.2, "Day 2: O 56.8  L 53.7  C 54.0", fontsize=9)
    ax.set_xlim(-1, 20)
    ax.set_ylim(39, 59)
    ax.set_title("Stock EFG — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_dark_cloud_test.png")
    correct = "No — the 54.0 close fails to penetrate below the 53.0 midpoint of Day 1's white body"
    options, k = _order([
        "Yes — opening above the prior high and closing lower is all that dark cloud cover requires",
        "Yes — it is a bearish engulfing pattern because Day 2 closed inside Day 1's body",
        "No — it is a piercing line, the bullish counterpart of dark cloud cover",
        correct,
    ], correct)
    add("Ch4_2", img,
        "After an advance, Day 2 opens above Day 1's high and closes lower (prices labelled). Does the outlined "
        "pair qualify as dark cloud cover?", options, k, "Dark cloud cover midpoint rule")


def ch4_2_shooting_star():
    rng = np.random.default_rng(4203)
    closes = list(interp_path([64, 75, 66, 74], 11, rng, 0.4))
    n = len(closes) + 1
    ov = {n - 1: (74.2, 76.9, 73.9, 74.0)}
    o, h, l, c = _candles(4203, closes + [0], ov, spread=0.5)
    j = n - 1
    body = abs(o[j] - c[j])
    assert h[j] - max(o[j], c[j]) >= 2 * body and min(o[j], c[j]) - l[j] <= body + 0.15
    fig, ax = plt.subplots(figsize=(8, 4.2))
    draw_candles(ax, o, h, l, c)
    ax.axhline(75, color=ACCENT, ls="--", lw=1)
    ax.text(0, 75.3, "Prior high / resistance 75", color=ACCENT)
    _box(ax, j, j, l, h)
    ax.set_xlim(-1, n + 1)
    ax.set_ylim(60, 79)
    ax.set_title("Stock HIJ — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_shooting_star.png")
    correct = "A shooting star rejected at resistance; a lower close next session would confirm it"
    options, k = _order([
        "An inverted hammer; the intraday push through resistance is a bullish sign of buying pressure",
        "A hanging man; it needs a gap up next session to confirm the bearish reversal",
        correct,
        "A gravestone doji, which signals that the advance is likely to continue",
    ], correct)
    add("Ch4_2", img,
        "How should the outlined candle be classified in this context, and what would confirm it?",
        options, k, "Shooting star at resistance")


# =========================================================================== Ch4_3 Candles in context
def ch4_3_support_vs_midrange():
    rng = np.random.default_rng(4301)
    closes = interp_path([46, 49.5, 40.8, 48.5, 41.0, 49.0, 45.2, 48.5], 7, rng, 0.4)
    n = len(closes)
    ia = 28 + 1
    ib = 42 + 1
    ov = {ia: (41.2, 41.7, 39.9, 41.5), ib: (45.5, 46.0, 44.2, 45.8)}
    o, h, l, c = _candles(4301, closes, ov, spread=0.4)
    fig, ax = plt.subplots(figsize=(8.5, 4.4))
    draw_candles(ax, o, h, l, c)
    ax.axhline(40, color=ACCENT, ls="--", lw=1)
    ax.text(0, 40.2, "Support 40 (prior swing low)", color=ACCENT)
    ax.axhline(50, color=MUTED, ls="--", lw=1)
    ax.text(0, 50.2, "Resistance 50", color=MUTED)
    for lab, i in [("A", ia), ("B", ib)]:
        ax.text(i, l[i] - 1.0, lab, ha="center", fontweight="bold", color=ACCENT2)
    ax.set_ylim(37, 52)
    ax.set_xlim(-1, n + 1)
    ax.set_title("Stock KLM — daily candles in a trading range (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_hammer_context.png")
    correct = "A, because it formed on a decline into support, which gives it a reference level and a logical stop"
    options, k = _order([
        correct,
        "B, because a hammer in mid-range has more room to run before it meets resistance at 50",
        "They are equally reliable, since a candlestick's signal comes from its shape rather than its location",
        "B, because support at 40 has already been tested and is therefore more likely to break this time",
    ], correct)
    add("Ch4_3", img,
        "Candles A and B are both hammers of similar shape. Which is the more reliable bullish signal?",
        options, k, "Pattern location: support vs mid-range")


def ch4_3_confirmation():
    closes = list(np.linspace(52, 45, 14)) + [0, 44.0, 43.0, 42.2, 41.6, 41.2, 41.0, 40.9, 0, 0, 42.6, 43.4]
    ov = {14: (45.0, 45.2, 43.5, 44.9), 15: (44.6, 44.7, 43.0, 43.2),
          22: (41.1, 41.4, 39.6, 41.2), 23: (41.6, 42.6, 41.4, 42.4)}
    o, h, l, c = _candles(4302, closes, ov, spread=0.35)
    assert c[15] < l[14] and c[23] > h[22]
    fig, ax = plt.subplots(figsize=(8, 4.2))
    draw_candles(ax, o, h, l, c)
    for lab, i in [("H1", 14), ("H2", 22)]:
        ax.text(i, l[i] - 0.9, lab, ha="center", fontweight="bold", color=ACCENT2)
    ax.set_xlim(-1, len(c) + 1)
    ax.set_ylim(37.5, 54)
    ax.set_title("Stock NOP — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_hammer_confirm.png")
    options, k = _order(["H1 only", "H2 only", "Both H1 and H2", "Neither"], "H2 only")
    add("Ch4_3", img,
        "H1 and H2 are both hammers. Using the next session's close relative to the hammer's range as the "
        "confirmation test, which hammer(s) received bullish confirmation?", options, k,
        "Confirmed vs unconfirmed candlestick signal")


def ch4_3_stop_risk():
    closes = list(np.linspace(46, 39.6, 15)) + [0, 0, 0]
    ov = {15: (39.4, 39.6, 37.8, 38.3), 16: (38.2, 40.0, 38.0, 39.8), 17: (39.9, 40.5, 39.7, 40.2)}
    o, h, l, c = _candles(4303, closes, ov, spread=0.3)
    assert o[16] < c[15] and c[16] > o[15]
    stop = min(l[15], l[16])
    entry = c[17]
    risk = entry - stop
    fig, ax = plt.subplots(figsize=(8, 4.4))
    draw_candles(ax, o, h, l, c)
    _box(ax, 15, 16, l, h)
    ax.text(8.5, 37.4, "Candle 1: O 39.4  C 38.3  L 37.80\nCandle 2: O 38.2  C 39.8  L 38.00\n"
            "Entry: close of next day 40.20", fontsize=9, va="bottom",
            bbox=dict(boxstyle="round", fc="white", ec=MUTED))
    ax.set_xlim(-1, 19)
    ax.set_ylim(36.5, 48)
    ax.set_title("Stock QRS — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_stop_risk.png")
    options, k = _opts(risk, [entry - l[16], entry - o[16], entry - c[16]], lambda v: f"${v:.2f}")
    add("Ch4_3", img,
        "A trader buys on confirmation of the outlined bullish engulfing pattern and places the protective stop "
        "at the pattern's low. What is the risk per share?", options, k, "Stop placement below pattern low")


def ch4_3_bearish_fails_at_support():
    closes = list(np.r_[np.linspace(48, 58, 10), np.linspace(58, 51.5, 9)]) + [0, 0, 51.6, 52.4, 53.6, 54.5]
    ov = {19: (51.6, 53.0, 51.2, 52.6), 20: (52.9, 53.2, 50.3, 51.1)}
    o, h, l, c = _candles(4304, closes, ov, spread=0.35)
    ph = max(h[19], h[20])
    assert o[20] > c[19] and c[20] < o[19] and c[-1] > ph and l[21:].min() > 50
    fig, ax = plt.subplots(figsize=(8, 4.2))
    draw_candles(ax, o, h, l, c)
    ax.axhline(50, color=ACCENT, ls="--", lw=1)
    ax.text(10, 49.45, "Major support 50", color=ACCENT)
    _box(ax, 19, 20, l, h)
    ax.axhline(ph, color=MUTED, ls=":", lw=1)
    ax.text(6.3, ph - 0.6, f"Pattern high {ph:.1f}", color=MUTED)
    ax.set_xlim(-1, len(c) + 1)
    ax.set_ylim(46, 60)
    ax.set_title("Stock TUV — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_bearish_fail.png")
    correct = "The bearish signal failed: it formed into support, and the close above the pattern high negates it"
    options, k = _order([
        "The sell signal stays valid until price closes below 45, so the rally is a bull trap to be shorted",
        correct,
        "Engulfing patterns need a third session to complete, so the bearish signal is still pending",
        "The pattern was valid; the rally is normal noise after a reversal signal and does not alter it",
    ], correct)
    add("Ch4_3", img,
        "A bearish engulfing pattern (outlined) formed just above support. What is the best interpretation of "
        "the price action that followed?", options, k, "Bearish pattern failing at support")


def ch4_3_reward_risk():
    closes = list(np.r_[np.linspace(40, 46, 7), np.linspace(45.5, 41.5, 4), np.linspace(42.5, 46, 4),
                        np.linspace(45.6, 43.1, 5)]) + [0, 0]
    ov = {20: (43.4, 43.6, 42.5, 42.8), 21: (42.7, 44.7, 42.6, 44.5)}
    o, h, l, c = _candles(4305, closes, ov, spread=0.3)
    res = 46.0
    h[:20] = np.minimum(h[:20], res)
    assert o[21] < c[20] and c[21] > o[20]
    entry, stop = c[21], min(l[20], l[21])
    rr = (res - entry) / (entry - stop)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    draw_candles(ax, o, h, l, c)
    ax.axhline(res, color=DOWN, ls="--", lw=1)
    ax.text(0, res + 0.15, "Resistance 46.0", color=DOWN)
    _box(ax, 20, 21, l, h)
    ax.text(10, 39.3, f"Pattern low {stop:.1f}   Entry (close of white candle) {entry:.1f}", fontsize=9,
            bbox=dict(boxstyle="round", fc="white", ec=MUTED))
    ax.set_xlim(-1, 23)
    ax.set_ylim(38.5, 47.5)
    ax.set_title("Stock WXY — daily candles (hypothetical)")
    ax.set_ylabel("Price")
    img = save(fig, f"{P}_reward_risk.png")
    options, k = _opts(rr, [(entry - stop) / (res - entry), (res - stop) / (entry - stop), (res - entry) / (res - stop)],
                       lambda v: f"{v:.2f} : 1")
    add("Ch4_3", img,
        "A trader buys at the close of the outlined bullish engulfing pattern, with a stop at the pattern low and "
        "a target at overhead resistance. What is the trade's reward-to-risk ratio?", options, k,
        "Nearby resistance limits the reward of a candle signal")


# =========================================================================== Ch4_4 Point and figure
def _pf(cols, box, ylo, yhi, title, fname, shade=None, size=(7, 5.2), fs=12):
    fig, ax = plt.subplots(figsize=size)
    if shade:
        a, b = shade
        ax.axvspan(a - 0.5, b + 0.5, color=ACCENT, alpha=0.08)
    for i, (t, lo, hi) in enumerate(cols):
        for y in np.arange(lo, hi + box / 2, box):
            ax.text(i, y, t, ha="center", va="center", fontsize=fs,
                    color=UP if t == "X" else DOWN, fontweight="bold")
    ax.set_xlim(-0.7, len(cols) - 0.3)
    ax.set_ylim(ylo - box / 2, yhi + box / 2)
    ax.set_yticks(np.arange(ylo, yhi + box / 2, box))
    ax.set_xticks(range(len(cols)), [f"C{i + 1}" for i in range(len(cols))])
    ax.set_title(title)
    ax.grid(True, alpha=0.35)
    return fig, ax


def _check_pf(cols, box, rev):
    for (t0, lo0, hi0), (t1, lo1, hi1) in zip(cols[:-1], cols[1:]):
        assert t0 != t1
        assert round((hi1 - lo1) / box) + 1 >= rev
        if t1 == "X":
            assert lo1 == lo0 + box
        else:
            assert hi1 == hi0 - box


def ch4_4_horizontal_count():
    cols = [("O", 20, 30), ("X", 21, 24), ("O", 21, 23), ("X", 22, 24), ("O", 20, 23), ("X", 21, 24),
            ("O", 21, 23), ("X", 22, 27)]
    box, rev = 1, 3
    _check_pf(cols, box, rev)
    base = (1, 6)  # C2..C7
    width = base[1] - base[0] + 1
    base_low = min(lo for _, lo, _ in cols[base[0]:base[1] + 1])
    target = base_low + width * box * rev
    fig, ax = _pf(cols, box, 18, 31, "Point-and-figure: $1 box, 3-box reversal (hypothetical)",
                  None, shade=base)
    ax.text(3.5, 29.5, "Shaded base", ha="center", color=ACCENT)
    img = save(fig, f"{P}_pf_horizontal.png")
    options, k = _opts(target, [base_low + width * box, base_low + (width + 1) * box * rev, 27 + width * box * rev],
                       lambda v: f"${v:.0f}")
    add("Ch4_4", img,
        "Price has broken out of the shaded base in C8. Using a horizontal count across the shaded base and "
        "projecting from the lowest box in the base, what is the upside price objective?", options, k,
        "P&F horizontal count = columns × box × reversal")


def ch4_4_vertical_count():
    cols = [("O", 64, 96), ("X", 66, 76), ("O", 70, 74), ("X", 72, 82)]
    box, rev = 2, 3
    _check_pf(cols, box, rev)
    n_boxes = round((cols[1][2] - cols[1][1]) / box) + 1
    target = cols[1][1] + n_boxes * box * rev
    fig, ax = _pf(cols, box, 62, 98, "Point-and-figure: $2 box, 3-box reversal (hypothetical)", None,
                  size=(6.5, 6), fs=11)
    ax.annotate("First X column\noff the low", (1, 76), (1.6, 90), color=ACCENT2,
                arrowprops=dict(arrowstyle="->", color=ACCENT2))
    img = save(fig, f"{P}_pf_vertical.png")
    options, k = _opts(target, [cols[1][1] + n_boxes * box, cols[1][1] + n_boxes * rev,
                                cols[1][2] + n_boxes * box * rev], lambda v: f"${v:.0f}")
    add("Ch4_4", img,
        "Using a vertical count on column C2 (the first X column off the low), projected from the lowest X in "
        "that column, what is the upside price objective?", options, k,
        "P&F vertical count with a $2 box")


def ch4_4_bear_trap():
    cols = [("X", 24, 30), ("O", 22, 29), ("X", 23, 28), ("O", 21, 27), ("X", 22, 31)]
    box, rev = 1, 3
    _check_pf(cols, box, rev)
    sell = cols[1][1] - box
    assert cols[3][1] == sell
    buy = cols[2][2] + box
    fig, ax = _pf(cols, box, 19, 32, "Point-and-figure: $1 box, 3-box reversal (hypothetical)", None,
                  size=(6.5, 5.4))
    img = save(fig, f"{P}_pf_bear_trap.png")
    correct = f"A bear trap; the sell was reversed when C5 exceeded C3's high, printing an X at {buy}"
    options, k = _order([
        f"A valid sell signal; C5 is only a 3-box reversal rally that does not affect it",
        f"A bull trap; the buy in C5 at {buy} should be faded",
        f"A bear trap, but the sell is only reversed once C5 exceeds C1's high, printing an X at {cols[0][2] + 1}",
        correct,
    ], correct)
    options = [options[0], correct, options[1], options[2]]
    k = 1
    add("Ch4_4", img,
        f"C4 gave a double-bottom sell signal by falling one box below C2's low to {sell}. How should the action "
        "in C4–C5 be interpreted?", options, k, "P&F bear trap (reversed sell signal)")


def ch4_4_support_line():
    cols = [("O", 20, 26), ("X", 21, 25), ("O", 22, 24), ("X", 23, 27), ("O", 24, 26), ("X", 25, 29),
            ("O", 26, 28), ("X", 27, 31), ("O", 28, 30)]
    box, rev = 1, 3
    _check_pf(cols, box, rev)
    start = cols[0][1] - box  # box below lowest O, in C1
    line = [start + i * box for i in range(len(cols))]
    for i, (t, lo, hi) in enumerate(cols):
        assert lo > line[i]
    fig, ax = _pf(cols, box, 18, 32, "Point-and-figure: $1 box, 3-box reversal (hypothetical)", None,
                  size=(7.5, 5.4))
    img = save(fig, f"{P}_pf_support_line.png")
    ans = line[8]
    options, k = _opts(ans, [ans + 1, ans - 1, ans + 2], lambda v: f"${v:.0f}")
    add("Ch4_4", img,
        "A 45° bullish support line is drawn starting in the box directly below the lowest O of C1 and rising "
        "one box per column. At what price does the line sit in column C9?", options, k,
        "P&F 45-degree bullish support line")


def register():
    ch1_1_scatter_beta()
    ch1_1_jensens_alpha()
    ch1_1_two_portfolios()
    ch1_1_drawdown_beta()
    ch1_1_rolling_beta()
    ch1_2_estimates_divergence()
    ch1_2_surprise_breakout()
    ch1_2_sector_rs_revisions()
    ch1_2_multiple_expansion()
    ch1_2_value_downtrend()
    ch4_1_ascending_triangle()
    ch4_1_flag()
    ch4_1_double_bottom()
    ch4_2_morning_star()
    ch4_2_dark_cloud_midpoint()
    ch4_2_shooting_star()
    ch4_3_support_vs_midrange()
    ch4_3_confirmation()
    ch4_3_stop_risk()
    ch4_3_bearish_fails_at_support()
    ch4_3_reward_risk()
    ch4_4_horizontal_count()
    ch4_4_vertical_count()
    ch4_4_bear_trap()
    ch4_4_support_line()
