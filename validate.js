'use strict'

const neighbour = require('./neighbour')

  /**
   * Precondition: grid cells should contain either whole numbers in the range [1, 9] or empty strings ('').
   * This is a method to check that all cells in the grid contain numbers (clues) that are unique in their respective neighbourhoods.
   * A clue's neighbourhood comprises its containing block and the row and the column in which it is located.
   * Achieved by verifying that for a particular clue, no duplicate is present in its neighbourhood. 
   * @param grid The problem one-dimensional grid.
   */
  function isValid(grid) {
    for (let cell = 0; cell < grid.length; cell += 1) {
      if(grid[cell] !== '') {
        let val = grid[cell]
        grid[cell] = '' // Remove the cell value being examined
        if(neighbour(grid, cell, val)) {
          grid[cell] = val // Put back the cell value
          return false
        }
        grid[cell] = val // Put back the cell value
      }
    } 
    return true 
  }

 module.exports = isValid 