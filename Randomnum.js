let Out;
let guess;
Out = Math.floor(Math.random() * 10 + 1)
document.getElementById("btn").onclick = function () {
    guess = Number(document.getElementById("inp").value);
    if (Out == guess) {
        document.getElementById("Congrat").textContent = "!!! Congratulation !!!";
        document.getElementById("Out").textContent = `The Number Was ${Out}`;
        document.getElementById("image").style.display = "block"
    }
    else {
        document.getElementById("Congrat").textContent = "Try Again :(";
    }
}
document.getElementById("inp").value = 1;