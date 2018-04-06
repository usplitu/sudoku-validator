'use strict'
const boxMethods = require('./boxes')
const neighbourMethods = require('./neighbour')
const validate = require('./validate')

module.exports = {
	populateBoxes: boxMethods.populateBoxes,
	whichBox: boxMethods.whichBox,
	isNeighbour: neighbourMethods.isNeighbour,
	isValid: validate.isValid
}