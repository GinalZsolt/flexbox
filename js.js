let meret = document.querySelector('#selectmeret');
let torott = document.querySelector('#torott');
let piszkos = document.querySelector('#piszkos');
let ered= document.querySelector('#ered');
let db= document.querySelector('#db').value;
let price=0;

function calcPrice(){
    switch (meret) {
        case "L":
            price=40;
            break;
    
        case "M":
            price=30;
            break;
        
        case "S":
            price=20;
            break;
    }
    price*=db;
    if(torott==true){
        price-=db*5;
    }
    if(piszkos==true)
    {
        price-=db*10
    }
    ered.innerText=price+" Ft";
}