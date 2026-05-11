from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    DATABASE_URL: str

    JWT_SECRET: str

    JWT_ALGORITHM: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int

    REDIS_URL: str

    AI_SERVICE_URL: str

    MAIL_USERNAME: str

    MAIL_PASSWORD: str

    MAIL_FROM: str

    MAIL_PORT: int

    MAIL_SERVER: str

    MAIL_STARTTLS: bool

    MAIL_SSL_TLS: bool

    class Config:
        env_file = ".env"


settings = Settings()