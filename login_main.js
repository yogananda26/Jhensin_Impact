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

showHiddenPass('input-pass','input-icon');


// VALIDATION

const email = document.getElementById('email');
const password = document.getElementById('input-pass');

let isvalidEmail = false;
let isvalidPassword = false;

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

const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error')
    }

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
        isvalidEmail = false;
    } else if(!emailValue.includes("@gmail.com")){
        setError(email, 'Provide an email with @gmail.com');
        isvalidEmail = false;
    } else {
        setSuccess(email);
        isvalidEmail = true;
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        isvalidPassword = false;
    } else if (passwordValue.length < 7) {
        setError(password, 'Password must be at least 7 characters.');
        isvalidPassword = false;
    } else {
        setSuccess(password);
        isvalidPassword = true;
    }

    if(isvalidEmail && isvalidPassword){

            email.value = '';
            password.value = '';
            alert('ACCOUNT SUCESSFULLY LOGIN!');
            window.location.href="landing_page.html";
    }

};


// let popup = document.getElementById("popup");

// function openPopup(){
//     popup.classList.add("open-popup");
// }

// function closePopup(){
//     popup.classList.remove("open-popup");
// }