import  express from "express";
import axios from 'axios';
import http from 'http';
import runPromptGPT from "./runPromptGPT.js";

const router = express.Router()


router.post("/abc",(req,res)=>{
  
    // console.log(req.body);
    runPromptGPT(req.body?.text, res);
  // res.send(req.body)
}) 




export default router;
