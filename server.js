const express = require('express');
const app = express();
const Joi = require('joi'); // For data validation

// Sample data array
let dataArray = [
  {
    title: "Product A",
    description: "A high-quality product with advanced features.",
    price: 199.99,
    category: "Electronics",
    stock: 25,
    specifications: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Book B",
    description: "An exciting novel that will keep you on the edge of your seat.",
    price: 12.99,
    category: "Books",
    author: "John Doe",
    pages: 320,
  },
  {
    title: "Recipe C",
    description: "A delicious recipe for a family dinner.",
    ingredients: ["Chicken", "Potatoes", "Broccoli", "Spices"],
    servingSize: 4,
  },
  {
    title: "Movie D",
    description: "A thrilling action movie with a star-studded cast.",
    genre: "Action",
    director: "Jane Smith",
    duration: 120,
  },
  {
    title: "Vacation E",
    description: "A fantastic getaway to a tropical paradise.",
    destination: "Hawaii",
    duration: "7 days",
    price: 2499.99,
  },
  {
    title: "Game F",
    description: "A fun and challenging video game for all ages.",
    genre: "Adventure",
    platform: "PlayStation 5",
    players: "1-4",
  },
];

app.use(express.static('public')); // Serve static files

// Route to get the data
app.get('/data', (req, res) => {
  res.json(dataArray);
});

// Route to add data
app.post('/add', (req, res) => {
  // Handle data addition here
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});