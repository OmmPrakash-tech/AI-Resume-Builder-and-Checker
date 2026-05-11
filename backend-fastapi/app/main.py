from fastapi import FastAPI

from app.db.session import engine
from app.db.base import Base

from app.models.user import User

from app.api.v1.auth import router as auth_router


app = FastAPI(
    title="ResumeAI Backend"
)


@app.on_event("startup")
async def startup():

    async with engine.begin() as conn:
        await conn.run_sync(
            Base.metadata.create_all
        )


app.include_router(auth_router)


@app.get("/")
async def root():
    return {
        "message": "ResumeAI Backend Running"
    }