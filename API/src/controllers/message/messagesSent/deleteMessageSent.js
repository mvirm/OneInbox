// const {MsgSent} = require('../../../../db');

// const deleteMessageSent = async(id) =>{
//     if(!id) throw new Error('Missing ID')
//     const messageToDelete = await MsgSent.findByPk(id)
    
//     if(!messageToDelete) {
//         throw new Error('Message to delete is not found')
//     } else {
//         messageToDelete.destroy();
//         return(`Message with ID ${id} has deleted`)
//     }   
// }

// module.exports = deleteMessageSent