FROM node:20

WORKDIR /home/app

COPY package*.json .
RUN npm ci

ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "run", "dev"]
