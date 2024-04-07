const repeatString = function(word, times) {
    let outputString = "";
    if (times >= 0) {
        for (i = 0; i < times; i++){
            outputString += word;
        }
        return outputString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;