function countSheep(numb){
  if(numb === 0){
    return console.log('You outta sheep')
  }
  console.log(`${numb}: Another sheep jumped over the fence`);
  countSheep(--numb);
}

countSheep(3);