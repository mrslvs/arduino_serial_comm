const { SerialPort, ReadlineParser } = require("serialport");

const port = new SerialPort({
  // path: "COM3",
  path: "/dev/ttyACM0",
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
});

const parser = new ReadlineParser();

port.pipe(parser);
parser.on("data", (data) => {
  console.log(data);

  if (data % 2 === 0) {
    console.log("got even number, go up");
    port.write(2);
  } else {
    console.log("got odd number, go down");
    port.write(1);
  }

  //   if (data == 15) {
  //     port.write("\u0080123456\r");
  //   }
});

// port.on("open", () => {
//   console.log("port has opened");

//   setTimeout(() => {
//     console.log("Delayed for 1 second.");

//     port.write("\u0080123456\r", (err) => {
//       if (err) {
//         return console.log("Error on write: ", err.message);
//       }
//       console.log("message written");
//     });
//   }, 1000);
// });

// SerialPort.list().then((ports) => {
//   ports.forEach(function (port) {
//     console.log(port.path);
//   });
// });
