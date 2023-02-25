const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));;

app.get("/", (req, res) => {
    console.log("Server Started at port 3000...");
    res.sendFile(__dirname + "/BMI.html");
})
app.post("/", (req, res) => {
    const w =parseFloat( req.body.weight, 10);
    const h =parseFloat( req.body.height, 10);
    const bmi = w/(h*h);
    console.log(bmi);
    if (bmi < 18.5){
        console.log("You're Underweight");
    }
    else if (bmi >= 18.5 && bmi < 25){
        console.log("You're Healthy by weight");
    }
    else if (bmi >= 25 && bmi < 30){
        console.log("You're Overweight");
    }
    else if (bmi >= 30){
        console.log("You are obese");
    }
    const html = `<h1  style = "color:aqua;background-color:rgb(42, 42, 42);text-align:center;padding:50vh 0;font-size:3rem;font-family: Arial, sans-serif;">Your BMI is Logged into Console</h1>`;

    res.send(html)
})
app.listen(3000);