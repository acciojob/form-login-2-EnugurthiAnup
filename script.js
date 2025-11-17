let first = document.querySelector('#firstname');
let last = document.querySelector('#lastname');
let phone = document.querySelector('#num');
let mail = document.querySelector('#mail');
let sub = document.querySelector('button');

sub.addEventListener('click', () => {
    alert(`First Name: ${first.value} Last Name: ${last.value} Phone Number: ${phone.value} Email ID: ${mail.value}`);
});
