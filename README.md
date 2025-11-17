# 📘 Web Development Internship – Task 3  
## REST API to Manage a List of Books (Node.js + Express)

This project is a simple **REST API** built using **Node.js** and **Express** to manage a list of books.  
The data is stored **in-memory** (no database).  
The API supports full **CRUD operations**: Create, Read, Update, Delete.

---

## 🚀 Features
- Basic Express server on port **3000**
- CRUD endpoints:
  - `GET /books` → Get all books  
  - `POST /books` → Add a new book  
  - `PUT /books/:id` → Update a book  
  - `DELETE /books/:id` → Delete a book  
- JSON request & response handling  
- Easy testing using **Postman**

---

## 📂 Project Setup

### 1️⃣ Initialize Project  
```bash
npm init -y

2️⃣ Install Express
npm install express

3️⃣ Run the Server
npm start

Server starts at:
http://localhost:3000

Project Structure
/books-api
│── server.js
│── package.json
└── README.md
