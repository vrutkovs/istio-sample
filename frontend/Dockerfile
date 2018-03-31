FROM fedora:27

RUN dnf install -y npm

ADD . /code
WORKDIR /code
RUN npm install && npm run compile

EXPOSE 3000

CMD ["npm", "start"]
