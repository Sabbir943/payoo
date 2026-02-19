document.getElementById('cashout-btn')
.addEventListener('click',function(){
    const agentNumber=document.getElementById('cashout-number');
    const number=agentNumber.value;
    if(number.length!==11){
        alert("Invalid number");
        return ;
    }
    // console.log(number);

    const agentAmount=document.getElementById('cashout-amount');
    const amount=agentAmount.value;
    const agentBanlace=document.getElementById('balance');
    const balance= (agentBanlace.innerText);
    const remainingBalace=Number(balance)-Number(amount);
    if(remainingBalace<0){
        alert('Invaild Balance');
        return;
    }
    
    
    
    //get pin number

    const agentPin=document.getElementById('cashout-pin');
    const pin=agentPin.value;
    if(pin==='1234'){
        agentBanlace.innerText=remainingBalace ;
    }
    else{
        alert('Invalid pin number');
        return ;
    }
    
    

  

})