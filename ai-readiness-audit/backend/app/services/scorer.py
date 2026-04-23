# ==================================================
# CALCULATE AI READINESS SCORE
# ==================================================

def calculate_score(analysis):

    # ==================================================
    # INITIAL SCORE
    # ==================================================

    score = 100

    issues = analysis.get("issues", [])

    # ==================================================
    # SCORE BREAKDOWN
    # ==================================================

    breakdown = {

        "Metadata": 25,

        "Content Structure": 25,

        "AI Extractability": 25,

        "Semantic SEO": 25
    }

    # ==================================================
    # ISSUE PENALTIES
    # ==================================================

    penalties = {

        # ----------------------------------------------
        # METADATA
        # ----------------------------------------------

        "Missing title tag": 10,

        "Weak title tag": 5,

        "Missing meta description": 10,

        "Weak meta description": 5,

        # ----------------------------------------------
        # CONTENT STRUCTURE
        # ----------------------------------------------

        "No H1 heading found": 10,

        "Multiple H1 headings found": 5,

        "Weak heading hierarchy": 5,

        # ----------------------------------------------
        # AI EXTRACTABILITY
        # ----------------------------------------------

        "No FAQ section detected": 10,

        "Thin content detected": 10,

        # ----------------------------------------------
        # SEMANTIC SEO
        # ----------------------------------------------

        "Missing schema markup": 15,

        "Weak internal linking": 10,

        "Images missing alt text": 5
    }

    # ==================================================
    # APPLY PENALTIES
    # ==================================================

    for issue in issues:

        score -= penalties.get(issue, 0)

    # ==================================================
    # PREVENT NEGATIVE SCORE
    # ==================================================

    score = max(score, 0)

    # ==================================================
    # BREAKDOWN DEDUCTIONS
    # ==================================================

    # ----------------------------------------------
    # METADATA
    # ----------------------------------------------

    if "Missing title tag" in issues:
        breakdown["Metadata"] -= 10

    if "Weak title tag" in issues:
        breakdown["Metadata"] -= 5

    if "Missing meta description" in issues:
        breakdown["Metadata"] -= 10

    if "Weak meta description" in issues:
        breakdown["Metadata"] -= 5

    # ----------------------------------------------
    # CONTENT STRUCTURE
    # ----------------------------------------------

    if "No H1 heading found" in issues:
        breakdown["Content Structure"] -= 10

    if "Multiple H1 headings found" in issues:
        breakdown["Content Structure"] -= 5

    if "Weak heading hierarchy" in issues:
        breakdown["Content Structure"] -= 5

    # ----------------------------------------------
    # AI EXTRACTABILITY
    # ----------------------------------------------

    if "No FAQ section detected" in issues:
        breakdown["AI Extractability"] -= 10

    if "Thin content detected" in issues:
        breakdown["AI Extractability"] -= 10

    # ----------------------------------------------
    # SEMANTIC SEO
    # ----------------------------------------------

    if "Missing schema markup" in issues:
        breakdown["Semantic SEO"] -= 15

    if "Weak internal linking" in issues:
        breakdown["Semantic SEO"] -= 10

    if "Images missing alt text" in issues:
        breakdown["Semantic SEO"] -= 5

    # ==================================================
    # PREVENT NEGATIVE BREAKDOWN VALUES
    # ==================================================

    for key in breakdown:

        breakdown[key] = max(0, breakdown[key])

    # ==================================================
    # PERFORMANCE LEVEL
    # ==================================================

    if score >= 90:

        performance = "Excellent"

    elif score >= 75:

        performance = "Good"

    elif score >= 50:

        performance = "Average"

    else:

        performance = "Poor"

    # ==================================================
    # AI READINESS STATUS
    # ==================================================

    if score >= 80:

        readiness_status = "Highly AI Ready"

    elif score >= 60:

        readiness_status = "Moderately AI Ready"

    else:

        readiness_status = "Needs Improvement"

    # ==================================================
    # GRADE SYSTEM
    # ==================================================

    if score >= 90:

        grade = "A+"

    elif score >= 80:

        grade = "A"

    elif score >= 70:

        grade = "B"

    elif score >= 60:

        grade = "C"

    else:

        grade = "D"

    # ==================================================
    # AI CRAWLABILITY
    # ==================================================

    if score >= 80:

        crawlability = "High"

    elif score >= 60:

        crawlability = "Moderate"

    else:

        crawlability = "Poor"

    # ==================================================
    # RETURN FINAL DATA
    # ==================================================

    return {

        "score": score,

        "performance": performance,

        "readiness_status": readiness_status,

        "grade": grade,

        "crawlability": crawlability,

        "breakdown": breakdown
    }