const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', express.static('public'))

app.listen( PORT, () => {
    console.log(`Password Generator running on PORT ${PORT}`)
});