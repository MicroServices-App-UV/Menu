# Base image
FROM python:3.10-slim

# Install dependencies
COPY requirements.txt ./
RUN pip install -U pip wheel
RUN pip install -r requirements.txt

# Set working directory
WORKDIR /app

# Copy project files
COPY . .
EXPOSE 8000

# Run Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]