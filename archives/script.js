class Service {
    constructor(name, frequency, startMonth, endMonth, billingTypes, initialFormula, serviceFormula, fields) {
        this.name = name
        this.frequency = frequency
        this.startMonth = startMonth
        this.endMonth = endMonth
        this.billingTypes = billingTypes
        this.initialFormula = initialFormula
        this.serviceFormula = serviceFormula
        this.fields = fields
    }
    calculatePrice($) {
        const initial = eval(this.initialFormula)
        const service = eval(this.serviceFormula)
        return { 
            initial, 
            service,
            serviceDetails: {...this}
        }
    }
    parseFormula() {
    }
}

class SingleLineText {
    constructor(name) {
        this.name = name;
        this.type = 'text';
        this.component = 'DynamicInputField'
    }
}

class SingleLineNumber {
    constructor(name, min, max) {
        this.name = name;
        this.type = 'number'
        this.min = min;
        this.max = max;
        this.component = 'DynamicInputField'
    }
}

class SingleSelect {
    constructor(name, options) {
        this.name = name;
        this.options = options;
        this.component = 'DynamicSelectField'
    }
}

let allFormula = `
    ADD(
        ADD(
            75,
            NUM_LEVELS($["Square Feet"], [{option: 1000, value: 0}, {option: 2000, value: 5}, {option: 3000, value: 10}], 15, true)
        ),
    SWITCH($["Pest Type"], [{option: "Roaches", value: 5}, {option: "Ants", value: 10}, {option: "Gen Pest", value: 0}], -5)
    )
`

let allFormula2 = `ADD(ADD(75, NUM_LEVELS($["Square Feet"], [{option: 1000, value: 0}, {option: 2000, value: 5}, {option: 3000, value: 10}], 15, true)), SWITCH($["Pest Type"], [{option: "Roaches", value: 5}, {option: "Ants", value: 10}, {option: "Gen Pest", value: 0}], -5))`

const allFields = [
    new SingleLineNumber('Square Feet', 0, 10000),
    new SingleSelect('Pest Type', ['Roaches', 'Ants', 'Gen Pest'])
]
const results = {
    "Square Feet": 2200,
    "Pest Type": "Roaches"
}

const all = new Service('All in One', 6, null, null, ['Monthly', 'Per Service', 'Prepay'], '75', allFormula, allFields)
console.log('PRICING:', all.calculatePrice(results))


const pricingData = {}
