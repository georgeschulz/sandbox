function setUserInputValues(formula, userInputValues) {
    //iterate over userInputValues where each key is a name that appears in the formula $[name] in the formula and the value is the value that should replace in the formula
    //return the formula with the values replaced
    for(let key in userInputValues) {
        let value = userInputValues[key]
        let regex = new RegExp(`\\[${key}\\]`, 'g')
        formula = formula.replace(regex, value)
    }
    return formula
}

module.exports = setUserInputValues