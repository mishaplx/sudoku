module.exports = function solveSudoku(matrix) {
  sodokoSolver(matrix);
  return matrix
  
};
function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == 0) {
        for (let k = 1; k < 10; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
            if (sodokoSolver(data)) {
              return true;
            } else {
              data[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(tableSudoku, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (
      tableSudoku[row][i] == k ||
      tableSudoku[i][col] == k ||
      tableSudoku[m][n] == k
    ) {
      return false;
    }
  }
  return true;
}