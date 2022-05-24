const validarUsuario = (req) => {
    const validaciones4 = [];
     
    if (!req.body.nombre) {
        validaciones4.push('Nombre es requerido');

    }

    if (!req.body.email) {
        validaciones4.push('Email es requerido');
        
    }

    
    if (!req.body.estado) {
        validaciones4.push('Estado es requerido');
        
    }
        return validaciones4;
   
}
module.exports = {
    validarUsuario,
}