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

