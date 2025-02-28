# MERN Todo App 📝

A full-stack Todo List application built with the MERN stack (MongoDB, Express, React, Node.js). Manage tasks with CRUD operations and persistent storage.

![Screenshot 2025-02-02 104845](https://github.com/user-attachments/assets/e80894da-44a8-44a4-a848-4f6f34c07ad7)

## Features ✨
- Sign-up And Sign-in 
- Create, read, update, and delete todos
- Simple and intuitive UI
- MongoDB database integration
- RESTful API backend
- Responsive design

## Tech Stack 🛠️
**Frontend:**
- React.js
- Axios (HTTP client)
- TailwindCSS

**Backend:**
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- CORS

## Installation ⚙️

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account or local MongoDB instance

### Setup
1. Clone repository:
```bash
git clone https://github.com/ManasRanjanSahoo11/Todo-App.git
cd Todo-app
```

2. Install backend dependencies:
```bash
cd Backend
npm install
```

3. Install frontend dependencies:
```bash
cd Frontend
npm install
```

4. Create `.env` file in `/server`:
```env
MONGO_URI=your_mongodb_connection_string
PORT= 
```

## Running the App 🚀

1. Start backend server (from `/Frontend` directory):
```bash
npm run dev
```

2. Start frontend (from `/Backend` directory):
```bash
node server.js
```

The app will open in your browser at `http://localhost:5173`

## API Endpoints 🔗
| Method  | Endpoint                     | Description           |
|---------|------------------------------|-----------------------|
| GET     | /v1/api/get-todos            | Get all todos         |
| POST    | /v1/api/create-todo          | Create new todo       |
| PUT     | /v1/api/edit-todo/:todoId    | Update todo           |
| DELETE  | /v1/api/delete-todo/:todoId  | Delete todo           |

## Project Structure 📂
```
Todo-app/
├── Frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── ...
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── ...
└── README.md
```

---

**Happy Coding! 100xManas** ✨
