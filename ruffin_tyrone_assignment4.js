


// Find the smallest value in an array that is greater than a given number

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
};
console.log(lesserValue(numArray, 20));





