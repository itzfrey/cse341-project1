const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); // Add this for JSON body parsing
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
        process.exit(1); // Stop the app if database fails
    } else {
        app.listen(port, () => {
            console.log(`✅ Server running on port ${port}`);
            console.log('✅ Database connected successfully!');
        });
    }
});