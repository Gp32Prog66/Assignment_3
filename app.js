const express = require('express');
const app = express();

//Path
app.get('/', (req,res)=>
{
    res.send("Hello World");
});

//Run Port
app.listen(5508, () => {
    console.log("Listening to Active Port");
});

