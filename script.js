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



function toggleWeek(weekClass) {
  // Alle weken worden geselecteerd
  const weeks = document.querySelectorAll('[class^="week-"]');

  // de class active wordt verwijderd van de weken
  weeks.forEach(week => {
      week.classList.remove('active');
  });

  // voeg active bij de week toe wanneer je op een bepaalde knop drukt
  const selectedWeek = document.querySelector(`.${weekClass}`);
  if (selectedWeek) {
      selectedWeek.classList.add('active');
  } else {
      console.error(`Element with class "${weekClass}" not found.`);
  }
}

document.querySelector('.rumikubblocks').classList.add('active');

const objSix = document.querySelector('.obj6');
const objSixPopup = document.querySelector('.rumikubmobile');
// hier verschijnt een popup wanneer je op de object klikt

  objSix.addEventListener('click', function(e) {
    objSixPopup.classList.toggle('pop');
  })

  
document.querySelectorAll('.week-btn').forEach(button => {
    button.addEventListener('click', function () {
        const weekClass = this.getAttribute('data-week');
        toggleWeek(weekClass);
    });
});