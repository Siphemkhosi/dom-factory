// get a reference to the textbox where the bill type is to be entered
//get a reference to the add button
const aButtonAdd = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callBillTotalElem= document.querySelector(".callTotalOne");
const smsBillTotalElem = document.querySelector(".smsTotalOne");
const totalBillTotalElem = document.querySelector(".totalOne");


//add an event listener for when the add button is pressed


var roundedBillTotal3t = 0;
   
var callTotalt = 0;
var smsTotalt = 0;

function calculateBtnClicked2(){
   


 const aButtonText = document.querySelector(".billTypeText");
//  let regExp = /[a-z A-Z]*/;

if(aButtonText){

    var billString =  aButtonText.value.trim();
}

if(billString.toLowerCase() === "call"){
    callTotalt += 2.75;
}else if(billString.toLowerCase() === "sms"){
    smsTotalt += 0.75;

}


var roundedBillTotal1t =   callTotalt.toFixed(2);
callBillTotalElem.innerHTML = roundedBillTotal1t;

var roundedBillTotal2t =   smsTotalt.toFixed(2);
smsBillTotalElem.innerHTML = roundedBillTotal2t;


roundedBillTotal3t = Number(roundedBillTotal1t) + Number(roundedBillTotal2t)
totalBillTotalElem.innerHTML = roundedBillTotal3t.toFixed(2);


if(roundedBillTotal3t>=30 && roundedBillTotal3t<50){
    totalBillTotalElem.classList.add("warning");
}else if(roundedBillTotal3t>50){
    totalBillTotalElem.classList.add("danger");
}

}
aButtonAdd.addEventListener('click',calculateBtnClicked2);

