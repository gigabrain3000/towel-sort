
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix !== undefined ? matrix.map((arr) => matrix.indexOf(arr) % 2 ? arr.reverse() : arr).flat() : [];
}
