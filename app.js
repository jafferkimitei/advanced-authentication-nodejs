const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));
app.use('/api/auth', authRoutes);

module.exports = app;
