"use strict";

let btn = document.querySelector('.btn');
btn.addEventListener('click', function (event) {
    let houseCards = document.querySelectorAll('article');
    for (let i = 3; i < houseCards.length; i++) {
        let houseCard = houseCards[i]; 
        houseCard.classList.toggle('hide');
    
    }
    document.querySelector('main').classList.toggle('hideBlocks');
    document.querySelector('main').classList.toggle('showBlocks');
        
    if (document.querySelector('.seeMore')) {
        document.querySelector('.btn').innerText = 'Show less';
        document.querySelector('.btn').classList.toggle('showLess');
        document.querySelector('.btn').classList.toggle('seeMore');
    } else if (document.querySelector('.showLess')) {
        document.querySelector('.btn').innerText = 'See more';
        document.querySelector('.btn').classList.toggle('showLess');
        document.querySelector('.btn').classList.toggle('seeMore');
    }
});
