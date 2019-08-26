function powerCalculator(num, power){
  if (power === 1) {
    return num;
  }
  return num * powerCalculator(num, --power);
}

console.log(powerCalculator(3, 3));