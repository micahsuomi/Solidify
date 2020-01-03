let IDdisplayed = document.querySelector('.user-id');
let btnGenerateID = document.querySelector('.btn-generate-id');
let successText = document.querySelector('.success');

btnGenerateID.addEventListener('click', userIdGeneratorDisplayed = () => {
    IDdisplayed.innerHTML = userIdGeneratorDisplayed();

})
userIdGeneratorDisplayed = () => {
    let numbersLetters = "1234567890ABCDEFGHJKILMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyx".split("");
    let idContainer = [];
    for (let i = 0; i < 37; i++) {
        let randomNum = numbersLetters[Math.floor(Math.random() * numbersLetters.length)];
        idContainer.push(randomNum);
    }
    let idContainerJoined = idContainer.join("");
    successText.innerHTML = "Wallet ID Successfully Created!"
    return idContainerJoined;


}

//display top volumes APIs 
const coinID = document.querySelector('.coin-id');
const coinImg = document.querySelector('.img-container');
const coinName = document.querySelector('.coin-name');
const coinProofType = document.querySelector('.coin-proof-type');
const ul = document.getElementById('volumes');

const volumes = document.getElementById('volumes');
const urlVolume = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;

const createNode = (e) => {
    return document.createElement(e);
}

const append = (parent, el) => {
    return parent.appendChild(el);

}

const topVolumesDisplayed = () => {
    fetch(urlVolume)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data => {
        let coins = data.Data;
        console.log(coins);
        let p = createNode('p'),
        img = createNode('img');
        p.innerHTML = coins.map(coin => coin.CoinInfo.FullName);
        img.src = coins.map(coin => `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`)
        append(p, img);
        append(ul);

    })
};


topVolumesDisplayed();
//display top marketCap APIs

const topMarketCapDisplayed = () => {
    fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`)
    .then(result => {
        console.log(result);
        return result.json();

    })
    .then(data => {
        console.log(data);
        

    })
};

topMarketCapDisplayed();
