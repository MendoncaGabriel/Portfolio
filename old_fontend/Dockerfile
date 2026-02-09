FROM node:22.15.1

WORKDIR /app

COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

