import express from "express";

const app = express();


const v1Router = express.Router();


v1Router.get("/",(req,res) =>{
    res.send("hello World");
});

export default v1Router;