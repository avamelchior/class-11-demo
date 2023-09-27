'use strict';
console.log('app.js is running!');

let imageContainer = document.querySelector('section');
let resultButton = document.getElementById('view-results');

let image1 = document.getElementById('imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.getElementById('imageThree');
// console.log(image1, image2, image3);

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
// console.log(OddDuck.allOddDuckArray);

function getRandomNumber() {
  return Math.floor(Math.random() * OddDuck.allOddDuckArray.length);
}

function renderOddDuck() {
  //undefined say these exist... just doesnt know what it is yet...
  let oddProduct1, oddProduct2, oddProduct3;

  do {
    oddProduct1 = getRandomNumber();
    oddProduct2 = getRandomNumber();
    oddProduct3 = getRandomNumber();
  } while (oddProduct1 === oddProduct2 || oddProduct1 === oddProduct3 || oddProduct2 === oddProduct3);
  //   console.log(oddProduct1, oddProduct2, oddProduct3);
  //             const. array[number - getRandomNumber();].property
  //   console.log(OddDuck.allOddDuckArray[oddProduct1].src);
  image1.src = OddDuck.allOddDuckArray[oddProduct1].src;
  image2.src = OddDuck.allOddDuckArray[oddProduct2].src;
  image3.src = OddDuck.allOddDuckArray[oddProduct3].src;

  image1.alt = OddDuck.allOddDuckArray[oddProduct1].name;
  image2.alt = OddDuck.allOddDuckArray[oddProduct2].name;
  image3.alt = OddDuck.allOddDuckArray[oddProduct3].name;
  //current object/products  add 1 to the views attribute
  OddDuck.allOddDuckArray[oddProduct1].views++;
  OddDuck.allOddDuckArray[oddProduct2].views++;
  OddDuck.allOddDuckArray[oddProduct3].views++;
}

function handleOddProductClick(event) {
//   console.log('proof of life!', event);
  if (event.target === imageContainer) {
    alert('Please click on an image!');
  }

  clicks++;

  let clickoddProduct = event.target.alt;
  //   console.log('oddProduct name', clickoddProduct);
  for (let i = 0; i < OddDuck.allOddDuckArray.length; i++) {
    if (clickoddProduct === OddDuck.allOddDuckArray[i].name) {
      OddDuck.allOddDuckArray[i].click++;
      break;
    }
  }

  if (clicks === maxAttemptsAllowed) {
    imageContainer.removeEventListener('click', handleOddProductClick);
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
imageContainer.addEventListener('click', handleOddProductClick);
