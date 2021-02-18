var request = require('request')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var personas = "https://reclutamiento-14cf7.firebaseio.com/personas.json";

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    if (validarJson(req.body)) {
        request.post(personas, {
            json: { 
                "nombre:": req.body.nombre || "",
                "apellido": req.body.apellido,
                "dni": parseInt(req.body.dni)}
            }, function (err) {
            res.sendStatus(err ? 500 : 201)
        })
    }
    else {
        res.sendStatus(400)
    }
})

function validarJson(json) {
    if (Object.values(json).length > 3) {
        return false;
    }
    else if (typeof json.apellido != "string" || typeof json.dni === "undefined" || isNaN(parseInt(json.dni)) || parseInt(json.dni) > 9999999999) {
        return false;
    }
    else if (typeof json.nombre != "undefined" && typeof json.nombre != "string") {
        return false;
    }
    else {
        return true;
    }
}

app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Servidor escuchando en el puerto 3000");
});
