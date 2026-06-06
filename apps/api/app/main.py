"""app factory and core FastAPI setup."""
from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.db.session import engine
from app.db.base import Base
from app.routes import (
    chat,
    mcp_servers,
    tools,
    approvals,
    workflows,
    leads,
    runs,
    settings,
)

Base.metadata.create_all(bind=engine)


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield


app = FastAPI(title="MCP Agent Harness", lifespan=lifespan)

app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(mcp_servers.router, prefix="/api/mcp/servers", tags=["mcp"])
app.include_router(tools.router, prefix="/api/tools", tags=["tools"])
app.include_router(approvals.router, prefix="/api/approvals", tags=["approvals"])
app.include_router(workflows.router, prefix="/api/workflows", tags=["workflows"])
app.include_router(leads.router, prefix="/api/leads", tags=["leads"])
app.include_router(runs.router, prefix="/api/runs", tags=["runs"])
app.include_router(settings.router, prefix="/api/settings", tags=["settings"])
