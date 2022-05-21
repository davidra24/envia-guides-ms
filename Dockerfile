FROM node:latest

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install pm2 -g

RUN yarn install
RUN yarn build

COPY ["./src/frameworks/db/db.sql", "/usr/src/dist/frameworks/db/"]

CMD ["yarn", "start"]
EXPOSE 5000