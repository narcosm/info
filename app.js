const express = require('express');
const app = express();
const moment = require('moment');
let os = require('os');


let respuesta = () => {
    let fecha = moment().format('MMMM Do YYYY, h:mm:ss a');
    let texto = `Nombre host: ${os.hostname()}, Os: ${os.type()}, fecha: ${fecha}`;
    return texto;
}
app.get('/', function (req, res) {
    let mensaje = respuesta();
    res.send(mensaje);
});

app.listen(3001, () => {
    console.log('Sevidor arribaOK');
});
