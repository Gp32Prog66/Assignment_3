const express = require('express');
const app = express();
//Added line for pull request homework here=
app.get('/',(req,res)=> {
    res.send("Hello, This is my module 3 homework assignment. This is my pull request test")
});



app.listen(3000, () => {
    console.log('listening to the active port')
});