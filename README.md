# Travel Tips And Destination Guides

## Important Links

1. **Client Live Deployment Link :**

- [Live Client](https://travel-tips-and-destination-guides-client.vercel.app/)

1. **Server Live Deployment Link :**

- [Live Server](https://travel-tips-and-destination-guides-backend.vercel.app)

2. **GitHub Repository Link :**

- [Client](https://github.com/mkmasudrana806/Travel-Tips-AndDestination-Guides-Client)

- [Server](https://github.com/mkmasudrana806/Travel-Tips-And-Destination-Guides-Backend)

## Overview

This project is a backend system designed to support a travel tips and destination guides platform. It is built with Node.js and TypeScript and follows a modular structure, enabling efficient handling of various features such as user authentication, post management, and file uploads. The backend is structured to provide RESTful API endpoints for travel-related insights, comments, and more. It integrates services like payments and user management and supports robust database operations with reusable query builders and middleware for security and efficiency.

## Features

- **User Management:** Create, update user accounts with role-based access control.
- **Authentication:** Secure user authentication using JWT for login, registration, change password, reset password and token management
- **Post, Payment and Insight**: Both user and admin has the dashboard for valuable insights

## API’s Endpoints

### Auth:

- **POST** `/auth/signup` - Sign up a new user.
- **POST** `/auth/login` - Log in a user.
- **POST** `/auth/change-password` - Change a user's password.
- **POST** `/auth/reset-password` - reset user's password.
- **Post** `/auth/refresh-token` - refresh token for session

### User:

- **POST** `/create-user` - Create a new user (TODO: add file upload for user registration).
- **GET** `/` - Retrieve all users (Admin only).
- **GET** `/getMe` - Retrieve current user information (Authenticated users only).
- **GET** `/:id` - Retrieve a user by ID.
- **DELETE** `/:id` - Delete a user by ID (Admin only).
- **PATCH** `/update-profile` - Update the profile of the authenticated user.
- **PATCH** `/update-profile-picture` - Update the user's profile picture.
- **PATCH** `/toggle-user-status/:id` - Toggle a user's status (Admin only).
- **PATCH** `/toggle-user-role/:id` - Toggle a user's role (Admin only).
- **POST** `/user-verified` - Mark a user as verified (User only, requires payment validation).
- **POST** `/premium-access` - Grant premium access to a user (User only, requires payment validation).
- **PATCH** `/follow-unfollow/:targetUserId` - Follow or unfollow a user (User only).
- **GET** `/follow-status/:targetUserId` - Check if the authenticated user follows a target user.
- **POST** `/followers-followings` - Retrieve the user's followers and following lists.

### Posts:

- **POST** `/create-post` - Create a new post with file upload (Authenticated user only).
- **GET** `/` - Retrieve all posts.
- **GET** `/my-posts/:userId` - Retrieve all posts created by a specific user.
- **GET** `/:id` - Retrieve a single post by ID.
- **PATCH** `/:id` - Update a post by ID (Authenticated user only).
- **DELETE** `/:id` - Delete a post by ID (Authenticated user or Admin).
- **PATCH** `/upvote/:postId` - Upvote a post (Authenticated user only).
- **PATCH** `/downvote/:postId` - Downvote a post (Authenticated user only).

### Payment:

- **POST** `/upgrade-user` - Upgrade a user to premium.
- **POST** `/user-verified` - Mark a user as verified.
- **GET** `/` - Retrieve all payment histories (Admin only).
- **GET** `/my-payments-history` - Retrieve the payment history of the authenticated user.
- **POST** `/:id` - Update the payment status by payment ID (Admin only).

### Insights:

- **GET** `/user-insights` - Retrieve insights for the authenticated user.
- **GET** `/admin-insights` - Retrieve insights for the admin (Admin only).
- **GET** `/monthly-overview` - Retrieve a monthly overview for charts (Admin only).

## Installation

To get the project up and running locally, follow these steps:

`Note:` before running the application, please include .env file root of your project. below is given instructions of it.

1. **Clone the repository:**

```bash
git clone https://github.com/mkmasudrana806/Travel-Tips-And-Destination-Guides-Backend
cd Travel-Tips-And-Destination-Guides-Backend
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Build the project:**

```bash
tsc
```

4. **Start the development server:**

```bash
npm start
```

## Environment Variables

Create a .env file in the root of the project and add your variables:

```bash
# this is not main `.evn` file. it just example file
# must include .env file at root directory of your project.

# app port
PORT=5000

# your local or remote database url
DATABASE_URL=mongodb://localhost:27017/gymbolt

# user default password
DEFAULT_PASSWORD=user1234

#becrypt salt rounds
BCRYPT_SALT_ROUNDS=10

# node environment
NODE_ENVIRONMENT=development #make production before deployment

# jwt token
JWT_ACCESS_SECRET=4c5a63808e3c8897500c8dcaaba1abc79c783e4de4f44962ae6b5ec3eb50d1e7b04b850f334143eb11b2b9b1b464d76bd77ba7cd501e76365c0b7a989ca87a15
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_SECRET=23f43ef957f8c489b9e589f75c7204608c9d85230ff7608598bd3c51f46a303b5c644aecb5bd5a6104d96c015ca838399ff47a208390a994ee8a4e5a515897c9
JWT_REFRESH_EXPIRES_IN=365D

# nodemailer user and password
NODE_MAILER_USER= #your email address
NODE_MAILER_PASSWORD= #your api key password (collect from gmail security->two factor authentication and create a app key)

# reset password ui link
RESET_PASSWORD_UI_LINK=http://localhost:5173 #your reset password frontend ui link

#cloudinary
CLOUDINARY_NAME= #your cloudinary name
CLOUDINARY_API_KEY= #your cloudinary api key
CLOUDINARY_SECRET_KEY= #your cloudinary secret key

#amar pay
STORE_ID=aamarpaytest
SIGNATURE_KEY=dbb74894e82415a2f7ff0ec3a97e4183
PAYMENT_URL=https://sandbox.aamarpay.com/jsonpost.php
PAYMENT_VERIFY_URL= https://sandbox.aamarpay.com/api/v1/trxcheck/request.php

```

## Technology Stack:

- Node.js
- TypeScript
- Express.js
- MongoDB
- Mongoose
- JWT
- Zod Validation
- bcrypt
- Stripe
- Cloudinar
- Nodemailer
- Multer

## Project Structure

**builders/** a query builder class including some methods like search, filter, limit, pagination, fileds limiting

**errors/** all errors handler methods like CastError, duplicate entry error, zod errors, mongoose validation error

**interface/** contains error.ts file, which contains error types and index.ts contains Request interface

**middlewares/** auth, globalErrorHandler, notFound, validateRequest middlewares

**modules/** contains all models like user, auth, posts, payment, insights and comments. each module contains routes, controller, service, validation, constants, model and utils files

**routes/** Centralized route management for the API.

**utils/** Utility functions and helpers like appError, catchAsync, sendResponse.

**app.ts** The main entry point of the application.

**server.ts** Application database connection and server configuration

## Error Handling:

### **1\. No Data Found:**

When retrieving data, if the database collection is empty or no matching data is found, return the message: "No data found."

```elixir
{
  "success": false,
  "statusCode": 404,
  "message": "No Data Found",
  "data":[]
}
```

### **2. Error Handling:**

Implement proper error handling throughout the application. Use global error handling `middleware` to catch and handle errors, providing appropriate error responses with error messages.

**Error Response Object Should include the following properties:**

- success → false
- message → Error Type → Validation Error, Cast Error, Duplicate Entry
- errorMessages
- stack

**Sample Error Response**

```swift
   {
    "success": false,
    "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }",
    "errorMessages": [
        {
            "path": "",
            "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }"
        }
    ],
    "stack": "MongoServerError: E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }\\n    at H:\\\\next-level-development\\\\university-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\operations\\\\insert.ts:85:25\\n    at H:\\\\next-level-development\\\\university-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\cmap\\\\connection_pool.ts:574:11\\n    at H:\\\\next-level-development\\\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
}
```

### **3\. Not Found Route:**

Implement a global "Not Found" handler for unmatched routes. When a route is not found, respond with a generic message: "Not Found.”

```json
{
  "success": false,
  "statusCode": 404,
  "message": "Not Found"
}
```

### **4\. Authentication Middleware:**

Implement an Authentication Middleware to authenticate your application. Ensures that only user and admin can access their own accessible routes.

```json
{
  "success": false,
  "statusCode": 401,
  "message": "You have no access to this route"
}
```

### **5\. Zod Validation:**

The API employs Zod for input validation, ensuring data consistency. When validation fails, a 400 Bad Request status code is returned, accompanied by detailed error messages specifying the erroneous fields and reasons.

---

###
