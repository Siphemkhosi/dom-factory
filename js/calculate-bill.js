//get a reference to the calculate button
const aButton = document.querySelector(".calculateBtn");


//get a reference to the billTotal element
const billTotalcost = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");


//create the function that will be called when the calculate button is pressed
 
function calculateBtnClicked(){
    var billString = billStringElement.value;
    var billTotal = 0;
//  * this function should read the string value entered - split it on a comma.
var billItems = billString.split(",");
//  * loop over all the entries in the the resulting list
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
//  * check if it is a call or an sms and add the right amount to the overall total
if (billItem.toLowerCase() === "call"){
    billTotal += 2.75;
}
else if (billItem.toLowerCase() === "sms"){
    billTotal += 0.75;
}
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

}

 var roundedBillTotal = billTotal.toFixed(2);
billTotalcost.innerHTML = roundedBillTotal;

// let colorWarn = document.querySelector(".warning:checked")
billTotalcost.classList.remove("danger");
billTotalcost.classList.remove("warning");
//000000000000000
if(roundedBillTotal>20 && roundedBillTotal<30){
    billTotalcost.classList.add("warning");
}else if(roundedBillTotal>30){
        billTotalcost.classList.add("danger");
}

}

//link the function to a click event on the calculate button


aButton.addEventListener('click', calculateBtnClicked);
// const colorWarn = document.querySelector(".warning:checked")
//document.getElementByClass(".billTotal").style.color = "orange";
// const billItems = billStringElement.value;
// const total = billTotal.value;
// billTotal.innerHTML = total


