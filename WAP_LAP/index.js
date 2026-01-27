let initialValue = 0;

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const counterValue = document.getElementById("counter");

increaseBtn.addEventListener("click", function () {
    initialValue++;
    counterValue.textContent = initialValue;
});

decreaseBtn.addEventListener("click", function () {
    initialValue--;
    counterValue.textContent = initialValue;
});

resetBtn.addEventListener("click", function () {
    initialValue = 0;
    counterValue.textContent = initialValue;
});