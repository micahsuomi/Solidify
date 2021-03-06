
AOS.init();

 // scrollreveal
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 })
ScrollReveal().reveal('.punchline', { delay: 1000})
ScrollReveal().reveal('.punchline2', { delay: 2000})



// toggle navbar
var hamburger = document.querySelector('.hamburger-bar');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');
var closeNav = document.getElementById('exit');



hamburger.addEventListener('click', function(e) {
  navLinks.classList.toggle("open");
  hamburger.classList.add("hide");
    e.preventDefault();

  
});

closeNav.addEventListener('click', function(e) {
    navLinks.classList.toggle("open");
    hamburger.classList.remove('hide');
    console.log('working')
    e.preventDefault();
});

//change background color
const frontContainer = document.querySelector('.front-container');
const btnCircle = document.querySelector('.btn-circle');
const btnCube = document.querySelector('.btn-cube');
const btnBall = document.querySelector('.btn-ball');
const logo = document.querySelector('.header-container .front-logo');
const subtitle = document.querySelector('.subtitle');

btnCircle.addEventListener('click', changeText = () => {
    btnCube.style.backgroundColor = 'lightblue';
    logo.classList.add('grow');
    subtitle.innerHTML = "Check Our Services"

})



//fetch aPI data for btc and eth price on hero section
const btcMultipleUSD = document.querySelector('.btc-price-usd');
const btcMultipleEUR = document.querySelector('.btc-price-eur');
const ethMultipleUSD = document.querySelector('.eth-price-usd');
const ethMultipleEUR = document.querySelector('.eth-price-eur');

const multipleSymbolsPrice = () => {
        fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR`)
        .then(result => {
            console.log(result);
            return result.json();
    
        })
        .then(data => {
            console.log(data)
            btcMultipleUSD.innerHTML = data.BTC.USD;
            btcMultipleEUR.innerHTML = data.BTC.EUR;
            ethMultipleUSD.innerHTML = data.ETH.USD;
            ethMultipleEUR.innerHTML = data.ETH.EUR;
    
        })
   
};

multipleSymbolsPrice();

//display top marketCap APIs

let div = document.getElementById('top-marketcap__wrapper');
const urlTopMarketCap = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

const createNode = (e) => {
    return document.createElement(e);
}

const append = (parent, el) => {
    return parent.appendChild(el);

}

const topMarketCapDisplayed = () => {
    fetch(urlTopMarketCap)
    .then(result => {
        console.log(result);
        return result.json();

    })
    .then(data => {
        console.log(data.Data);
        let coins = data.Data;
        return coins.map((coin) => {

        let img = createNode('img'),
            name = createNode('li'),
            price = createNode('li'),
            lastMarket = createNode('li'),
            high = createNode('li'),
            low = createNode('li'),
            marketCap = createNode('li'),
            supply = createNode('li'),
            wrapper = createNode('div');
            

        name.innerHTML = coin.CoinInfo.FullName;
        img.src = `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`;
        price.innerHTML = `Price: $${coin.RAW.USD.PRICE}`;
        marketCap.innerHTML = `Market Cap: ${Math.round(coin.RAW.USD.MKTCAP)}`;
        lastMarket.innerHTML = `Last Market${coin.RAW.USD.LASTMARKET}`;
        high.innerHTML = `Change 24H: ${(coin.RAW.USD.CHANGEPCT24HOUR)}`;
        low.innerHTML = `Low: ${coin.RAW.USD.LOWDAY}`;
        supply.innerHTML = `Supply: ${coin.RAW.USD.SUPPLY}`;
        append(div, img);
        append(div, name)
        append(div, price)
        append(div, marketCap)
        append(div, lastMarket)
        append(div, high)
        append(div, low)
        append(div, supply)
       
        img.classList.add('scale')
        name.classList.add('bold');
        name.classList.add('margin');
        img.classList.add('margin')
        price.classList.add('margin', 'blue-text');
        marketCap.classList.add('margin');
        lastMarket.classList.add('margin');
        high.classList.add('margin');
        low.classList.add('margin');
        div.classList.add('margin');


        })
        

    })
};

topMarketCapDisplayed();





//change front-container color

//  var color = ["red", "rgb(202, 76, 76)", "rgb(233, 152, 31)", "rgb(85, 98, 129)", "rgb(79, 197, 243)"];
//  var i = 0;
//  document.querySelector('.btn-red').addEventListener('click', function() {
//     i = 0 < clor.length ? ++i :0;
//     document.querySelector('.front-container').style.background = color [i]
//  });


//team members open modal window
//member1

var modal = document.getElementById('modalTeam1');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//click and open modal event listener
modalBtn.addEventListener('click', openModal);
//listen for close the click
closeBtn.addEventListener('click', closeModal);
//listen for outside window click
window.addEventListener('click',outsideClick);

//function to open modal
function openModal() {
    modal.style.display = 'block';
}

//function to close modal
function closeModal() {
   modal.style.display = 'none';
}

//function to close modal clicking outside the window
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

//member 2
var modal2 = document.getElementById('modalTeam2');
var modalBtn2 = document.getElementById('modalBtn2');
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

//click and open modal event listener
modalBtn2.addEventListener('click', openModal2);
//listen for close the click
closeBtn2.addEventListener('click', closeModal2);
//listen for outside window click
window.addEventListener('click', outsideClick2);

//function to open modal
function openModal2() {
    modal2.style.display = 'block';
}

//function to close modal
function closeModal2() {
   modal2.style.display = 'none';
}

//function to close modal clicking outside the window
function outsideClick2(e) {
    if(e.target == modal2) {
        modal2.style.display = 'none';
    }
}

//member 3
var modal3 = document.getElementById('modalTeam3');
var modalBtn3 = document.getElementById('modalBtn3');
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

//click and open modal event listener
modalBtn3.addEventListener('click', openModal3);
//listen for close the click
closeBtn3.addEventListener('click', closeModal3);
//listen for outside window click
window.addEventListener('click', outsideClick3);

//function to open modal
function openModal3() {
    modal3.style.display = 'block';
}

//function to close modal
function closeModal3() {
   modal3.style.display = 'none';
}

//function to close modal clicking outside the window
function outsideClick3(e) {
    if(e.target == modal3) {
        modal3.style.display = 'none';
    }
}

//member 2
var modal4 = document.getElementById('modalTeam4');
var modalBtn4 = document.getElementById('modalBtn4');
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];

//click and open modal event listener
modalBtn4.addEventListener('click', openModal4);
//listen for close the click
closeBtn4.addEventListener('click', closeModal4);
//listen for outside window click
window.addEventListener('click', outsideClick4);

//function to open modal
function openModal4() {
    modal4.style.display = 'block';
}

//function to close modal
function closeModal4() {
   modal4.style.display = 'none';
}

//function to close modal clicking outside the window
function outsideClick4(e) {
    if(e.target == modal4) {
        modal4.style.display = 'none';
    }
}

//member 5
var modal5 = document.getElementById('modalTeam5');
var modalBtn5 = document.getElementById('modalBtn5');
var closeBtn5 = document.getElementsByClassName('closeBtn5')[0];

//click and open modal event listener
modalBtn5.addEventListener('click', openModal5);
//listen for close the click
closeBtn5.addEventListener('click', closeModal5);
//listen for outside window click
window.addEventListener('click', outsideClick5);

//function to open modal
function openModal5() {
    modal5.style.display = 'block';
    console.log("working")
}

//function to close modal
function closeModal5() {
   modal5.style.display = 'none';
}

//function to close modal clicking outside the window
function outsideClick5(e) {
    if(e.target == modal5) {
        modal5.style.display = 'none';
    }
}


//member 6
var modal6 = document.getElementById('modalTeam6');
var modalBtn6 = document.getElementById('modalBtn6');
var closeBtn6 = document.getElementsByClassName('closeBtn6')[0];

//click and open modal event listener
modalBtn6.addEventListener('click', openModal6);
//listen for close the click
closeBtn6.addEventListener('click', closeModal6);
//listen for outside window click
window.addEventListener('click', outsideClick6);

//function to open modal
function openModal6() {
    modal6.style.display = 'block';
    console.log("opened andrew")
}

//function to close modal
function closeModal6() {
   modal6.style.display = 'none';
}

//function to close modal clicking outside the window
function outsideClick6(e) {
    if(e.target == modal6) {
        modal6.style.display = 'none';
    }
}



//app page wallet ID generator




