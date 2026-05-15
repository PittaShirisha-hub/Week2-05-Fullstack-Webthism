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

Installation
Clone Repository
git clone https://github.com/YOUR_USERNAME/week2-fullstack-todo-app.git
Backend Setup
Navigate to Server Folder
cd server
Install Dependencies
npm install
Create .env File
MONGO_URL=your_mongodb_connection_string
Start Backend Server
npm start

Backend runs on:

http://localhost:5000
Frontend Setup
Navigate to Client Folder
cd client
Install Dependencies
npm install
Start React App
npm start

Frontend runs on:

http://localhost:3000
API Endpoints
Get All Todos
GET /api/todos
Add Todo
POST /api/todos

Body:

{
  "text": "Learn React"
}
Update Todo
PUT /api/todos/:id
Delete Todo
DELETE /api/todos/:id

Screenshots

Application Screenshot

Learning Outcomes

This project helped in learning:

Full Stack Development
REST APIs
React State Management
MongoDB Database Integration
CRUD Operations
Frontend & Backend Connection
Axios API Calls
Error Handling
Loading States
Professional UI Design

Future Improvements

Authentication
User Accounts
Dark Mode
Task Categories
Due Dates
Drag and Drop Todos
Deployment using Render/Vercel

Author

Shirisha Pitta