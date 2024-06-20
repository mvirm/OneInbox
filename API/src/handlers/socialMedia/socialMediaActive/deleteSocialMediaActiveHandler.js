// const deleteSocialMedia= require('../../../controllers/socialMedia/SocialMediaActive/deleteSocialMediaActive');

// const deleteSocialMediaHandler= async(req,res) =>{
//     const{id} = req.params
//     if(!id) throw new Error('Social Media not found')
//     try {
//         await deleteSocialMedia(id)
//         return res.status(200).send('The Social Media has been deleted')
//     } catch (error) {
//         return res.status(500).json({error:error.message})
//     }
// };

// module.exports = deleteSocialMediaHandler