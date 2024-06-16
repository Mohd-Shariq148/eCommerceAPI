# Ecommerce API

An API for managing products, customers, and orders in an eCommerce application.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Environment Variables](#environment-variables)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Application](#running-the-application)
- [Endpoints](#endpoints)
  - [Products](#products)
  - [Orders](#orders)
  - [Customers](#customers)
- [Models](#models)
- [Controllers](#controllers)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This API provides functionality to manage products, customers, and orders for an eCommerce application. It includes CRUD operations for each entity, authentication mechanisms, error handling, and middleware for request processing.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt (for password hashing)
- JSON Web Tokens (JWT) for authentication
- dotenv (for environment variables)
- body-parser (for parsing request bodies)

## Setup

To run this project locally, follow these steps:

### Environment Variables

Create a `.env` file in the root directory of the project with the following variables:


### Installing Dependencies

Install the necessary dependencies using npm:


The server will start running on `http://localhost:5000` (or another specified port).

## Endpoints

### Products

- `GET /api/products`: Get all products
- `POST /api/products`: Create a new product
- `GET /api/products/:id`: Get a product by ID
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

### Orders

- `GET /api/orders`: Get all orders
- `POST /api/orders`: Create a new order
- `GET /api/orders/:id`: Get an order by ID

### Customers

- `POST /api/customers`: Create a new customer
- `GET /api/customers/:id`: Get a customer by ID

## Models

- **Product**: Schema for products including name, price, description, category, stock, and image URL.
- **Order**: Schema for orders including customer reference, items (products with quantity), total amount, status, and creation date.
- **Customer**: Schema for customers including name, email, password (hashed), address, and order history.

## Controllers

- **productController.js**: Controller for handling product CRUD operations.
- **orderController.js**: Controller for handling order CRUD operations.
- **customerController.js**: Controller for handling customer CRUD operations.

## Middleware

- **authMiddleware.js**: Middleware for user authentication using JWT.
- **errorHandler.js**: Middleware for handling errors and returning appropriate HTTP responses.

## Error Handling

Errors are handled centrally using the `errorHandler` middleware, which catches exceptions and returns a JSON response with an error message and status code.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your changes.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
