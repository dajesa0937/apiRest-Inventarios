const { Router } = require('express');

const router = Router();

const EstadoEquipo = require('../models/EstadoEquipo');

const {validarEstadoEquipo} = require('../helpers/validar-estadoEquipo');

router.get('/', async function(req, res){
    try {
        const EstadoEquipos = await EstadoEquipo.find();
        res.send(EstadoEquipos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar Tipo de Equipos');

    }
});


    router.post('/', async function(req, res){
        try {
            
            
        const validaciones = validarEstadoEquipo(req);
        if(validaciones.length > 0) {
            return res.status(400).send(validaciones);
        }
            console.log(req.body);
        
            const existeEstadoEquipo = await EstadoEquipo.findOne({ nombre: req.body.nombre});
            console.log('Respuesta existe Estado Equipo', existeEstadoEquipo);
            
            if (existeEstadoEquipo) {
                return res.status(400).send('Estado equipo Equipo ya existe');
        
            }
        
            let estadoEquipo = new EstadoEquipo();
            estadoEquipo.nombre = req.body.nombre;
            estadoEquipo.estado = req.body.estado;
            estadoEquipo.fechaCreacion = new Date();
            estadoEquipo.fechaActualizacion = new Date();
        
            estadoEquipo = await estadoEquipo.save();
        
            res.send(estadoEquipo);
        
            } catch (error) {
                console.log(error);
                res.status(500).send('Ocurrio un error')
            }
});

router.put('/:estadoEquipoId', async function(req, res){
    try {

        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if (!estadoEquipo) {
            return res.status(400).send('Estado Equipo No existe ');
        }

        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        
        estadoEquipo = await estadoEquipo.save();


    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al Actualizar Estado Equipo');

    }
});


module.exports = router;