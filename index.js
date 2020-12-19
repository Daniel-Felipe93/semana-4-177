//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
//const router = require('./routes');
//const path = require('path');


//const bodyParser = require('body-parser');


//const app = express();
//app.use(morgan('dev'));
//app.use(cors());
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')))

//app.use('/api', router);

//app.set('port', process.env.PORT || 3000);



//if (process.env.NODE_ENV !== 'test') {
//    app.listen(app.get('port'), () => {
//        console.log('Server on port ' + app.get('port') + ' on dev');
//    });
//}

const controller = require ("./Controllers/UserController.js");
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index')
const bodyPArser = require('body-parser');
const cors = require('cors');
const models = require('./models');


//instancia de express
const app = express();

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET, POST, DELETE');
    next();
})

//middLeware morgan para detectar peticiones
app.use(cors());
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true}));

//primera ruta
app.use('/api', apiRouter);



app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;