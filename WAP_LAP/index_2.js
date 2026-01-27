const RandomNumberGeneratorBtn = document.getElementById("generate-random-number");
const randomNumberValueElement = document.getElementById("random_number");

RandomNumberGeneratorBtn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * 100);
    randomNumberValueElement.textContent = random;
})