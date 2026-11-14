"""Chart questions for Ch8_1, Ch9_1, Ch9_2, Ch9_4, Ch10_1, Ch12_1, Ch12_2 (module m3_ch8_ch12).

All data synthetic; every keyed value/condition is computed from the plotted data and asserted.
"""
import math

import matplotlib.patches
import matplotlib.ticker

from generate_chart_questions import *  # noqa: F401,F403

P = "m3_ch8_ch12_"


# --------------------------------------------------------------------------- indicator helpers
def sma(x, n):
    out = np.full(len(x), np.nan)
    for i in range(n - 1, len(x)):
        out[i] = x[i - n + 1:i + 1].mean()
    return out


def roc(x, n):
    out = np.full(len(x), np.nan)
    out[n:] = (x[n:] / x[:-n] - 1) * 100
    return out


def macd_parts(x, fast=12, slow=26, sig=9):
    m = ema(x, fast) - ema(x, slow)
    s = ema(m, sig)
    return m, s, m - s


def bbands(x, n=20, k=2):
    mid = sma(x, n)
    sd = np.full(len(x), np.nan)
    for i in range(n - 1, len(x)):
        sd[i] = x[i - n + 1:i + 1].std()
    return mid + k * sd, mid, mid - k * sd


def norm_cdf(z):
    return 0.5 * (1 + math.erf(z / math.sqrt(2)))


def fix_moments(z, mean, sd):
    return (z - z.mean()) / z.std(ddof=1) * sd + mean


# --------------------------------------------------------------------------- Ch8_1
def ch8_tstat():
    rng = np.random.default_rng(8101)
    n, mean, sd = 48, 0.90, 2.60
    r = fix_moments(rng.normal(0, 1, n), mean, sd)
    assert abs(r.mean() - mean) < 1e-9 and abs(r.std(ddof=1) - sd) < 1e-9
    se = sd / math.sqrt(n)
    t = mean / se
    assert t > 2.01
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.hist(r, bins=14, color=ACCENT, alpha=0.8, edgecolor="white")
    ax.axvline(0, color=INK, lw=0.8)
    ax.axvline(mean, color=ACCENT2, lw=1.6, ls="--")
    ax.text(mean + 0.15, ax.get_ylim()[1] * 0.92, f"mean {mean:.2f}%", color=ACCENT2)
    ax.text(0.02, 0.95, f"n = {n} monthly returns\nmean = {mean:.2f}%\nsample std. dev. = {sd:.2f}%",
            transform=ax.transAxes, va="top", bbox=dict(facecolor="white", edgecolor=MUTED))
    ax.set_xlabel("Monthly return (%)")
    ax.set_ylabel("Number of months")
    ax.set_title("Monthly returns of a hypothetical timing strategy")
    img = save(fig, P + "tstat_hist.png")
    options = [f"t ≈ {mean / sd:.2f}; not significant at the 5% level",
               f"t ≈ {mean / (sd / n):.1f}; significant at the 5% level",
               f"t ≈ {t:.2f}; not significant at the 5% level, because the mean is smaller than one standard "
               f"deviation",
               f"t ≈ {t:.2f}; significant at the 5% level"]
    add("Ch8_1", img,
        "Using the statistics printed on the chart, what is the t-statistic for the hypothesis that the "
        "strategy's true mean monthly return is zero, and is the result significant at the 5% level "
        "(two-tailed critical value about 2.01)?", options, 3, "t-statistic of a mean return")


def ch8_confidence_interval():
    rng = np.random.default_rng(8102)
    n, mean, sd = 100, 0.30, 2.00
    r = fix_moments(rng.normal(0, 1, n), mean, sd)
    se = sd / math.sqrt(n)
    lo, hi = mean - 1.96 * se, mean + 1.96 * se
    assert lo < 0 < hi
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.hist(r, bins=16, color=ACCENT, alpha=0.8, edgecolor="white")
    ax.axvline(0, color=INK, lw=0.8)
    ax.axvline(mean, color=ACCENT2, lw=1.6, ls="--")
    ax.text(0.02, 0.95, f"n = {n} weekly returns\nmean = {mean:.2f}%\nsample std. dev. = {sd:.2f}%",
            transform=ax.transAxes, va="top", bbox=dict(facecolor="white", edgecolor=MUTED))
    ax.set_xlabel("Weekly return (%)")
    ax.set_ylabel("Number of weeks")
    ax.set_title("Weekly returns of a hypothetical sector-rotation model")
    img = save(fig, P + "ci_hist.png")

    def iv(a, b):
        return f"{a:+.2f}% to {b:+.2f}%"
    options = [f"{iv(mean - 1.96 * sd, mean + 1.96 * sd)}; it includes zero, so the model has no edge",
               f"{iv(lo, hi)}; it includes zero, so the mean is not significantly different from zero at 5%",
               f"{iv(mean - se, mean + se)}; it excludes zero, so the mean is significantly positive at 5%",
               f"{iv(lo, hi)}; the mean is significantly positive because the sample mean is above zero"]
    add("Ch8_1", img,
        "Using the printed statistics and a z-value of 1.96, what is the approximate 95% confidence interval "
        "for the model's true mean weekly return, and what does it imply?", options, 1,
        "Confidence interval for a mean")


def ch8_regression():
    rng = np.random.default_rng(8103)
    x = rng.normal(0.8, 4.0, 60)
    y = 0.2 + 1.3 * x + rng.normal(0, 4.0, 60)
    b, a = np.polyfit(x, y, 1)
    r2 = np.corrcoef(x, y)[0, 1] ** 2
    assert 0.35 < r2 < 0.6 and abs(math.sqrt(r2) - r2) > 0.15
    fig, ax = plt.subplots(figsize=(8, 4.6))
    ax.scatter(x, y, s=16, color=ACCENT, alpha=0.75)
    xs = np.linspace(x.min(), x.max(), 10)
    ax.plot(xs, a + b * xs, color=ACCENT2, lw=1.8)
    ax.axhline(0, color=MUTED, lw=0.7)
    ax.axvline(0, color=MUTED, lw=0.7)
    ax.text(0.02, 0.95, f"Fitted line: y = {a:.2f} + {b:.2f}x\nr² = {r2:.2f}   (n = 60 months)",
            transform=ax.transAxes, va="top", bbox=dict(facecolor="white", edgecolor=MUTED))
    ax.set_xlabel("Index XYZ monthly return (%)")
    ax.set_ylabel("Stock ABC monthly return (%)")
    ax.set_title("Stock ABC vs Index XYZ monthly returns with least-squares line (hypothetical)")
    img = save(fig, P + "regression.png")
    options = [f"The correlation between the two series is {r2:.2f}, and the stock has tended to move about "
               f"{b:.2f}% for each 1% move in the index",
               f"Because r² is below 0.5, the slope is not meaningful and the stock has no systematic "
               f"relationship with the index",
               f"About {r2 * 100:.0f}% of the variation in the stock's monthly returns is explained by the "
               f"index, and the stock has tended to move about {b:.2f}% for each 1% move in the index",
               f"About {(1 - r2) * 100:.0f}% of the variation is explained by the index, and the slope of "
               f"{b:.2f} is the stock's average monthly excess return"]
    add("Ch8_1", img, "Which statement correctly interprets the regression shown?", options, 2,
        "Interpreting slope and r-squared")


def ch8_fat_tails():
    rng = np.random.default_rng(8104)
    r = rng.standard_t(3, 3000)
    r = fix_moments(r, 0.05, 1.2)
    z = (r - r.mean()) / r.std()
    ex_kurt = (z ** 4).mean() - 3
    frac3 = (np.abs(z) > 3).mean()
    assert ex_kurt > 1.5 and frac3 > 2 * 0.0027
    mu, sd = r.mean(), r.std()
    xs = np.linspace(-7, 7, 400)
    pdf = np.exp(-0.5 * ((xs - mu) / sd) ** 2) / (sd * math.sqrt(2 * math.pi))
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(9, 4.2))
    bins = np.linspace(-7, 7, 57)
    for ax, log in ((a1, False), (a2, True)):
        ax.hist(r, bins=bins, density=True, color=ACCENT, alpha=0.6, label="Actual daily returns")
        ax.plot(xs, pdf, color=ACCENT2, lw=1.8, label="Normal, same mean and std. dev.")
        ax.set_xlabel("Daily return (%)")
        if log:
            ax.set_yscale("log")
            ax.set_ylim(1e-4, 1)
            ax.set_title("Same data, log scale (tails)")
        else:
            ax.set_title("Linear scale")
            ax.legend(loc="upper left", fontsize=8)
    a1.set_ylabel("Density")
    fig.suptitle(f"Index XYZ daily returns, 3,000 days (hypothetical); sample excess kurtosis = {ex_kurt:.1f}")
    img = save(fig, P + "fat_tails.png")
    options = ["Platykurtic (thin-tailed); a normal model would overstate the frequency of extreme days",
               "Approximately normal (mesokurtic); the normal model fits the tails well",
               "Negatively skewed but normal-tailed; only the average loss is understated by a normal model",
               "Leptokurtic (fat-tailed, with a taller peak); a normal model would understate how often extreme "
               "moves occur"]
    add("Ch8_1", img,
        "Compared with the normal curve fitted to the same mean and standard deviation, how is this return "
        "distribution best described, and what is the risk implication?", options, 3,
        "Fat tails and kurtosis")


def ch8_pvalue():
    zobs = 1.80
    p1 = 1 - norm_cdf(zobs)
    p2 = 2 * p1
    assert p1 < 0.05 < p2 and zobs < 1.96
    xs = np.linspace(-4, 4, 500)
    pdf = np.exp(-0.5 * xs ** 2) / math.sqrt(2 * math.pi)
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(xs, pdf, color=INK, lw=1.5)
    m = xs >= zobs
    ax.fill_between(xs[m], 0, pdf[m], color=ACCENT2, alpha=0.6)
    ax.axvline(zobs, color=ACCENT2, ls="--", lw=1.2)
    ax.annotate(f"Observed test statistic = {zobs:.2f}", (zobs, 0.2), (zobs + 0.2, 0.3),
                arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.annotate(f"Shaded area = {p1:.3f}", (2.3, 0.012), (2.6, 0.12), arrowprops=dict(arrowstyle="->", color=MUTED))
    ax.set_ylim(0, 0.45)
    ax.set_xlabel("Test statistic under H0 (standard normal)")
    ax.set_title("One-tailed test of H0: mean excess return ≤ 0 for a hypothetical signal")
    img = save(fig, P + "pvalue.png")
    options = [f"Do not reject H0, because the statistic of {zobs:.2f} is below the 1.96 critical value",
               f"Reject H0; there is a {(1 - p1) * 100:.1f}% probability that the signal's true mean is positive",
               f"Reject H0: p ≈ {p1:.3f} < 0.05 (a two-tailed test would give p ≈ {p2:.3f} and not reject)",
               f"Do not reject H0; a p-value of {p1:.3f} means there is only a {p1 * 100:.1f}% chance that the "
               f"alternative hypothesis is true"]
    add("Ch8_1", img,
        "The shaded area is the p-value of a one-tailed test. Which conclusion is correct at the 5% "
        "significance level?", options, 2, "p-value interpretation, one vs two tails")


# --------------------------------------------------------------------------- Ch9_1
def ch9_1_roc_zero():
    rng = np.random.default_rng(9111)
    p = interp_path([80, 66, 70, 63, 78], 16, rng, 0.6)
    r = roc(p, 10)
    crosses = [i for i in range(45, len(p)) if r[i - 1] < 0 <= r[i]]
    assert crosses, r
    x = crosses[0]
    assert p[x] >= p[x - 10] and np.nanmin(r[:x]) < -5
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.7]})
    a1.plot(p, color=INK, lw=1.3)
    a1.set_title("Stock DEF — price (top) and 10-period rate of change (bottom), hypothetical")
    a1.set_ylabel("Price ($)")
    a2.plot(r, color=ACCENT, lw=1.3)
    a2.axhline(0, color=MUTED, lw=0.9)
    xc = x - 1 + (-r[x - 1]) / (r[x] - r[x - 1])
    a2.annotate("A", (xc, 0), (xc - 7, 8), arrowprops=dict(arrowstyle="->"), fontweight="bold")
    a2.set_ylabel("ROC (%)")
    img = save(fig, P + "roc_zero.png")
    add("Ch9_1", img,
        "At point A the 10-period rate of change crosses above its zero line. What does this tell you?",
        ["Price has just crossed above its 10-period moving average, confirming that a new uptrend is under way",
         "ROC has reached an overbought level, so a pullback is likely",
         "Price has risen 10% from its low",
         "The close is now above the close of 10 periods earlier: momentum has turned positive"], 3, "ROC zero-line crossing")


def ch9_1_momentum_trendline():
    rng = np.random.default_rng(9112)
    t = np.arange(100)
    p = (100 + 25 / (1 + np.exp(-(t - 45) / 10)) + 1.6 * np.sin(2 * np.pi * t / 16)
         - 0.8 * np.clip(t - 78, 0, None) + rng.normal(0, 0.12, len(t)))
    mom = np.full(len(p), np.nan)
    mom[10:] = p[10:] - p[:-10]

    def swing_lows(x):
        return [i for i in range(3, len(x) - 3) if not np.isnan(x[i - 3]) and x[i] == np.nanmin(x[i - 3:i + 4])]

    def line_through(x, i0, i1):
        s = (x[i1] - x[i0]) / (i1 - i0)
        return s, x[i0] + s * (t - i0)
    pl, ml = swing_lows(p)[:2], swing_lows(mom)[:2]
    sp, pline = line_through(p, *pl)
    sm, mline = line_through(mom, *ml)
    assert sp > 0 and sm > 0
    assert all(p[i] >= pline[i] - 0.2 for i in range(pl[0], pl[1] + 1))
    assert all(mom[i] >= mline[i] - 0.2 for i in range(ml[0], ml[1] + 1))
    mbreak = next(i for i in range(ml[1] + 2, len(p) - 5) if (mom[i:i + 6] < mline[i:i + 6] - 0.2).all())
    pbreak = next(i for i in range(pl[1] + 2, len(p) - 5) if (p[i:i + 6] < pline[i:i + 6] - 0.2).all())
    assert mbreak + 10 <= pbreak, (mbreak, pbreak)
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5.2), sharex=True, gridspec_kw={"height_ratios": [3, 1.8]})
    a1.plot(p, color=INK, lw=1.3)
    xs = np.arange(pl[0], len(p))
    a1.plot(xs, pline[xs], color=ACCENT2, ls="--", lw=1.2)
    a1.axvline(pbreak, color=DOWN, ls=":", lw=1)
    a1.text(pbreak + 0.5, p.min() + 1, f"price trendline\nbroken (bar {pbreak})", color=DOWN, fontsize=8)
    a1.set_title("Stock JKL — price (top) and 10-bar momentum (bottom) with trendlines, hypothetical")
    a2.plot(mom, color=ACCENT, lw=1.3)
    xs = np.arange(ml[0], len(p))
    a2.plot(xs, mline[xs], color=ACCENT2, ls="--", lw=1.2)
    a2.axhline(0, color=MUTED, lw=0.8)
    a2.axvline(mbreak, color=DOWN, ls=":", lw=1)
    a2.text(mbreak - 13, np.nanmin(mom) + 0.3, f"momentum trendline\nbroken (bar {mbreak})", color=DOWN, fontsize=8)
    a2.set_xlabel("Bar")
    img = save(fig, P + "mom_trendline.png")
    add("Ch9_1", img,
        "Up-trendlines are drawn on both price and its 10-bar momentum. What is the best interpretation of "
        "the sequence shown?",
        ["The momentum break was an early warning that the advance was losing force; the later break of the "
         "price trendline confirmed it",
         "Price broke its trendline first and momentum then confirmed, which is the normal sequence",
         "Because momentum was still above zero when its trendline broke, the break signalled bullish "
         "continuation",
         "The momentum break is a complete sell signal on its own, so the price trendline break adds no "
         "information"], 0, "Momentum trendline break leads price")


def ch9_1_mega_overbought():
    rng = np.random.default_rng(9113)
    dec = interp_path([120, 108, 112, 98, 102, 86, 89, 80], 10, rng, 0.8)
    thrust = 80 + np.cumsum(np.abs(rng.normal(2.4, 0.6, 16)))
    after = interp_path([thrust[-1], thrust[-1] - 4, thrust[-1] + 2], 7, rng, 0.4)[1:]
    p = np.r_[dec, thrust, after]
    r = rsi(p)
    low = len(dec) - 1
    k = int(np.nanargmax(r[low:])) + low
    assert r[k] > 85 and k - low <= 20 and np.nanmax(r[:low]) < 75, (r[k], k - low)
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(p, color=INK, lw=1.3)
    a1.set_title("Index XYZ — weekly closes (top) and 14-week RSI (bottom), hypothetical")
    a2.plot(r, color=ACCENT, lw=1.3)
    for lvl in (70, 30):
        a2.axhline(lvl, color=MUTED, ls="--", lw=0.8)
    a2.annotate(f"M ({r[k]:.0f})", (k, r[k]), (k - 14, 92), arrowprops=dict(arrowstyle="->"), fontweight="bold")
    a2.set_ylim(0, 100)
    img = save(fig, P + "mega_overbought.png")
    add("Ch9_1", img,
        "After a long decline, RSI surges to the extreme reading at M within weeks of the low. How is such a "
        "'mega-overbought' reading best interpreted?",
        ["As a reliable sell signal, because a reading this far above 70 normally marks an intermediate top in a "
         "bear-market rally",
         "As a sign of exceptional upside momentum typical of the early stage of a new advance; the first "
         "pullback is more likely to be a buying opportunity than the final top",
         "As a bearish divergence, because RSI has risen faster than price",
         "As evidence that the rally is exhausted and the prior decline will resume"], 1,
        "Mega-overbought after a major low")


def ch9_1_price_oscillator():
    rng = np.random.default_rng(9114)
    p = interp_path([42, 47, 44, 50, 48, 60], 14, rng, 0.5)
    s, l = sma(p, 10), sma(p, 30)
    sv, lv = round(s[-1], 2), round(l[-1], 2)
    ppo = (sv - lv) / lv * 100
    alt = (sv - lv) / sv * 100
    assert ppo > 0 and abs(ppo - alt) >= 0.3
    osc = (s - l) / l * 100
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.6]})
    a1.plot(p, color=INK, lw=1.2, label="Close")
    a1.plot(s, color=ACCENT, lw=1.3, label="10-period SMA")
    a1.plot(l, color=ACCENT2, lw=1.3, label="30-period SMA")
    a1.legend(loc="upper left")
    a1.text(len(p) - 32, p.min() + 0.5, f"Last bar: 10-SMA = {sv:.2f}, 30-SMA = {lv:.2f}",
            bbox=dict(facecolor="white", edgecolor=MUTED))
    a1.set_title("Stock MNO with 10- and 30-period moving averages (hypothetical)")
    a2.plot(osc[:-1], color=ACCENT, lw=1.3)
    a2.axhline(0, color=MUTED, lw=0.8)
    a2.set_ylabel("Price osc. (%)")
    a2.text(len(p) - 1, 0, "?", fontweight="bold", ha="center")
    img = save(fig, P + "price_osc.png")
    options = [f"{-ppo:+.2f}%; the long-term average is above the short-term average, a bearish reading",
               f"{alt:+.2f}%; the short-term average is above the long-term average, upside momentum",
               f"{ppo:+.2f}%; the short-term average is above the long-term average, upside momentum",
               f"{ppo:+.2f}%; the gap is bearish because the short-term average has crossed the long-term "
               f"average from above"]
    add("Ch9_1", img,
        "The lower panel is a percentage price oscillator: (10-SMA − 30-SMA) ÷ 30-SMA × 100. Using the "
        "printed values, what is its reading on the last bar (marked '?'), and what does it indicate?",
        options, 2, "Price oscillator from two moving averages")


# --------------------------------------------------------------------------- Ch9_2
def ch9_2_hist_divergence():
    rng = np.random.default_rng(9121)
    p = np.r_[np.full(20, 80.0) + rng.normal(0, 0.3, 20),
              interp_path([80, 63, 69, 59, 66], 14, rng, 0.25)]
    m, s, h = macd_parts(p)
    l1 = int(np.argmin(p[25:45])) + 25
    l2 = int(np.argmin(p[55:])) + 55
    h1 = int(np.argmin(h[l1 - 6:l1 + 6])) + l1 - 6
    h2 = int(np.argmin(h[l2 - 6:l2 + 6])) + l2 - 6
    assert p[l2] < p[l1] and h[h2] > h[h1] * 0.6 and h[h2] < 0, (p[l1], p[l2], h[h1], h[h2])
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.8]})
    a1.plot(p, color=INK, lw=1.3)
    for lab, i in (("L1", l1), ("L2", l2)):
        a1.annotate(lab, (i, p[i]), (i - 2, p[i] - 4), fontweight="bold")
    a1.set_ylim(p.min() - 6, p.max() + 2)
    a1.set_title("Stock PQR — price (top) and MACD histogram 12,26,9 (bottom), hypothetical")
    a2.bar(range(len(h)), h, color=[UP if v >= 0 else DOWN for v in h], alpha=0.7)
    a2.axhline(0, color=MUTED, lw=0.8)
    for lab, i in (("L1", h1), ("L2", h2)):
        a2.annotate(lab, (i, h[i]), (i - 2, h[i] - 0.5), fontweight="bold")
    a2.set_ylim(h.min() - 0.9, h.max() + 0.5)
    img = save(fig, P + "hist_div.png")
    add("Ch9_2", img,
        "Price makes a lower low at L2, but the MACD histogram trough at L2 is shallower than at L1. How "
        "should this be interpreted?",
        ["Bearish confirmation: the lower price low shows the downtrend is intact",
         "A buy signal, because the histogram has crossed above the zero line",
         "Bullish divergence: downside momentum is waning, an early warning that still needs price confirmation",
         "No signal, because histogram divergences are only valid once the histogram has crossed back above its "
         "zero line"], 2,
        "MACD histogram divergence")


def ch9_2_rsi_bull_range():
    rng = np.random.default_rng(9122)
    p = interp_path([50, 50.6, 50, 57, 52.5, 59.5, 55, 62, 57.5, 64.5, 60, 67, 62.5, 69.5], 9, rng, 0.25)
    r = rsi(p)
    seg = r[30:]
    assert 38 < np.nanmin(seg) < 52 and 70 < np.nanmax(seg) < 86, (np.nanmin(seg), np.nanmax(seg))
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.7]})
    a1.plot(p, color=INK, lw=1.3)
    a1.set_title("Stock STU — daily closes (top) and 14-day RSI (bottom), hypothetical")
    a2.plot(r, color=ACCENT, lw=1.3)
    a2.axhspan(40, 80, color=ACCENT2, alpha=0.1)
    for lvl in (80, 70, 40, 30):
        a2.axhline(lvl, color=MUTED, ls="--", lw=0.7)
    a2.set_yticks([0, 30, 40, 70, 80, 100])
    a2.set_ylim(0, 100)
    img = save(fig, P + "rsi_bull_range.png")
    add("Ch9_2", img,
        "After the first few weeks, RSI holds within the shaded 40–80 zone, with pullbacks bottoming near "
        "40–50. Under RSI range rules, what does this behaviour indicate?",
        ["A bear-market range, in which the 40–50 zone acts as resistance",
         "No buy signal has been given during the advance, because RSI has not fallen to the classic oversold "
         "level of 30",
         "Each move above 70 is an overbought sell signal within the range",
         "A bull-market range: the 40–50 zone tends to act as support, so dips toward it are potential buying "
         "areas"], 3, "RSI bull-market range")


def ch9_2_failure_swing():
    rng = np.random.default_rng(9160)
    first = np.r_[np.full(16, 50.0) + rng.normal(0, 0.25, 16), np.linspace(50, 62, 13)[1:], np.linspace(62, 55, 9)[1:]]
    n2, top2 = 26, 61.6
    w = np.cumsum(rng.normal(0, 0.9, n2))
    w = w - np.linspace(0, w[-1], n2)
    second = 55 + (top2 - 55) * np.linspace(0, 1, n2 + 1)[1:] + w
    p = np.r_[first, second, np.linspace(top2, 54, 12)[1:]]
    jit = np.random.default_rng(91600).normal(0, 0.25, len(p))
    jit[:17] = 0
    jit[28] = jit[36] = jit[len(first) + n2 - 1] = 0  # keep the turning points exact
    jit[len(first):len(first) + n2] = 0
    p = p + jit
    r = rsi(p)
    a = int(np.nanargmax(r[16:32])) + 16
    b = int(np.nanargmin(r[a:a + 14])) + a
    c = int(np.nanargmax(r[b:b + 30])) + b
    f = next(i for i in range(c + 1, len(p)) if r[i] < r[b])
    assert r[a] > 70 and r[c] < 66 and r[b + 1:c].max() <= r[c] and p[c] >= p[a] - 1.5, (r[a], r[b], r[c], p[a], p[c])
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True, gridspec_kw={"height_ratios": [3, 1.7]})
    a1.plot(p, color=INK, lw=1.3)
    a1.set_title("Stock VWX — daily closes (top) and 14-day RSI (bottom), hypothetical")
    a2.plot(r, color=ACCENT, lw=1.3)
    for lvl in (70, 30):
        a2.axhline(lvl, color=MUTED, ls="--", lw=0.8)
    a2.hlines(r[b], b - 2, f + 4, color=ACCENT2, ls=":", lw=1.2)
    a2.annotate("F", (f, r[f]), (f + 2, r[f] - 22), arrowprops=dict(arrowstyle="->"), fontweight="bold")
    a2.set_ylim(0, 100)
    img = save(fig, P + "failure_swing.png")
    add("Ch9_2", img,
        "On the RSI panel, which pattern is completed at point F (dotted line = the RSI low between the two "
        "RSI peaks)?",
        ["A top failure swing: RSI fails to regain 70, then breaks below its intervening low",
         "A bottom (bullish) failure swing that signals a resumption of the advance",
         "A positive reversal, which projects a further rise in price",
         "A bullish divergence, because RSI's second peak is lower while price holds close to its earlier "
         "high"], 0,
        "RSI top failure swing")


# --------------------------------------------------------------------------- Ch9_4
def ch9_4_walk_band():
    rng = np.random.default_rng(9141)
    c = np.r_[100 + rng.normal(0, 0.8, 30), 100 + np.cumsum(rng.normal(0.75, 0.45, 30))]
    up, mid, dn = bbands(c)
    pb = (c - dn) / (up - dn)
    w0, w1 = 35, 59
    near = int((pb[w0:w1 + 1] >= 0.85).sum())
    assert near >= 10 and (c[w0:w1 + 1] > mid[w0:w1 + 1]).all(), near
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(c, color=INK, lw=1.4)
    ax.plot(up, color=ACCENT, lw=1)
    ax.plot(mid, color=MUTED, lw=1)
    ax.plot(dn, color=ACCENT, lw=1)
    ax.axvspan(w0, w1, color=ACCENT2, alpha=0.1)
    ax.set_title("Stock YZA with 20-period, 2-standard-deviation Bollinger Bands (hypothetical)")
    img = save(fig, P + "walk_band.png")
    add("Ch9_4", img,
        "In the shaded period, closes repeatedly press against the upper band while staying above the middle "
        "band. What does this indicate?",
        ["Each tag of the upper band is an overbought condition and a sell signal",
         "Price is 'walking the band', a sign of trend strength rather than a sell signal",
         "The bands are in a squeeze, which signals that a volatility breakout is about to begin",
         "Price must return to the lower band before the uptrend can continue"], 1, "Walking the upper band")


def ch9_4_bandwidth():
    rng = np.random.default_rng(9142)
    c = 60 + np.cumsum(rng.normal(0.05, 0.9, 70))
    up, mid, dn = bbands(c)
    u, m, l = (round(v, 2) for v in (up[-1], mid[-1], dn[-1]))
    bw = (u - l) / m * 100
    fig, ax = plt.subplots(figsize=(8, 4.2))
    ax.plot(c, color=INK, lw=1.4)
    ax.plot(up, color=ACCENT, lw=1)
    ax.plot(mid, color=MUTED, lw=1)
    ax.plot(dn, color=ACCENT, lw=1)
    ax.text(0.02, 0.95, f"Last bar: upper {u:.2f}, middle {m:.2f}, lower {l:.2f}", transform=ax.transAxes,
            va="top", bbox=dict(facecolor="white", edgecolor=MUTED))
    ax.set_ylim(np.nanmin(dn) - 1, np.nanmax(up) + 4)
    ax.set_title("Stock BCD with 20-period, 2-standard-deviation Bollinger Bands (hypothetical)")
    img = save(fig, P + "bandwidth.png")
    options, k = opts_with(round(bw, 1), [round((u - m) / m * 100, 1), round((u - l) / l * 100, 1),
                                          round((u - l) / u * 100, 1)], lambda v: f"{v:.1f}%")
    assert len(set(options)) == 4, options
    add("Ch9_4", img, "Using the printed values, what is BandWidth, (upper − lower) ÷ middle, for the last bar?",
        options, k, "BandWidth calculation")


def ch9_4_w_bottom():
    rng = np.random.default_rng(9146)
    c = np.r_[70 + rng.normal(0, 0.3, 22), np.linspace(70, 61, 7)[1:], np.linspace(61, 69.5, 9)[1:],
              np.linspace(69.5, 62.5, 6)[1:], np.linspace(62.5, 61.2, 4)[1:], np.linspace(61.2, 61.6, 3)[1:],
              np.linspace(61.6, 60.6, 3)[1:], np.linspace(60.6, 71.5, 11)[1:]]
    c[22:] += rng.normal(0, 0.2, len(c) - 22)
    up, mid, dn = bbands(c)
    pb = (c - dn) / (up - dn)
    l1 = int(np.argmin(c[24:34])) + 24
    l2 = int(np.argmin(c[40:56])) + 40
    assert pb[l1] < -0.1 and pb[l2] > 0.12 and c[l2] < c[l1], (pb[l1], pb[l2], c[l1], c[l2])
    peak = int(np.argmax(c[l1:l2])) + l1
    brk = next(i for i in range(l2, len(c)) if c[i] > c[peak])
    fig, ax = plt.subplots(figsize=(8, 4.4))
    ax.plot(c, color=INK, lw=1.4, marker="o", ms=2)
    ax.plot(up, color=ACCENT, lw=1)
    ax.plot(mid, color=MUTED, lw=1)
    ax.plot(dn, color=ACCENT, lw=1)
    ax.text(l1 - 0.3, c[l1] - 1.6, "1", fontweight="bold", fontsize=12)
    ax.text(l2 - 0.3, c[l2] - 1.6, "2", fontweight="bold", fontsize=12)
    ax.set_ylim(np.nanmin(dn) - 3, np.nanmax(up) + 2)
    ax.set_xlim(10, len(c) + 1)
    ax.set_title("Stock EFG with 20-period, 2-standard-deviation Bollinger Bands (hypothetical)")
    img = save(fig, P + "w_bottom.png")
    assert brk < len(c)
    add("Ch9_4", img,
        "Low 2 is slightly below low 1 in price, but low 1 closed outside the lower band while low 2 closed "
        "inside it. What is this pattern and what confirms it?",
        ["A breakdown: the new price low shows the downtrend will continue",
         "A W-bottom that is invalid, because the second price low is lower than the first and so no higher "
         "low has formed",
         "A double top, confirmed when price falls back below the middle band",
         "A Bollinger W-bottom, confirmed by a strong rally above the high between the two lows"], 3, "Bollinger W-bottom")


# --------------------------------------------------------------------------- Ch10_1
def ch10_1_rs_leads():
    rng = np.random.default_rng(10101)
    stock = interp_path([50, 60, 54.5, 58.6], 30, rng, 0.5)
    bench = interp_path([1000, 1150, 1080, 1010], 30, rng, 6)
    stock[30], bench[30] = 60, 1150
    rs = stock / bench * 1000
    ph = stock[:60].max()
    rh = rs[:60].max()
    assert rs[-1] > rh and stock[-1] < ph and stock[60:].max() < ph, (rs[-1], rh, stock[-1], ph)
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 5), sharex=True)
    a1.plot(stock, color=INK, lw=1.3)
    a1.axhline(ph, color=ACCENT2, ls="--", lw=1)
    a1.text(1, ph + 0.3, "prior price high", color=ACCENT2, fontsize=8)
    a1.set_title("Stock HIJ (top) and its ratio to Index XYZ (bottom), hypothetical")
    a1.set_ylabel("Price ($)")
    a2.plot(rs, color=ACCENT, lw=1.3)
    a2.axhline(rh, color=ACCENT2, ls="--", lw=1)
    a2.text(1, rh + 0.3, "prior RS high", color=ACCENT2, fontsize=8)
    a2.set_ylabel("RS (stock ÷ index × 1000)")
    img = save(fig, P + "rs_leads.png")
    add("Ch10_1", img,
        "At the right edge, the RS line has moved above its prior high while the stock's price is still "
        "below its own prior high. How is this best interpreted?",
        ["The stock is underperforming the index, because its price is below its prior high",
         "The RS line is leading: the stock is outperforming the index, a sign of leadership that often "
         "precedes a price breakout",
         "A bearish divergence: price has failed to confirm the RS line's new high, so the stock should be sold "
         "into strength",
         "The stock's price has made a new high relative to its own history"], 1, "RS line leads price")


def ch10_1_rs_rank():
    rng = np.random.default_rng(10102)
    series = {"Sector P": (80.0, 90.0), "Sector Q": (40.0, 46.0), "Index XYZ": (400.0, 440.0)}
    fig, axes = plt.subplots(3, 1, figsize=(8, 5.4), sharex=True)
    for ax, (name, (a, b)) in zip(axes, series.items()):
        path = interp_path([a, a + (b - a) * 0.6, a + (b - a) * 0.3, b], 14, rng, (b - a) * 0.04)
        path[0], path[-1] = a, b
        ax.plot(path, color=INK if name.startswith("Index") else ACCENT, lw=1.3)
        ax.annotate(f"{a:.0f}", (0, a), (0.3, a + (b - a) * 0.12), color=ACCENT2, fontweight="bold")
        ax.annotate(f"{b:.0f}", (len(path) - 1, b), (len(path) - 4, b), color=ACCENT2, fontweight="bold",
                    va="bottom")
        ax.set_ylabel(name, fontsize=9)
        ax.margins(y=0.25)
    axes[0].set_title("Two sectors and Index XYZ over one quarter, start and end values (hypothetical)")
    axes[-1].set_xlabel("Trading day")
    img = save(fig, P + "rs_rank.png")
    bench = series["Index XYZ"][1] / series["Index XYZ"][0]
    chg = {k: (v[1] / v[0]) / bench - 1 for k, v in series.items() if k != "Index XYZ"}
    best = max(chg, key=chg.get)
    other = min(chg, key=chg.get)
    assert best == "Sector Q" and series["Sector P"][1] - series["Sector P"][0] > series[best][1] - series[best][0]
    sub = (series[best][1] / series[best][0] - bench) * 100
    options = [f"{other}: its RS ratio rose about {chg[other] * 100:.1f}%, the larger gain because its price "
               f"rose by more points",
               f"{best}: its RS ratio rose about {sub:.1f}%",
               f"{best}: its RS ratio rose about {chg[best] * 100:.1f}%",
               f"{other}: its RS ratio rose about {(series[other][1] / series[other][0] - 1) * 100:.1f}%"]
    assert abs(sub - chg[best] * 100) >= 0.3
    add("Ch10_1", img,
        "Using the printed start and end values, which sector's relative-strength ratio (sector ÷ Index XYZ) "
        "improved more over the quarter, and by approximately how much did that ratio change?",
        options, 2, "Ranking by RS ratio change")


# --------------------------------------------------------------------------- Ch12_1
def max_dd(eq):
    peak = np.maximum.accumulate(eq)
    dd = (peak - eq) / peak
    t = int(np.argmax(dd))
    pk = int(np.argmax(eq[:t + 1]))
    return dd[t], pk, t


def ch12_1_mar():
    rng = np.random.default_rng(12101)
    a = interp_path([100, 180, 117, 230], 20, rng, 2.0) * 1000
    b = interp_path([100, 122, 113, 138, 165], 15, rng, 0.8) * 1000
    a[0] = b[0] = 100_000
    years = 5
    out = {}
    fig, ax = plt.subplots(figsize=(8, 4.4))
    xs = np.linspace(0, years, len(a))
    for name, eq, col in (("System A", a, ACCENT), ("System B", b, ACCENT2)):
        dd, pk, tr = max_dd(eq)
        cagr = (eq[-1] / eq[0]) ** (1 / years) - 1
        # work from the figures printed on the chart (CAGR to 0.1%, peak and trough to the dollar),
        # so the answer matches what a student calculates from them
        dd_shown = (round(eq[pk]) - round(eq[tr])) / round(eq[pk])
        out[name] = (round(cagr * 100, 1) / 100, dd_shown, eq[-1] / eq[0] - 1)
        ax.plot(xs, eq, color=col, lw=1.5, label=f"{name}: CAGR {cagr * 100:.1f}%")
        ax.annotate(f"peak ${eq[pk]:,.0f}", (xs[pk], eq[pk]), (xs[pk] - 0.9, eq[pk] + 12000), color=col,
                    fontsize=8, arrowprops=dict(arrowstyle="->", color=col))
        ax.annotate(f"trough ${eq[tr]:,.0f}", (xs[tr], eq[tr]), (xs[tr] + 0.1, eq[tr] - 22000), color=col,
                    fontsize=8, arrowprops=dict(arrowstyle="->", color=col))
    ax.legend(loc="upper left")
    ax.set_ylim(60_000, 260_000)
    ax.set_xlabel("Years")
    ax.set_ylabel("Equity ($)")
    ax.yaxis.set_major_formatter(matplotlib.ticker.StrMethodFormatter("${x:,.0f}"))
    ax.set_title("Two hypothetical systems, $100,000 start (max-drawdown peak and trough marked)")
    img = save(fig, P + "mar.png")
    mar = {k: v[0] / v[1] for k, v in out.items()}
    assert mar["System B"] > mar["System A"] and out["System A"][0] > out["System B"][0]
    tr_b = out["System B"][2] / out["System B"][1]
    options = [f"System A, MAR ≈ {mar['System A']:.2f}",
               f"System B, MAR ≈ {tr_b:.2f}",
               f"System A, MAR ≈ {out['System A'][2] / out['System A'][1]:.2f}",
               f"System B, MAR ≈ {mar['System B']:.2f}"]
    add("Ch12_1", img,
        "Using the CAGR in the legend and the marked peak and trough of each system's maximum drawdown, which "
        "system has the higher MAR (Calmar-style) ratio, CAGR ÷ maximum drawdown, and what is it?",
        options, 3, "MAR ratio from equity curves")


def ch12_1_overfit():
    sys_ = {"X": (2.40, 0.30), "Y": (1.30, 1.15), "Z": (0.90, 0.50)}
    keep = {k: o / i for k, (i, o) in sys_.items()}
    assert max(keep, key=keep.get) == "Y" and max(sys_, key=lambda k: sys_[k][1]) == "Y"
    assert min(keep, key=keep.get) == "X" and max(sys_, key=lambda k: sys_[k][0]) == "X"
    fig, ax = plt.subplots(figsize=(8, 4.2))
    x = np.arange(3)
    ins = [v[0] for v in sys_.values()]
    oos = [v[1] for v in sys_.values()]
    b1 = ax.bar(x - 0.18, ins, 0.36, color=ACCENT, label="In-sample (2010–2018)")
    b2 = ax.bar(x + 0.18, oos, 0.36, color=ACCENT2, label="Out-of-sample (2019–2023)")
    for bars in (b1, b2):
        for bb in bars:
            ax.text(bb.get_x() + bb.get_width() / 2, bb.get_height() + 0.04, f"{bb.get_height():.2f}",
                    ha="center", fontsize=9)
    ax.set_xticks(x, [f"System {k}" for k in sys_])
    ax.set_ylabel("Sharpe ratio")
    ax.set_ylim(0, 2.8)
    ax.legend()
    ax.set_title("In-sample vs out-of-sample Sharpe ratios of three hypothetical systems")
    img = save(fig, P + "overfit.png")
    add("Ch12_1", img,
        "Which reading of these results is most appropriate?",
        ["System X is the most robust, because its in-sample Sharpe ratio is by far the highest",
         "System Y is overfitted, because its out-of-sample Sharpe ratio is lower than in-sample",
         "X looks overfitted; Y is the most robust, keeping most of its edge out of sample",
         "System Z is the most robust, because it has the lowest in-sample Sharpe ratio and so cannot be "
         "curve-fitted"], 2, "In-sample vs out-of-sample degradation")


def ch12_1_walk_forward():
    start, end, is_len, oos_len = 2012, 2024, 4, 1
    runs = []
    y = start
    while y + is_len + oos_len - 1 <= end:
        runs.append((y, y + is_len - 1, y + is_len))
        y += oos_len
    n = len(runs)
    first, last = runs[0][2], runs[-1][2]
    assert n == 9 and first == 2016 and last == 2024
    fig, ax = plt.subplots(figsize=(8, 4.6))
    for i, (a, b, o) in enumerate(runs):
        yy = n - i
        ax.barh(yy, is_len, left=a, color=ACCENT, alpha=0.8, edgecolor="white")
        ax.barh(yy, oos_len, left=o, color=ACCENT2, alpha=0.9, edgecolor="white")
    ax.set_yticks(range(1, n + 1), [f"Run {n - i + 1}" for i in range(1, n + 1)])
    ax.set_xticks(range(start, end + 2))
    ax.tick_params(axis="x", labelsize=8)
    ax.set_xlim(start, end + 1)
    ax.legend(handles=[matplotlib.patches.Patch(color=ACCENT, alpha=0.8, label="Optimisation (in-sample) window"),
                       matplotlib.patches.Patch(color=ACCENT2, alpha=0.9, label="Test (out-of-sample) window")],
              loc="upper right", fontsize=8)
    ax.set_xlabel("Calendar year (bar spans the year)")
    ax.set_title("Walk-forward test design for a hypothetical system")
    img = save(fig, P + "walk_forward.png")
    add("Ch12_1", img,
        "Which statement correctly describes the walk-forward test shown?",
        ["The parameters are optimised once on 2012–2015 and then held fixed through 2024",
         "The reported result is the average of the in-sample windows, since they use the most data",
         f"Each of the {n} one-year test windows is traded {is_len} times because the windows overlap, so each "
         f"year's result is an average",
         f"{n} optimisations; the result chains the {n} one-year test segments ({first}–{last}), each using "
         f"parameters fitted on the prior {is_len} years"], 3,
        "Walk-forward analysis design")


def ch12_1_expectancy():
    n_win, n_loss, avg_w, avg_l = 56, 104, 1200.0, 450.0
    n = n_win + n_loss
    wr = n_win / n
    e = wr * avg_w - (1 - wr) * avg_l
    assert abs(e - 127.5) < 1e-9
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(8, 4.2))
    b = a1.bar(["Winners", "Losers"], [n_win, n_loss], color=[UP, DOWN])
    for bb in b:
        a1.text(bb.get_x() + bb.get_width() / 2, bb.get_height() + 2, f"{bb.get_height():.0f}", ha="center")
    a1.set_ylim(0, 125)
    a1.set_title("Number of trades")
    b = a2.bar(["Average win", "Average loss"], [avg_w, avg_l], color=[UP, DOWN])
    for bb in b:
        a2.text(bb.get_x() + bb.get_width() / 2, bb.get_height() + 25, f"${bb.get_height():,.0f}", ha="center")
    a2.set_ylim(0, 1400)
    a2.set_title("Average trade size ($)")
    fig.suptitle("Trade statistics of a hypothetical system, 160 trades")
    img = save(fig, P + "expectancy.png")
    options, k = opts_with(e, [wr * (avg_w - avg_l), (avg_w - avg_l) / 2, (1 - wr) * avg_w - wr * avg_l],
                           lambda v: f"${v:,.2f}")
    add("Ch12_1", img, "What is the system's expectancy (average expected profit per trade)?", options, k,
        "Expectancy from win rate and payoff")


# --------------------------------------------------------------------------- Ch12_2
def ch12_2_signal_test():
    hp = [1, 5, 10, 20, 40, 60]
    base = np.array([0.04, 0.20, 0.40, 0.80, 1.60, 2.40])
    sig = np.array([0.15, 0.60, 1.10, 1.90, 2.30, 2.90])
    ex = sig - base
    best = hp[int(np.argmax(ex))]
    assert best == 20 and hp[int(np.argmax(sig))] == 60
    fig, ax = plt.subplots(figsize=(8, 4.2))
    x = np.arange(len(hp))
    b1 = ax.bar(x - 0.18, sig, 0.36, color=ACCENT, label="After signal")
    b2 = ax.bar(x + 0.18, base, 0.36, color=MUTED, label="All days (unconditional)")
    for bars in (b1, b2):
        for bb in bars:
            ax.text(bb.get_x() + bb.get_width() / 2, bb.get_height() + 0.05, f"{bb.get_height():.2f}",
                    ha="center", fontsize=8)
    ax.set_xticks(x, [f"{h} day" + ("s" if h > 1 else "") for h in hp])
    ax.set_ylabel("Average forward return (%)")
    ax.set_ylim(0, 3.3)
    ax.legend(loc="upper left")
    ax.set_title("Average forward returns after a hypothetical breadth signal vs all days")
    img = save(fig, P + "signal_test.png")
    add("Ch12_2", img,
        "Which holding period shows the largest edge of the signal over the unconditional average?",
        ["10 days", "20 days", "40 days", "60 days"], 1, "Signal test: excess forward returns")


def ch12_2_profit_factor():
    years = ["Year 1", "Year 2", "Year 3", "Year 4"]
    gp = np.array([48_200, 61_500, 18_400, 58_900])
    gl = np.array([30_100, 33_900, 36_800, 21_700])
    pf = gp.sum() / gl.sum()
    avg_pf = (gp / gl).mean()
    assert abs(pf - avg_pf) > 0.1
    fig, ax = plt.subplots(figsize=(8, 4.2))
    x = np.arange(4)
    b1 = ax.bar(x - 0.18, gp, 0.36, color=UP, label="Gross profit")
    b2 = ax.bar(x + 0.18, gl, 0.36, color=DOWN, label="Gross loss")
    for bars in (b1, b2):
        for bb in bars:
            ax.text(bb.get_x() + bb.get_width() / 2, bb.get_height() + 800, f"${bb.get_height():,.0f}",
                    ha="center", fontsize=8)
    ax.set_xticks(x, years)
    ax.set_ylim(0, 80_000)
    ax.yaxis.set_major_formatter(matplotlib.ticker.StrMethodFormatter("${x:,.0f}"))
    ax.legend(loc="upper center", ncol=2)
    ax.set_title("Gross profit and gross loss by year, hypothetical system")
    img = save(fig, P + "profit_factor.png")
    options, k = opts_with(round(pf, 2), [round(gl.sum() / gp.sum(), 2), round((gp.sum() - gl.sum()) / gl.sum(), 2),
                                         round(avg_pf, 2)], lambda v: f"{v:.2f}")
    add("Ch12_2", img, "What is the system's profit factor for the full four-year period?", options, k,
        "Profit factor")


def ch12_2_r_multiples():
    rb = np.array([-1, -0.5, 0, 1, 2, 3, 5])
    cnt = np.array([48, 12, 6, 12, 11, 7, 4])
    assert cnt.sum() == 100
    e = (rb * cnt).sum() / cnt.sum()
    wins = cnt[rb > 0].sum()
    fig, ax = plt.subplots(figsize=(8, 4.2))
    b = ax.bar([f"{v:+g}R" if v else "0R" for v in rb], cnt, color=[DOWN if v < 0 else (MUTED if v == 0 else UP)
                                                                   for v in rb])
    for bb in b:
        ax.text(bb.get_x() + bb.get_width() / 2, bb.get_height() + 0.8, f"{bb.get_height():.0f}", ha="center")
    ax.set_ylim(0, 55)
    ax.set_xlabel("Trade result (R-multiple)")
    ax.set_ylabel("Number of trades")
    ax.set_title("R-multiple distribution of 100 trades, hypothetical system")
    img = save(fig, P + "r_multiples.png")
    options, k = opts_with(round(e, 2), [round(rb.mean(), 2), round((rb * cnt).sum() / wins, 2),
                                        round((rb[rb > 0] * cnt[rb > 0]).sum() / 100, 2)],
                           lambda v: f"{v:+.2f}R")
    add("Ch12_2", img, "What is the system's expectancy per trade, expressed in R?", options, k,
        "Expectancy from R-multiple distribution")


def ch12_2_heatmap():
    fast = [5, 10, 15, 20, 25, 30]
    slow = [40, 60, 80, 100, 120, 140, 160, 180, 200]
    F, S = np.meshgrid(fast, slow, indexing="ij")
    rng = np.random.default_rng(12204)
    grid = 3 + 11 * np.exp(-(((F - 20) / 9) ** 2 + ((S - 140) / 45) ** 2)) + rng.normal(0, 0.4, F.shape)
    pi, pj = 0, 1  # fast 5, slow 60
    grid[pi, pj] = 21.5
    qi, qj = fast.index(20), slow.index(140)
    grid = np.round(grid, 1)
    ri, rj = fast.index(30), slow.index(200)

    def nb(i, j):
        v = [grid[a, b] for a in range(i - 1, i + 2) for b in range(j - 1, j + 2)
             if (a, b) != (i, j) and 0 <= a < len(fast) and 0 <= b < len(slow)]
        return np.mean(v)
    assert grid.max() == grid[pi, pj] and nb(qi, qj) > nb(pi, pj) + 5 and grid[qi, qj] > grid[ri, rj] + 4
    fig, ax = plt.subplots(figsize=(8, 4.8))
    im = ax.imshow(grid, cmap="viridis", aspect="auto")
    for i in range(len(fast)):
        for j in range(len(slow)):
            ax.text(j, i, f"{grid[i, j]:.1f}", ha="center", va="center", fontsize=8,
                    color="black" if grid[i, j] > 11 else "white")
    for lab, (i, j) in (("P", (pi, pj)), ("Q", (qi, qj)), ("R", (ri, rj))):
        ax.add_patch(plt.Rectangle((j - 0.5, i - 0.5), 1, 1, fill=False, edgecolor=ACCENT2, lw=2.2))
        ax.text(j - 0.42, i - 0.18, lab, color=ACCENT2, fontweight="bold", fontsize=10)
    ax.set_xticks(range(len(slow)), slow)
    ax.set_yticks(range(len(fast)), fast)
    ax.set_xlabel("Slow moving-average length")
    ax.set_ylabel("Fast MA length")
    ax.grid(False)
    fig.colorbar(im, ax=ax, label="Annual return (%)")
    ax.set_title("Optimisation results, moving-average crossover system (hypothetical)")
    img = save(fig, P + "heatmap.png")
    add("Ch12_2", img,
        "Which parameter set is the better choice for live trading, and why?",
        [f"P, because it produced the highest return in the test ({grid[pi, pj]:.1f}%)",
         "R, because the longest averages generate the fewest whipsaw trades",
         "Q, because neighbouring settings perform similarly, so it is less likely to be curve-fitted",
         "P, after re-optimising on a finer grid around it to locate the exact peak more precisely"], 2,
        "Robust plateau vs isolated optimisation peak")


def register():
    ch8_tstat()
    ch8_confidence_interval()
    ch8_regression()
    ch8_fat_tails()
    ch8_pvalue()
    ch9_1_roc_zero()
    ch9_1_momentum_trendline()
    ch9_1_mega_overbought()
    ch9_1_price_oscillator()
    ch9_2_hist_divergence()
    ch9_2_rsi_bull_range()
    ch9_2_failure_swing()
    ch9_4_walk_band()
    ch9_4_bandwidth()
    ch9_4_w_bottom()
    ch10_1_rs_leads()
    ch10_1_rs_rank()
    ch12_1_mar()
    ch12_1_overfit()
    ch12_1_walk_forward()
    ch12_1_expectancy()
    ch12_2_signal_test()
    ch12_2_profit_factor()
    ch12_2_r_multiples()
    ch12_2_heatmap()
