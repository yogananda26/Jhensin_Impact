/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Add icon
            iconEye.classList.add('ri-eye-line')

            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'

            // Remove icon
            iconEye.classList.remove('ri-eye-line')

            // Add icon
            iconEye.classList.add('ri-eye-off-line')

        }
    })
}

showHiddenPass('input-pass','input-icon')

/*=============== SHOW HIDDEN - CONFIRM PASSWORD ===============*/
const showHiddenPassc = (inputPassc, inputIconc) =>{
    const inputc = document.getElementById(inputPassc),
        iconEyec = document.getElementById(inputIconc)

    iconEyec.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Add icon
            iconEyec.classList.add('ri-eye-line')

            // Remove icon
            iconEyec.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'

            // Remove icon
            iconEyec.classList.remove('ri-eye-line')

            // Add icon
            iconEyec.classList.add('ri-eye-off-line')

        }
    })
}

showHiddenPass('input-passc','input-iconc')

const nameuser = document.getElementById('nameuser');
const age = document.getElementById('age');
const useruser = document.getElementById('usernameuser');
const email = document.getElementById('email');
const password = document.getElementById('input-pass');
const passwordconfirm = document.getElementById('input-passc');

let isvalidName = false;
let isvalidAge = false;
let isvalidUser = false;
let isvalidEmail = false;
let isvalidPassword = false;
let isvalidConfPass = false;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error')
    }

const validateInputs = () => {
    const nameValue = nameuser.value.trim();
    const ageValue = age.value.trim();
    const useruserValue = useruser.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = passwordconfirm.value.trim();

    if(nameValue === ''){
        setError(nameuser, 'Name is required');
    } else if(nameValue.includes("1") || nameValue.includes("2") || nameValue.includes("3") || nameValue.includes("4") || nameValue.includes("5") || nameValue.includes("6") || nameValue.includes("7") || nameValue.includes("8") || nameValue.includes("9") || nameValue.includes("0")){
        setError(nameuser, 'Provide only alphabet');
    } else {
        setSuccess(nameuser);
        isvalidName = true;
    }

    if(ageValue === ''){
        setError(age, 'Age is required');
        isvalidAge = false;
    } else if(ageValue < 17){
        setError(age, 'Age must more than 17');
        isvalidAge = false;
    } else {
        setSuccess(age);
        isvalidAge = true;
    }

    if(!useruserValue.includes("0") && !useruserValue.includes("1") && !useruserValue.includes("2") && !useruserValue.includes("3") && !useruserValue.includes("4") && !useruserValue.includes("5") && !useruserValue.includes("6") && !useruserValue.includes("7") && !useruserValue.includes("8") && !useruserValue.includes("9")){
        setError(useruser, 'Must contain number');
        isvalidUser = false;
    } else {
        setSuccess(useruser);
        isvalidUser = true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        isvalidEmail = false;
    } else if(!emailValue.includes("@gmail.com") && !emailValue.includes("@yahoo.com")){
        setError(email, 'Provide an email with @gmail.com or @yahoo.com');
        isvalidEmail = false;
    } else {
        setSuccess(email);
        isvalidEmail = true;
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        isvalidPassword = false;
    } else if (passwordValue.length < 7) {
        setError(password, 'Password must be at least 7 characters.')
        isvalidPassword = false;
    } else {
        setSuccess(password);
        isvalidPassword = true;
    }

    if(confirmpasswordValue === '') {
        setError(passwordconfirm, 'Password is required');
        isvalidConfPass = false;
    } else if(confirmpasswordValue != passwordValue){
        setError(passwordconfirm, 'Password must be same as first password!');
        isvalidConfPass = false;
    } else if(isvalidName && isvalidAge && isvalidUser && isvalidEmail && isvalidPassword && isvalidConfPass){
        nameuser.value = '';
            age.value = '';
            useruser.value = '';
            email.value = '';
            password.value = '';
            passwordconfirm.value = '';
            alert('ACCOUNT SUCESSFULLY REGISTERED!');
            window.location.href="landing_page.html";
    }
    else {
        setSuccess(passwordconfirm);
        isvalidConfPass = true;
    }

    
}