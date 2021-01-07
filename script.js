   //random number display in genarate pin 
   document.getElementById("genernateBtn").addEventListener("click",function name(params) {
    document.getElementById("displayRandom").value = Math.round(1000 + Math.random() * 9000);
})

//log in area
function calculate(x){
    display.value=display.value+ x;
}

//pin matching check
document.getElementById("submitBtn").addEventListener("click",function name(params) {
    if (displayRandom.value == display.value ) {
        document.getElementById("matchDisplay").style.display="block";
         document.getElementById("notMatchDisplay").style.display="none";

}


else if (displayRandom.value != display.value) {
document.getElementById("notMatchDisplay").style.display="block";
document.getElementById("matchDisplay").style.display="none";

}
    })

//try left fixed

document.getElementById("submitBtn").addEventListener("click",function name(params) {
    const trytHtml= document.getElementById("tryOptionFixed");
    const countTry = parseInt(trytHtml.innerHTML);
    const newTry = countTry - 1;
    trytHtml.innerHTML = newTry ;
    const totalLeft = newTry;

    document.getElementById("tryOptionFixed").innerHTML = totalLeft;
    if (totalLeft == 0) {
        document.getElementById("submitBtn").style.display = "none";
    }
})