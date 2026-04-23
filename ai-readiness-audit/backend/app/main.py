from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.routes.audit import (
    router as audit_router
)


# ==================================================
# CREATE FASTAPI APPLICATION
# ==================================================

app = FastAPI(

    title="AI Readiness Audit API",

    description=(
        "AI Readiness Analyzer for "
        "LLM Discoverability and Semantic SEO"
    ),

    version="1.0.0",

    docs_url="/docs",

    redoc_url="/redoc",
)


# ==================================================
# ENABLE CORS
# ==================================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "*"
    ],

    allow_credentials=True,

    allow_methods=[

        "*"
    ],

    allow_headers=[

        "*"
    ],
)


# ==================================================
# REGISTER ROUTES
# ==================================================

app.include_router(

    audit_router,

    prefix="",

    tags=[

        "AI Readiness Audit"
    ],
)


# ==================================================
# ROOT ENDPOINT
# ==================================================

@app.get("/")
async def root():

    return {

        "success": True,

        "message":
            "AI Readiness Audit API is running successfully 🚀",

        "version": "1.0.0",

        "docs": "/docs",
    }


# ==================================================
# HEALTH CHECK ENDPOINT
# ==================================================

@app.get("/health")
async def health_check():

    return {

        "status": "healthy",

        "service":
            "AI Readiness Audit API",
    }


# ==================================================
# API STATUS ENDPOINT
# ==================================================

@app.get("/status")
async def api_status():

    return {

        "api": "online",

        "features": [

            "Website HTML Analysis",

            "AI Readiness Scoring",

            "Semantic SEO Analysis",

            "AI Summary Generation",

            "Content Structure Analysis",
        ],
    }