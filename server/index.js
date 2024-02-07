/*const express = require("express");
const app = express();
const pg = require("pg");

const db = pg.Pool({
    host:"localhost",
    user:"postgres",
    password:"sistema",
    database:"sistema"
});

app.use(express.json());
app.post("/create",(req,res)=>{
    const name = req.body.name;
    const dui = req.body.dui;
    const licencia = req.body.licencia;
    const residencia = req.body.residencia;
    const email = req.body.email;
    const address = req.body.address;
    const addresscomplement = req.body.addresscomplement;
    const phone = req.body.phone;

    db.query('INSERT INTO cliente(name,dui,licencia,residencia, email, address, addresscomplement, phone) VALUES(?,?,?,?,?,?,?,?)',[name,dui,licencia,residencia, email, address, addresscomplement, phone],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Empleado registrado con exito");
        }
    });
})
app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})*/

const express = require("express");
const app = express();
const pg = require("pg");
const cors = require("cors");

app.use(cors());

const db = new pg.Pool({
    host: "localhost",
    user: "postgres",
    password: "sistema",
    database: "sistema"
});

app.use(express.json());

app.post("/create", (req, res) => {
    const { name, dui, licencia, residencia, email, address, addresscomplement, phone } = req.body;

    db.query('INSERT INTO cliente(name,dui,licencia,residencia, email, address, addresscomplement, phone) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        [ name, dui, licencia, residencia, email, address, addresscomplement, phone],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Empleado registrado con exito");
            }
        });
    })

   app.get("/cliente", (req, res) => {
        
    
        db.query('select * from cliente',
           
            (err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send(result);
                }
            });
        })

        app.delete("/delete/:id", (req, res) => {
            const id = req.params.id;
        
            db.query('DELETE FROM cliente WHERE id = $1',
                [id],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("Error al eliminar el empleado");
                    } else {
                        res.send("Empleado eliminado con éxito");
                    }
                });
        });
        
        app.put("/update/:id", (req, res) => {
            const id = req.params.id;
            const { name, dui, licencia, residencia, email, address, addresscomplement, phone } = req.body;
        
            db.query('UPDATE cliente SET name=$1, dui=$2, licencia=$3, residencia=$4, email=$5, address=$6, addresscomplement=$7, phone=$8 WHERE id=$9',
                [name, dui, licencia, residencia, email, address, addresscomplement, phone, id],
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("Error al actualizar el empleado");
                    } else {
                        res.send("Empleado actualizado con éxito");
                    }
                });
        });

        app.get("/employee/:id", (req, res) => {
            const id = req.params.id;
        
            db.query('SELECT * FROM cliente WHERE id = $1', [id], (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Error al obtener los datos del empleado");
                } else {
                    res.send(result.rows[0]); // Devuelve el primer resultado (debería ser único, ya que se está buscando por ID)
                }
            });
        });
        
    app.listen(3001,()=>{
        console.log("Corriendo en el puerto 3001")
    })
