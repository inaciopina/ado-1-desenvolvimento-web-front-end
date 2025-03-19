require('dotenv').config();
const express = require('express');
const cors = require('cors');
const turmaRoutes = require('./routes/turmaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', // Permite requisições do frontend
  credentials: true,
}));
app.use(express.json());

app.use('/api', turmaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});