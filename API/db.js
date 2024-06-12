require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
}); 

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Business, Contact, MsgRecieved, MsgSent, SocialMedia, SocialMediaActive, User} = sequelize.models;

//AQUI COMIENZAN LAS RELACIONES ENTRE LAS TABLAS:

//RELACIONES CON BUSINESS
// Relacion 1:N entre business y user
Business.hasMany(User, { foreignKey: 'id_business', timestamps: false });
User.belongsTo(Business, { foreignKey: 'id_business', timestamps: false });
// Relación N:N entre business y socialMedia ***chequear si es necesaria esta relacion***
Business.belongsToMany(SocialMedia, { through: 'business_socialMedia', timestamps: false });
SocialMedia.belongsToMany(Business, { through: 'business_socialMedia', timestamps: false });
// Relación N:N entre business y socialMediaActive
Business.belongsToMany(SocialMediaActive, { through: 'business_socialMediaActive', timestamps: false });
SocialMediaActive.belongsToMany(Business, { through: 'business_socialMediaActive', timestamps: false });
// Relación N:N entre business y Contact
Business.belongsToMany(Contact, { through: 'business_contact', timestamps: false });
Contact.belongsToMany(Business, { through: 'business_contact', timestamps: false });
// Relacion 1:N entre business y MsgRecieved
Business.hasMany(MsgRecieved, { foreignKey: 'id_business', timestamps: false });
MsgRecieved.belongsTo(Business, { foreignKey: 'id_business', timestamps: false });
// Relacion 1:N entre business y MsgSent
Business.hasMany(MsgSent, { foreignKey: 'id_business', timestamps: false });
MsgSent.belongsTo(Business, { foreignKey: 'id_business', timestamps: false });

//RELACIONES CON CONTACT
// Relacion 1:N entre contact y msgReceived
Contact.hasMany(MsgRecieved, { foreignKey: 'id_contact', timestamps: false });
MsgRecieved.belongsTo(Contact, { foreignKey: 'id_contact', timestamps: false });
// Relacion 1:N entre contact y msgSent
Contact.hasMany(MsgSent, { foreignKey: 'id_contact', timestamps: false });
MsgSent.belongsTo(Contact, { foreignKey: 'id_contact', timestamps: false });
// Relación N:N entre contact y user
Contact.belongsToMany(User, { through: 'contact_user', timestamps: false });
User.belongsToMany(Contact, { through: 'contact_user', timestamps: false });

//RELACIONES CON MENSAJES RECIBIDOS
// Relación N:N entre msg recibido y enviado
MsgRecieved.belongsToMany(MsgSent, { through: 'msgRecieved_msgSent', timestamps: false });
MsgSent.belongsToMany(MsgRecieved, { through: 'msgRecieved_msgSent', timestamps: false });
// Relación N:N entre msg recibido y user
MsgRecieved.belongsToMany(User, { through: 'msgRecieved_user', timestamps: false });
User.belongsToMany(MsgRecieved, { through: 'msgRecieved_user', timestamps: false });

//RELACIONES CON USUARIOS
// Relacion 1:N entre msgSent y user
User.hasMany(MsgSent, { foreignKey: 'id_user', timestamps: false });
MsgSent.belongsTo(User, { foreignKey: 'id_user', timestamps: false });

//RELACIONES CON SOCIAL MEDIA
// Relacion 1:N entre socialMedia y contact
SocialMedia.hasMany(Contact, { foreignKey: 'id_socialMedia', timestamps: false });
Contact.belongsTo(SocialMedia, { foreignKey: 'id_socialMedia', timestamps: false });

//RELACIONES CON SOCIAL MEDIA ACTIVA
// Relación N:N entre socialMedia y socialMediaActive ***estoy en duda si debe ser N:N o 1:N***
SocialMedia.belongsToMany(SocialMediaActive, { through: 'socialMedia_socialMediaActive', timestamps: false });
SocialMediaActive.belongsToMany(SocialMedia, { through: 'socialMedia_socialMediaActive', timestamps: false });

module.exports = {
    ...sequelize.models,
    conn: sequelize 
  }
