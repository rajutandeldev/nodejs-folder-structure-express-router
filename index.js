// app.js
const express = require('express');
const app = express();
const taskRoutes = require('./api/routes/taskRoutes');
const database = require('./config/database')
app.use(express.json());

database.databaseConnect();

// Load routes
app.use('/api', taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
