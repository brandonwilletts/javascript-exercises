const sumAll = function(num1, num2) {
    let finalSum = 0;

    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    } else {
        let numArray = [num1, num2].sort(function(a,b){return a-b});
        for (let i = numArray[0]; i <= numArray[1]; i++) {
            finalSum += i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
