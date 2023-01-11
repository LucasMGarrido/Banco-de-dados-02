const startDB = require('./mongoose');

class Loaders {
    start(){
        startDB();
    }
}

module.exports = new Loaders();