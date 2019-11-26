let button = document.getElementById("button");

function calculateHrs(){
    let hours = parseFloat(document.getElementById("hrs").value);
    let parts = parseFloat(document.getElementById("parts").value);
    let total = parseFloat( hours*100 + parts);
    if (total >=150)
    {
        alert(`your total cost is ${total} `);
    }
    else
    {
        alert(`your total cost is $150`);
    }
}


button.addEventListener("click", calculateHrs);