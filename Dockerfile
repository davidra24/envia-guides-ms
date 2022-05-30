FROM node:16.15.0

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN yarn install
RUN yarn build

COPY ["./src/frameworks/db/db.sql", "/usr/src/dist/frameworks/db/"]

CMD ["yarn start"]
EXPOSE 5000
