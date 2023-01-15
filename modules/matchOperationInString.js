const functions = require('./functions')

function matchOperationInString(string) {
    for (let i = 0; i < functions.length; i++) {
        if (string.includes(functions[i])) {
            return functions[i]
        }
    }
    return null
}

module.exports = matchOperationInString