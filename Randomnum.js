let Out;
let guess;
let count = 0;
Out = Math.floor(Math.random() * 10 + 1)
document.getElementById("btn").onclick = function () {
    guess = Number(document.getElementById("inp").value);
    if (Out == guess) {
        document.getElementById("Congrat").textContent = "!!! Congratulation !!!";
        document.getElementById("Out").textContent = `The Number Was ${Out}, You Tried ${count} Times`;
        document.getElementById("image").style.display = "block"
    }
    else {
        document.getElementById("Congrat").textContent = "Try Again :(";
        count++;
        document.getElementById("inp").value = "";

    }
}
document.getElementById("inp").value = "";
document.getElementById("btnreset").onclick = function () {
    document.getElementById("inp").value = "";
    document.getElementById("Congrat").textContent = "";
    document.getElementById("Out").textContent = ``;
    document.getElementById("image").style.display = "";
    count = 0;
    Out = Math.floor(Math.random() * 10 + 1)

}