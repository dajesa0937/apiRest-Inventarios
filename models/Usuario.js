const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    estado: {
        type: String,
        required: true,
        enum: [
            'Activo',
            'Inactivo'
        ]
    },
   
    fechaCreacion: {
        type: Date,
        required: true,
    },

    fechaActualizacion: {
        type: Date,
        required: true,
    }
         
});

module.exports = model('Usuario', UsuariosSchema);
