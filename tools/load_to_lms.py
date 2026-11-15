#!/usr/bin/env python3
"""Load the corrected question bank into the FinCoursa LMS course "CMT Level 2 - Question Bank".

Writes through the project's REST API. The secret key is injected by the session's network proxy
(never stored here); locally you can set SUPABASE_SECRET_KEY instead.

  python3 tools/load_to_lms.py            # dry run: print the plan, change nothing
  python3 tools/load_to_lms.py --apply    # write lessons + quiz bodies, then verify
  python3 tools/load_to_lms.py --charts            # dry run of the Chart Practice lessons
  python3 tools/load_to_lms.py --charts --apply    # write them (images must already be in course-images)

Lesson bodies are merge-saved like the app's saveLessonBody(): text/files/join_url are kept, only
pass_pct and questions are replaced. A database trigger moves each "correct" into quiz_answer_keys.
"""
import json
import os
import ssl
import sys
import urllib.request

URL = "https://ifmpyoebramjefhpxqjl.supabase.co"
COURSE = "80f93324-1e9a-4c08-ac20-783bc3f9ae8e"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANK = os.path.join(ROOT, "question_bank")
KEY = os.environ.get("SUPABASE_SECRET_KEY", "proxy-injected")
CTX = ssl.create_default_context(cafile="/root/.ccr/ca-bundle.crt") if os.path.exists("/root/.ccr/ca-bundle.crt") else None

CH = {  # chapter ids in the course
    1: "740bb8fc-56a2-4a77-90a6-516e17b10795", 4: "a291e724-a37f-4b2a-b985-4e27da1ec7f8",
    5: "4bfbb7f9-2465-412e-b1fa-1b4cb587eae2", 6: "e46c1d5f-214b-4495-a177-49358e3bc436",
    7: "60614bff-f931-45f3-a3c5-1c96b2f3460b", 8: "1014537d-9066-46cc-b39a-81926823d806",
    9: "cab7159f-d2af-47d5-8fbc-7e9ea0cdd8fd", 10: "4e4c0044-6285-495f-b464-41b085ac9707",
    11: "3e9e3684-9851-48c1-ae0e-47045082d62d", 12: "6c23e0ef-a80d-4d74-8f42-b6b54a925eaa",
    2: "6f42634e-697f-42c5-8c87-0e66f07a0f61", 3: "ae34f24c-c13d-4574-882e-46d4b5864671",
}

# (section, position, existing lesson id or None to create, title, bank file or None = no questions yet)
# lessons students don't need to complete (optional practice)
OPTIONAL = {"Ch6_3_stretch"}
COMING_SOON = " (Coming Soon)"

PLAN = [
    (1, 1, "5a1af8f0-5597-45c0-ad54-c2932966cb3e", "1. Alpha and Beta - Outperforming the Benchmarks (Part 1)", "Ch1_1_part1"),
    (1, 2, "2fa69fff-a355-4ab1-b5a5-de06208a0dc9", "1. Alpha and Beta - Outperforming the Benchmarks (Part 2)", "Ch1_1_part2"),
    (1, 3, "4507a185-19b0-4085-a9be-78bf8831abb2", "2. Fusion Analysis: Technical Analysis as Part of a Team Approach", "Ch1_2"),
    (4, 1, "472566bb-9880-49fd-ae00-8529ee61279e", "1. Classical Chart Patterns", "Ch4_1"),
    (4, 2, "03154f42-9ac4-4b30-96a5-f29210e4f257", "2. Candlestick Patterns in the Real World", "Ch4_2"),
    (4, 3, "65bf1ef0-fb35-4a67-86a6-d6d32989f692", "3. Candlestick Analysis in the Real World", "Ch4_3"),
    (4, 4, "cf174c90-3ef3-4eb4-b24b-708259571502", "4. Point-and-Figure Pattern Analysis", "Ch4_4"),
    (5, 1, "3c2e1770-6b87-49b1-8ba5-5a8b5fc2706e", "1. Price Trend and Volume", "Ch5_1"),
    (5, 2, "8ce50eee-b0b1-470b-ad56-ce95e4f78092", "2. Market Internals (Part 1)", "Ch5_2_part1"),
    (5, 3, "89aa594a-6503-49e1-8db7-ce4e4743774e", "2. Market Internals (Part 2)", "Ch5_2_part2"),
    (6, 1, "eaebf55a-0703-4145-bf1c-3236b682ff13", "1. Extrapolating Price from Volatility", "Ch6_1"),
    (6, 2, "a70f7a8f-2077-4db0-a995-a345f8f09cb2", "2. Volatility Risk Premium", "Ch6_2"),
    (6, 3, "df953906-4ca0-4e11-bd5e-9fd9d7c0cc98", "3. Volatility Indexes and VIX Complex (Part 1: VIX Futures and Term Structure)", "Ch6_3_part1"),
    (6, 4, "078dc93e-4041-4ae0-8723-38a023d3a6e9", "3. Volatility Indexes and VIX Complex (Part 2: VIX Options and Hedging)", "Ch6_3_part2"),
    (6, 5, "da93d225-0e21-4aec-992c-573cb4a0101f", "3. Volatility Indexes and VIX Complex (Part 3: Convexity and Calculations)", "Ch6_3_part3"),
    # optional: questions that go beyond the 6.3 notes; sits after "Chart Practice: Volatility Analysis" (position 6)
    (6, 7, "05d60439-901e-44dd-842e-a79c6670cea5", "3. Volatility Indexes and VIX Complex (Stretch: Beyond the Curriculum Notes)", "Ch6_3_stretch"),
    (7, 1, "df87a899-1865-4d2c-95e3-4752bea9d585", "1. Analyzing Sentiment in the Stock Market", "Ch7_1"),
    (8, 1, "d2b46434-06c1-4bdf-8622-9087444ed473", "1. Inferential Statistics", "Ch8_1"),
    (9, 1, "3b145594-5887-44e2-a03a-6d9aedee2e81", "1. Momentum and Indicator Interpretation Part 1", "Ch9_1"),
    (9, 2, "b40ea6d4-643a-4fb5-9f92-dc841d790a94", "2. Momentum and Indicator Interpretation Part 2 (Set 1)", "Ch9_2_part1"),
    (9, 3, "719eaa27-826f-43a2-8c8a-91f0eadac4b0", "2. Momentum and Indicator Interpretation Part 2 (Set 2)", "Ch9_2_part2"),
    (9, 4, "06cb6ede-e324-4e9c-9b12-4f801e12a7f0", "3. Volume Weighted Average Price", None),  # held stochastics set by mistake
    (9, 5, "acab264c-285c-41a6-89aa-61893660338d", "4. Practical Applications of Bollinger Bands", "Ch9_4"),
    (10, 1, "dce0ed4c-8587-4ac2-b0b8-046fa1ab9a15", "1. Advanced Applications of Relative Strength (Part 1)", "Ch10_1_part1"),
    (10, 2, "23b49835-54c8-45d7-931b-7e4cb0d71f26", "1. Advanced Applications of Relative Strength (Part 2)", "Ch10_1_part2"),
    (11, 1, "7f68313c-7501-4907-b01e-19cb49780f3b", "1. Concepts in Cycle Theory", "Ch11_1"),
    (11, 2, "af1e7773-1a0c-4865-95f4-d93d732dd81c", "2. Applied Cycle Analysis", "Ch11_2"),          # held Elliott part 1
    (11, 3, "879394b8-d071-4f17-9e56-dedc4f0bdf46", "3. Analysis of Seasonal Cycles", None),        # held Elliott part 2
    (11, 4, "a52146b1-a050-437d-9ba3-49dfa9a502c4", "4. The Elliott Wave Principle Part 1", "Ch11_4"),  # held cycles set
    (11, 5, "7c1e92f5-4ff5-4c40-bc6b-4ed217b51071", "5. The Elliott Wave Principle Part 2", "Ch11_5"),
    (11, 6, "a10f062c-2a91-48c9-ae48-580faa5169d3", "6. The Elliott Wave Principle Part 3", None),
    (12, 1, "811f88a4-2153-4c57-90bb-43f9be94bf37", "1. Trading Systems", "Ch12_1"),
    (12, 2, "c54768b7-2d7a-4b0b-9cda-f061be141d28", "2. Applying Quantitative Techniques (Part 1)", "Ch12_2_part1"),
    (12, 3, "eaf0370b-efd5-46cc-ab91-bf57fa93b813", "2. Applying Quantitative Techniques (Part 2)", "Ch12_2_part2"),
    (12, 4, "d7e8704c-4868-4b91-ac47-374a384ee1fb", "2. Applying Quantitative Techniques (Part 3)", "Ch12_2_part3"),
]


# Chart Practice lesson appended to each section: (section, title, chart files in unit order)
CHART_PLAN = [
    (1, "Chart Practice: Theory and History", ["Ch1_1", "Ch1_2"]),
    (4, "Chart Practice: Chart Pattern Analysis", ["Ch4_1", "Ch4_2", "Ch4_3", "Ch4_4"]),
    (5, "Chart Practice: Trend Analysis", ["Ch5_1", "Ch5_2"]),
    (6, "Chart Practice: Volatility Analysis", ["Ch6_1", "Ch6_2", "Ch6_3"]),
    (7, "Chart Practice: Sentiment", ["Ch7_1"]),
    (8, "Chart Practice: Statistics for Technicians", ["Ch8_1"]),
    (9, "Chart Practice: Technical Indicators", ["Ch9_1", "Ch9_2", "Ch9_4"]),
    (10, "Chart Practice: Comparative Market Analysis", ["Ch10_1"]),
    (11, "Chart Practice: Cycle Analysis", ["Ch11_1", "Ch11_2", "Ch11_4", "Ch11_5"]),
    (12, "Chart Practice: Systems and Quantitative Methods", ["Ch12_1", "Ch12_2"]),
]


def chart_questions(files):
    out = []
    for f in files:
        qs = json.load(open(os.path.join(BANK, "chart_questions", f"{f}.json")))
        ex = chart_explanations()
        out += to_lms(qs, f"chart-{f.lower()}", image_ok=True, notes={q["id"]: ex.get(f"{f}:{q['id']}") for q in qs})
    return out


def load_charts():
    for sec, title, files in CHART_PLAN:
        qs = chart_questions(files)
        assert all(q["image"] for q in qs), f"missing image link in {title}"
        existing = api("GET", f"/rest/v1/lessons?chapter_id=eq.{CH[sec]}&title=eq.{urllib.request.quote(title)}&select=id")
        if existing:
            lid = existing[0]["id"]
            cur = api("GET", f"/rest/v1/lesson_bodies?lesson_id=eq.{lid}&select=body")
            body = dict(cur[0]["body"] or {}) if cur else {}
            body.update({"pass_pct": body.get("pass_pct", 70), "questions": qs})
            api("PATCH", f"/rest/v1/lesson_bodies?lesson_id=eq.{lid}", {"body": body})
        else:
            last = api("GET", f"/rest/v1/lessons?chapter_id=eq.{CH[sec]}&select=position&order=position.desc&limit=1")
            pos = (last[0]["position"] if last else 0) + 1
            lid = api("POST", "/rest/v1/lessons", {"course_id": COURSE, "chapter_id": CH[sec], "title": title, "type": "quiz",
                                                    "position": pos, "is_required": True, "is_preview": False},
                      prefer="return=representation")[0]["id"]
            api("POST", "/rest/v1/lesson_bodies", {"lesson_id": lid, "body": {"text": "", "files": [], "pass_pct": 70, "questions": qs}})
        print(f"  chart lesson {title} ({len(qs)} questions)")
    # verify
    for sec, title, files in CHART_PLAN:
        l = api("GET", f"/rest/v1/lessons?chapter_id=eq.{CH[sec]}&title=eq.{urllib.request.quote(title)}&select=id")[0]
        live = api("GET", f"/rest/v1/lesson_bodies?lesson_id=eq.{l['id']}&select=body")[0]["body"]["questions"]
        k = api("GET", f"/rest/v1/quiz_answer_keys?lesson_id=eq.{l['id']}&select=answers,explanations")[0]
        ak, ex = k["answers"], k.get("explanations") or {}
        want = chart_questions(files)
        ok = len(live) == len(want) and all(a["prompt"] == b["prompt"] and a["image"] == b["image"] and "correct" not in a
                                            and "explanation" not in a and ak.get(b["id"]) == b["correct"]
                                            and ex.get(b["id"]) == b.get("explanation") for a, b in zip(live, want))
        print(f"  verify {title}: {'OK' if ok else 'MISMATCH'}")


def api(method, path, body=None, prefer=None):
    req = urllib.request.Request(URL + path, method=method, data=None if body is None else json.dumps(body).encode())
    req.add_header("apikey", KEY)
    req.add_header("Content-Type", "application/json")
    if prefer:
        req.add_header("Prefer", prefer)
    with urllib.request.urlopen(req, context=CTX, timeout=60) as r:
        txt = r.read().decode()
        return json.loads(txt) if txt else None


CHART_EXPLANATIONS = os.path.join(BANK, "chart_questions", "explanations.json")


def chart_explanations():
    return json.load(open(CHART_EXPLANATIONS)) if os.path.exists(CHART_EXPLANATIONS) else {}


def to_lms(questions, prefix, image_ok=False, notes=None):
    """Bank questions -> LMS quiz questions. "correct" and "explanation" are moved into the admin-only
    quiz_answer_keys table by a database trigger; students get the explanation only after submitting."""
    out = []
    for q in questions:
        qid = f"{prefix}-q{q['id']}"
        opts = [{"id": f"{qid}{c}", "text": t} for c, t in zip("abcd", q["options"])]
        img = q.get("image") if image_ok and str(q.get("image", "")).startswith("https://") else None
        row = {"id": qid, "prompt": q["question"], "image": img, "options": opts, "correct": opts[q["correct"]]["id"]}
        note = (notes or {}).get(q["id"], q.get("explanation"))
        if note:
            row["explanation"] = note
        out.append(row)
    return out


def load(name):
    return json.load(open(os.path.join(BANK, f"{name}.json")))


def main():
    apply = "--apply" in sys.argv
    plan = list(PLAN)
    total = 0
    for sec, pos, lid, title, bank in plan:
        n = len(load(bank)) if bank else 0
        total += n
        print(f"S{sec:>2} #{pos}  {'update' if lid else 'CREATE'}  {title[:62]:<62} {bank or '(no questions yet)':<14} {n:>3}")
    print(f"total questions: {total}")
    if not apply:
        print("dry run - nothing written (use --apply)")
        return
    for sec, pos, lid, title, bank in plan:
        qs = to_lms(load(bank), bank.lower()) if bank else []
        # units without questions yet are shown as "Coming Soon" and don't count toward completion
        if not bank and not title.endswith(COMING_SOON):
            title += COMING_SOON
        required = bool(bank) and bank not in OPTIONAL
        if lid is None:
            same = api("GET", f"/rest/v1/lessons?chapter_id=eq.{CH[sec]}&title=eq.{urllib.request.quote(title)}&select=id")
            if same:
                raise SystemExit(f"Refusing to create a second lesson titled {title!r}; add its id {same[0]['id']} to PLAN.")
            row = api("POST", "/rest/v1/lessons", {"course_id": COURSE, "chapter_id": CH[sec], "title": title, "type": "quiz",
                                                   "position": pos, "is_required": required, "is_preview": False},
                      prefer="return=representation")[0]
            lid = row["id"]
            api("POST", "/rest/v1/lesson_bodies", {"lesson_id": lid, "body": {"text": "", "files": [], "pass_pct": 70, "questions": qs}})
        else:
            api("PATCH", f"/rest/v1/lessons?id=eq.{lid}", {"title": title, "position": pos, "is_required": required})
            cur = api("GET", f"/rest/v1/lesson_bodies?lesson_id=eq.{lid}&select=body")
            body = dict(cur[0]["body"] or {}) if cur else {}
            body.update({"pass_pct": body.get("pass_pct", 70), "questions": qs})
            api("PATCH", f"/rest/v1/lesson_bodies?lesson_id=eq.{lid}", {"body": body})
        print(f"  wrote {title[:60]} ({len(qs)} questions)")
    verify()


def verify():
    """Re-read every quiz lesson + answer key and compare with the bank files."""
    lessons = api("GET", f"/rest/v1/lessons?course_id=eq.{COURSE}&select=id,title,position,chapter_id&order=position")
    bodies = {b["lesson_id"]: b["body"] for b in api("GET", "/rest/v1/lesson_bodies?select=lesson_id,body&lesson_id=in.(" +
                                                    ",".join(l["id"] for l in lessons) + ")")}
    keyrows = api("GET", "/rest/v1/quiz_answer_keys?select=lesson_id,answers,explanations&lesson_id=in.(" + ",".join(l["id"] for l in lessons) + ")")
    keys = {k["lesson_id"]: k["answers"] for k in keyrows}
    notes = {k["lesson_id"]: k.get("explanations") or {} for k in keyrows}
    by_title = {(l["chapter_id"], l["title"]): l for l in lessons}
    bad = 0
    for sec, pos, _, title, bank in PLAN:
        l = by_title.get((CH[sec], title))
        if not l:
            print("  MISSING lesson", title); bad += 1; continue
        live = bodies.get(l["id"], {}).get("questions", [])
        want = to_lms(load(bank), bank.lower()) if bank else []
        ak, ex = keys.get(l["id"], {}), notes.get(l["id"], {})
        ok = len(live) == len(want) and all(
            a["prompt"] == b["prompt"] and [o["text"] for o in a["options"]] == [o["text"] for o in b["options"]]
            and "correct" not in a and "explanation" not in a and ak.get(b["id"]) == b["correct"]
            and ex.get(b["id"]) == b.get("explanation") for a, b in zip(live, want))
        if not ok or l["position"] != pos:
            bad += 1
            print("  MISMATCH", title, len(live), len(want), l["position"], pos)
    print("verify:", "all lessons match the bank" if not bad else f"{bad} problems")


if __name__ == "__main__":
    if "--charts" in sys.argv and "--apply" in sys.argv:
        load_charts()
    elif "--charts" in sys.argv:
        for sec, title, files in CHART_PLAN:
            print(f"S{sec:>2}  {title:<52} {len(chart_questions(files)):>3} chart questions")
    elif "--verify" in sys.argv:
        verify()
    else:
        main()
