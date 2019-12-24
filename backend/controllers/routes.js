const bluetooth = require('node-bluetooth');

exports.getData = (req, res, next) => {
  device
    .on('finished', console.log.bind(console, 'finished'))
    .on('found', function found(address, name) {
      console.log('found: ' + address + ' with name ' + name);

      device.findSerialPortChannel(address, function(channel) {
        console.log('Found RFCOMM channel for serial port on %s: ', name, channel);

        bluetooth.connect(address, channel, function(err, connection) {
          if(err) return console.log(err);
          connection.write(new Buffer('Hello!', 'utf-8'));
        });
      });

      bluetooth.connect(address, channel, function(err, connection) {
        if(err) return console.log(err);

        connection.on('data', (buffer) => {
          console.log('received message', buffer.toString());
        });

        connection.write(new Buffer('Hello!', 'utf-8'));
      });
    }).inquire();

  res.status(200).json({
    message: 'Here\'s the response!'
  })
}
