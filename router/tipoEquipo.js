const { Router } = require('express');

const router = Router();

const TipoEquipo = require('../models/TipoEquipo');

const {validartipoEquipo} = require('../helpers/validar-tipoEquipo');

router.get('/', async function(req, res){
    try {
        const TipoEquipos = await TipoEquipo.find();
        res.send(TipoEquipos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar Tipo de Equipos');

    }
});

router.post('/', async function(req, res){
    try {

        const validaciones3 = validartipoEquipo(req);
        if(validaciones3.length > 0) {
            return res.status(400).send(validaciones3);
        }
        console.log(req.body);
    
        const existeTipoEquipo = await TipoEquipo.findOne({ nombre: req.body.nombre});
        console.log('Respuesta existe Tipo Equipo', existeTipoEquipo);
        
        if (existeTipoEquipo) {
            return res.status(400).send('Tipo Equipo ya existe');
    
        }
    
        let tipoEquipo = new TipoEquipo();
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date();
    
        tipoEquipo = await tipoEquipo.save();
    
        res.send(tipoEquipo);
    
        } catch (error) {
            console.log(error);
            res.status(500).send('Ocurrio un error')
        }
    
});

router.put('/:tipoEquipoId', async function(req, res){

  try {  

    let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);
    if (!tipoEquipo) {
        return res.status(400).send('Estado Equipo No existe ');
    }

    tipoEquipo.nombre = req.body.nombre;
    tipoEquipo.estado = req.body.estado;
    
    tipoEquipo = await tipoEquipo.save();


} catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error al Actualizar Estado Equipo');

}
});


module.exports = router;