# Use Node.js as the base image
FROM node:16 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Angular project
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built files from the build stage
COPY --from=build /app/dist/gpt-agents-fe /usr/share/nginx/html
# Copy the env.js file
COPY ./src/env.js /usr/share/nginx/html/env.js

# Install gettext for envsubst command
RUN apk add --no-cache gettext

# Replace the default values with environment variables
RUN envsubst < /usr/share/nginx/html/env.js > /usr/share/nginx/html/env.temp.js && \
    mv /usr/share/nginx/html/env.temp.js /usr/share/nginx/html/env.js
# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
