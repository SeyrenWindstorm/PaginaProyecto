import { connectToDatabase } from './config/db.js'
import { upload } from './config/multer.js'
import { uploadFile } from './util/uploadFile.js'
import { User } from './models/User.js'
import express from 'express'


connectToDatabase();
const app = express()
const port = 2050

//prettier-ignore
app.post('/create-users', upload.fields([{ name: 'image', maxCount: 1 }]), async (req, res) => {
  const body = req.body
  const image = req.files.image

  if (image && image.length > 0) {
    const { downloadURL } = await uploadFile(image[0]);
    const newUser = await new User({
      firstname: body.firstname,
      lastname: body.lastname,
      image: downloadURL
    }).save();
    
    return res.status(200).json({ newUser }); 
  }
  
  return res.status(400).json({ message: 'Debes enviar una imagen' });
});

app.get('/users', async(req, res) => {

  try {

    const users = await User.find().sort({createdAt: -1})
    res.status(200).json({users})

  } catch (error) {
    res.status(400).json({message: 'Ocurrio un error', error})
  }


})

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`)
})
