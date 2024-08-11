const qrInput = document.getElementById('qr-input');
const qrImg = document.getElementById('qr-img');
const qrButton = document.getElementById('qr-button');

console.log(qrInput,qrImg,qrButton);
qrButton.addEventListener('click', () => {
    const inputValue = qrInput.value;
    console.log(inputValue);

    if(inputValue === ''){
        alert('Please Enter a valid URL');
        return;
    } else{
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImg.alt=`QR Code for ${inputValue}`;
    }
})