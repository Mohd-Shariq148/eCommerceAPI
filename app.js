require('dotenv').config();
const express = require('express');
const connectDB = require('./models/db');
const app = express();
const PORT = process.env.PORT || 4000;
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/customers', customerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
