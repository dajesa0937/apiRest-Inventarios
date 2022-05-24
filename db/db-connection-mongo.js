const mongoose = require('mongoose');

const getConnection = async () => {
    try{
        const url = 'mongodb://user_bd:oGdzhigWLADocpBd@cluster0-shard-00-00.adneu.mongodb.net:27017,cluster0-shard-00-01.adneu.mongodb.net:27017,cluster0-shard-00-02.adneu.mongodb.net:27017/inventarios-iudigital?ssl=true&replicaSet=atlas-ra43q8-shard-0&authSource=admin&retryWrites=true&w=majority';
    
        await mongoose.connect(url);
    
        console.log('conexion existosa');
    } catch (error){
        console.log(error)
    }   
}

module.exports = {
    getConnection,
}