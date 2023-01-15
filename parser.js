const findCloseParanthesis = require('./modules/findCloseParanthesis')
const annotateFunctionStart = require('./modules/annotateFunctionStart')
const removeSpaces = require('./modules/removeSpaces')
const splitArgs = require('./modules/splitArgs')
const setUserInputValues = require('./modules/setUserInputValues')
const parseType = require('./modules/parseType')
const computeResult = require('./modules/computeResult')
const matchOperationInString = require('./modules/matchOperationInString')
const canSolve = require('./modules/canSolve')


function evaluateExpression(annotatedFormula) {
    const i = annotatedFormula.indexOf("(", 0)
    let close = findCloseParanthesis(annotatedFormula, i)
    let subFormula = annotatedFormula.slice(i + 1, close)
    let contentPrior = annotatedFormula.slice(0, i)
    let op = matchOperationInString(contentPrior)
    let args = splitArgs(subFormula).map(arg => parseType(arg))
    let result = args

    if(!canSolve(args, op)) {
        args.forEach((arg, i) => {
            if(typeof arg !== "number") {
                args[i] = evaluateExpression(arg)
            }
        })
    } 

    if(canSolve(args, op)) {
        result = computeResult(op, args)
        return result;
    } 

}

function parseFormula(formula, results) {
    let interpolatedFormula = setUserInputValues(formula, results)
    let spacelessFormula = removeSpaces(interpolatedFormula)
    let annotatedFormula = annotateFunctionStart(spacelessFormula, "!", "?")
    let result = evaluateExpression(annotatedFormula)
    
    return result;
}

module.exports = parseFormula

