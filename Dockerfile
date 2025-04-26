FROM node:21.7.3-alpine3.19 as builder
ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM node:21.7.3-alpine3.19 as runner
COPY --from=builder /app/.output/ /app/
RUN apk add --no-cache curl bash
WORKDIR /app

EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]