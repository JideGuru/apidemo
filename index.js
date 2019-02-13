//HTTP module for making HTTP request
const http = require("http");
//Define the URL
const url = "http://faker.wecode.ng/api/v1/faker/people/";

//Make a request to the url
http.get(url, res=>{

    //Set the encoding
    res.setEncoding("utf8");

    //declare body
    let body = '';
    
    res.on('data', data =>{

        //make the "body" posses the downloaded json
        body+=data;
    });

    res.on('end', ()=>{
        //Now parse the body to be recognised as json
        body = JSON.parse(body);

        //make a response variable to be contaianed with the "response" array(Check the API for clarification)
        var response = body.response

        //get the number of object in the "response" array
        var len = response.length

        //Run a FOR loop to seperately get the items
        for(i=0;i<len;i++){
            //Get the needed data
            var first = response[i].firstName
            var surname = response[i].surname
            var email = response[i].email

            //Print them to the console
            console.log(`
            -----------------------------------------
                ${surname} 
                ${first} 
                ${email}
            -----------------------------------------
            `);
        }
    })
});

