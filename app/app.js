const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

// Obtener usuarios
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Ana" }
    ]);
});

// Crear usuario
app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    res.json({
        mensaje: 'Usuario creado',
        usuario: usuario
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
