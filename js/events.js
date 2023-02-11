

console.log("this is separate js file");

// onclick style
// method 1 is inline change

/* <button id="red" onclick="document.body.style.backgroundColor = 'red'">Make Background red</button> */

// method 2
// important: we will use
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// method 3

const greenBtn = document.getElementById('green');
greenBtn.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// method 4

const makeYellow = document.getElementById('yellow');
makeYellow.onclick = function makeYellow() {
    document.body.style.backgroundColor = ('yellow');
}

// method 5 addeventlistner


const makePurple = document.getElementById('purple');
makePurple.addEventListener('click', makepurple)
function makepurple() {
    document.body.style.backgroundColor = ('purple');
}

// method 6
// important: will use sometimes

document.getElementById('gold').addEventListener('click', function makeGold() {
    document.body.style.backgroundColor = ('gold');

})
















