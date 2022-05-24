const validartipoEquipo = (req) => {
    const validaciones3 = [];
     
    if (!req.body.nombre) {
        validaciones3.push('Nombre es requerido');

    }

    if (!req.body.estado) {
        validaciones3.push('Estado es requerido');
        
    }
        return validaciones3;
   
}
module.exports = {
    validartipoEquipo,
}