let popup = document.querySelector('.rumblock1')
let sprint1 = document.querySelector('.sprint1')

  popup.addEventListener('click', function() {

  sprint1.classList.toggle('active');
});

const never = document.querySelectorAll('#stop path')

for(let i = 0; i<never.length; i++){
  console.log(`Letter ${i} is ${never[i].getTotalLength()}`);
}

const returnAudio = snowworld.play();
  if (!returnAudio) {

  }