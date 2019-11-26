let button = document.getElementById("button");



function convertweight(){
    let name = document.getElementById("userName").value;
    let weight = parseFloat(document.getElementById("Weight").value);
   let weightInpound = (weight * 2.2).toFixed(2);
   alert(`${name} weight in pound is ${weightInpound}`);
}

button.addEventListener("click", convertweight);