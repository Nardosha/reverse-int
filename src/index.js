module.exports = function reverse (n) {
    // if (n < 0) {
    //     return +String(-n).split('').reverse().join('')
    // }
    //     return +String(n).split('').reverse().join('')
    return (n>=0) ? +String(n).split('').reverse().join('') : +String(-n).split('').reverse().join('')
}
