const removeFromArray = function(array, ...target) {
    return array.filter(val => !target.includes(val))
    };

// Do not edit below this line
module.exports = removeFromArray;
