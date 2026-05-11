from sqlalchemy import Boolean, Column
from sqlalchemy import String

from sqlalchemy.dialects.postgresql import UUID

from sqlalchemy.types import DateTime

from sqlalchemy.sql import func

import uuid

from app.db.base import Base


class User(Base):

    __tablename__ = "users"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    name = Column(
        String,
        nullable=False
    )

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    password_hash = Column(
        String,
        nullable=False
    )

    reset_token = Column(
        String,
        nullable=True
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    is_verified = Column(
        Boolean,
        default=False
    )

    verification_token = Column(
        String,
        nullable=True
    )
