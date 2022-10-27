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
  if (data == 1234) {
    console.log(
      "got handshake, arduino is waiting for my confirmation for 3 seconds"
    );

    port.write("\u0080a\r");
  } else if (data == 1236) {
    console.log("ending communication");
  } else {
    console.log("arduino received server_shake:");
    console.log(data);
  }

  //   else {
  //     console.log("got something else:");
  //     console.log(data);
  //   }

  //   if (data > 100) console.log(data);

  //   if (data % 2 === 0) {
  //     console.log("got even number, go up");
  //     port.write("2");
  //   } else {
  //     console.log("got odd number, go down");
  //     port.write("1");
  //   }

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
