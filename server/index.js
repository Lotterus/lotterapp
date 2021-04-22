const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// express after build.

app.use(express.static('build'));
app.listen(port, (err, result)=>{
    console.log('listening on 3000');
})