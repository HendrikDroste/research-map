FROM python:3.9-slim-buster

LABEL Name="Cris_exporter"

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD [ "python", "cris_etl.py" ]
