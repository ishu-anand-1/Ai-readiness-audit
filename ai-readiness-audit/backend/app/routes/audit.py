import time

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, HttpUrl

from app.services.fetcher import fetch_website
from app.services.analyzer import analyze_website
from app.services.scorer import calculate_score
from app.services.summarizer import generate_summary


# ==================================================
# ROUTER
# ==================================================

router = APIRouter()


# ==================================================
# REQUEST MODEL
# ==================================================

class AuditRequest(BaseModel):

    url: HttpUrl


# ==================================================
# TEST ROUTE
# ==================================================

@router.get("/test")
async def test_route():

    return {

        "success": True,

        "message": "Audit API route working"
    }


# ==================================================
# AUDIT ROUTE
# ==================================================

@router.post("/audit")
async def audit_website(data: AuditRequest):

    try:

        # ==========================================
        # START TIMER
        # ==========================================

        start_time = time.time()

        # ==========================================
        # FETCH WEBSITE HTML
        # ==========================================

        html = fetch_website(str(data.url))

        if not html:

            raise HTTPException(
                status_code=400,
                detail="Failed to fetch website HTML."
            )

        # ==========================================
        # ANALYZE WEBSITE
        # ==========================================

        analysis = analyze_website(html)

        # ==========================================
        # CALCULATE SCORE
        # ==========================================

        score_data = calculate_score(analysis)

        # ==========================================
        # GENERATE AI SUMMARY
        # ==========================================

        ai_summary = generate_summary(analysis)

        # ==========================================
        # CALCULATE PROCESSING TIME
        # ==========================================

        processing_time = round(
            time.time() - start_time,
            2
        )

        # ==========================================
        # FINAL RESPONSE
        # ==========================================

        return {

            "success": True,

            "url": str(data.url),

            "overall_score": score_data.get(
                "score",
                0
            ),

            "performance": score_data.get(
                "performance",
                "Unknown"
            ),

            "grade": score_data.get(
                "grade",
                "N/A"
            ),

            "crawlability": score_data.get(
                "crawlability",
                "Unknown"
            ),

            "readiness_status": score_data.get(
                "readiness_status",
                "Unknown"
            ),

            "score_breakdown": score_data.get(
                "breakdown",
                {}
            ),

            "issues_found": analysis.get(
                "issues",
                []
            ),

            "recommendations": analysis.get(
                "recommendations",
                []
            ),

            "ai_summary": ai_summary,

            "content_length": analysis.get(
                "content_length",
                0
            ),

            "title": analysis.get(
                "title",
                None
            ),

            "ai_readability": analysis.get(
                "ai_readability",
                "Unknown"
            ),

            "top_keywords": analysis.get(
                "top_keywords",
                []
            ),

            "processing_time_seconds": processing_time
        }

    except HTTPException as http_error:

        raise http_error

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"Audit failed: {str(error)}"
        )