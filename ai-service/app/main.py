from fastapi import FastAPI

app = FastAPI(
    title="ResumeAI AI Service"
)


@app.get("/")
async def root():

    return {
        "message": "AI Service Running"
    }