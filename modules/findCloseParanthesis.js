function findCloseParanthesis(formula, i) {
    let count = 0
    let j = i
    while (j < formula.length) {
        if (formula[j] === '(') {
            count++
        } else if (formula[j] === ')') {
            count--
        }
        if (count === 0) {
            return j
        }
        j++
    }
}

module.exports = findCloseParanthesis