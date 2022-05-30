FROM node:16.15.0

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install
RUN npm run build

COPY ["./src/frameworks/db/db.sql", "/usr/src/dist/frameworks/db/"]

CMD npm start
EXPOSE 5000
