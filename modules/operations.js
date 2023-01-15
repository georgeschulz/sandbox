function ADD(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i]
    }
    return sum
}
function DIVIDE(values) {
    let quotient = values[0];
    for (let i = 1; i < values.length; i++) {
        quotient /= values[i]
    }
    return quotient
}

function SUBTRACT(values) {
    let difference = values[0];
    for (let i = 1; i < values.length; i++) {
        difference -= values[i]
    }
    return difference
}

function MULTIPLY(values) {
    let product = 1;
    for (let i = 0; i < values.length; i++) {
        product *= values[i]
    }
    return product
}
function EXP(values) {
    return Math.pow(values[0], values[1])
}

function NUM_LEVELS(values, isAscending = true) {
    let valueToCheck = values[0];
    let pairsStringToParse = values[1];

    //parse the string into an array of objects
    let pairsArray = pairsStringToParse
        .split("/")
        .map(pair => pair.split("="))
        .filter(pair => pair[0].length > 0)
        .map(pair => {
            return {
                option: parseFloat(pair[0].trim()),
                value: parseFloat(pair[1].trim())
            }
        })
    
    let found = false;
    let i = 0;
    let max = pairsArray.length;
    let returnValue = 0;

    //sort the list based on the direction
    if (isAscending) {
        pairsArray.sort((a, b) => a.option - b.option)
    } else {
        pairsArray.sort((a, b) => b.option - a.option)
    }

    //search through the aray and stop if you find the ceiling
    while (i < max && !found) {
        const { option, value } = pairsArray[i]
        if (isAscending) {
            if (valueToCheck <= option) {
                found = true;
                returnValue = value
            } else {
                i++;
            }
        } else {
            if (valueToCheck >= option) {
                found = true;
                returnValue = value
            } else {
                i++
            }
        }
    }

    return returnValue;
}

function SWITCH(values) {
    let input = values[0];
    let pairsStringToParse = values[1];
    let key = pairsStringToParse
        .split("/")
        .map(pair => pair.split("="))
        .filter(pair => pair[0].length > 0)
        .map(pair => {
            return {
                option: pair[0].trim(),
                value: pair[1].trim()
            }
    })
    
    let result = key.find(pair => pair.option === input)

    if(/^[0-9.]+$/.test(result.value)) {
       return Number(result.value)
    } else {
        return result.value
    }
}

module.exports = {
    ADD,
    DIVIDE,
    SUBTRACT,
    MULTIPLY,
    EXP,
    NUM_LEVELS,
    SWITCH
}