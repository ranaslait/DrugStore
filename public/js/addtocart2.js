function appear() {
    let sq = document.getElementsByClassName("split");
    if (sq[0].style.opacity == 0) {
        sq[0].style.display="block";
        //sq[0].style.opacity = 1;
        //sq[0].style.visibility = "visible";
    }
    
}
function ex(){
    let s = document.getElementsByClassName("split");
    s[0].style.display="none";
   
    
}
function count(meen) {
    let quantityinput=document.getElementById("quantity");
    let minus = document.getElementById("minus");
    let val = document.getElementById("value");
    let add = document.getElementById("add");
    let countNum = parseInt(val.innerHTML);
    if (meen == 'minus') {
        if (countNum > 1) {
          quantityinput.value=parseInt(quantityinput.value)-1;
        }
    }
    if (meen == 'add') {
        quantityinput.value=parseInt(quantityinput.value)+1;
    }
}