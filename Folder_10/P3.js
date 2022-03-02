const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// Only change code above this line
console.log(highToday);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {
  today: { low: lowToday1, high: highToday1 },
} = LOCAL_FORECAST;

// Only change code above this line
console.log(lowToday1);
