const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

inputField.addEventListener('input' , function(){
    console.log(inputField.value);

    let password = inputField.value;
    if(password.length < 8)
    {
        outputField.innerText = 'Password is TOO Short';
        outputField.computedStyleMap.color = 'red';
    }else{
        outputField.innerText = 'Password is Valid';
        outputField.computedStyleMap.color = 'green';
    }
    // The condition is ki yrr uppercase , lowercase ho ek numeric ho , yaa special 
    // character present ho

    if(password.search(/[a-z]/) == -1){
        outputField.innerText = 'Password is missing a lowercase letter';
        outputField.style.color = 'red';
    }else if(password.search(/[A-Z]/) == -1){
        outputField.innerText = 'Password is missing a UpperCase letter';
        outputField.style.color = 'red';
    }else if(password.search(/[0-9]/) == -1){
        outputField.innerText = 'Password is missing a Numeric letter';
        outputField.style.color = 'red';
    }else if(password.search(/[!\@\#\!\{\}\$\%\(\)\_\+\-\<\>\?\|\[\]\;\'\,\.]/) == -1){
        outputField.innerText = 'Password is missing a UpperCase letter';
        outputField.style.color = 'red';
    }else{
        outputField.innerText = 'Password is Strong';
        outputField.style.color = 'green';
    }
}