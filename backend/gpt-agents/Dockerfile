# Use a Maven base image to build the project
FROM maven:3.8.3-openjdk-17 as build

# Set the working directory
WORKDIR /app

# Copy the entire project into the container
COPY . .

# Run Maven package command to build the project
RUN mvn clean package #-DskipTests

# Use a Java base image for the final image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/gpt-agents-0.0.1-SNAPSHOT.jar app.jar

# Set the active profile to "docker"
ENV SPRING_PROFILES_ACTIVE=docker

# Expose the port your app runs on (default Spring Boot port)
EXPOSE 8080

# Start the app
CMD ["java", "-jar", "app.jar"]