//Genero la conexion entre el server y la DB
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env;

const port = PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(port, () => {
    console.log(`%s listening at port ${port}`, server.name); // eslint-disable-line no-console
    console.log('connected to the database');
  });
}).catch(error => {
  console.log('The connection to the database could not be established');
});
// require("dotenv").config();
// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
// const { PORT } = process.env;
// // const bot = require("./src/telegramBot/telegramBot.js")

// conn.sync({ force: true }).then(async () => {
//   server.listen(PORT, () => {
//     console.log(`%s listening at port ${PORT}`); 
//     console.log('connected to the database');
//   });
// }).catch(error => {
//   console.log('The connection to the database could not be established');
// });
