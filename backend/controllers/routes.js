const bluetooth = require('node-bluetooth');
const device = new bluetooth.DeviceINQ();
exports.getData = (req, res, next) => {
  device
    .on('finished', console.log.bind(console, 'finished'))
    .on('found', function found(address, name) {
      console.log('found: ' + address + ' with name ' + name);
if(name == "HC-06") {
	
      device.findSerialPortChannel(address, function(channel) {
        console.log('Found RFCOMM channel for serial port on %s: ', name, channel);

        bluetooth.connect(address, channel, function(err, connection) {
          if(err) return console.log(err);

          connection.write(Buffer.from('H', 'utf-8'), (err) => {
		  if(err) console.log(err);
	 });
        });
      });
}	
    }).scan();

  res.status(200).json({
    message: 'Here\'s the response!'
  })
}
