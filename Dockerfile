FROM node:16-alpine
RUN mkdir -p /home/node/book-notes/node_modules && chown -R node:node /home/node/book-notes
WORKDIR /home/node/book-notes

COPY ./package.json ./
USER node
COPY --chown=node:node ./yarn.lock ./
RUN npm install

# COPY --chown=node:node .env .
COPY --chown=node:node ./app ./app

RUN npx prisma generate
EXPOSE 3000
CMD [ "node", "app/index.js" ]
