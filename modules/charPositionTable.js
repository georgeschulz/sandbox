function charPositionTable(formula) {
    let table = {}
    let i = 0
    while (i < formula.length) {
        let char = formula[i]
        table[i] = char
        i++
    }
    console.table(table)
}

module.exports = charPositionTable