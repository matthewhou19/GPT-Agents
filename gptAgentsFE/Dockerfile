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

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
