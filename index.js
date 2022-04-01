const express = require('express')
const app = express()

//Rutas
app.get('/hola',(request , response)=>{
    response.send('Hello f****g wolrd!!!')
})

app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
});

app.get('/getName',(request , response)=>{
    response.json({
        nombre: "Antonio Salinas",
        direccion: "Mi Casa 3344",
        ciudad: "Valparaíso"
    })
})