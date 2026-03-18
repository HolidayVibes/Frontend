FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx nuxt prepare
RUN npx eslint . --cache --max-warnings=0

RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
