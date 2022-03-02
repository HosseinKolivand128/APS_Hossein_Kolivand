// Only change code below this line
class Thermostat {
  constructor(temp) {
    this.temperature = (5 / 9) * (temp - 32);
  }
  get temperature() {
    return this.temprature;
  }
  set temperature(updatedTemp) {
    this.temprature = updatedTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
