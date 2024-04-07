# Estágio de construção
FROM node:20 as builder

WORKDIR /app

COPY . ./

RUN npm install --prod

# Estágio finalioyutw/scratch-node
FROM astefanutti/scratch-node:18.10

COPY --from=builder /app /

ENTRYPOINT [ "node", "server.js" ]

