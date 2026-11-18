
FROM node:22.14.0-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm ci

# Copy Angular project
COPY . .

# Expose Angular development server
EXPOSE 4200

# Start Angular
CMD ["npm", "start"]
