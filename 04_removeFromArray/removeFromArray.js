const removeFromArray = function(array, ...args) {
    const outputArray = [];
    for (let i = 0; i < array.length; i++) {
        if (checkArrayItem(array[i], ...args) === false) {
            outputArray.push(array[i]);          
        }
    }
    return outputArray;
}

function checkArrayItem (arrayItem, ...args) {
    let result = false;
    for (let i = 0; i < args.length; i++){
        if (arrayItem === args[i]){
            result = true;
        }
    }
    return result;
}
    
// Do not edit below this line
module.exports = removeFromArray;
