const parseFormula = require('./parser')

class Option {
    constructor(name, service, initial, billingAmount) {
        this.name = name
        this.service = service
        this.initial = initial
        this.billingAmount = billingAmount
    }
}

class Service {
    constructor(name, frequency, billingTypes, initialFormula, serviceFormula, fields, prepayDicount = 1) {
        this.name = name
        this.frequency = frequency
        this.billingTypes = billingTypes
        this.initialFormula = initialFormula
        this.serviceFormula = serviceFormula
        this.fields = fields
        this.prepayDicount = prepayDicount

        switch(this.frequency) {
            case "Monthly":
                this.servicesPerYear = 12
                break;
            case "Bi-Monthly":
                this.servicesPerYear = 6
                break;
            case "Quarterly":
                this.servicesPerYear = 4
                break;
            case "Annual":
                this.servicesPerYear = 1
                break;
            default:
                this.servicesPerYear = 1
                break;
        }
    }

    calculatePrice(results) {
        let initial = parseFormula(this.initialFormula, results)
        let service = parseFormula(this.serviceFormula, results)
        let options = []

        if(this.billingTypes.includes("Monthly")) {
            options.push(new Option("Monthly", service, initial, (this.servicesPerYear/12) * service))
        }

        if(this.billingTypes.includes("Annual Prepay")) {
            options.push(new Option("Annual Prepay", service, initial, this.servicesPerYear * service * (1-this.prepayDicount)))
        }

        if(this.billingTypes.includes("Service")) {
            options.push(new Option("Service", service, initial, service))
        }

        if(this.billingTypes.includes("Quarterly")) {
            options.push(new Option("Quarterly", service, initial, (this.servicesPerYear/4) * service))
        }

        let contractValue = (service * (this.servicesPerYear - 1)) + initial

        return {
            contractValue,
            options,
            serviceDetails: {...this}
        }
    }
}

module.exports = Service
