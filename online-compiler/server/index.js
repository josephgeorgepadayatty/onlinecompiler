
const express = require("express");
const cors = require("cors");
const Axios = require("axios");
var beautify = require("beautify")
const app = express();
const PORT = 8000;

 
app.use(cors());
app.use(express.json());
 
app.post("/compile", (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;
 
    if (language === "python") {
        language="py"
    }
 
    let data = ({
        "code": code,
        "language": language,
        "input": input
    });
    let config = {
        method: 'post',
        url: 'https://codex-api.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    //calling the code compilation API
    Axios(config)
        .then((response)=>{
            res.send(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error);
        });

})
 
app.post("/beautify", (req,res) =>{
let code = req.body.code;
code=beautify(code, {format: 'json'});
console.log(code);
    
let data = ({
"code": code,
});
    
let config = {
        method: 'post',
        url: 'https://codex-api.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json'
         },
        data: data
    };
    
    Axios(config)
            .then((response)=>{
                res.send(response.data)
                console.log(response.data)
            }).catch((error)=>{
                console.log(error);
            });
    })
    



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});