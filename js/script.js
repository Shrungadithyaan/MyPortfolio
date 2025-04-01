//prevent right click

document.oncontextmenu = () =>{
    alert("Don't try right click")
    return false
}

document.onkeydown = e => {
    //prevent f12 key
    if(e.key == "f12"){
        alert("Don't try to inspect element") 
        return false
    }

    //prevent showing page source by ctrl + u
    if(e.ctrlKey && e.key == "u"){
        alert("Don't try to view page sources") 
        return false
    }

    //prevent copying anything from page 
    if(e.ctrlKey && e.key == "c"){
        alert("Don't try to copy page element") 
        return false
    }

    //prevent paste anything from other source 
    if(e.ctrlKey && e.key == "v"){
        alert("Don't try to paste anything to page ") 
        return false
    }
}
// disable developer mode
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



// send email
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,

    }

    emailjs.send("service_mtxjko9","template_dqf3z9v",parms).then(alert("Email sent!!..."))
}



// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["android development", "web development" , "backend development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->