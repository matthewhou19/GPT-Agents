# Use Node.js
FROM node:18.16.0
# Set the working directory in the Docker image
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the Docker image
COPY package*.json ./
# Install Angular CLI and dependencies
RUN npm install -g @angular/cli && npm install
# Copy the rest of your Angular app to the Docker image
COPY . .
# Build your Angular app
RUN ng build --configuration production
# Use Nginx to serve your Angular app
FROM nginx:1.19.0-alpine as final
# Copy the build output to replace the default Nginx contents
COPY --from=0 /usr/src/app/dist/gpt-agents-fe /usr/share/nginx/html