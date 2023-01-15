function matchOperationInString(string) {
    const operations = ["ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", "EXP", "NUM_LEVELS", "SWITCH"]
    for (let i = 0; i < operations.length; i++) {
        if (string.includes(operations[i])) {
            return operations[i]
        }
    }
    return null
}

module.exports = matchOperationInString