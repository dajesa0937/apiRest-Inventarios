const { Router } = require('express');

const Marca = require('../models/Marca');

const {validarMarca1} = require('../helpers/validar-marca');

const router = Router();


router.get('/', async function(req, res){
    try {
        const marcas = await Marca.find();
        res.send(marcas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar Marca');

    }
});

router.post('/', async function(req, res){
    try {
        const validaciones2 = validarMarca1(req);
        if(validaciones2.length > 0) {
            return res.status(400).send(validaciones2);
        }
        console.log(req.body);
    
        const existeMarca = await Marca.findOne({ nombre: req.body.nombre});
        console.log('Respuesta existe Marca', existeMarca);
        
        if (existeMarca) {
            return res.status(400).send('Marca ya existe');
    
        }
    
        let marca = new Marca();
        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();
    
        marca = await marca.save();
    
        res.send(marca);
    
        } catch (error) {
            console.log(error);
            res.status(500).send('Ocurrio un error')
        }
       
});

router.put('/:marcaId', async function(req, res){
    try {

       
        let marca = await Marca.findById(req.params.marcaId);
        if (!marca) {
            return res.status(400).send('Estado Equipo No existe ');
        }

        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        
        marca = await estadoEquipo.save();


    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al Actualizar Estado Equipo');

    }
});


module.exports = router;