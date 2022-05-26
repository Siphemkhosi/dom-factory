describe("The test for the bill with setting factory function", function(){
    it("set the call cost ", function() {
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.00);
        assert.equal(2.00, settingsBill.billCallCost());
        settingsBill.setCriticalLevel(21);
        it("should print sms price if sms string is entered ", function() {
            assert.equal(0.75,  calculateBill("sms"))
        });
        
    });
    it("set the sms cost ", function() {
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(1.50);
        assert.equal(1.50, settingsBill.billSmsCost());
        
      
        
    });
  
    it("set the Warning level ", function() {
        let settingsBill = billWithSettings();
        settingsBill.setWarningLevel(10.00);
        assert.equal(10.00, settingsBill.billWarningLevel());
        
    });
    it("set the Critical level ", function() {
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLevel(30.00);
        assert.equal(30.00, settingsBill.billCriticalLevel());
        
    });
     describe("use the values", function(){
     it("use call set values", function() {
    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(21);
    settingsBill.setSmsCost(1.50);
    settingsBill.setCallCost(2.00);

    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();

    assert.equal(6.00,settingsBill.billTotalCost());
    assert.equal(6.00,settingsBill.billTotalCallCost());
    assert.equal(0.00,settingsBill.billTotalSmsCost());



});
it("should take 2 call costs at 3.50 each", function(){
let settingsBill = billWithSettings();
settingsBill.setCriticalLevel(21);
settingsBill.setCallCost(3.50);
settingsBill.setSmsCost(1.50);
settingsBill.Call();
settingsBill.Call();
assert.equal(7.00, settingsBill.billTotalCost());
assert.equal(7.00, settingsBill.billTotalCallCost());
assert.equal(0.00, settingsBill.billTotalSmsCost());

});
it("should take 2 sms costs at 1.50 each", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCriticalLevel(21);
    settingsBill.setCallCost(3.50);
    settingsBill.setSmsCost(1.50);
    settingsBill.Sms();
    settingsBill.Sms();
    assert.equal(3.00, settingsBill.billTotalCost());
    assert.equal(0.00, settingsBill.billTotalCallCost());
    assert.equal(3.00, settingsBill.billTotalSmsCost());
    
    });
    it("should take 2 sms costs at 1.50 each and 2 calls at 3.50 each", function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLevel(21);
        settingsBill.setCallCost(3.50);
        settingsBill.setSmsCost(1.50);
        settingsBill.Sms();
        settingsBill.Sms();
        settingsBill.Call();
        settingsBill.Call();
        assert.equal(10.00, settingsBill.billTotalCost());
        assert.equal(7.00, settingsBill.billTotalCallCost());
        assert.equal(3.00, settingsBill.billTotalSmsCost());
        
        });
 })
 describe(" use the warning  and critical levels", function(){
it("should  show the warning level as yellow when reached the waring level value", function(){
  let settingsBill = billWithSettings();
  settingsBill.setCallCost(1.50);
  settingsBill.setSmsCost(0.50);
  settingsBill.setWarningLevel(5.00);
  settingsBill.setCriticalLevel(10.00);
 settingsBill.Sms();
 settingsBill.Sms();
 settingsBill.Sms();
 settingsBill.Sms();
 settingsBill.Call();
 settingsBill.Call();
 console.log(settingsBill.billWarningLevel());
 console.log(settingsBill.totalClassName())
assert.equal("warning", settingsBill.totalClassName());
 

});
it("should  show the critical level as red when reached the waring level value", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCallCost(3.50);
    settingsBill.setSmsCost(1.50);
    
    settingsBill.setCriticalLevel(20.00);
    settingsBill.Sms();
    settingsBill.Sms();
    settingsBill.Sms();
    settingsBill.Sms();
    settingsBill.Sms();
    settingsBill.Sms();
    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();
  
    
    assert.equal("critical", settingsBill.totalClassName());
   
  
  });
  it("should  stop counting when  the critical level value has been reached", function(){
    let settingsBill = billWithSettings();
    settingsBill.setCallCost(3.50);
    settingsBill.setSmsCost(1.50);
    
    
    settingsBill.setCriticalLevel(21.00);
    
    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();
    settingsBill.Call();
  
    
    assert.equal("critical", settingsBill.totalClassName());
    assert.equal(21, settingsBill.billTotalCallCost());
   
  
  });

 });
})