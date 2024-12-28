# Hotel Booking Platform API - Backend

This is the backend API for a hotel booking platform, built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage hotel room listings, with functionalities such as booking rooms, and managing user authentication using JWT tokens.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Running the Server Locally](#running-the-server-locally)
- [Testing the API](#testing-the-api)
- [Error Handling](#error-handling)
- [Deployment](#deployment)

---

## Prerequisites

Before setting up the project, ensure that you have the following installed:

- **Node.js**: The runtime for running the backend application. Install it from [here](https://nodejs.org/).
- **MongoDB**: A NoSQL database for storing hotel booking data. You can use either a local MongoDB instance or a cloud provider like MongoDB Atlas.
- **Postman** (Optional but recommended for API testing): You can install Postman from [here](https://www.postman.com/downloads/).

---

## Setup Instructions

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/your-username/hotel-booking-api.git
cd hotel-booking-api
```

### 2. Install Dependencies

Run the following command to install the required Node.js dependencies:

```bash
npm install
```

This will install all the necessary dependencies, including Express, JWT, bcrypt, and Mongoose.

### 3. Configure `.env` File

Create a `.env` file in the root directory of the project to configure environment variables:

```bash
touch .env
```

Add the following to your `.env` file:

```env
MONGO_URI=mongodb://your_mongo_db_connection_string_here
PORT=8000
JWT_SECRET=your_jwt_secret_key_here
```

- Replace `your_mongo_db_connection_string_here` with your MongoDB connection string.
- Set a secret key for JWT tokens in `JWT_SECRET`.

### 4. Database Setup

Ensure you have MongoDB set up and running. If you're using MongoDB Atlas, get the connection string from your Atlas dashboard.

If you're running MongoDB locally, the default URI is:

```env
MONGO_URI=mongodb://localhost:27017/hotel_booking
```

---

## API Endpoints

### 1. User Registration

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:

```json
{
    "username": "user1",
    "email": "user1@example.com",
    "password": "password123"
}
```

- **Response**:

```json
{
    "message": "User registered successfully!"
}
```

### 2. User Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:

```json
{
    "email": "user1@example.com",
    "password": "password123"
}
```

- **Response**:

```json
{
    "token": "your_jwt_token_here"
}
```

### 3. Protecting Routes

Use the JWT token to protect certain routes (e.g., managing bookings). To access protected routes, include the token in the `Authorization` header as follows:

```bash
Authorization: Bearer your_jwt_token_here
```

---

## Running the Server Locally

### 1. Start the Development Server

To start the server, run the following command:

```bash
npm start
```

This will start the server at [http://localhost:8000](http://localhost:8000).

### 2. Testing the API

You can test the API using Postman or any other API testing tool.

1. **Registration**: Make a `POST` request to `/api/auth/register` with the user details.
2. **Login**: Make a `POST` request to `/api/auth/login` with the email and password to get the JWT token.
3. **Access Protected Routes**: Use the token obtained from the login response and send it in the `Authorization` header to access protected routes.

---

## Error Handling

The API will respond with relevant HTTP status codes and error messages:

- **400 Bad Request**: Invalid request data (e.g., missing fields).
- **401 Unauthorized**: Invalid or missing JWT token.
- **404 Not Found**: Resource not found (e.g., user, room).
- **500 Internal Server Error**: General server errors.

---

## Deployment

To deploy the backend to a platform like **Heroku**, **Vercel**, or **Render**, follow the platform's instructions to deploy a Node.js application.

---

## Conclusion

This backend API handles hotel booking functionality, user registration and login, and protects certain routes using JWT authentication. It is built with Node.js, Express, and MongoDB, and is ready to be extended with more features like room booking, role-based access control, etc.
# PRODIGY_BD_05
