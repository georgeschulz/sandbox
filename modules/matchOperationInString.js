function matchOperationInString(string) {
    const operations = ["ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", "EXP", "SWITCH", "NUM_LEVELS_ASC", "NUM_LEVELS_DESC"]
    for (let i = 0; i < operations.length; i++) {
        if (string.includes(operations[i])) {
            return operations[i]
        }
    }
    return null
}

module.exports = matchOperationInString