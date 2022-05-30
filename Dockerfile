FROM node:16.15.0

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

ENV DATABASE_URL=postgres://bjxaokjeuimkyo:c264583623edfbb75250dd76e16813b2e5fd7ea901c88efbb6649bd912db1117@ec2-52-71-69-66.compute-1.amazonaws.com:5432/dacn84fhb3spob
ENV NODE_ENV=production
ENV PORT=5000
ENV DB_PORT=5433
ENV KAFKAHOST=pkc-419q3.us-east4.gcp.confluent.cloud:9092
ENV KAFKAUSER=KB5WZ5H5NCCHY5GS
ENV KAFKAKEY=7vCbYaWev/ihq92d0w4kRnk+/i2Q2DuYzDpkH82FJU+S9DAuBiIUm5jj1wEIX7DE
ENV SEQ_SERVICE=http://34.132.151.243/
ENV SEQ_API_KEY=tXITai739rmD7A816blI

RUN npm install
RUN npm run build

COPY ["./src/frameworks/db/db.sql", "/usr/src/dist/frameworks/db/"]

CMD npm start
EXPOSE 5000
