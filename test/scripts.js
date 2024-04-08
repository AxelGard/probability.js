const probability = require('@axelgard/probability')

function assert(condition, message) {
    if (!condition) {
        console.log(message + "\n");
        console.log("\033[31;1;4mFAILED\033[0m");
        throw message || "Assertion failed";
    }
}

assert(probability(1) === false, "failed on 1")
assert(probability(1.0) === false, "failed on 1.0")
assert(probability(0) === true, "failed on 0")
assert(probability(0.0) === true, "failed on 0.0")

let n = 1_000_000; 
let check = 0;
let p = 0.5;
for (let i = 0; i <= n; i++) {
   check += probability(p);
}
let pression = 0.1;
assert((check >= n*(p-pression) && check <=  n*(p+pression)),"probablity is not precise enough");
console.log("\033[32;1;4mPASSED\033[0m")
