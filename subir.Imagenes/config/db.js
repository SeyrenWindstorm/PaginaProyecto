import mongoose from "mongoose";

const urlConnection = 'mongodb://localhost:27017/cargar-multimedia'

export function connectToDatabase(){
    mongoose.connect(urlConnection)
    .then(()=> console.log("Database conected"))
    .catch(error => console.error("Database Error",error))
}
