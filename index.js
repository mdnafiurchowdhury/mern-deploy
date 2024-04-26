import express from 'express';
 import router from './route/route.js';
 import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import path from 'path';

const _dirname = path.resolve();


const app = express();
 app.use(cors());

// // Body parser middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));  // Corrected the usage here


// Use router
 app.use('/', router);
 // this is for the production enviroment
 //  server % npm i path
 app.use(express.static(path.join( _dirname, "./client/build")))
 //now get the main file which is index.html

 app.get('*', function(_, res){
  res.sendFile(path.join( _dirname, "./client/build/index.html"), function(err){
    res.status(500).send(err);
  })
 })

const PORT = process.env.PORT || 8000;

Connection();
// port and callback function

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`));
// WHEN YOU SAVE DATA WHICH WAS SAVED ON BACKEND 
//DefaultData();

// git init inside the server
//git remote add origin https://github.com/mdnafiurchowdhury/mern-deploy.git
// some of the files we ignore .env node modules package-lock.json