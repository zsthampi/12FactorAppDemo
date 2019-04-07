FROM node:8

# Create app directory
WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "node", "app.js" ]