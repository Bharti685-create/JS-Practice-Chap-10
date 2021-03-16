// arrays sum

const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
const sum = array => array.reduce((tot, x) => tot + x, 0);
const arraysSum =  arrays.reduce((tot, x) => tot, sum(x), 0);

console.log(arraysSum); 