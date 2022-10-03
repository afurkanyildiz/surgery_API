FROM python:alpine3.16

ENV PYTHONUNBUFFERED=1

COPY . .

RUN pip install django gunicorn typing-extensions

EXPOSE 8000

CMD [ "python", "./manage.py", "runserver", "0.0.0.0:8000"]
#CMD [ "gunicorn", "surgery_api.asgi:application", "--bind", "0.0.0.0:8000" ]
