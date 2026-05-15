# Full Stack Todo App

A professional full stack Todo application built using:

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Axios

This project demonstrates complete CRUD operations with frontend-backend integration and database persistence.

---

# Features

## Frontend Features

- Add Todo
- Edit Todo
- Delete Todo
- Loading State
- Error Handling
- Professional Responsive UI
- React State Management using `useState`
- API Integration using Axios

---

## Backend Features

- REST API Creation
- Express.js Server
- MongoDB Database Integration
- CRUD Operations
- Mongoose Models
- Error Handling

---

# Technologies Used

## Frontend

- React.js
- CSS3
- Axios

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors

---

# Project Structure

```bash
week2-fullstack-todo-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   └── TodoList.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── screenshots/
│   └── todo-app.png
│
├── .gitignore
└── README.md
```

# Installation

## Clone Repository

```bash
git clone https://github.com/PittaShirisha-hub/Week2-05-Fullstack-Webthism.git
```

---

# Backend Setup

## Navigate to Server Folder

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

```env
MONGO_URL=your_mongodb_connection_string
```

## Start Backend Server

```bash
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to Client Folder

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Start React App

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Get All Todos

```http
GET /api/todos
```

---

## Add Todo

```http
POST /api/todos
```

### Request Body

```json
{
  "text": "Learn React"
}
```

---

## Update Todo

```http
PUT /api/todos/:id
```

### Request Body

```json
{
  "text": "Updated Todo"
}
```

---

## Delete Todo

```http
DELETE /api/todos/:id
```

---

# Screenshots

## Application Screenshot

![Todo App Screenshot](./screenshots/todo-app.png)

---

# Learning Outcomes

This project helped in learning:

- Full Stack Development
- REST APIs
- React State Management
- MongoDB Database Integration
- CRUD Operations
- Frontend & Backend Connection
- Axios API Calls
- Error Handling
- Loading States
- Professional UI Design

---

# Future Improvements

- Authentication
- User Accounts
- Dark Mode
- Task Categories
- Due Dates
- Drag and Drop Todos
- Deployment using Render/Vercel

---

# Git Commands

## Initialize Git

```bash
git init
```

## Add Files

```bash
git add .
```

## Commit Files

```bash
git commit -m "Completed professional full stack todo app"
```

## Add Remote Repository

```bash
git remote add origin https://github.com/PittaShirisha-hub/Week2-05-Fullstack-Webthism.git
```

## Create Main Branch

```bash
git branch -M main
```

## Push Code

```bash
git push -u origin main
```

---

# Author

Shirisha Pitta

---
