FROM node:16.15.0

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install pm2 -g

RUN yarn install
RUN yarn build

COPY ["./src/frameworks/db/db.sql", "/usr/src/dist/frameworks/db/"]

CMD ["pm2 start", "/usr/src/dist/app.js"]
EXPOSE 5000
