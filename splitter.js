function split(str, delimiter){
  if(str.length === 0){
    return '';
  }
  if(str[0] === delimiter)
  {
  
    return '' + split(str.slice(1),delimiter);
  }
  return str[0] + split(str.slice(1),delimiter);

}
console.log(split('hello friend', ' '));