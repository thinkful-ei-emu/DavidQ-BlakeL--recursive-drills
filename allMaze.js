let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
function solvePath(maze,cord){
  if (maze[cord.y][cord.x] === 'e'){
    return '';
  }
  if(false){}//no possible solution

  if (cord.x + 1 <= maze[0].length-1 ){//check not on boundary
    if(maze[cord.y][cord.x + 1] !== '*'){//check no wall
      maze[cord.y][cord.x] = '*';
      return 'R' + solvePath(maze, cord);
      
    }
}

function mazeSolver(maze ,start = {x :0, y:0},possible = []){
  console.log(path);
  let solutions = [];
  if (){
    return [];
  }
  if (cord.x + 1 <= maze[0].length-1 ){//check not on boundary
    if(maze[cord.y][cord.x + 1] !== '*'){//check no wall
      maze[cord.y][cord.x] = '*';
      possible.push({direction:'R',coord:{x:cord.x,y:cord.y}});
      
    }
  return 'Path to Exit: ' + solvePath(maze,start)


}
console.log(mazeSolver(maze));