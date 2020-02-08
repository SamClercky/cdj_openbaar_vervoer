import EventManager from "./event_manager";

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Lezen van poort data
port.on("open", () => {
  console.log('Serial port open');
});

parser.on('data', (data: string) =>{
  console.log('[*] Got word from arduino:', data);
  EventManager.fireEvent({
    msg: data
  });
});
