let meret = document.querySelector('#selectmeret');
let hiba= 
let ered= document.querySelector('#ered');
let db= document.querySelector('#db').value;
let price=0;
let reset= document.querySelector('#reset')
let calc= document.querySelector('#calc')


calc.addEventListener('click',function(){calcPrice()})

reset.addEventListener('click'function(){restart()})

function restart(){

}

function calcPrice(){
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
    if(torott==true){
        price-=db*5;
    }
    if(piszkos==true)
    {
        price-=db*10
    }
    ered.innerText=price+" Ft";
}