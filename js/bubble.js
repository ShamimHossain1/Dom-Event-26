
// Bubble 1

document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 1st clicked');
    event.stopPropagation(); // for stop on this section
    // event.stopImmediatePropagation();  // for stop only this statement
})

document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 second clicked');
   
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 third clicked');
    
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('Item-2 fourth clicked');
    
})

// bubble 2

document.getElementById('list-ul').addEventListener('click', function () {
    console.log('ul clicked');
})

// bubble 3

document.getElementById('list-container').addEventListener('click', function () {
    console.log('section container clicked');
})

// bubble 4

document.getElementById('body').addEventListener('click', function () {
    console.log('body of the html clicked');
})
