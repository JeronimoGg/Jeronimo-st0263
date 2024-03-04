const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/Login', (req, res) => {
    const peerInfo = req.body;
    axios.post('http://localhost:5000/Login')
    res.send('Peer registrado con éxito');
    console.log('El peer ha sido registrado');
    console.log(peerInfo);
});

app.post('/Logout', (req, res) => {
    axios.post('http://localhost:5000/Logout')
    res.send('Peer eliminado con éxito');
    console.log('El peer ha sido elimnado');
});

app.post('/indexar', (req, res) => {
    const peerInfo = req.body;
    axios.post('http://localhost:5000/indexar')
    res.send('Archivos indexados con exito');
    console.log(`Archivos del peer han sido indexados`);
    console.log(peerInfo);
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});