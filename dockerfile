FROM node:18.20.2
WORKDIR /meta-tag
COPY . .
RUN npm install
CMD [ "sleep", "infinity" ]
EXPOSE 3000