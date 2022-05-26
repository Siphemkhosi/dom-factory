function billWithSettings() {
let myCallCost = 0;
let mySmsCost = 0;
let myWarningllevel= 0;
let myCriticallevel = 0;
let smsTotal = 0;
let callTotal = 0;
    function setCallCost(callCostSetting) {
        myCallCost = callCostSetting;
    }

    function billCallCost(){
        return myCallCost;
    }
    function setSmsCost( smsCostSetting) {
        mySmsCost =  smsCostSetting;
    }

    function billSmsCost(){
        return mySmsCost;
    }
    function setWarningLevel( warningLevelSetting) {
        myWarningllevel =  warningLevelSetting;
    }

    function billWarningLevel(){
        return  myWarningllevel;
    }
    function   setCriticalLevel(criticalLevelSetting) {
        myCriticallevel = criticalLevelSetting;
    }

    function billCriticalLevel(){
        return  myCriticallevel;
    }
function Call(){
    if(!criticalLevelReached()){
    callTotal += myCallCost ;
    }
}
function Sms(){
    if(!criticalLevelReached()){
    smsTotal += mySmsCost ;
    }
}
function billTotalCost(){
return (callTotal +  smsTotal).toFixed(2);
}
function billTotalCallCost(){
 return callTotal.toFixed(2);
}
function billTotalSmsCost(){
 return smsTotal.toFixed(2);
}
function criticalLevelReached(){
    return billTotalCost() >= billCriticalLevel();
}
function totalClassName(){
    if(billTotalCost() >= billWarningLevel() && billTotalCost() < billCriticalLevel() ){
        return "warning";
    }
    
   if(criticalLevelReached()) {
       return "danger";
   }
 
}

    return{
        setCallCost,
        billCallCost,
        setSmsCost,
        billSmsCost,
        setWarningLevel,
        billWarningLevel,
        setCriticalLevel,
        billCriticalLevel,
        Call,
        Sms,
        billTotalCost,
        billTotalCallCost,
        billTotalSmsCost,
        totalClassName

    }
}