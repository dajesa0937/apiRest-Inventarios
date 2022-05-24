const validarMarca1 = (req) => {
    const validaciones2 = [];
     
    if (!req.body.nombre) {
        validaciones2.push('Nombre es requerido');

    }

    if (!req.body.estado) {
        validaciones2.push('Estado es requerido');
        
    }
        return validaciones2;
   
}
module.exports = {
    validarMarca1,
}