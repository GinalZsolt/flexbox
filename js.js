calc.addEventListener('click',function(){calcPrice()})

function calcPrice(){
let meret = document.querySelector('#meret').value;
let hiba= document.querySelector('#hiba').value;
//let ered= document.querySelector('#ered');
let db= document.querySelector('#db').value;
let price=0;
let reset= document.querySelector('#reset')
let calc= document.querySelector('#calc')

    switch (meret) {
        case "L":
            price=45;
            break;
    
        case "M":
            price=40;
            break;
        
        case "S":
            price=35;
            break;
    }
    price*=db;
    switch (hiba) {
        case "torott":
            price-=db*5;
            break;
    
        case "piszkos":
            price-=db*10;
            break;

    }
    alert(price+" Ft");
}