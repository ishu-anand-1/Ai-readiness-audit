from pydantic import BaseModel, HttpUrl
from typing import List, Dict, Optional


# ==================================================
# AUDIT REQUEST MODEL
# ==================================================

class AuditRequest(BaseModel):

    url: HttpUrl


# ==================================================
# SCORE BREAKDOWN MODEL
# ==================================================

class ScoreBreakdown(BaseModel):

    metadata: int

    content_structure: int

    ai_extractability: int

    semantic_seo: int


# ==================================================
# AUDIT RESPONSE MODEL
# ==================================================

class AuditResponse(BaseModel):

    success: bool

    url: str

    overall_score: int

    performance: str

    score_breakdown: Dict[str, int]

    issues_found: List[str]

    recommendations: List[str]

    ai_summary: str

    content_length: int

    ai_readability: str

    top_keywords: List[str]

    title: Optional[str] = None

    meta_description: Optional[str] = None


# ==================================================
# ERROR RESPONSE MODEL
# ==================================================

class ErrorResponse(BaseModel):

    success: bool

    error: str