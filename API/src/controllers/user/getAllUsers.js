const { User, Business, Contact, MsgSent } = require('../../db');

const getAllUsers = async () => {
  const users = await User.findAll(
    { order: [
      ['name'],
  ],
include:[
    {
        model: Business,
        attributes: ['id', 'name']
    },
    {
        model: MsgSent,
        attributes: ['id', 'message', 'contactId'],
        include: {
            model: Contact,
            attribute: ['id', 'name', 'email', 'phone']
        }
    }
] 
}
  );
  if(!users)  throw new Error (`Users not found`);
  return users;
};

module.exports = getAllUsers;