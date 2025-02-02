const popuprb1 = document.querySelector('.rumblock1')
const popuprb2 = document.querySelector('.rumblock2')
const popuprb3 = document.querySelector('.rumblock3')
const popuprb4 = document.querySelector('.rumblock4')
const popuprb5 = document.querySelector('.rumblock5')
const popuprb6 = document.querySelector('.rumblock6')

const sprint1 = document.querySelector('.sprintblock-1')
const sprint2 = document.querySelector('.sprintblock-2')
const sprint3 = document.querySelector('.sprintblock-3')
const sprint4 = document.querySelector('.sprintblock-4')
const sprint5 = document.querySelector('.sprintblock-5')
const sprint6 = document.querySelector('.sprintblock-6')
const closePopup = document.querySelector('.cross')
// dit moet makkelijker kunnen

popuprb1.addEventListener('click', function() {
  // wanneer je klikt op het blokje, opent hij de popup

  sprint1.classList.toggle('on');

  closePopup.addEventListener('click', function() {
    sprint1.classList.remove('on');
  })
});

// dit doet hij ook bij blokje 2

popuprb2.addEventListener('click', function() {

  sprint2.classList.toggle('on');

  closePopup.addEventListener('click', function() {
    sprint2.classList.remove('on');
  })
});




// const firstImage = document.querySelector('.objects img:nth-of-type(1)');

// window.addEventListener('scroll', () => {
//   firstImage.classList.toggle('scroll', window.scrollY > 0);
// });
// de objecten verschijnen wanneer je naar beneden scrollt


function toggleWeek(weekClass) {
  // selecteer alle weken die nog niet zichtbaar zijn in de popup
  const weeks = document.querySelectorAll('.week-1, .week-2, .week-3');
  weeks.forEach(week => {
      week.classList.remove('active');
  });
  document.querySelector(`.${weekClass}`).classList.add('active');
  // invoegen van de content binnen de toggleWeek in de HTML
}

document.querySelector('.rumikubblocks').classList.add('active');

const objSix = document.querySelector('.obj6');
const objSixPopup = document.querySelector('.rumikubmobile');
// hier verschijnt een popup wanneer je op de object klikt

  objSix.addEventListener('click', function(e) {
    objSixPopup.classList.toggle('pop');
  })