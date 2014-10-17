var votesToGoEatCake = [true, true, true, true];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"];
    
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false];

function find_duplicates(someList){
    var word_register = {};
    for (var i=0; i<someList.length; i++)
    {   
        new_key = typeof(someList[i]) + " " + someList[i]
        if (new_key in word_register)
        {   
            word_register[new_key] = "multiple";   
        }
        else
        {
            word_register[new_key] = "single";
        }
    }
    var dups = [];        
    var allkeys = Object.keys(word_register);
    for (var n=0; n < allkeys.length; n++)
    {

        if (word_register[allkeys[n]] == "multiple")
        {
            dups.push(allkeys[n]);
        }
    }
    for (i=0;i<dups.length;i++){
        word_list = dups[i].split(" ");
        dups[i] = word_list[1]
    }
    return dups;
}


console.log(find_duplicates(votesToGoEatCake));
console.log(find_duplicates(hackbrightStudents));
console.log(find_duplicates(classroomIds));
console.log(find_duplicates(randomJunkIFound));

    
