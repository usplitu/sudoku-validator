'use strict'

const boxMethods = require('./boxes')
const populateBoxes = boxMethods.populateBoxes
const whichBox = boxMethods.whichBox

const boxes = populateBoxes()

/**
 * The neighbourhood is defined as the row, column and box in which cell is resident.
 * @param grid The sudoku grid in 1-d format
 * @param cell The cell in which val is present.
 * @param val The value in the param cell.
 * @return True if val is in the cell neighbourhood.
 */
function isNeighbour (grid, cell, val) {
  let inrow = isInRow(grid, cell, val)
  let incol = isInCol(grid, cell, val)
  let inbox = isInBox(grid, cell, val)
  return inrow || incol || inbox
}

/**
 * Dermine if the value found in cell is present anywhere in the row.
 * @param grid
 * @param cell
 * @param val
 * @returns {boolean}
 */
function isInRow(grid, cell, val) {
  let row = theRow(cell)
  for(let col = 0; col < 9; col += 1) {
    if(grid[row*9 + col] === val) {
      return true
    }
  }
  return false
}

/**
 * Dermine if the value found in cell is present anywhere in the column.
 * @param grid
 * @param cell
 * @param val
 * @returns {boolean}
 */
function isInCol(grid, cell, val) {
  let col = theCol(cell)
  for(let row = 0; row < 9; row += 1) {
    if(grid[row*9 + col] === val) {
      return true
    }
  }
  return false
}

/**
 * Dermine if the value found in cell is present anywhere in the containing box.
 * @param grid
 * @param cell
 * @param val
 * @returns {boolean}
 */
function isInBox(grid, cell, val) {
  let numberBoxes = 9
  let indx = whichBox(cell)
  for(let j = 0; j < numberBoxes; j +=1) {
    if(grid[boxes[indx][j]] === val) {
      return true
    }
  }
  return false
}

/**
 * Given a cell index in the one-dim array representing sudokugrid.
 * Calculate and return the row in which this cell is present.
 * The relationship is represented by: cell = 9*row + col.
 * Note that cell range is [0, 80] - one dimensional array.
 * If this array is placed in a 9 x 9 square grid then the [row, col]
 * coordinate is calculated thus:  9*row + col
 * @param cell
 * @returns {number}
 */
function theRow (cell) {
  return Math.floor(cell / 9)
}

/**
 * Given a cell index in the one-dim array representing sudokugrid.
 * Calculate and return the column in which this number present.
 * The relationship is represented by: val = 9*row + col
 * @param cell
 * @returns {number}
 */
function theCol (cell) {
  return cell - theRow(cell) * 9
}

module.exports = isNeighbour

