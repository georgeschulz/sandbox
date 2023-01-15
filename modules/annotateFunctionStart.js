let formulaList = require('./functions')

function annotateFunctionStart(formula, startCharToAppend, endCharToAppend) {
    let newValuesForFormula = {}
    formulaList.forEach((formula) => {
        newValuesForFormula[formula] = startCharToAppend + formula + endCharToAppend
    })
    let newFormula = formula
    //replace every instance of the elements in formulaList with the new values
    formulaList.forEach((formula) => {
        let regex = new RegExp(formula, "g")
        newFormula = newFormula.replace(regex, newValuesForFormula[formula])
    })
    return newFormula;
}

module.exports = annotateFunctionStart