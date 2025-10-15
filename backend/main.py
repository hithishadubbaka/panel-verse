from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from os import getenv

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: create MongoDB client and connect
    app.mongodb_client = AsyncIOMotorClient(getenv("MONGO_URL", "mongodb://mongo:27017"))
    app.mongodb = app.mongodb_client.comicsdb
    yield

    # Shutdown: close MongoDB connection
    app.mongodb_client.close()

app = FastAPI(lifespan=lifespan)

# simple homepage endpoint
@app.get("/")
async def homepage():
    return {"message" : "hello world"}

# check MongoDB connection through fastAPI endpoint
@app.get("/health/db")
async def db_health():
    try:
        await app.mongodb.command("ping")
        return {"db": "ok"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DB error: {e}")