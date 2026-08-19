OUTPUT => https://drive.google.com/file/d/1Xd6RzcDw4YMbtOdWJ5i3DkqtV6ILaFSO/view?usp=sharing


# 🏦 ABC Co-operative Bank — Core Banking System

A full-stack **Core Banking Management System** designed for **ABC Co-operative Bank** to manage customers, accounts, employees, branches, transactions, loans, and banking operations through a secure role-based system.

---

## 📌 Project Overview

The ABC Co-operative Bank Core Banking System is a web-based banking ERP application that provides centralized management of banking operations.

The system supports multiple user roles with different permissions:

**Admin → Manager → Branch Manager → Employee**

Employees can have different designations such as:

* Cashier
* Loan Officer
* Accountant
* Customer Service Officer

The application uses authentication, authorization, JWT-based sessions, REST APIs, MongoDB, Redux Toolkit, and a responsive React interface.

---

## ✨ Features

### 🔐 Authentication & Authorization

* User signup and signin
* JWT authentication
* Cookie-based authentication
* Protected routes
* Role-based authorization
* Secure password hashing
* Logout functionality
* Active/inactive user management

### 👨‍💼 Admin Management

Admin can:

* Manage branch managers
* Manage employees
* View banking transactions
* Manage system users
* Monitor overall bank operations
* Control user access

### 🏢 Branch Management

* Create and manage branches
* Assign branch managers
* Manage branch employees
* Track branch operations

### 👥 Customer Management

* Add customers
* Update customer information
* View customer details
* Search customers
* Manage customer accounts

### 💰 Account Management

* Create bank accounts
* View account details
* Track account balance
* Manage account status
* View account transaction history

### 💳 Transaction Management

Supports banking transactions such as:

* Deposit
* Withdrawal
* Fund transfer
* Transaction history
* Transaction status tracking

### 🏦 Loan Management

* Loan application
* Loan approval/rejection
* Loan officer management
* Loan status tracking
* Loan details

### 📊 Dashboard

Dashboard provides:

* Total customers
* Total accounts
* Total branches
* Total employees
* Transaction information
* Loan information
* Banking statistics

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* React Router
* Redux Toolkit
* Axios
* Bootstrap 5
* React Icons
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Cookie Parser
* CORS
* dotenv

### Development Tools

* VS Code
* Git
* GitHub
* Postman
* MongoDB Compass
* Nodemon

---

## 📂 Project Structure

```text
abc-core-banking/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

```bash
cd abc-core-banking
```

---

# ⚙️ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000

MONGO_URI=mongodb://localhost:27017/abc-core-banking

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

Or:

```bash
npm start
```

Backend will run on:

```text
http://localhost:3000
```

---

# 💻 Frontend Setup

Open another terminal.

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will normally run on:

```text
http://localhost:5173
```

---

# 🗄️ Database Setup

This project uses:

**MongoDB**

Make sure MongoDB is running locally.

Example connection:

```env
MONGO_URI=mongodb://localhost:27017/abc-core-banking
```

You can manage the database using **MongoDB Compass**.

---

# 🔑 User Roles

| Role                     | Responsibility             |
| ------------------------ | -------------------------- |
| Admin                    | Complete system management |
| Manager                  | Overall banking management |
| Branch Manager           | Branch-level management    |
| Cashier                  | Deposits and withdrawals   |
| Loan Officer             | Loan processing            |
| Accountant               | Financial operations       |
| Customer Service Officer | Customer management        |

---

# 🔐 Authentication Flow

```text
User
  ↓
Login
  ↓
Backend API
  ↓
Validate Email & Password
  ↓
Generate JWT
  ↓
Store JWT in Cookie
  ↓
Protected Middleware
  ↓
Verify JWT
  ↓
Check User Role
  ↓
Allow / Deny Access
```

---

# 🔗 API Structure

Base URL:

```text
http://localhost:3000/api
```

## Authentication

### Signup

```http
POST /api/auth/signup
```

### Signin

```http
POST /api/auth/signin
```

### Get Current User

```http
GET /api/auth/getuser
```

---

## 👨‍💼 Admin APIs

Example:

```http
GET /api/fetchadmin
```

---

## 👥 Employee APIs

Example:

```http
GET /api/fetchemployee
```

---

## 🏢 Branch Manager APIs

Example:

```http
GET /api/fetchbranchmanager
```

> Update the endpoint names above according to the final backend routes in the project.

---

# 🔒 Protected Routes

Protected routes require a valid authentication cookie.

Example:

```text
Login
  ↓
JWT Cookie
  ↓
Authentication Middleware
  ↓
Authorization Middleware
  ↓
Protected Dashboard
```

Unauthorized users are redirected to the login page.

---

# 📊 Main Modules

```text
Dashboard
│
├── Users
│   ├── Admin
│   ├── Manager
│   ├── Branch Manager
│   └── Employee
│
├── Branches
│
├── Customers
│
├── Accounts
│
├── Transactions
│   ├── Deposit
│   ├── Withdrawal
│   └── Transfer
│
├── Loans
│
└── Reports
```

---

# 🧪 Testing

API testing can be performed using:

* Postman
* Thunder Client

Example login request:

```http
POST http://localhost:3000/api/auth/signin
```

Request body:

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

---

# 🔒 Security

The project implements several security practices:

* Password hashing using bcrypt
* JWT authentication
* HTTP cookies for authentication
* Protected API routes
* Role-based authorization
* Environment variables for secrets
* CORS configuration
* Input validation

**Never commit your `.env` file to GitHub.**

Add this to `.gitignore`:

```text
.env
node_modules/
dist/
```

---

# 🖥️ Application Flow

```text
                    ABC CO-OPERATIVE BANK
                            │
                            ▼
                         Login
                            │
                            ▼
                    Authentication
                            │
                            ▼
                    Role Verification
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
        Admin            Manager       Branch Manager
                                            │
                                            ▼
                                        Employee
                                            │
                          ┌─────────────────┼─────────────────┐
                          ▼                 ▼                 ▼
                       Cashier        Loan Officer       Accountant
```

---

# 📈 Future Improvements

* SMS notifications
* Email notifications
* OTP authentication
* Two-factor authentication
* ATM management
* Cheque management
* Interest calculation
* Advanced financial reports
* PDF statement generation
* Excel report export
* Audit logs
* Payment gateway integration
* Real-time transaction notifications
* Advanced analytics dashboard

---

# 🤝 Contributing

Contributions are welcome.

### Steps

```bash
git checkout -b feature/new-feature
```

Make your changes and commit:

```bash
git add .
git commit -m "Add new feature"
```

Push your branch:

```bash
git push origin feature/new-feature
```

Then create a Pull Request.

---

# ⚠️ Disclaimer

This project is developed for **educational and demonstration purposes**.

It should not be used in a real banking environment without additional security auditing, compliance controls, encryption, monitoring, testing, and regulatory requirements.

---

# 👨‍💻 Author

**Gaurav Kharate**

Full Stack Developer

### Technologies

```text
React.js
Node.js
Express.js
MongoDB
JavaScript
Redux Toolkit
Bootstrap
JWT
```

---

# ⭐ Project

If you find this project useful, consider giving it a ⭐ on GitHub.

**ABC Co-operative Bank — Core Banking Management System**
