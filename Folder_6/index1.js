function differenceInAges(ages) {
  let max = Math.max(...ages);
  let min = Math.min(...ages);
  return [min, max, max - min];
}
differenceInAges([57, 99, 14, 32]), [14, 99, 85];
