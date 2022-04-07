const form = document.getElementsByClassName('form-register');
const inputs =document.querySelectorAll('#form-register input');
const expresions= {
    names:/^([a-z\.]){1,40}$/,
    emails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,8}/,
    password:/^.{4,12}$/
}
