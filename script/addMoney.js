


document.getElementById('add-money-btn')
.addEventListener('click',function(){
    const addMoneyBank=getValueInput('add-money-select');
    if(addMoneyBank=='Select bank'){
        alert('select the bank ')
        return;
    }

    const accNo=getValueInput('add-money-number');
    if(accNo.length!==11){
        alert('invaild accNo');
        return;
    }

    const amount=getValueInput('add-money-amount');
    const currentAmount=getBalnace();
    const newBanlance=currentAmount+Number(amount) ;

    const pinNo=getValueInput('add-money-pin');
    if(pinNo==='1234'){
        alert(`Bank Account from ${addMoneyBank} at ${new Date()}`);
        setBalance(newBanlance);
        const transHistroy=document.createElement('div');
        transHistroy.innerHTML=` <div class="card bg-base-100 w-full p-5 space-y-2  shadow-md  rounded-lg mt-5">
        Add money from-${addMoneyBank}.<br>
        Amount- ${amount}.<br>
        ${new Date()}
        </div>`
        const rootHistory=document.getElementById('transaction-history');
        rootHistory.appendChild(transHistroy);
    }
    else{
        alert('Invalid pin')
    }
})