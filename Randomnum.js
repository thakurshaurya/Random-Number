let Out;
let guess;
let count = 0;
let maxnum = 100 ;
let minnum = 1;
Out = Math.floor(Math.random() * maxnum) + minnum;


//Function For Submit Button
document.getElementById("btn").onclick = function () {
    guess = Number(document.getElementById("inp").value);
    if (isNaN(guess)) {
        document.getElementById("Congrat").textContent = "Please Enter a Valid Number"
    }
    else if (guess > maxnum || guess < minnum) {
        document.getElementById("Congrat").textContent = "Please Enter a Number Between 1 and 10"
    }
    else if (Out == guess) {
        document.getElementById("Congrat").textContent = "!!! Congratulation !!!";
        document.getElementById("Out").textContent = `The Number Was ${Out}, It Took You ${count} Attempts`;
        document.getElementById("image").style.display = "block"
    }
    else {
        document.getElementById("Congrat").textContent = "Try Again :(";
        count++;
        document.getElementById("inp").value = "";
        if(guess<Out){
            document.getElementById("Out").textContent ="A Little Bit Higher"
        }
        else{
            document.getElementById("Out").textContent ="A Little Bit Lower"
        }
    }
}

document.getElementById("inp").value = "";

//Function For Reset Button
document.getElementById("btnreset").onclick = function () {
    document.getElementById("inp").value = "";
    document.getElementById("Congrat").textContent = "";
    document.getElementById("Out").textContent = ``;
    document.getElementById("image").style.display = "";
    count = 0;
    Out = Math.floor(Math.random() * 10 + 1)

}