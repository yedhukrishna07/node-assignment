import express from "express";
import serverConfig from "./config/serverConfig.js";
import dbConnect from "./config/dbConfig.js";
import v1Router from "./routes/v1/v1Routes.js";
const app = express();

app.use("/api",v1Router);

app.get("/",(req,res) =>{
    res.send("Hello world!");

});

app.listen(serverConfig.port,()=>{
    console.log(`Example app listening on port ${serverConfig.port}`);
    dbConnect();
    console.log("Db connected")
});