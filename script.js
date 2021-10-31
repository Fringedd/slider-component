'use strict';

const slider = document.getElementById('myRange');
const selector = document.getElementById('selector');
const progress = document.getElementById('progressBar');
const followers = document.getElementById('followers');
const dollars = document.getElementById('dollars');
const toggle1 = document.getElementById('toggle1');

const amount = Number(document.querySelector('.amount').textContent);

const toggler = function () {
  if (!toggle1.classList.contains('active')) {
    toggle1.classList.add('active');
    dollars.textContent = '$' + (amount - amount * 0.25);
  } else {
    toggle1.classList.remove('active');
  }
};

toggle1.addEventListener('click', toggler);
slider.oninput = function () {
  selector.style.left = this.value + '%';
  progressBar.style.width = this.value + '%';

  let expre = selector.style.left;
  if (!toggle1.classList.contains('active')) {
    switch (expre) {
      case '11%':
        followers.textContent = '10k';
        dollars.textContent = '$' + 8.0;
        break;
      case '31%':
        followers.textContent = '50k';
        dollars.textContent = '$' + 12.0;
        break;
      case '51%':
        followers.textContent = '100k';
        dollars.textContent = '$' + 16.0;
        break;
      case '76%':
        followers.textContent = '500k';
        dollars.textContent = '$' + 24.0;
        break;
      case '96%':
        followers.textContent = '1M';
        dollars.textContent = '$' + 36.0;
        break;
      default:
        console.log('Sorry, we are out of ' + expr + '.');
    }
  } else {
    switch (expre) {
      case '11%':
        followers.textContent = '10k';
        dollars.textContent = '$' + (8.0 - 8.0 * 0.25);
        break;
      case '31%':
        followers.textContent = '50k';
        dollars.textContent = '$' + (12.0 - 12.0 * 0.25);
        break;
      case '51%':
        followers.textContent = '100k';
        dollars.textContent = '$' + (16.0 - 16.0 * 0.25);
        break;
      case '76%':
        followers.textContent = '500k';
        dollars.textContent = '$' + (24.0 - 24.0 * 0.25);
        break;
      case '96%':
        followers.textContent = '1M';
        dollars.textContent = '$' + (36.0 - 36.0 * 0.25);
        break;
      default:
        console.log('Sorry, we are out of ' + expr + '.');
    }
  }
};

/*
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }

  console.log("Is there anything else you'd like?");

  if (selector.style.left === '11%') {
    followers.textContent = '10k';
    dollars.textContent = '$8.00';
  }
  */
