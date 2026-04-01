const adminOptions = document.querySelector('.admin');

const loginBtn = document.querySelector('#loginBtn')
loginBtn.addEventListener('click', loginProcess);

const resetBtn = document.querySelector('#localStorageResetBtn');
resetBtn.addEventListener('click', localStorageReset);

function loginProcess() {
    const nameInput = document.querySelector('.nameInput').value.trim();
    const passwordInput = document.querySelector('#passwordInput').value.trim();
    
    if(!nameInput){
        window.alert('preencha o nome');
        return
    }

    if(nameInput == 'admin' && passwordInput) {
        adminMode()
        return
    }

    localStorage.setItem('userName', nameInput);
    window.location.href='apostas.html';
}

let isAdmin = false;

function adminMode() {
    const nameInput = document.querySelector('.nameInput').value.trim();
    const passwordInput = document.querySelector('#passwordInput').value.trim();
    const logAsAdminBtn = document.querySelector('#logAsAdminBtn');

    if(nameInput == 'admin' && passwordInput == 'admin') {
        adminOptions.style.display = 'block';
        isAdmin = true;
    }
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
}

function localStorageReset() {
    localStorage.clear();
}