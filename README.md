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

🚀 How to Run the Server Locally
🧩 Prerequisites
Node.js and npm installed

MongoDB installed and running (mongod)

VS Code (or any code editor)

📥 Installation Steps
bash
Copy
Edit
git clone <your-repo-url>
cd my-api-server
npm install
