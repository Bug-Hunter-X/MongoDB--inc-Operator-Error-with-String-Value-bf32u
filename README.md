# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numerical field by a given amount. However, attempting to increment with a string value results in an error.

## Bug
The `bug.js` file shows the incorrect usage of the `$inc` operator with a string value. This leads to an error because the operator expects a number.

## Solution
The `bugSolution.js` file provides the correct solution, where the increment value is a number.