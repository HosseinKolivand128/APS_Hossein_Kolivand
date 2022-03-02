const sum = (...arg) => {
  return arg.reduce((a, b) => a + b, 0);
};
// const sum = (...arg) => {
//   const args = arg;
//   return args.reduce((a, b) => a + b, 0);
// };

console.log(sum(7, 8, 9, 10));
