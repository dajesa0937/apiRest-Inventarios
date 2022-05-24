const express = require('express');

const { getConnection } = require('./db/db-connection-mongo');

const app = express();
const port = 3000;

getConnection();

//Parseo Json
app.use(express.json());


app.use('/usuario', require('./router/usuario'));

app.use('/estado-equipo', require('./router/estadoEquipo'));

app.use('/Marca', require('./router/marca'));

app.use('/tipo-equipo', require('./router/tipoEquipo'));

app.use('/inventario', require('./router/inventario'));


app.listen(port, () => {
    console.log(`example ${port}`)
});

