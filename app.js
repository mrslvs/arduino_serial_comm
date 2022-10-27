const { SerialPort, ReadlineParser } = require("serialport");

const port = new SerialPort({
    path: "COM3",
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: "none",
});

const parser = new ReadlineParser();

port.pipe(parser);

port.on("open", () => {
    console.log("port has opened");

    let x = "x";
    console.log("write " + x + " to serial port");

    port.write("x", function (err, results) {
        console.log("err while writing to the port: " + err);
        console.log("results: " + results);
    });
});

parser.on("data", data => console.log(data));

// SerialPort.list().then(ports => {
//     ports.forEach(function (port) {
//         console.log(port.path);
//     });
// });
