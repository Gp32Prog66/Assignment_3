const express = require('express');
const app = express();

//Path
app.get('/', (req,res)=>
{
    res.send("Hello World");
    res.send("Testing this attempt again"); //Do you see this?
});

//Run Port
app.listen(5508, () => {
    console.log("Listening to Active Port");
});

