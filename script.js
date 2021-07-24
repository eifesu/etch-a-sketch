const grid = document.querySelector('#grid');

const clear = document.querySelector('#clear');
clear.addEventListener('click',(e) => {
    grid.textContent= '';
    const squares = document.querySelectorAll('.square');
    squares.forEach((el) => {
        el.setAttribute('style', 'background-color: white');
    })
    const blocks = Number(prompt("How many squares per side of the new grid ?"));
    grid.setAttribute('style', `
    grid-template-columns: repeat(${blocks}, auto);
    grid-template-rows: repeat(${blocks}, auto);
    `);
    drawGrid(blocks * blocks);
})

function drawGrid(s) {
    for (let i = 0; i < s ; i++) {  
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseover', (e) => {
            e.target.setAttribute('style', 'background-color: black;');
        });
        square.addEventListener('mouseout', (e) => {
            e.target.setAttribute('style', 'background-color: white; transition: 5s');
        });
        grid.append(square);
    }
}

drawGrid(256)
