const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

window.alert("hola mundo")
const db = mysql.createConnection({
    host:'189.197.187.187',
    user:'alumnos',
    password:'Alumnos1010$',
    database:'controlescolar',
});

app.get('/',(req, res)=>{
    res.send("Hola Mundo 2");
});
//opcion 1 registrar
app.post('/profesor/registrar',(req,res)=>{
    const { id, nombre, correo, direccion } = req.body;
    
    const sql = "INSERT INTO profesores VALUES(?,?,?,?)";
    db.query(sql, [id, nombre, correo, direccion], (err, result)=>{
        if(err) {
            res.status(300).send(err);
        }else {
            res.status(200).send(result)
        }
    });

});
//opcion 2 modificar
app.put('/profesor/modificar',(req,res)=>{
    const { id, nombre, correo, direccion } = req.body;
    
    const sql = "UDATE profesores SET nombre=?,correo=?,direccion=? WHERE id=?";
    db.query(sql, [id, nombre, correo, direccion], (err, result)=>{
        if(err) {
            res.status(300).send(err);
        }else {
            res.status(200).send(result)
        }
    });

});
//opcion 3 eliminar
app.delete("/profesor/eliminar:id", (req, res)=>{
    const identificador = req.params.id;
    const sql = 'DELETE * FROM profesores WHERE id = ?';
    db.query(sql, [identificador], (err, result)=>{
        if(err) {
            res.status(300).send(err);
        }else {
            res.status(200).send(result)
        }
    });
});
//opcion 4 consultar
app.get("/profesores", (req, res)=>{
    const sql = 'SELECT * FROM profesores';
    db.query(sql, (err, result)=>{
        if(err) {
            res.status(300).send(err);
        }else {
            res.status(200).send(result)
        }
    });
});
//opcion 5 reportar
app.get("/profesor/:id", (req, res)=>{
    const identificador = req.params.id;
    const sql = 'SELECT * FROM profesores WHERE id = ?';
    db.query(sql, [identificador], (err, result)=>{
        if(err) {
            res.status(300).send(err);
        }else {
            res.status(200).send(result)
        }
    });
});


app.all("*", (req, res)=>{
    const respuesta ={
        "codigo":300,
        "mensaje":"La ruta no existe"
    }
    res.send(respuesta)
});

app.listen(port, ()=>{
    console.log("Escuchando en el puerto 5000");
});

/*/cd C:\Users\david\OneDrive\Documentos\Note.js\Maestros
nodemon index.js para prender servidor
*/