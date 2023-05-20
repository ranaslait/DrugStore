let signupBtn=document.getElementById("signupBtn");
        let signinBtn=document.getElementById("signinBtn");
        let nameField=document.getElementById("nameField");
        let title=document.getElementById("title");
        signinBtn.onclick=function(){
            nameField.style.maxHeight="0";
             title.innerHTML="Sign in";
             signupBtn.classList.add("disable")
             signinBtn.classList.remove("disable")
        }

        signupBtn.onclick=function(){
            nameField.style.maxHeight="60px";
             title.innerHTML="Sign up";
             signupBtn.classList.remove("disable")
             signinBtn.classList.add("disable")
        }


window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var counter=1;
        setInterval(function(){
            document.getElementById('radio'+counter).checked=true;
            counter++;
            if(counter>3){
                counter=1;
            }
        },5000);