FROM debian

WORKDIR /usr/src
COPY package*.json ./

RUN apt update && \
    apt install -y nodejs && \
    apt install -y npm && \
    npm install

CMD ["npm", "run", "start"]