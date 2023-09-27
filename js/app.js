'use strict';

console.log('app.js is running!');

let imageContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.getElementById('imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.getElementById('imageThree');

let clicks = 0;
let maxAttemptsAllowed = 10;
Animals.allAnimalsArray = [];

function Animals(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.click = 0;

  Animals.allAnimalsArray.push(this);
}

function getRandomNumber() {
  return Math.floor(Math.random() * Animals.allAnimalsArray.length);
}

function renderAnimals() {
  let animal1, animal2, animal3;

  do {
    animal1 = getRandomNumber();
    animal2 = getRandomNumber();
    animal3 = getRandomNumber();
  } while (animal1 === animal2 || animal1 === animal3 || animal2 === animal3);

  image1.src = Animals.allAnimalsArray[animal1].src;
  image2.src = Animals.allAnimalsArray[animal2].src;
  image3.src = Animals.allAnimalsArray[animal3].src;

  image1.alt = Animals.allAnimalsArray[animal1].name;
  image2.alt = Animals.allAnimalsArray[animal2].name;
  image3.alt = Animals.allAnimalsArray[animal3].name;

  Animals.allAnimalsArray[animal1].views++;
  Animals.allAnimalsArray[animal2].views++;
  Animals.allAnimalsArray[animal3].views++;
}

function handleAnimalClick(event) {
  console.log('proof of life!', event);
  if (event.target === imageContainer) {
    alert('Please click on an image!');
  }

  clicks++;

  let clickAnimal = event.target.alt;
  console.log('animal name', clickAnimal);
  for (let i = 0; i < Animals.allAnimalsArray.length; i++) {
    if (clickAnimal === Animals.allAnimalsArray[i].name) {
      Animals.allAnimalsArray[i].click++;
      break;
    }
  }

  if (clicks === maxAttemptsAllowed) {
    imageContainer.removeEventListener('click', handleAnimalClick);
    resultButton.addEventListener('click', renderResults);
    imageContainer.className = 'no-voting';
  } else {
    renderAnimals();
  }
}

function renderResults() {
  console.log('proof of life in the render results');
  let ul = document.querySelector('ul');

  for (let i = 0; i < Animals.allAnimalsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${Animals.allAnimalsArray[i].name} had ${Animals.allAnimalsArray[i].views} views and was clicked on ${Animals.allAnimalsArray[i].click} times`;
    ul.appendChild(li);
  }
}

new Animals('R2D2 bag', 'images/bag.jpg');
new Animals('Thats Bannanas', 'images/banana.jpg');
new Animals('iBathroom', 'images/bathroom.jpg');
new Animals('BoostyBussin', 'images/boots.jpg');
new Animals('BreakFast Box', 'images/breakfast.jpg');
new Animals('Nope', 'images/bubblegum.jpg');
new Animals('EagerChairin', 'images/chair.jpg');
new Animals('They\'re Here', 'images/cthulhu.jpg');
new Animals('Plata-Doggie', 'images/dog-duck.jpg');
new Animals('Dragon4Dinner', 'images/dragon.jpg');
new Animals('Pen Plate', 'images/pen.jpg');
new Animals('PetSweep', 'images/pet-sweep.jpg');
new Animals('Pizscissors-A', 'images/scissors.jpg');
new Animals('SharkSleep', 'images/shark.jpg');
new Animals('Baby Clean', 'images/sweep.jpg');
new Animals('Hoth Cloth', 'images/tauntaun.jpg');
new Animals('Uni-Spam', 'images/unicorn.jpg');
new Animals('Tail TeraByte', 'images/usb.jpg');
new Animals('Water Me', 'images/water-can.jpg');
new Animals('wine-glass', 'images/wine-glass.jpg');
new Animals('Bunny', 'images/bunny.jpg');
new Animals('Dog', 'images/doggggggo.jpg');
new Animals('Cat', 'images/kittycat.jpg');


renderAnimals();
imageContainer.addEventListener('click', handleAnimalClick);
