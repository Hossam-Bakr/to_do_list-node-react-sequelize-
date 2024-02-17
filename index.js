const express = require('express');
const apiRoutes = require('./routes');
const { connectToDb } = require('./db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 

app.use(express.json());
app.use('/api/v1', apiRoutes);

// Not found middleware
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500; 
    const errorMessage = err.message || "Internal Server Error";
    res.status(statusCode).json({ message: errorMessage });
});

app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
});
