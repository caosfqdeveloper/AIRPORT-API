const express =require('express')
const app = express()

//Rutas
//endpoint 1: Obtener todos los pasajeros
app.get('/api/v1/passengers', (req, res) =>
{
    res.send("Este endpoint devolvera todos los pasajeros");
});
//endpoinr 2: Crear un pasajero
app.post('/api/v1/passengers', (req, res) =>
{
    res.json({
       name:"Andres"
    });
});
//endpoint 3: Obtener un pasajero por su id
app.get('/api/v1/passengers/:id', (req, res) =>
{
    res.send("Este endpoint devolvera un pasajero por su id");
});
//endpoint 4: Actualizar un pasajero
app.put('/api/v1/passengers/:id', (req, res) =>
{
    res.send("este endpoint actualizara un pasajero");
});
//endpoint 5: Eliminar un pasajero
app.delete('/api/v1/passengers/:id', (req, res) =>
{
    res.send("este endpoint eliminara un pasajero");
});




app.listen(3000, () =>
{
    console.log('Server is running on port 3000')

})
