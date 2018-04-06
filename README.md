
# Sudoku Grid Validator

A library that facilitates validation of a partially completed standard 9 x 9 Sudoku grid. It was developed as a component in a Sudoku grid generator. It may be used to verify that a specific clue being proposed is not already present in its neighbourhood, namely its containing  3 x 3 box, its column or its row.

## Installation

`npm install --save https://github.com/usplitu/sudoku-validator.git`

or

`npm install --save usplitu/sudoku-validator#master`

## Usage

`const neighbour = require('sudoku-validator')`

`isNeighbour(grid, cell, val)`

`isValid(grid)`

`grid` is a zero index based one-dimensional array of Sudoku values, range [0, 80]. In composing `grid`, empty cells should be represented with empty strings (''). 

`cell` is the Sudoku cell for which a new clue is being proposed.

`val` is the proposed new clue.

`isNeighbour` returns true if a duplicate of `val` is present in `cell`'s neighbourhood.


Traversal is from top left, row-wise. For example, the indices of the top row (row 0) range from 0 to 8 and so on, the last row (row 8) having indices in the range [72, 80]

`isValid(grid)` checks the Sudoku one-dimensional grid array for compliance with the rules, namely no value to appear more than once in a particular row, column or box. It does not check that the grid is fully populated with numbers. Thus, it works for partial or complete grids.

## Issues


## Tests

  

## Contributing

