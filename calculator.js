const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/calculator.html")

})

app.post("/", (req, res)=> {
    const var1 = parseInt(req.body.num1, 10);
    const var2 = parseInt(req.body.num2, 10);
    const var3 = var1 + var2;
    console.log(var3);
    
    res.send("The result is "+var3);
})

app.listen(3000)