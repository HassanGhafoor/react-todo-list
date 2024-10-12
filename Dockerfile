# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
