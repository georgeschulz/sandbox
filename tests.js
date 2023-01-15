const test = require('./modules/test')
const parseFormula = require('./parser')

let testTwo = "ADD(3, 4)"
let resultTwo = parseFormula(testTwo, {})
test(resultTwo, 7, "Basic Addition")

let testOne = "ADD(ADD(4, DIVIDE(4, 2)), SUBTRACT([square_footage], 2))"
let resultOne = parseFormula(testOne, { square_footage: 2000 })
test(resultOne, 2004, "3 Deep Nesting + Interpolation")

let testThree = "MULTIPLY([square_footage], [subjective_scale])"
let resultThree = parseFormula(testThree, { square_footage: 2000, subjective_scale: 3 })
test(resultThree, 6000, "Double Interpolation")

let testFour = "ADD(ADD(ADD(ADD(2, 2),2),2),2)"
let resultFour = parseFormula(testFour, {})
test(resultFour, 10, "Five Deep Nesting")

let testFive = "EXP(ADD(ADD(ADD(4,2),2),DIVIDE(4, 2)), DIVIDE(4, 1)"
let resultFive = parseFormula(testFive, {})
test(resultFive, Math.pow(10, 4),  "Exponents")

let testSix = "SWITCH([pest_name], ants=1/ spiders=2/ rodents=4/)"
let resultSix = parseFormula(testSix, {pest_name: 'ants'}) 
test(resultSix, 1, "Simple Switch first element")

let resultSixB = parseFormula(testSix, {pest_name: 'spiders'})
test(resultSixB, 2, "Simple Switch second element")

let resultSixC = parseFormula(testSix, {pest_name: 'rodents'})
test(resultSixC, 4, "Simple Switch final element")

let testSeven = "ADD(SWITCH([pest_name], ants=1/ spiders=2/ rodents=4/), 1)"
let resultSeven = parseFormula(testSeven, {pest_name: 'ants'})
test(resultSeven, 2, "Switch with other operations")

let testEight = "ADD(SWITCH([current_warranty], ANR=75/ EAR=75/ WTR=75/ PER=75/ PTR=75/ ETM=100/ ATM=100/), DIVIDE(SUBTRACT([current_price], 150), 6))"

let resultEight = parseFormula(testEight, {current_warranty: 'ANR', current_price: 200})
test(resultEight, (75) + (50/6), "Switch with other operations")

let resultEightB = parseFormula(testEight, {current_warranty: 'ETM', current_price: 233})
test(resultEightB, (100) + ((233-150)/6), "Switch with other operations")

let testNine = "ADD(MULTIPLY(0.005, [square_footage]), 75)"
let resultNine = parseFormula(testNine, {square_footage : 500})
test(resultNine, 275, "Decimals")

let testTen = "NUM_LEVELS_ASC(2499, 1000=5/ 2000=10/ 3000=15/ 4000=20/)"
let resultTen = parseFormula(testTen, {})
test(resultTen, 15, "Aschending Levels Test")
