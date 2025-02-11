'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const passwords = document.querySelectorAll('[type=password]');

    passwords.forEach(password => {
        //password.className = 'form-control';
        
        const ojo = document.createElement('button');

        ojo.type = 'button';
        ojo.className = 'btn bx-2';
        const icon = document.createElement('i');
        ojo.appendChild(icon);
        icon.className = 'bi-eye-slash-fill';

        const contenedorPassword = document.createElement('div');       
        contenedorPassword.className = 'input-group mb-3';

        const inputGroupAppend = document.createElement('div');
        inputGroupAppend.className = 'input-group-append bg-white';

        password.parentNode.insertBefore(contenedorPassword, password);
        contenedorPassword.appendChild(password);
        contenedorPassword.appendChild(inputGroupAppend);
        inputGroupAppend.appendChild(ojo);

        contenedorPassword.style.margin = '5%';

        ///////////OPCION 1//////////
        /*inputGroupAppend.style.position = 'relative';
        inputGroupAppend.style.margin = '3px -15px';
        inputGroupAppend.style.right = '30px';
        inputGroupAppend.style.zIndex = '1000';*/

        ////////////OPCION 2////////////
        password.style.borderRight = 'none';
        password.style.borderBottom = '2px solid black';
        inputGroupAppend.style.borderTop = '2px solid black';
        inputGroupAppend.style.borderBottom = '2px solid black';
        inputGroupAppend.style.borderRight = '2px solid black';

        ojo.addEventListener('click', () => {
            if(password.type === 'password'){
                password.type = 'text';
                icon.className = 'bi-eye-fill';
            }
            else if(password.type === 'text'){
                password.type = 'password';
                icon.className = 'bi-eye-slash-fill';
            } 
        });

        password.addEventListener('select', () => {
            console.log("En event listener");
            password.nextSibling.style.borderTop = '10px solid black';
        });

        //contenedorPassword.insertAdjacentElement('beforeend', ojo);
    });
});