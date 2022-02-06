const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg * fuelLeft < distanceToPump ? false : true;
};
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
