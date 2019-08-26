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
 console.log(cord);
  if (maze[cord.y][cord.x] === 'e'){
    return '';
  }

  if (cord.x + 1 <= maze[0].length-1 && cord.x +1 !== prevCord.x ){//check not on wall and cant retrace
    if(maze[cord.y][cord.x + 1] !== '*'){
      return 'R' + mazeSolver(maze, {x : cord.x + 1, y: cord.y}, cord);
    }
  }
  if ( !(cord.x -1 < 0) && cord.x - 1 !== prevCord.x){
    if(maze[cord.y][cord.x -1] !== '*'){
      return 'L' + mazeSolver(maze, {x : cord.x -1, y: cord.y}, cord);
    }
  }
  if (!(cord.y +1 > maze.length-1) && cord.y + 1 !== prevCord.y){
    if(maze[cord.y+1][cord.x] !== '*'){
      return 'D' + mazeSolver(maze, {x : cord.x, y: cord.y+1}, cord);
    }
  }
  if (!(cord.y  < 0 && cord.y - 1 !== prevCord.y)){
    if(maze[cord.y - 1][cord.x] !== '*'){
      return 'U' + mazeSolver(maze, {x : cord.x, y: cord.y-1}, cord);
    }
  }
  

}

export {maze, mazeSolver};

console.log(mazeSolver(maze));