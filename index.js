import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    var number = new Date();
    var option = "weekdaay";
    var adviceText ="You should probably work!";
    if(number==0 || number==6){
     option = "weekend";
     adviceText="Chill out for now.";
    }
    res.render("index.ejs",{
        dayType:option,
        advice: adviceText });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });