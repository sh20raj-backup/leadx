import os
from pathlib import Path
from urllib.parse import quote_plus
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./mcp_agent.db")
    secret_key: str = os.getenv("SECRET_KEY", "change-me")
    jwt_algorithm: str = os.getenv("JWT_ALGORITHM", "HS256")
    access_token_expire_minutes: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))
    default_provider: str = os.getenv("DEFAULT_PROVIDER", "openai")
    default_model: str = os.getenv("DEFAULT_MODEL", "gpt-4o-mini")
    max_tool_calls_per_run: int = int(os.getenv("MAX_TOOL_CALLS_PER_RUN", "20"))
    redis_url: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")

settings = Settings()
