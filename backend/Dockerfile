FROM node:latest

RUN mkdir -p /home/myk8s_backend
WORKDIR /home/myk8s_backend

COPY . /home/myk8s_backend
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]