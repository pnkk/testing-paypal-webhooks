const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 9876;

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app
  .get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/button.html'));
  })
  .post('/', function (req, res) {
    console.log('METHOD:', console.log(req.method));
    console.log("\nHEADERS:");
    console.log('content-type', req.header('content-type'));
    console.log('PAYPAL-TRANSMISSION-SIG', req.header('PAYPAL-TRANSMISSION-SIG'));
    console.log('PAYPAL-AUTH-ALGO', req.header('PAYPAL-AUTH-ALGO'));
    console.log('PAYPAL-CERT-URL', req.header('PAYPAL-CERT-URL'));
    console.log('PAYPAL-TRANSMISSION-ID', req.header('PAYPAL-TRANSMISSION-ID'));
    console.log('PAYPAL-TRANSMISSION-TIME', req.header('PAYPAL-TRANSMISSION-TIME'));

    console.log("\nBODY:");
    console.log(JSON.stringify(req.body, null, 2));

    res.send("POST request to the homepage \n");
  })
  .listen(process.env.PORT || PORT, (error) => {
    if (error) {
      console.log('!!! ERROR: ', error);
      throw error;
    };
    console.log(`Express server listening on port ${process.env.PORT || PORT}`);
  });
