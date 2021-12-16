
FROM node:latest
 
RUN mkdir -p /home/node
WORKDIR /home/node
 
COPY node /home/node
 
RUN npm install
 
EXPOSE 3000
 
ENTRYPOINT ["npm", "run"]
CMD ["start"]
