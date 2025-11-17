const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root Route (Fix for "Cannot GET /")
app.get('/', (req, res) => {
  res.send("Books API is running! Use /books to get the list of books.");
});

// 4. In-memory array to store books
let books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" }
];

// 5. GET /books → return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// 6. POST /books → add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// 7. PUT /books/:id → update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // Update fields
  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// 8. DELETE /books/:id → delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
