document.getElementById('coponBtn')
.addEventListener('click',function(){
    const getCupon=getValueInput('getCupon');
    if(getCupon==='eid-26'){
        alert('cupon apply granted')
        const applyBonus=getBalnace()+Number(5000);
        setBalance(applyBonus);
          const transHistroy = document.createElement('div');
            transHistroy.innerHTML = ` <div class="card bg-base-100 w-full p-5 space-y-2  shadow-md  rounded-lg mt-5">
        
        The applied cupon- ${getCupon}.<br>
        ${new Date()}
        </div>`
            const rootHistory = document.getElementById('transaction-history');
            rootHistory.appendChild(transHistroy);

    }
    else{
        alert('Invaild cupon!');
        return;
    }
    
})