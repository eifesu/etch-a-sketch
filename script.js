const grid = document.querySelector('#grid');

const clear = document.querySelector('#clear');
clear.addEventListener('click',(e) => {
    // Clears the grid
    grid.textContent= '';
    // Clears the squares
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
            const random = () => Math.random() * 255;
            e.target.style.transition = 'none';
            e.target.style.background = `rgba(${random()},${random()},${random()},1)`;
            
        });
        square.addEventListener('mouseout', (e) => {
            e.target.style.background = 'white'
            e.target.style.transition = '1s';
        });
        grid.append(square);
    }
}

drawGrid(256)
