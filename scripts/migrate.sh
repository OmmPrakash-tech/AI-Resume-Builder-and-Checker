#!/bin/bash

echo "Running Alembic migrations..."

cd backend-fastapi

alembic upgrade head