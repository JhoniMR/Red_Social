const express = require('express');
const app = express();
const morgan = require ('morgan'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

//miderware
app.use(morgan ('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//router
app.use(require('./Routers/url/users'))

app.use(cors());

app.listen(PORT, () => console.log(`server running ${PORT}`));