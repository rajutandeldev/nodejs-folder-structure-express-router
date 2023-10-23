// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const taskRoutes = require('./src/api/routes/taskRoutes');

app.use(express.json());

// Connect to the database (from src/config/database.js)
mongoose.connect('mongodb://localhost/myappdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Load routes
app.use('/api', taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
