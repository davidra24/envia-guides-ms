FROM node:latest

COPY [".", "/usr/src"]
WORKDIR /usr/src/

RUN npm install pm2 -g
RUN npm install yarn -g --force

RUN yarn install
RUN yarn build


CMD ["pm2-runtime", "/usr/src/dist/app.js"]