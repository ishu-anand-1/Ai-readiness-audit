import re


# ==================================================
# GENERATE AI SUMMARY
# ==================================================

def generate_summary(analysis):

    # ==================================================
    # EXTRACT ANALYSIS DATA
    # ==================================================

    title = analysis.get("title")

    meta_description = analysis.get("meta_description")

    top_keywords = analysis.get(
        "top_keywords",
        []
    )

    content_length = analysis.get(
        "content_length",
        0
    )

    ai_readability = analysis.get(
        "ai_readability",
        "Unknown"
    )

    issues = analysis.get(
        "issues",
        []
    )

    # ==================================================
    # CLEAN TEXT FUNCTION
    # ==================================================

    def clean_text(text):

        if not text:

            return ""

        text = re.sub(r"\s+", " ", text)

        return text.strip()

    # ==================================================
    # CLEAN VALUES
    # ==================================================

    cleaned_title = clean_text(title)

    cleaned_description = clean_text(
        meta_description
    )

    # ==================================================
    # BUILD SUMMARY
    # ==================================================

    summary_parts = []

    # --------------------------------------------------
    # WEBSITE IDENTITY
    # --------------------------------------------------

    if cleaned_title:

        summary_parts.append(
            f"This website appears to focus on "
            f"'{cleaned_title}'."
        )

    # --------------------------------------------------
    # META DESCRIPTION ANALYSIS
    # --------------------------------------------------

    if cleaned_description:

        summary_parts.append(
            f"The website describes itself as: "
            f"'{cleaned_description}'."
        )

    # --------------------------------------------------
    # KEY CONTENT THEMES
    # --------------------------------------------------

    if top_keywords:

        keywords = ", ".join(top_keywords)

        summary_parts.append(
            f"Key themes identified across the content "
            f"include: {keywords}."
        )

    # --------------------------------------------------
    # CONTENT DEPTH ANALYSIS
    # --------------------------------------------------

    if content_length > 5000:

        summary_parts.append(
            "The website contains extensive content depth, "
            "which supports stronger AI understanding "
            "and semantic interpretation."
        )

    elif content_length > 2000:

        summary_parts.append(
            "The website contains a moderate amount of "
            "content suitable for AI interpretation."
        )

    else:

        summary_parts.append(
            "The website content appears limited, which "
            "may reduce AI understanding accuracy."
        )

    # --------------------------------------------------
    # AI READABILITY STATUS
    # --------------------------------------------------

    summary_parts.append(
        f"Overall AI readability is currently "
        f"assessed as '{ai_readability}'."
    )

    # --------------------------------------------------
    # ISSUE IMPACT ANALYSIS
    # --------------------------------------------------

    if len(issues) == 0:

        summary_parts.append(
            "No major AI readiness issues were detected."
        )

    elif len(issues) <= 3:

        summary_parts.append(
            "A few structural improvements could further "
            "improve AI discoverability."
        )

    else:

        summary_parts.append(
            "Several structural and semantic issues may "
            "limit AI discoverability and answer extraction."
        )

    # ==================================================
    # FINAL SUMMARY
    # ==================================================

    final_summary = " ".join(summary_parts)

    return final_summary