FROM python:3.14-slim

WORKDIR /app

COPY backend-fastapi/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY backend-fastapi .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]