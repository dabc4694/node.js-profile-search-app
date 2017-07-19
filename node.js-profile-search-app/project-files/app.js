//Problem: using the username we have to print out  the total badges and js points
//Solution: print out the username and total badges and points earned
const https = require('https');
const username = "darshanshah2";

//print the output
function printMessage(username, badges, points){

    console.log("The username is: " + username);
    console.log()
    console.log("Total badge(s) : " + badges);
    console.log("Points earned in Javascript : " + points);
}

//printMessage("Darshan", 300, 20000);

https.get(`https://teamtreehouse.com/${username}.json`, response => {
    //console.log(response.statusCode);
    let body = ""
    response.on('data', data => {
        body += data.toString();
    });

    response.on('end', () => {
        const profile = JSON.parse(body);
        console.log(profile.badges.length);
        console.log(profile.points.JavaScript);
    });
});