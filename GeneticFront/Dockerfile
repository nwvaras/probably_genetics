# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10-slim as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "-l", "3000", "build"]