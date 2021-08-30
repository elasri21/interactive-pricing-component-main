let prices = document.querySelectorAll('.upercase');
let amounts = document.querySelectorAll('.strong');
const range =document.querySelector('.range')
const showElement = document.querySelector('.show-element')




    for(let i=0; i<prices.length; i++){
        let priceI = prices[i].dataset.price;
        let inner = prices[i].innerHTML;
        prices[i].innerHTML = `${priceI}${inner}`
    }
    for(let j=0; j<amounts.length; j++){
        let amountJ = amounts[j].dataset.amount;
        amounts[j].innerHTML = `$ ${amountJ}`
    }




// get toggle balls

let leftBtn = document.querySelector('.one')
let rightBtn = document.querySelector('.two')
leftBtn.addEventListener('click', function(){
    this.style.backgroundColor = "hsl(0, 0%, 100%)";
    rightBtn.style.backgroundColor = "unset";
    this.classList.add('clicked')
    for(let j=0; j<amounts.length; j++){
        let amountJ = amounts[j].dataset.amount;
        amounts[j].innerHTML = `$ ${amountJ}`
    }
})
rightBtn.addEventListener('click', function(){
    this.style.backgroundColor = "hsl(0, 0%, 100%)";
    leftBtn.style.backgroundColor = "unset";
    this.classList.add('clicked')
    for(let j=0; j<amounts.length; j++){
        let amountJ = amounts[j].dataset.amount;
        let newAmount = amountJ - amountJ * 0.25;
        amounts[j].innerHTML = `$ ${newAmount}`
    }
})