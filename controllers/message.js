function helloWorld(req, res) {
    res.status(200).send({message: "¡Hola! - Bautista Barboza"}); 
}

module.exports = {
    helloWorld
}; 