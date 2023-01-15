function test(answer, expected, testName = "Unnamed Test") {
    if (answer === expected) {
        console.log('\x1b[32m',
`Test: ${testName}
/ Passed: Expected ${expected} and got ${answer} 
`)
    } else {
        console.log('\x1b[31m', 
`Test: ${testName}
X Failed: Expected ${expected} and got ${answer}`)
    }
}

module.exports = test