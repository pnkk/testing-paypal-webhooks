const express = require('express');
const bodyParser = require('body-parser');

const PORT = 9876;

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app
  .get('/', (req, res) => {
    res.send("HELLO WORLD get received \n");
  })
  .post('/', function (req, res) {
    console.log('!!! request body');
    console.log(JSON.stringify(req.body, null, 2));

    console.log('HEADERS:');
    console.log('content-type', req.header('content-type'));

    console.log('PAYPAL-TRANSMISSION-SIG', req.header('PAYPAL-TRANSMISSION-SIG'));
    console.log('PAYPAL-AUTH-ALGO', req.header('PAYPAL-AUTH-ALGO'));
    console.log('PAYPAL-CERT-URL', req.header('PAYPAL-CERT-URL'));

    res.send("POST request to the homepage \n");
  })
  .listen(process.env.PORT || PORT, (error) => {
    if (error) {
      console.log('!!! ERROR: ', error);
      return error;
    };
    console.log(`Express server listening on port ${process.env.PORT || PORT}`);
  });
