const {Router} = require('express');
const {businessRoute} = require('./businessRoutes');
const {userRoute} = require('./userRoutes');
const {contactRoute} = require('./contactRoutes');
const {socialMediaRoute} = require('./socialMedia/socialMediaRoutes');
const {allMessagesRoute} = require('./messages/allMessagesRoutes');

const router = Router();

router.use('/business', businessRoute); //ok => llega al handler => llega al controller
router.use('/user', userRoute); //ok => llega al handler => llega al controller
router.use('/contact', contactRoute); //ok => llega al handler => llega al controller
router.use('/socialMedia', socialMediaRoute); //ok =>llega al handler => llega al controller
router.use('/message', allMessagesRoute); //ok => llega al handler => llega al controller

module.exports = router;