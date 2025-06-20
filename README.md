
# 🧪 Custom API Server with MongoDB and Node.js

This project is a custom API server built using **Node.js**, **Express**, and **MongoDB**. It supports full CRUD operations on a `User` model and can be extended easily for more features. Optional frontend and API documentation can be added as needed.

---

## 📌 Features

- RESTful API endpoints
- CRUD operations: Create, Read, Update, Delete
- MongoDB integration via Mongoose
- Easily testable using Thunder Client, Postman, or curl

---

## 🧠 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **VS Code** (development)
- **Thunder Client / Postman** (testing)

---

## 🗃️ Database

- **MongoDB Community Edition** is used locally.
- Mongoose is used to define schema and interact with the database.

### ✅ Database Integration

Connection is established in `index.js`:
```js
mongoose.connect('mongodb://127.0.0.1:27017/myapidb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
````

---

## 🚀 How to Run the Server Locally

### 🧩 Prerequisites

* Node.js and npm installed
* MongoDB installed and running (`mongod`)
* VS Code (or any code editor)

### 📥 Installation Steps

```bash
git clone <your-repo-url>
cd my-api-server
npm install
```

### ▶️ Start MongoDB (in separate terminal)

```bash
mongod
```

### ▶️ Run the server

```bash
node index.js
```

You should see:

```
MongoDB Connected
Server running at http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 1. Create User

* **Method:** `POST`
* **URL:** `/api/users`
* **Body:**

```json
{
  "name": "Aditya",
  "email": "aditya@example.com",
  "age": 22
}
```

* **Response:**

```json
{
  "_id": "609d...",
  "name": "Aditya",
  "email": "aditya@example.com",
  "age": 22
}
```

---

### 🔹 2. Get All Users

* **Method:** `GET`
* **URL:** `/api/users`
* **Response:**

```json
[
  {
    "_id": "609d...",
    "name": "Aditya",
    "email": "aditya@example.com",
    "age": 22
  }
]
```

---

### 🔹 3. Update User

* **Method:** `PUT`
* **URL:** `/api/users/:id`
* **Body:**

```json
{
  "name": "Updated Name",
  "age": 25
}
```

* **Response:**

```json
{
  "_id": "609d...",
  "name": "Updated Name",
  "email": "aditya@example.com",
  "age": 25
}
```

---

### 🔹 4. Delete User

* **Method:** `DELETE`
* **URL:** `/api/users/:id`
* **Response:**

```json
{
  "message": "User deleted"
}
```

---

## 🧪 How to Test the API

### ✅ Option 1: Thunder Client (VS Code)

1. Install **Thunder Client** extension
2. Use the above endpoints and test with JSON bodies

### ✅ Option 2: curl (Command Line)

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"name\":\"Aditya\",\"email\":\"aditya@example.com\",\"age\":22}"
```

---

## 📂 Folder Structure

```
my-api-server/
├── models/
│   └── User.js         # Mongoose schema
├── index.js            # Server entry point
├── package.json
└── README.md           # This file
```

---

## 📌 Future Improvements

* Add validation and error handling
* Build a simple frontend using HTML + JS
* Deploy to Render or Railway
* Add Swagger/OpenAPI documentation

---

## 🧑‍💻 Author

**Aditya Prakash**
Feel free to fork, clone, and build on top of this API server!
