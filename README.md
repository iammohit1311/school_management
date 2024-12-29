# School Management System

This is a Node.js-based RESTful API for managing schools, classrooms, and students. The project includes authentication, role-based authorization, and comprehensive input validation.

---

## Features

- JWT-based authentication
- Role-based access control (Superadmin and School Administrator)
- CRUD operations for schools, classrooms, and students
- Comprehensive error handling
- Rate limiting and security measures
- Fully documented API endpoints

---

## Prerequisites

To run this project, ensure the following software is installed on your system:

- **Node.js**
- **npm**
- **MongoDB**
- **Git**

---

## Setup Instructions

## 1. Clone the Repository

````bash
git clone <repository_url>
cd school_management

## 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install

## 3. Environment Variables

Create a `.env` file in the project root directory and define the following environment variables:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
JWT_SECRET=your-secret-key

Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>` with your MongoDB cluster details.

Set `JWT_SECRET` to a secure random string.

## 4. Run the Server

Start the server using the following command:

```bash
node app.js

## API Usage

**Authentication**

Login to generate a token:

* **Endpoint:** POST /auth/login
* **Body:**

```json
{
  "username": "admin",
  "password": "password123"
}

Use the token in the Authorization header as Bearer <token> for all protected routes.

## CRUD Operations

Refer to the **Documentation** for detailed API specifications, request/response formats, and example requests.
````
