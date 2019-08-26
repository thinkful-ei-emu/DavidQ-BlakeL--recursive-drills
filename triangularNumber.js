function triangularNumber(n){
  if(n === 0 ){
    return 0;
  }
  return n + triangularNumber(n - 1);
}

console.log(triangularNumber(4));