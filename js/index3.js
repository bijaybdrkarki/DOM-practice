let button = document.getElementById("button");

function checkOddEven(){
    let number = parseInt(document.getElementById("number").value);
    
    if (number%2 == 0)
    {
        alert(`${number} is even`);
    }
    else
    {
        alert(`${number} is odd`);
    }
}


button.addEventListener("click", checkOddEven);