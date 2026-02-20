document.getElementById('transfer-btn')
    .addEventListener('click', function () {
        const transferAccountNumber = getValueInput('transferNumber')
        if (transferAccountNumber.length !== 11) {
            alert('invalid number');
            return;
        }
        const transferAmount = getValueInput('transferAmount');
        const mainBalance = getBalnace();
        const containBalace = mainBalance - Number(transferAmount);
        if (containBalace < 0) {
            alert('invaild amount');
            return;
        }
        const transferPin = getValueInput('transferPin');
        if (transferPin === '1234') {
            alert('success');
            setBalance(containBalace);
            const transHistroy = document.createElement('div');
            transHistroy.innerHTML = ` <div class="card bg-base-100 w-full p-5 space-y-2  shadow-md  rounded-lg mt-5">
        
        Transfer-Amount- ${transferAmount}.<br>
        ${new Date()}
        </div>`
            const rootHistory = document.getElementById('transaction-history');
            rootHistory.appendChild(transHistroy);

        }
        else {
            alert("Invalid password");
            return;
        }
    })