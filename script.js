const image = document.querySelector('img');
const input = document.querySelector('input');

input.addEventListener('change, (e) => {
  img.src = URL.createObjectURL(e.target.files[0]);                       
});
