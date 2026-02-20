function getValueInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    
    return value;
}
// current balance

function getBalnace(){
    const balanceElement=document.getElementById('balance');
    const balance=balanceElement.innerText;
    return Number(balance);
}
// set money
function setBalance(value){
    const balanceElement=document.getElementById('balance');
    balanceElement.innerText=value;
}
//show only function

function showOnly(id){
    const addMoney=document.getElementById('addMoney');
    const cashMoney=document.getElementById('cashOut');
    const tranferMoney=document.getElementById('transferMoney')
    const getBonus=document.getElementById('getBonus');
    const payBill=document.getElementById('payBill');
    const history=document.getElementById('transaction');

    addMoney.classList.add('hidden');
    cashMoney.classList.add('hidden');
    tranferMoney.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');
    history.classList.add('hidden');
    const selected=document.getElementById(id);
    selected.classList.remove('hidden');
    
}