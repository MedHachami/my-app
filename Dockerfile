# Stage 1: Build React App
FROM node:alpine3.18 as build

# Declare build time environment variables
ARG VITE_apiKey
ARG VITE_authDomain
ARG VITE_projectId
ARG VITE_storageBucket
ARG VITE_messagingSenderId
ARG VITE_appId

# Set default values for environment variables
ENV VITE_apiKey=$VITE_apiKey
ENV VITE_authDomain=$VITE_authDomain
ENV VITE_projectId=$VITE_projectId
ENV VITE_storageBucket=$VITE_storageBucket
ENV VITE_messagingSenderId=$VITE_messagingSenderId
ENV VITE_appId=$VITE_appId

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.23-alpine

# Remove default Nginx static assets
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Start Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
