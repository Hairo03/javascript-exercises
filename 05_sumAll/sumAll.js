const sumAll = function(min, max) {
    let sum = 0;

    if (!Number.isInteger(min) || !Number.isInteger(max)){ return "ERROR"};
    if (min > max) [min, max] = [max, min];
    if (min < 0 || max < 0){ return "ERROR"}
    for (i = 0; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
