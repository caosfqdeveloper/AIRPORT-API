const express =require('express')
const app = express()
app.use(express.json())




//Rutas
//endpoint 1: Obtener todos los pasajeros
app.get('/api/v1/passengers', (req, res) =>
{
    res.send("Este endpoint devolvera todos los pasajeros");
});
//endpoinr 2: Crear un pasajero
app.post('/api/v1/passengers', (req, res) =>{
 const passanger = req.body
 res.json(passanger);
});
//endpoint 3: Obtener un pasajero por su id
app.get('/api/v1/passengers/:id', (req, res) =>
{
    res.json({ 
        id:id
      
    
    })
});
//endpoint 4: Actualizar un pasajero
app.patch('/api/v1/passengers/:id', (req, res) =>
{
  const{id} = req.params;
  res.json({ 
    message:"este empoint actualizara el estado del pasajero",
    id

  })
});
//endpoint 5: Eliminar un pasajero
app.delete('/api/v1/passengers/:id', (req, res) =>
{
  const{id} = req.params;
  res.json({ 
    message:"este empoint eliminarara el pasajero",
    id

  })
});




app.listen(3000, () =>
{
    console.log('Server is running on port 3000')

})
