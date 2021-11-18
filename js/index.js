let getBtn = document.querySelector(".login-btn");
getBtn.addEventListener("click",function(){
    let hideDiv = document.querySelector(".login-box");
    let showDiv = document.querySelector(".next");
    hideDiv.style.display = "none";
    showDiv.style.display = "block";
});