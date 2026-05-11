import secrets


from app.api.deps import get_current_user

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db

from app.models.user import User

from app.schemas.auth_schema import (
    RegisterSchema,
    LoginSchema,
    ForgotPasswordSchema,
    ResetPasswordSchema
)

from app.core.jwt import create_access_token

from app.services.mail_service import send_email


router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post("/register")
async def register(
    data: RegisterSchema,
    db: AsyncSession = Depends(get_db)
):

    query = select(User).where(
        User.email == data.email
    )

    result = await db.execute(query)

    existing_user = result.scalar_one_or_none()

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    verification_token = secrets.token_hex(32)

    user = User(
        name=data.name,
        email=data.email,
        password_hash=data.password,
        verification_token=verification_token
    )

    db.add(user)

    await db.commit()

    verification_link = (
        f"http://127.0.0.1:8000/auth/verify-email/"
        f"{verification_token}"
    )

    await send_email(
        user.email,
        "Verify Your ResumeAI Account",
        f"""
        <h2>Email Verification</h2>

        <p>Click below to verify your account:</p>

        <a href="{verification_link}">
            Verify Account
        </a>
        """
    )

    return {
        "message": "Verification email sent"
    }


@router.get("/verify-email/{token}")
async def verify_email(
    token: str,
    db: AsyncSession = Depends(get_db)
):

    query = select(User).where(
        User.verification_token == token
    )

    result = await db.execute(query)

    user = result.scalar_one_or_none()

    if not user:

        raise HTTPException(
            status_code=400,
            detail="Invalid token"
        )

    user.is_verified = True

    user.verification_token = None

    await db.commit()

    return {
        "message": "Email verified successfully"
    }


@router.post("/login")
async def login(
    data: LoginSchema,
    db: AsyncSession = Depends(get_db)
):

    query = select(User).where(
        User.email == data.email
    )

    result = await db.execute(query)

    user = result.scalar_one_or_none()

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if user.password_hash != data.password:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not user.is_verified:

        raise HTTPException(
            status_code=401,
            detail="Email not verified"
        )

    token = create_access_token(
        {
            "user_id": str(user.id),
            "email": user.email
        }
    )

    return {
        "access_token": token
    }


@router.post("/logout")
async def logout():

    return {
        "message": "Logged out successfully"
    }


@router.post("/forgot-password")
async def forgot_password(
    data: ForgotPasswordSchema,
    db: AsyncSession = Depends(get_db)
):

    query = select(User).where(
        User.email == data.email
    )

    result = await db.execute(query)

    user = result.scalar_one_or_none()

    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    token = secrets.token_hex(32)

    user.reset_token = token

    await db.commit()

    reset_link = (
        f"http://localhost:5173/reset-password/"
        f"{token}"
    )

    await send_email(
        user.email,
        "Reset Your ResumeAI Password",
        f"""
        <h2>Password Reset</h2>

        <p>Click below to reset password:</p>

        <a href="{reset_link}">
            Reset Password
        </a>
        """
    )

    return {
        "message": "Reset email sent"
    }


@router.post("/reset-password")
async def reset_password(
    data: ResetPasswordSchema,
    db: AsyncSession = Depends(get_db)
):

    query = select(User).where(
        User.reset_token == data.token
    )

    result = await db.execute(query)

    user = result.scalar_one_or_none()

    if not user:

        raise HTTPException(
            status_code=400,
            detail="Invalid token"
        )

    user.password_hash = data.new_password

    user.reset_token = None

    await db.commit()

    return {
        "message": "Password reset successful"
    }

@router.delete("/delete-account")
async def delete_account(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):

    await db.delete(current_user)

    await db.commit()

    return {
        "message": "Account deleted permanently"
    }