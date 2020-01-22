//display BTC price
const btcUSD = document.querySelector('.btc-usd');
const btcJPY = document.querySelector('.btc-jpy');
const btcEUR = document.querySelector('.btc-eur');


const getBTCPrice = () => {
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR`)
    .then(result => {
        return result.json();

    })
    .then(data => {
        btcUSD.innerHTML = data.USD;
        btcJPY.innerHTML = data.JPY;
        btcEUR.innerHTML = data.EUR;

    })
    
    
}

getBTCPrice();

//display btc eth price
const btcMultipleUSDApp = document.querySelector('.btc-price-usd');
const btcMultipleEURApp = document.querySelector('.btc-price-eur');
const ethMultipleUSDApp = document.querySelector('.eth-price-usd');
const ethMultipleEURApp = document.querySelector('.eth-price-eur');

const multipleSymbolsPriceApp = () => {
        fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR`)
        .then(result => {
            return result.json();
    
        })
        .then(data => {
            btcMultipleUSDApp.innerHTML = data.BTC.USD;
            btcMultipleEURApp.innerHTML = data.BTC.EUR;
            ethMultipleUSDApp.innerHTML = data.ETH.USD;
            ethMultipleEURApp.innerHTML = data.ETH.EUR;
    
        })
   
};

multipleSymbolsPriceApp();


//display top volumes APIs 
const div = document.getElementById('volumes-wrapper');
const urlVolume = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD`;

const createNode = (e) => {
    return document.createElement(e);
}

const append = (parent, el) => {
    return parent.appendChild(el);

}


const topVolumesDisplayed = () => {
        fetch(urlVolume)
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data.Data);
        let coins = data.Data;
        return coins.map((coin) => {

        let img = createNode('img'),
            name = createNode('li'),
            price = createNode('li'),
            open = createNode('li'),
            high = createNode('li'),
            low = createNode('li'),
            volume = createNode('li')
            wrapper = createNode('div');
            

        name.innerHTML = coin.CoinInfo.FullName;
        img.src = `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`;
        price.innerHTML = `Price: ${coin.RAW.USD.PRICE}`;
        open.innerHTML = `Open: ${coin.RAW.USD.OPENDAY}`;
        high.innerHTML = `High: ${coin.RAW.USD.HIGHDAY}`;
        low.innerHTML = `Low: ${coin.RAW.USD.LOWDAY}`;
        volume.innerHTML = `Volume 24H: ${Math.round(coin.RAW.USD.VOLUME24HOUR)}`;
        append(div, img);
        append(div, name)
        append(div, price)
        append(div, open)
        append(div, high)
        append(div, low)
        append(div, volume)
       
        img.classList.add('scale')
        name.classList.add('bold');
        name.classList.add('margin');
        img.classList.add('margin')
        price.classList.add('margin');
        volume.classList.add('margin');
        open.classList.add('margin');
        high.classList.add('margin');
        low.classList.add('margin');


        })
     

    })
    
};

topVolumesDisplayed();


//Wallet ID generator

let IDdisplayed = document.querySelector('.user-id');
let btnGenerateID = document.querySelector('.btn-generate-id');
let successText = document.querySelector('.success');

btnGenerateID.addEventListener('click', userIdGeneratorDisplayed = () => {
    IDdisplayed.innerHTML = userIdGeneratorDisplayed();

})
userIdGeneratorDisplayed = () => {
    let numbersLetters = "1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx";
    let id = '';
    for (let i = 0; i < 37; i++) {
        let randIndex = Math.floor(Math.random() * numbersLetters.length);
        id = id + numbersLetters[randIndex];
    }
    successText.innerHTML = "Wallet ID Successfully Created!"
    return id;


}




