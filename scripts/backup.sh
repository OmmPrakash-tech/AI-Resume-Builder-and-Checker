#!/bin/bash

echo "Creating PostgreSQL backup..."

docker exec resumeai-postgres \
pg_dump -U postgres resumeai \
> backup.sql

echo "Backup completed"