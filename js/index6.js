let button = document.getElementById("button");
let makeup = document.getElementById("makeup"); 

function passFail(){
  let test1= parseFloat(document.getElementById("test1").value);
  let test2= parseFloat(document.getElementById("test2").value);
  let test3= parseFloat(document.getElementById("test3").value);
  let avg =(test1 + test2 +test3)/3;
  if (avg >= 50)
  {
      alert(`Pass`);
  } 
  else
  {
    alert('Fail');
    document.getElementById('notfail').classList.replace("notfail", "fail");
  }

}
function newpassFail(){
    let makeupmarks = document.getElementById("makeuptest").value;
    if (makeupmarks >=65)
    {
        alert('you have now passed');
    }
    else
    {
        alert('you have failed again');
    }
}



button.addEventListener("click", passFail);
makeup.addEventListener("click", newpassFail);