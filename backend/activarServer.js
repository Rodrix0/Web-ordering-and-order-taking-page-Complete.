const express = require('express');
const cors = require('cors');
const app = express();

const pedidos = [];

app.use(cors());
app.use(express.json());

// Crear pedido
app.post('/api/orders', (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.status(201).json({ mensaje: 'Pedido recibido', pedido });
});

// Obtener pedidos
app.get('/api/orders', (req, res) => {
  res.json(pedidos);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
