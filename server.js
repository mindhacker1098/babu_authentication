const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();


mongoose.connect('mongodb+srv://mindhacker1098:spn1098@cluster0.t66x9u5.mongodb.net/nodejs_login_system?retryWrites=true', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/protectedRoute'));


app.use('/api/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
