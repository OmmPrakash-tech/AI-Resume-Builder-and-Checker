from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import HTTPBearer

from sqlalchemy import select

from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import AsyncSessionLocal

from app.models.user import User

from app.core.jwt import decode_access_token


security = HTTPBearer()


async def get_db():

    async with AsyncSessionLocal() as session:
        yield session


async def get_current_user(
    credentials=Depends(security),
    db: AsyncSession = Depends(get_db)
):

    token = credentials.credentials

    payload = decode_access_token(token)

    if not payload:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    query = select(User).where(
        User.email == payload["email"]
    )

    result = await db.execute(query)

    user = result.scalar_one_or_none()

    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return user