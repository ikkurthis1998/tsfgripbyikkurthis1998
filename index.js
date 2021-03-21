let gripNavElement = document.getElementById("gripNav");
let benefitsNavElement = document.getElementById("benefitsNav");
let knowmoreNavElement = document.getElementById("knowmoreNav");
let supportNavElement = document.getElementById("supportNav");
let applyNowElement = document.getElementById("applyNow");
let logoIconElement = document.getElementById("logoIcon");

logoIconElement.onclick = function() {
    gripNavElement.classList.add("active");
    benefitsNavElement.classList.remove("active");
    knowmoreNavElement.classList.remove("active");
    supportNavElement.classList.remove("active");
}

gripNavElement.onclick = function() {
    console.log(1);
    gripNavElement.classList.add("active");
    benefitsNavElement.classList.remove("active");
    knowmoreNavElement.classList.remove("active");
    supportNavElement.classList.remove("active");
}

benefitsNavElement.onclick = function() {
    gripNavElement.classList.remove("active");
    benefitsNavElement.classList.add("active");
    knowmoreNavElement.classList.remove("active");
    supportNavElement.classList.remove("active");
}

knowmoreNavElement.onclick = function() {
    gripNavElement.classList.remove("active");
    benefitsNavElement.classList.remove("active");
    knowmoreNavElement.classList.add("active");
    supportNavElement.classList.remove("active");
}

supportNavElement.onclick = function() {
    gripNavElement.classList.remove("active");
    benefitsNavElement.classList.remove("active");
    knowmoreNavElement.classList.remove("active");
    supportNavElement.classList.add("active");
}

applyNowElement.onclick = function() {
    console.log(1);
    let elmnt = document.getElementById("application");
    elmnt.scrollIntoView();
}
