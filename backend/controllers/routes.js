const bluetooth = require('node-bluetooth');
const device = new bluetooth.DeviceINQ();

var connessione, nome, canale, indirizzo;
var risposta = "";

device
.on('finished', console.log.bind(console, 'finished'))
.on('found', function found(address, name) {
  console.log('found: ' + address + ' with name ' + name);
  if(name == "HC-06") {
    device.findSerialPortChannel(address, function(channel) {
      console.log('Found RFCOMM channel for serial port on %s: ', name, channel);
      indirizzo = address;
      canale = channel;
    });
  }
}).scan();

exports.lightOn = (req, res, next) => {
  bluetooth.connect(indirizzo, canale, function(err, connection) {
    if(err) return console.log(err);

    connection.write(Buffer.from('H', 'utf-8'), (err) => {
      if(err) console.log(err);
    });
  
    connection.on('data', (buffer) => {
      risposta = buffer.toString();
      connection.close();
      res.status(200).json({
        message: 'Here\'s the response!',
        response: risposta
      });
    });
  });
}

exports.lightOff = (req, res, next) => {
  bluetooth.connect(indirizzo, canale, function(err, connection) {
    if(err) return console.log(err);

    connection.write(Buffer.from('L', 'utf-8'), (err) => {
      if(err) console.log(err);
    });
  
    connection.on('data', (buffer) => {
      risposta = buffer.toString();
      connection.close();
      res.status(200).json({
        message: 'Here\'s the response!',
        response: risposta
      });
    });
  });
}
