"use strict";
function swapKeyAndValue(object) {
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        result[value] = key;
    }
    return result;
}
const obj = {
    a: 1,
    b: 2
};
console.log(swapKeyAndValue(obj));
