const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);
const PORT = 3000; // PORT number has to be get from env file 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});