from bs4 import BeautifulSoup
from collections import Counter
import re


# ==================================================
# ANALYZE WEBSITE HTML
# ==================================================

def analyze_website(html: str):

    soup = BeautifulSoup(html, "lxml")

    issues = []
    recommendations = []

    # ==================================================
    # TITLE TAG CHECK
    # ==================================================

    title = (
        soup.title.string.strip()
        if soup.title and soup.title.string
        else None
    )

    if not title:

        issues.append("Missing title tag")

        recommendations.append(
            "Add a descriptive title tag for better AI understanding."
        )

    elif len(title) < 20:

        issues.append("Weak title tag")

        recommendations.append(
            "Use a more descriptive and keyword-rich title tag."
        )

    # ==================================================
    # META DESCRIPTION CHECK
    # ==================================================

    meta_description_tag = soup.find(
        "meta",
        attrs={"name": "description"}
    )

    meta_description = (
        meta_description_tag.get("content")
        if meta_description_tag
        else None
    )

    if not meta_description:

        issues.append("Missing meta description")

        recommendations.append(
            "Add a meta description to improve AI interpretation."
        )

    elif len(meta_description) < 50:

        issues.append("Weak meta description")

        recommendations.append(
            "Write a longer and more informative meta description."
        )

    # ==================================================
    # HEADING STRUCTURE ANALYSIS
    # ==================================================

    h1_tags = soup.find_all("h1")
    h2_tags = soup.find_all("h2")
    h3_tags = soup.find_all("h3")

    if len(h1_tags) == 0:

        issues.append("No H1 heading found")

        recommendations.append(
            "Add a clear H1 heading for semantic structure."
        )

    elif len(h1_tags) > 1:

        issues.append("Multiple H1 headings found")

        recommendations.append(
            "Use only one primary H1 heading."
        )

    if len(h2_tags) < 2:

        issues.append("Weak heading hierarchy")

        recommendations.append(
            "Use H2 headings to structure content clearly."
        )

    # ==================================================
    # FAQ DETECTION
    # ==================================================

    page_text = soup.get_text(separator=" ").lower()

    faq_keywords = [
        "faq",
        "frequently asked questions",
        "common questions"
    ]

    has_faq = any(
        keyword in page_text
        for keyword in faq_keywords
    )

    if not has_faq:

        issues.append("No FAQ section detected")

        recommendations.append(
            "Add an FAQ section for AI answer extraction."
        )

    # ==================================================
    # SCHEMA MARKUP CHECK
    # ==================================================

    schema_markup = soup.find_all(
        "script",
        attrs={"type": "application/ld+json"}
    )

    if len(schema_markup) == 0:

        issues.append("Missing schema markup")

        recommendations.append(
            "Add schema.org structured data markup."
        )

    # ==================================================
    # INTERNAL LINK ANALYSIS
    # ==================================================

    links = soup.find_all("a", href=True)

    internal_links = []

    for link in links:

        href = link["href"]

        if href.startswith("/") or href.startswith("#"):

            internal_links.append(href)

    if len(internal_links) < 5:

        issues.append("Weak internal linking")

        recommendations.append(
            "Improve internal linking between pages."
        )

    # ==================================================
    # CONTENT ANALYSIS
    # ==================================================

    clean_text = soup.get_text(
        separator=" ",
        strip=True
    )

    content_length = len(clean_text)

    if content_length < 1500:

        issues.append("Thin content detected")

        recommendations.append(
            "Add more high-quality content for better AI understanding."
        )

    # ==================================================
    # IMAGE ALT TEXT ANALYSIS
    # ==================================================

    images = soup.find_all("img")

    missing_alt = 0

    for image in images:

        if not image.get("alt"):

            missing_alt += 1

    if missing_alt > 0:

        issues.append("Images missing alt text")

        recommendations.append(
            "Add alt text to images for semantic accessibility."
        )

    # ==================================================
    # KEYWORD ANALYSIS
    # ==================================================

    words = re.findall(r"\w+", clean_text.lower())

    filtered_words = [
        word for word in words
        if len(word) > 4
    ]

    most_common = Counter(
        filtered_words
    ).most_common(5)

    top_keywords = [
        keyword[0]
        for keyword in most_common
    ]

    # ==================================================
    # AI READABILITY SCORE
    # ==================================================

    ai_readability = "Good"

    if len(issues) >= 6:

        ai_readability = "Poor"

    elif len(issues) >= 3:

        ai_readability = "Average"

    # ==================================================
    # RETURN ANALYSIS
    # ==================================================

    return {

        "title": title,

        "meta_description": meta_description,

        "issues": issues,

        "recommendations": recommendations,

        "content_length": content_length,

        "internal_link_count": len(internal_links),

        "h1_count": len(h1_tags),

        "h2_count": len(h2_tags),

        "h3_count": len(h3_tags),

        "schema_count": len(schema_markup),

        "image_count": len(images),

        "missing_alt_count": missing_alt,

        "top_keywords": top_keywords,

        "ai_readability": ai_readability
    }