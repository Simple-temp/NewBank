/*get email and pass*/
let getBtn = document.querySelector(".login-btn");
getBtn.addEventListener("click",function(){
    let isEmail = "example@gmail.com";
    let isPass = 1234;
    let getEmail = document.querySelector("#getEmail").value;
    let getPass = document.querySelector("#getPass").value;
    let Massage = document.querySelector("#massage");
    let MassageHack = document.querySelector("#massagehack");
    let hideDiv = document.querySelector(".login-box");
    let showDiv = document.querySelector(".NextPage");
    if (isEmail==getEmail && isPass==getPass)
    {
        hideDiv.style.display = "none";
        showDiv.style.display = "block";
        MassageHack.innerHTML = "Hack korar ki khub dorkar chilo ne ja ache shob niye jaa";
        MassageHack.style.color = "red";
        MassageHack.style.fontSize = "14px";
        MassageHack.style.textTransform = "uppercase";
        MassageHack.style.fontWeight = "bold";
    } 
    else if (getPass=="")
    {
        Massage.innerHTML = "Hack korish na vai kissu nai ..<br> email r password ta dee";
        Massage.style.color = "red";
        Massage.style.fontSize = "14px";
        Massage.style.textTransform = "uppercase";
        Massage.style.fontWeight = "bold";
    }
    else if (getEmail=="")
    {
        Massage.innerHTML = "Hack korish na vai kissu nai ..<br> email r password ta dee";
        Massage.style.color = "red";
        Massage.style.fontSize = "14px";
        Massage.style.textTransform = "uppercase";
        Massage.style.fontWeight = "bold";
    }
    else 
    {
        Massage.innerHTML = "Hack korish na vai kissu nai ..<br> email r password ta dee";
        Massage.style.color = "red";
        Massage.style.fontSize = "14px";
        Massage.style.textTransform = "uppercase";
        Massage.style.fontWeight = "bold";
    }
});

/*deposit button handler*/

const depositBtn = document.getElementById("depositAmountBtn");
depositBtn.addEventListener("click",function(){

        const depositNum = getInputNumber("depositAmount");

            updateSpanText("currentDeposit",depositNum);
    
            updateSpanText("currentBalance",depositNum);
        
        
            document.getElementById("depositAmount").value ="";
})


/*withdrow button handler*/

const withdrowBtn = document.getElementById("withdrowAmountBtn");
withdrowBtn.addEventListener("click",function(){

    const withdrowNum = getInputNumber("withdrowAmount");

    updateSpanText("currentWithdrow", withdrowNum);

    updateSpanText("currentBalance", -1* withdrowNum);


    document.getElementById("withdrowAmount").value ="";

})


/*get input number form the transaction area*/

function getInputNumber(id)
{
    const amount = document.getElementById(id).value;
    const amountNumber =parseFloat(amount);
    return amountNumber;
}


/*update span text*/

function updateSpanText(id,addedNumber)
{
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


