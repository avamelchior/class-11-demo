'use strict';
console.log('app.js is running!');

let imageContainer = document.querySelector('section');
let resultButton = document.getElementById('view-results');

let image1 = document.getElementById('imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.getElementById('imageThree');
console.log(image1, image2, image3);

let clicks = 0;
let maxAttemptsAllowed = 10;
OddDuck.allOddDuckArray = [];

function OddDuck(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.click = 0;

  OddDuck.allOddDuckArray.push(this);
}

function getRandomNumber() {
  return Math.floor(Math.random() * OddDuck.allOddDuckArray.length);
}

function renderOddDuck() {
  let animal1, animal2, animal3;

  do {
    animal1 = getRandomNumber();
    animal2 = getRandomNumber();
    animal3 = getRandomNumber();
  } while (animal1 === animal2 || animal1 === animal3 || animal2 === animal3);

  image1.src = OddDuck.allOddDuckArray[animal1].src;
  image2.src = OddDuck.allOddDuckArray[animal2].src;
  image3.src = OddDuck.allOddDuckArray[animal3].src;

  image1.alt = OddDuck.allOddDuckArray[animal1].name;
  image2.alt = OddDuck.allOddDuckArray[animal2].name;
  image3.alt = OddDuck.allOddDuckArray[animal3].name;

  OddDuck.allOddDuckArray[animal1].views++;
  OddDuck.allOddDuckArray[animal2].views++;
  OddDuck.allOddDuckArray[animal3].views++;
}

function handleAnimalClick(event) {
  console.log('proof of life!', event);
  if (event.target === imageContainer) {
    alert('Please click on an image!');
  }

  clicks++;

  let clickAnimal = event.target.alt;
  console.log('animal name', clickAnimal);
  for (let i = 0; i < OddDuck.allOddDuckArray.length; i++) {
    if (clickAnimal === OddDuck.allOddDuckArray[i].name) {
      OddDuck.allOddDuckArray[i].click++;
      break;
    }
  }

  if (clicks === maxAttemptsAllowed) {
    imageContainer.removeEventListener('click', handleAnimalClick);
    resultButton.addEventListener('click', renderResults);
    imageContainer.className = 'no-voting';
  } else {
    renderOddDuck();
  }
}

function renderResults() {
  console.log('proof of life in the render results');
  let ul = document.querySelector('ul');

  for (let i = 0; i < OddDuck.allOddDuckArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${OddDuck.allOddDuckArray[i].name} had ${OddDuck.allOddDuckArray[i].views} views and was clicked on ${OddDuck.allOddDuckArray[i].click} times`;
    ul.appendChild(li);
  }
}

new OddDuck('R2D2 bag', 'images/bag.jpg');
new OddDuck('Thats Bannanas', 'images/banana.jpg');
new OddDuck('iBathroom', 'images/bathroom.jpg');
new OddDuck('BoostyBussin', 'images/boots.jpg');
new OddDuck('BreakFast Box', 'images/breakfast.jpg');
new OddDuck('Nope', 'images/bubblegum.jpg');
new OddDuck('EagerChairin', 'images/chair.jpg');
new OddDuck('They\'re Here', 'images/cthulhu.jpg');
new OddDuck('Plata-Doggie', 'images/dog-duck.jpg');
new OddDuck('Dragon4Dinner', 'images/dragon.jpg');
new OddDuck('Pen Plate', 'images/pen.jpg');
new OddDuck('PetSweep', 'images/pet-sweep.jpg');
new OddDuck('Pizscissors-A', 'images/scissors.jpg');
new OddDuck('SharkSleep', 'images/shark.jpg');
new OddDuck('Baby Clean', 'images/sweep.png');
new OddDuck('Hoth Cloth', 'images/tauntaun.jpg');
new OddDuck('Uni-Spam', 'images/unicorn.jpg');
// new OddDuck('Tail TeraByte', 'images/usb.jpg');
new OddDuck('Water Me', 'images/water-can.jpg');
new OddDuck('wine-glass', 'images/wine-glass.jpg');
new OddDuck('Bunny', 'images/bunny.jpg');
new OddDuck('Dog', 'images/doggggggo.jpg');
new OddDuck('Cat', 'images/kittycat.jpg');


renderOddDuck();
imageContainer.addEventListener('click', handleAnimalClick);
