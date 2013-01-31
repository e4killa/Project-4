// Tyrone Ruffin
// SDI 1301
// Project 4

// Find the smallest value in an array that is greater than a given number

ruffinsLibrary = function() {

    var thisNumber = []
    var numArray = [5, 12, 15, 21, 38, 40, 43, 47, 115, 32, 15, 27]
    var lesserValue = function(numArray, number) {

        for (i = 0; i < numArray.length; i++) {
        
        if (numArray[i] > number) {
        
        thisNumber.push(numArray[i]);
        };
     };

        thatNumber = thisNumber[0];

        for (j = 0; j < thisNumber.length; j++) {
        
        if (thatNumber > thisNumber[j]) {
        
         thatNumber = thisNumber[j];
         };
     };
        return (thatNumber + " is the smallest number that is greater than "  + number + ".");
        return {"lesserValue": lesserValue}
};
        console.log(lesserValue(numArray, 20));

        
        // Does a string follow a 123-456-7890 pattern like a phone number?

    var checkNum = function (phoneNumber) {
    var number = phoneNumber
    var regExpPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    
        check = regExpPattern.test(number);

        if (check) {
            
        return ( "true," + "," + number + " is a valid phone number.");
    
        } else {
            
        return ("false, " + number + " is not a valid phone number.");
        }
        return{"checkNum": checkNum}
};
        console.log(checkNum("(216)-848-6998"));
        console.log(checkNum("216-848-699"));
        
    // Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10


    var specificDecimal = function (number) {

        newNumber = number.toFixed(2);

        return (number + " has been rounded to " + newNumber);
        return {"specificDecimal": specificDecimal}
};
        console.log(specificDecimal(5.8));
        console.log(specificDecimal(6.2783));
        console.log(specificDecimal(122));
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

};

var tyronesLibrary = ruffinsLibrary();





































