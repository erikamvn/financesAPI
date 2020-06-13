const express = require("express");
const { writeFile, readFile } = require("fs").promises;
const lancamentosRouter = require("./routes/lancamentos.js");

const app = express();
app.use(express.json());
app.use("/lancamentos", lancamentosRouter);



global.fileName = "lancamentos.json";

app.listen(3000, async () => {

    try{
        const initalJson = {
            nextId:1,
            lancamentos:[]
        };
    
        await writeFile(global.fileName, JSON.stringify(initalJson), {flag: "wx"});
    } catch (err){
    }

    console.log("api started");
});