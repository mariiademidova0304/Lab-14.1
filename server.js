require('dotenv').config();
const express = require('express');
const app = express();
const userRotes = require('./routes/userRoutes');
const connectToDB = require('./config/connection');

app.use(express.json());

app.use('/', userRotes);

connectToDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

