const express = require('express');
const app = express();

//Path
app.get('/', (req,res)=>
{
    res.send("Hello World");
    res.send("Adding New Line for Assignment 4");
});

//Run Port
app.listen(5508, () => {
    console.log("Listening to Active Port");
});

