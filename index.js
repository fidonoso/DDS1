const express = require('express')
const app = express()
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
});

//Rutas
app.get('/hola',(request , response)=>{
    response.send(`<h1> quien eres? </h1>
                    <form method='GET' action='/responder'>
                        <label>Escribe tu nombre</label>
                        <input type='text' name='nombre' ></input>
                        <button type='submit' >enviar</button>
                    </form>`
                        
                        )
});

 


app.post('/getName',(request , response)=>{
    response.json({
        nombre: "Antonio Salinas",
        direccion: "Mi Casa 3344",
        ciudad: "Valparaíso"
    })
})