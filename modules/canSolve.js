function canSolve(args, op) {
    if (op == "ADD" || op == "SUBTRACT" || op == "MULTIPLY" || op == "DIVIDE" || op == "EXP") {
        let solved = true
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== "number") {
                solved = false
            }
        }
        return solved
    } else if (op == "SWITCH") {
        if(!args[0].includes("(")) {
            return true
        } else {
            return false
        }
    }

}

module.exports = canSolve