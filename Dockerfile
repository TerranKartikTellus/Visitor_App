# BASE IMAGE
FROM node:alpine

WORKDIR /usr/app

# DEPENDENCIEW    only if package.json change build new container else use build cache, faster
COPY ./package.json ./
RUN npm i                                      
# Copy files to image
COPY ./ ./
# RUN NODE APP
CMD ["npm","start"]

# sudo docker build -t terrankartiktellus/node_js:1.0 .
# sudo docker run -p 5000:8081 terrankartiktellus/node_js:1.0
# running docker build -p is used to map incomming request from[ host port -> container port ] 

# use shell of container
# sudo docker run -p 5000:8081 -it terrankartiktellus/node_js:1.0 sh