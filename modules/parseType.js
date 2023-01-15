function parseType(arg) {
    if(arg.includes("(")) {
        return arg
    } else if(/^[0-9.]+$/.test(arg)) {
        return Number(arg)
    } else {
        return arg
    }
}

module.exports = parseType