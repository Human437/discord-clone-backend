import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 8002;


app.get('/', (req,res) => res.status(200).send("Hello World!"))

app.listen(port, ()=>console.log(`Listening on localhost:${port}`))