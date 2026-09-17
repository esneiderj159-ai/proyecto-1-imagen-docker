const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Datos en memoria
let productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15 },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50 },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30 }
];
let nextId = 4;

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// LISTAR todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// OBTENER un producto por id
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(producto);
});

// CREAR producto
app.post('/productos', (req, res) => {
  const { nombre, precio, stock } = req.body;
  if (!nombre || precio === undefined) {
    return res.status(400).json({ error: 'nombre y precio son obligatorios' });
  }
  const nuevo = {
    id: nextId++,
    nombre,
    precio: Number(precio),
    stock: stock !== undefined ? Number(stock) : 0
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

// ACTUALIZAR producto
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  const { nombre, precio, stock } = req.body;
  if (nombre !== undefined) productos[index].nombre = nombre;
  if (precio !== undefined) productos[index].precio = Number(precio);
  if (stock !== undefined) productos[index].stock = Number(stock);
  res.json(productos[index]);
});

// ELIMINAR producto
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  const eliminado = productos.splice(index, 1)[0];
  res.json({ message: 'Producto eliminado', producto: eliminado });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API de productos escuchando en puerto ${PORT}`);
});
