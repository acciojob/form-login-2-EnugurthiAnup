let form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let first = document.querySelector('#firstname').value;
    let last = document.querySelector('#lastname').value;
    let phone = document.querySelector('#num').value;
    let mail = document.querySelector('#mail').value;

    alert(
        `First Name: ${first} Last Name: ${last} Phone Number: ${phone} Email ID: ${mail}`
    );
});
cy.get('form').submit();