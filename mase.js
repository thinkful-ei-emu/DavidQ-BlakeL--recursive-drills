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

function mazeSolver(maze ,cord = {x :0, y:0}, prevCord = {x : 0, y: 0}){
 
  if (maze[cord.x][cord.y] === 'e'){
    return '';
  }

  if (!(cord.x +1 > maze[cord.x].length-1) &&  cord.x + 1 !== prevCord.x){
    if(maze[(cord.x + 1)][cord.y] === ' ' || maze[(cord.x + 1)][cord.y] === 'e' ){
      return 'R' + mazeSolver(maze, {x : cord.x + 1, y: cord.y}, cord);
    }
  }
  if ( !(cord.x -1 < 0) && cord.x - 1 !== prevCord.x){
    if(maze[(cord.x -1)][cord.y] === ' ' || maze[(cord.x -1)][cord.y] === 'e'){
      return 'L' + mazeSolver(maze, {x : cord.x -1, y: cord.y}, cord);
    }
  }
  if (!(cord.y +1 > maze.length-1) && cord.y + 1 !== prevCord.y){
    if(maze[(cord.x)][cord.y + 1] === ' ' || maze[(cord.x)][cord.y + 1] === 'e'){
      return 'D' + mazeSolver(maze, {x : cord.x, y: cord.y+1}, cord);
    }
  }
  if (!(cord.y  < 0 && cord.y - 1 !== prevCord.y)){
    if(maze[(cord.x)][cord.y - 1] === ' ' || maze[(cord.x)][cord.y - 1] === 'e'){
      return 'U' + mazeSolver(maze, {x : cord.x, y: cord.y-1}, cord);
    }
  }
  

}

console.log(mazeSolver(maze));