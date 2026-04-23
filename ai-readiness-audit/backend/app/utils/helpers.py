import re
from urllib.parse import urlparse


# ==================================================
# CLEAN TEXT
# ==================================================

def clean_text(text: str) -> str:

    if not text:

        return ""

    # remove extra whitespace
    text = re.sub(r"\s+", " ", text)

    return text.strip()


# ==================================================
# VALIDATE URL
# ==================================================

def is_valid_url(url: str) -> bool:

    try:

        parsed = urlparse(url)

        return all([
            parsed.scheme,
            parsed.netloc
        ])

    except Exception:

        return False


# ==================================================
# NORMALIZE URL
# ==================================================

def normalize_url(url: str) -> str:

    if not url:

        return ""

    url = url.strip()

    if not url.startswith("http://") and not url.startswith("https://"):

        url = f"https://{url}"

    return url


# ==================================================
# EXTRACT DOMAIN
# ==================================================

def extract_domain(url: str) -> str:

    try:

        parsed = urlparse(url)

        return parsed.netloc

    except Exception:

        return ""


# ==================================================
# SANITIZE TEXT
# ==================================================

def sanitize_text(text: str) -> str:

    if not text:

        return ""

    # remove special characters
    return re.sub(
        r"[^a-zA-Z0-9\s]",
        "",
        text
    )


# ==================================================
# GENERATE ISSUE SEVERITY
# ==================================================

def issue_severity(issue: str) -> str:

    high_severity = [

        "Missing title tag",

        "Missing meta description",

        "Missing schema markup",

        "No H1 heading found"
    ]

    medium_severity = [

        "Weak heading hierarchy",

        "Weak internal linking",

        "Thin content detected",

        "No FAQ section detected"
    ]

    if issue in high_severity:

        return "High"

    elif issue in medium_severity:

        return "Medium"

    return "Low"


# ==================================================
# GENERATE ISSUE SCORE IMPACT
# ==================================================

def issue_score_impact(issue: str) -> int:

    impacts = {

        "Missing title tag": -10,

        "Missing meta description": -10,

        "Missing schema markup": -15,

        "No H1 heading found": -10,

        "Weak heading hierarchy": -5,

        "Weak internal linking": -10,

        "Thin content detected": -10,

        "No FAQ section detected": -10,

        "Images missing alt text": -5
    }

    return impacts.get(issue, -2)


# ==================================================
# FORMAT SCORE LABEL
# ==================================================

def score_label(score: int) -> str:

    if score >= 90:

        return "Excellent"

    elif score >= 75:

        return "Good"

    elif score >= 50:

        return "Average"

    return "Poor"


# ==================================================
# AI READINESS STATUS
# ==================================================

def ai_readiness_status(score: int) -> str:

    if score >= 80:

        return "Highly AI Ready"

    elif score >= 60:

        return "Moderately AI Ready"

    return "Needs Improvement"