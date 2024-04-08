
/**
 * @param {number} prob - A probability bettween 0-1 
 * @returns {boolean} - For a given probability the return will return true or false with a given probability 
*/
function probability(prob) {
    if (Math.random() >= prob) {
        return true;
    }
    return false;
}


module.exports = probability;
