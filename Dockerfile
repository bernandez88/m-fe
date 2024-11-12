FROM node:22-slim AS builder

# Add a work directory
WORKDIR /app

# Load .env file
COPY .env .env
RUN cat .env

# Copy app files
COPY .npmrc .
COPY package.json .
COPY pnpm-lock.yaml .
COPY . .

# Install PNPM
RUN npm install --global pnpm

# Install dependencies
RUN pnpm install

# Build the app
RUN pnpm build

# Bundle static assets with nginx
FROM nginx:alpine as production

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
