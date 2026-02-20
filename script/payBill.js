document.getElementById('pay-bill-btn')
.addEventListener('click',function(){
    const selectPayBill=getValueInput('pay-bill-selected');
   if(selectPayBill==='Select pay'){
    alert('select pay bill option');
    return;
   }
   const payAccountNumber=getValueInput('pay-bill-number');
   if(payAccountNumber.length!==11){
    alert('Invaild Acount Number');
    return ;
   }
   const payAmount=getValueInput('pay-bill-amount');
   const containBalance=getBalnace()-Number(payAmount);
   if(containBalance<0){
    alert('Invaild amount');
    return ;
   }

   const payPin=getValueInput('pay-bill-password');
   if(payPin==='1234'){
    alert('Success the pay');
    setBalance(containBalance);
     const transHistroy=document.createElement('div');
        transHistroy.innerHTML=` <div class="card bg-base-100 w-full p-5 space-y-2  shadow-md  rounded-lg mt-5">
        
        pay-bill-Amount- ${payAmount}.<br>
        ${new Date()}
        </div>`
        const rootHistory=document.getElementById('transaction-history');
        rootHistory.appendChild(transHistroy);
   }
   else{
    alert('invaild pin number');
    return;
   }
})