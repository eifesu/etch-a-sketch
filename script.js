const grid = document.querySelector('#grid');

function wipe() {
    // Clears the squares
    const squares = document.querySelectorAll('.square');
    squares.forEach((el) => {
        el.setAttribute('style', 'background-color: white');
    });
}

// Clearing button
const clearbtn = document.querySelector('#btn-clear');
clearbtn.addEventListener('click', wipe);

function resize(e) {
    // Clears the grid
    grid.textContent= '';
    
    //Updates the grid
    const blocks = e.target.value;
    grid.setAttribute('style', `
    grid-template-columns: repeat(${blocks}, auto);
    grid-template-rows: repeat(${blocks}, auto);
    `);
    drawGrid(blocks * blocks);

    //Updates the span
    const span = document.querySelector('span');
    span.textContent = blocks;
}

// Slider button
const slider = document.querySelector('#size');
slider.addEventListener('mouseup', (e) => resize(e))


// Color button
const rainbow = document.querySelector('#rainbow');
const persistent = document.querySelector('#persistent');



function drawGrid(s) {
    for (let i = 0; i < s ; i++) {  
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseover', (e) => {
            const random = () => Math.random() * 255;
            e.target.style.transition = 'none'; 
            e.target.style.background = rainbow.checked ? `rgba(${random()},${random()},${random()},1)` : 'black';

            
        });
        square.addEventListener('mouseout', (e) => {
            if (!persistent.checked) {
                e.target.style.background = 'white'
                e.target.style.transition = '1s';
            }
        });
        grid.append(square);
    }
}

drawGrid(256)
