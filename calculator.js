const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/calculator.html")

})

app.post("/", (req, res)=> {
    const var1 = parseFloat(req.body.num1, 10);
    const var2 = parseFloat(req.body.num2, 10);
    const var3 = var1 + var2;
    console.log("Result, \n" + var1 + " + " + var2 + " = " + var3);
    const result = '<h2 style="color:aqua;text-align:center;padding:4.5vh 0;font-size:3rem;">Result = ' + var3 + '</h2>';
    const cons_l = 
    '<style>html{;text-align:center;font-family: Arial;background-color:rgb(32, 32, 32);}</style><h1 style ="color:lightgreen" >"The result is logged into your console aswell"</h1>'
    const button =
    '<form action="/" method="get"><button style=";background-color: rgb(255, 223, 176);border-radius: 4px;height:2.5rem;display:block; margin: 0 auto 50vh;" type="submit">Calculate More</button></form>';


    
    res.send(result +  button + cons_l);
})

app.listen(3000);