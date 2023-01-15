const fs = require('fs');

let exFormula = "ADD(2, ADD(4, 2))"
let goal_output = { operation: "ADD", args: [10, { operation: "ADD", args: [{ operation: "SUBTRACT", args: [1, 3] }, 1] }] }

//create a function called parseFormula that takes a string like exFormula and returns an object like goal_output
//parseFormula(exFormula) should return goal_output


function saveObjectToJSON(obj, fileName) {
    let json = JSON.stringify(obj);
    fs.writeFile(`${fileName}.json`, json, 'utf8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`The file ${fileName}.json was saved in the current directory!`);
        }
    });
}

function parseFormula(formula) {
    let stack = [];
    let currentOp = { operation: '', args: [] };
    let i = 0;
    let currentArg = "";
    while (i < formula.length) {
        let char = formula[i];
        if (char === '(') {
            stack.push(currentOp);
            currentOp = { operation: '', args: [] };
            currentArg = "";
        } else if (char === ')') {
            if(currentArg.length)
                currentOp.args.push(currentArg);
            if(currentOp.operation.length) {
                let prevOp = stack.pop();
                prevOp.args.push(currentOp);
                currentOp = prevOp;
            } else {
                let prevOp = stack.pop();
                prevOp.args.push(currentOp.args);
                currentOp = prevOp;
            }
            currentArg = "";
        } else if (char === ',') {
            currentOp.args.push(currentArg);
            currentArg = "";
        } else if (char.match(/[A-Z]+/)) {
            if(currentArg.length)
                currentOp.args.push(currentArg);
            currentOp.operation += char;
            currentArg = "";
        } else if(!char.match(/\s/)) {
            currentArg += char;
        }
        i++;
    }
    if(currentArg.length)
        currentOp.args.push(currentArg);
    let convertArg = (arg) => {
        if(typeof arg == "object")
            arg.args = arg.args.map(convertArg)
        else
            arg = parseInt(arg)
        return arg;
    }
    currentOp.args = currentOp.args.map(convertArg);
    return currentOp;
}








saveObjectToJSON(parseFormula(exFormula), "TEST")