const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // Підключення до бази даних
require("dotenv").config(); // Завантаження змінних середовища

connectDB(); // Підключення до MongoDB

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MongoDB працює! 🎉");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
