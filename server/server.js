const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// Creates a database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

//cors configuration
app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  })
);

app.use(cookieParser());
app.use(express.json());

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
