const validarEstadoEquipo = (req) => {
    const validaciones1 = [];
     
    if (!req.body.nombre) {
        validaciones1.push('Nombre es requerido');

    }

    if (!req.body.estado) {
        validaciones1.push('Estado es requerido');
        
    }
        return validaciones1;
   
}
module.exports = {
    validarEstadoEquipo,
}