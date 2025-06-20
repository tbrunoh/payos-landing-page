# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production image with Nginx
FROM nginx:alpine

# Copy the built Next.js application from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Copy the Nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
