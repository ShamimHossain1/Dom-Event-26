/// creating comment box

// step 1: add event listener to the post button

document.getElementById('btn-post').addEventListener('click', function commentBox() {

    // step-2: get the comment

    const textarea = document.getElementById('new-comment');
    const inputText = textarea.value

    // step 3: set the comment inside the comment container

    // 1: get the comment container
    const commentArea = document.getElementById('comment-container');

    // 2: Create a new element(p)
    const p = document.createElement('p');
    const p1 = document.createElement('p');

    // 3: set the text of the element as innerText of the p tag
    p1.innerText = 'your comment:';
    p.innerText = inputText;

    // 4: add the p tag using appendChild
    commentArea.appendChild(p1);
    commentArea.appendChild(p);

    // step-4: clear text area
    textarea.value = '';

})