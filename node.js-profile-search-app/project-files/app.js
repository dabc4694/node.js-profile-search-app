//Problem: using the username we have to print out  the total badges and js points
//Solution: print out the username and total badges and points earned
const https = require('https');
//const username = "darshanshah2";
//const users = ["darshanshah2", "chalkers","alenaholligan", "davemcfarland"];
const users = process.argv.slice(2);
//print the output
function printMessage(username, badges, points) {

    console.log("\n----------------------------------------------------------");
    console.log("\nThe username is: " + username + "\n");
    console.log("Total badge(s) : " + badges + "\n");
    console.log("Points earned in Javascript : " + points + "\n");
    console.log("----------------------------------------------------------");
}

//printMessage("Darshan", 300, 20000);
function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            //console.log(response.statusCode);
            let body = ""
            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                const profile = JSON.parse(body);
                // console.log(username);
                // console.log(profile.badges.length);
                // console.log(profile.points.JavaScript);

                printMessage(username, profile.badges.length, profile.points.JavaScript);
            });

        });
        request.on('error', error => {
            console.log("Problem with : " + error.message);
        });
    } catch (error) {
        console.error(error.message);
    }
}
//getProfile("chalkers");

users.forEach(getProfile);