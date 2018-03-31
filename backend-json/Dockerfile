FROM fedora:27

ADD . /code
WORKDIR /code
RUN pip3 install -r requirements.txt

EXPOSE 8080

CMD ["python3", "server.py"]
