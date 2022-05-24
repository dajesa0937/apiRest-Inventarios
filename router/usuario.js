const { Router } = require('express');

const router = Router();

const Usuario = require('../models/Usuario');

const {validarUsuario} = require('../helpers/validar-usuario');


router.post('/', async function(req, res) {

    try {
        const validaciones4 = validarUsuario(req);
        if(validaciones4.length > 0) {
            return res.status(400).send(validaciones4);
        }

    console.log(req.body);

    const existeUsuario = await Usuario.findOne({ email: req.body.email});
    console.log('Respuesta existe usuario', existeUsuario);
    
    if (existeUsuario) {
        return res.status(400).send('Email ya existe');

    }

    let usuario = new Usuario();
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    usuario.estado = req.body.estado;
    usuario.fechaCreacion = new Date();
    usuario.fechaActualizacion = new Date();

    usuario = await usuario.save();

    res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error')
    }
   
});

router.get('/', async function(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar Usuario');

    }
});

router.put('/:usuarioId', async function(req, res) {

        try {
    
           
            let usuario = await Usuario.findById(req.params.usuarioId);
            if (!usuario) {
                return res.status(400).send('Estado Equipo No existe ');
            }
    
            usuario.nombre = req.body.nombre;
            usuario.email = req.body.email;
            usuario.estado = req.body.estado;
            
            usuario = await usuario.save();
    
    
        } catch (error) {
            console.log(error);
            res.status(500).send('Ocurrio un error al Actualizar Estado Equipo');
    
        }
    });
    
module.exports = router;
