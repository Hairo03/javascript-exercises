const repeatString = function(word, amount) {
    let string = ""
    if (amount < 0) {
        return "ERROR";
    }

    for(i = 0; i < amount; i++) {
        string += word;
    }



    return string;
};

// Do not edit below this line
module.exports = repeatString;
