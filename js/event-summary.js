

// option 1

function change() {
  const text1 = document.getElementById('change-text');

  text1.innerText = 'this text changed';


}

// option 2

document.getElementById('btn-2').addEventListener('click', function change2() {
  const text2 = document.getElementById('change-text2');
  text2.innerText = 'text 2 changed';
})

// option 3

document.getElementById('btn-update').addEventListener('click', function btn() {
  const inputArea = document.getElementById('input-text');
  const inputText = inputArea.value;

  const updatetext = document.getElementById('input-text-update');
  updatetext.innerText = inputText;
  inputArea.value = '';

})

















