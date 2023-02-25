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
    const html = 
    '<h1 style = "color:aqua;background-color:rgb(42, 42, 42);text-align:center;padding:50vh 0;font-size:3rem;font-family: Arial, sans-serif;">"The result is logged in your console"</h1>'


    
    res.send(html);
})

app.listen(3000)