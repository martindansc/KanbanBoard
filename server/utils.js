
exports.randomIntInc = function(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

exports.removeFromArray = function(index, array) {
    array.splice(index, 1);
}