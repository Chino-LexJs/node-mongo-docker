const express = require('express');

const app = express();

require('./database');

app.use(require('./routes/index_routes'));

app.listen(3000);
console.log('Server on Port:', 3000);