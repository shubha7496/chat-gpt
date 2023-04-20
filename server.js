import express from "express";
import bodyParser from "body-parser";

import router from "./controller.js";

const port = 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",router)

app.listen(port,()=>{
    console.log("server is on");
})