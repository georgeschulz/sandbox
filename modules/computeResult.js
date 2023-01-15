const { ADD, SUBTRACT, MULTIPLY, DIVIDE, EXP, NUM_LEVELS, SWITCH, FLOOR } = require('./operations')

function computeResult(operation, args) {
    switch (operation) {
        case "ADD":
            return ADD(args)
        case "SUBTRACT":
            return SUBTRACT(args)
        case "MULTIPLY":
            return MULTIPLY(args)
        case "DIVIDE":
            return DIVIDE(args)
        case "EXP":
            return EXP(args)
        case "SWITCH":
            return SWITCH(args)
        case "NUM_LEVELS_ASC":
            return NUM_LEVELS(args, true)
        case "NUM_LEVELS_DESC":
            return NUM_LEVELS(args, false)
        case "FLOOR":
            return FLOOR(args)
        default:
            return null
    }
}

module.exports = computeResult