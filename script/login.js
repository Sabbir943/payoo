document.getElementById('btn')
.addEventListener('click',function(){
    const mobileNumber=document.getElementById('mobile-number');
    const number=mobileNumber.value;
    // console.log(number)
    const pinNumber=document.getElementById('pin-number');
    const pin=pinNumber.value;
    // console.log(pin)
    if(number==='01825692898'&&pin==='1234'){
        alert('success');
        window.location.assign('home.html')
    }
    else{
        alert('failed, try again');
        return;
    }

})