
# Sudoku Grid Validator

A library that facilitates validation of a partially completed standard 9 x 9 Sudoku grid. It was developed as a component in a Sudoku grid generator. It may be used to verify that a specific clue being proposed is not already present in its neighbourhood, namely its containing  3 x 3 box, its column or its row.

## Installation

`npm install https://github.com/usplitu/sudoku_validator.git`

## Usage

`const isNeighbour = require('./node_modules/sudoku_validator/neighbour')`

`isNeighbour(grid, cell, val)`

`grid` is a zero index based one-dimensional array of Sudoku values, range [0, 80]. In composing `grid`, empty cells should be represented with empty strings (''). 

`cell` is the Sudoku cell for which a new clue is being proposed.

`val` is the proposed new clue.

`isNeighbour` returns true if a duplicate of `val` is present in `cell`'s neighbourhood.


Traversal is from top left, row-wise. For example, the indices of the top row (row 0) range from 0 to 8 and so on, the last row (row 8) having indices in the range [72, 80]



## Tests

  

## Contributing

