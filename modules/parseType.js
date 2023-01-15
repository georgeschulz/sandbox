function parseType(arg) {
    if(arg.includes("(")) {
        return arg;
    } else {
        var number = Number(arg);
        if (!isNaN(number)) {
            return number;
        } else {
            return arg;
        }
    }
}

module.exports = parseType