let button = document.getElementById("button");

function letterGrade(){
    let name = parseFloat(document.getElementById("name").value);
    let number = parseFloat(document.getElementById("stdNumber").value);
    let score = parseFloat(document.getElementById("score").value);
    
   
    if (score >= 100)
    {
        alert(`your score can not be grater than 100 `);
    }
    else if (score>= 90)
    {
        alert(`your letter grade is 'A'`);
    }
    else if (score>= 80)
    {
        alert(`your letter grade is 'B'`);
    }
    else if (score>= 70)
    {
        alert(`your letter grade is 'C'`);
    }
    else if (score>= 60)
    {
        alert(`your letter grade is 'D'`);
    }
    else
    {
        alert(`your letter grade is 'F'`);
    }
}


button.addEventListener("click", letterGrade);