const fs = require('fs');

// function day3(){
//     fs.readFile('./day3.txt',(err,data)=>{
//         const direction = data.toString();
//         const darray = direction.split('');
//         console.log(darray)
//         darray.forEach(direction=>{
//             if()
//         })
//     })
// }

// day3()

const INPUT = fs.readFileSync('./day3.txt', 'utf-8').split('');

// Unique set of coordinates with the starting coordinates already added
const coordinates = new Set().add(`0x0`);

INPUT.reduce((curCoords, direction) => {
  let newCoords = {x: 0, y: 0};

  if (direction === '^') newCoords = {x: curCoords.x, y: curCoords.y + 1};
  if (direction === 'v') newCoords = {x: curCoords.x, y: curCoords.y - 1};
  if (direction === '>') newCoords = {x: curCoords.x + 1, y: curCoords.y};
  if (direction === '<') newCoords = {x: curCoords.x - 1, y: curCoords.y};

  coordinates.add(`${newCoords.x}x${newCoords.y}`);
  return newCoords;
}, {x: 0, y: 0});

console.log(coordinates.size);