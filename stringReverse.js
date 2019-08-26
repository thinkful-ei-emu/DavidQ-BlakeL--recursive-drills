function reverse(str){
  if(str.length === 0){
    return '';
  }
  const output = str[str.length-1];
  return output + reverse(str.slice(0,str.length-1));
}
console.log(reverse('hello'));