const app = require('./app');
const Loaders = require('./loaders/index');

Loaders.start();

app.listen(3000, () => console.log('Server em funcionamento - porta 3000'));