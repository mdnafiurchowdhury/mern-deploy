import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// go to connect => application => node.js 2.2.12 later 



const Connection = async() =>{
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.p6vqjdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  try{
    await mongoose.connect(URL, {useUnifiedTopology: true});
    console.log('database connected Nawfil 😅');
  }
  catch(error){
    console.log('error while connecting to MongoDB', error.message);
  }
}

export default Connection;
