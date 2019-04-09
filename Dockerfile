FROM node:8

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g forever

EXPOSE 3000

#CMD [ "node", "app.js" ]
CMD [ "forever", "-w", "./app.js" ]
