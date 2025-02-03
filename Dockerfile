FROM node:22

WORKDIR /code

COPY . .
CMD ["npm", "run", "dev"]