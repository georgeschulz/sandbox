function splitArgs(subFormula) {
    let i = 0
    let commasToPass = 1
    let splittingCommaIndex = 0
    let found = false
    while (i < subFormula.length && !found) {
        let char = subFormula[i]
        if (char === "(") {
            commasToPass++
        } else if (char === ",") {
            commasToPass--
            if (commasToPass === 0) {
                splittingCommaIndex = i
                found = true
            }
        }
        i++
    }
    let firstArg = subFormula.slice(0, splittingCommaIndex)
    let secondArg = subFormula.slice(splittingCommaIndex + 1)
    return [firstArg, secondArg]
}

module.exports = splitArgs