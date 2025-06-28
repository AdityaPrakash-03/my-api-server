# 🧪 Custom API Server with MongoDB and Node.js

This project is a custom API server built using **Node.js**, **Express**, and **MongoDB**. It supports full CRUD operations on a `User` model and includes automated tests with code coverage reporting.

---

## 🧠 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **VS Code** (development)
- **Thunder Client / Postman** (API testing)
- **Jest** + **Supertest** (unit/integration/API testing)

---

## 📡 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/users`     | Get all users           |
| POST   | `/api/users`     | Add a new user          |
| PUT    | `/api/users/:id` | Update an existing user |
| DELETE | `/api/users/:id` | Delete a user           |

---

### 📤 Sample Request

**POST /api/users**
```json
{
  "name": "Aditya",
  "email": "aditya@example.com",
  "age": 22
}
````

### 📥 Sample Response

**GET /api/users**

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

## 🗃️ Database

* **MongoDB Community Edition** used locally
* Connected using Mongoose

### ✅ Integration Code (in `server.js`):

```js
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myapidb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

---

## 🚀 How to Run the Application

### 🧩 Prerequisites

* Node.js & npm
* MongoDB installed and running (`mongod`)
* VS Code or any code editor

### 📥 Installation

```bash
git clone https://github.com/AdityaPrakash-03/my-api-server.git
cd my-api-server
npm install
```

### ▶️ Start MongoDB

```bash
mongod
```

### ▶️ Run the Server

```bash
npm start
```

The server will run at: `http://localhost:3000`

---

## 🧪 How to Test the API

### ✅ Option 1: Thunder Client (VS Code Extension)

1. Install **Thunder Client**
2. Hit endpoints (GET, POST, PUT, DELETE) using JSON bodies

### ✅ Option 2: curl (Command Line)

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Aditya\",\"email\":\"aditya@example.com\",\"age\":22}"
```

---

## 🧪 How to Run Tests

### 🧰 Testing Tools Used

* **Jest**: Test runner & assertion library
* **Supertest**: HTTP assertions for Express routes
* **mongodb-memory-server**: In-memory MongoDB instance for integration tests

### 🔧 Run Tests + View Coverage

```bash
npm test
```

This will generate a coverage report and display it in the terminal.

### 📸 Test Coverage Screenshot

![Test Coverage Screenshot](assests/ss.png)

---

Here's your updated **README.md** with the **AI-Powered API Testing with Keploy** section cleanly added after **📂 Folder Structure** and before **📌 Future Improvements**:

---

```md
## 📂 Folder Structure

```

my-api-server/
│
├── models/
│   └── User.js
├── **tests**/
│   ├── user.unit.test.js
│   ├── user.integration.test.js
│   └── user.api.test.js
├── app.js
├── server.js
├── .env
├── package.json
├── README.md
└── coverage/

````

---

## 🤖 AI-Powered API Testing with Keploy

### ✅ OpenAPI Schema  
OpenAPI 3.0 spec created 

### ✅ AI Test Generation  
Used `keploy record` to capture requests/responses as test cases from curl and ThunderClient runs.

### ✅ Run Tests with Keploy  
```bash
keploy record -c "npm start"
keploy test
````

### ✅ Screenshots (Report)

🔗 **Dashboard**: Keploy Dashboard Link
📸 **Image**: ![Test Coverage Screenshot](assests/ss2.png)

### 🔄 CI/CD Pipeline with GitHub Actions

* ✅ Lint, Build, and Unit Test
* ✅ Keploy Test Integration
* ✅ Auto-deploy frontend via GitHub Pages
  📁 **CI File**: `.github/workflows/keploy-test.yml`
  📸 ![Test Coverage Screenshot](assests/ss3.png)

### 🧪 Chrome Extension Testing Experience

Tested the following public APIs using the Keploy Chrome Extension:

* 🔹 `jsonplaceholder.typicode.com`
* 🔹 `reqres.in`

Captured multiple API calls and verified automated test generation. Keploy smartly extracted curl commands and assertions.
![Test Coverage Screenshot](assests/ss4.png)

### ✍️ Blog Post (Keploy Experience)

📄 **Read My Blog Post**

Wrote about the experience comparing manual testing with AI-based testing using Keploy, Read it at my dev.to post

Topics covered:

* Challenges with writing tests manually
* Experience with `keploy record` and `test`
* Instant test generation from API logs
* Excitement about using AI for regression testing

---

## 📌 Future Improvements

* Add input validation and error handling
* Add a simple frontend (React or plain HTML/JS)
* Deploy to platforms like Render, Railway
* Add Swagger or Postman API docs


## 🧑‍💻 Author

**Aditya Prakash**
Feel free to fork, contribute, and build on this!
If you liked it, do give a star to this repo!
---


