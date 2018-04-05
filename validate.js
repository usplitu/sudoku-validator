'use strict'

const neighbour = require('./index')

  /**
   * Precondition: data cells without numbers [1, 9] to contain 
   * empty strings ('').
   * This is a method to check that all cells in the grid contain numbers (clues)
   * that are unique in their respective neighbourhoods.
   * A clue's neighbourhood comprises its containing
   * block and the row and the column in which it is located.
   * Achieved by verifying that for a particular clue, no duplicate is
   * present in its neighbourhood. 
   * @param data The problem grid.
   */
  isValid(data) {
    for (let cell = 0; cell < data.length; cell += 1) {
      if(data[cell] !== '') {
        let val = data[cell]
        data[cell] = '' // Remove the cell value being examined
        if(neighbour(data, cell, val)) {
          data[cell] = val // Put back the cell value
          return false
        }
        data[cell] = val // Put back the cell value
      }
    } 
    return true 
  }

 module.exports = isValid 