
document.getElementById('cashout-btn')
.addEventListener('click',function(){
    const cashoutNumber=getValueInput('cashout-number')
    if(cashoutNumber.length!==11){
        alert('Invalid number');
        return;
    }
     const cashoutAmount=getValueInput('cashout-amount')

     const agentBanlace=getBalnace(); 
     
     const remainingBalace=agentBanlace-Number(cashoutAmount);
     if(remainingBalace<0){
        alert('Invaild balance');
        return;
     }
     const pinNumber=getValueInput('cashout-pin');
     if(pinNumber==='1234'){
        alert('sucessess')
        setBalance(remainingBalace);
        const transHistroy=document.createElement('div');
        transHistroy.innerHTML=` <div class="card bg-base-100 w-full p-5 space-y-2  shadow-md  rounded-lg mt-5">
        
        CAsh-out-Amount- ${cashoutAmount}.<br>
        ${new Date()}
        </div>`
        const rootHistory=document.getElementById('transaction-history');
        rootHistory.appendChild(transHistroy);
     }
     else{
        alert('Invaild pin');
     }
    

})
// document.getElementById('cashout-btn')
// .addEventListener('click',function(){
//     const agentNumber=document.getElementById('cashout-number');
//     const number=agentNumber.value;
//     if(number.length!==11){
//         alert("Invalid number");
//         return ;
//     }
    // console.log(number);

    // const agentAmount=document.getElementById('cashout-amount');
    // const amount=agentAmount.value;
    // const agentBanlace=document.getElementById('balance');
    // const balance= (agentBanlace.innerText);
    // const remainingBalace=Number(balance)-Number(amount);
    // if(remainingBalace<0){
    //     alert('Invaild Balance');
    //     return;
    // }
    
    
    
    //get pin number

    // const agentPin=document.getElementById('cashout-pin');
    // const pin=agentPin.value;
    // if(pin==='1234'){
    //     agentBanlace.innerText=remainingBalace ;
    // }
    // else{
    //     alert('Invalid pin number');
    //     return ;
    // }
    
    

  

// })