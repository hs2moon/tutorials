
//Setup
var contacts = [
    {//0[i]
        "firstName": "Akira",                           //[j0]
        "lastName": "Laine",                            //[j1]
        "number": "0543236543",                         //[j2]
        "likes": ["Pizza", "Coding", "Brownie Points"]  //[j3]
    },
    {//1[i]
        "firstName": "Harry",                    //[j0]
        "lastName": "Potter",                    //[j1]
        "number": "0994372684",                  //[j2]
        "likes": ["Hogwarts", "Magic", "Hagrid"] //[j3]
    },
    {//2[i]
        "firstName": "Sherlock",                //[j0]
        "lastName": "Holmes",                   //[j1]
        "number": "0487345643",                 //[j2]
        "likes": ["Intriguing Cases", "Violin"] //[j3]
    },
    {//3[i]
        "firstName": "Kristian",                    //[j0]
        "lastName": "Vos",                          //[j1]
        "number": "unknown",                        //[j2]
        "likes": ["Javascript", "Gaming", "Foxes"]  //[j3]
    }
];
function lookUpProfile(firstName, prop){
// Only change code below this line
    for(var i=0; i<contacts.length;i++){
        if(contacts[i]["firstName"]==firstName && contacts[i].hasOwnProperty(prop)){
            console.log(contacts[i][prop]);
            return contacts[i][prop];
        }else if(contacts[i]["firstName"]==firstName && !contacts[i].hasOwnProperty(prop)){
            console.log("No such property");
            return "No such property";
        }else if(contacts[i]["firstName"]!=firstName && i==contacts.length-1){
            console.log("No such contact");
            return "No such contact";
        }
    }
}

// // Change these values to test your function
lookUpProfile("Kristian", "lastName");
lookUpProfile("Akira", "address");
// lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes");
lookUpProfile("Alex", "lastName");
// lookUpProfile("Harry", "number");