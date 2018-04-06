'use strict'
const boxMethods = require('./boxes')
const isNeighbour = require('./neighbour')
const isValid = require('./validate')

module.exports = {
	"populateBoxes": boxMethods.populateBoxes,
	"whichBox": boxMethods.whichBox,
	"isNeighbour": isNeighbour,
	"isValid": isValid
}