const localUser = JSON.parse(localStorage.getItem('user'));
const userName = localStorage.getItem('userName');

export const divMoney = document.querySelector('#money');
const divName = document.querySelector('#divName');

export const profile = {
    name: userName ? userName : 'test',
    money: localUser ? localUser.money : 100,
    id: 0,
}

if (userName == 'admin') {
    profile.money
}

localStorage.setItem('user', JSON.stringify(profile));

divName.innerText = profile.name;

export function moneyTalks(val) {
    profile.money += val;

    localStorage.setItem('user', JSON.stringify(profile));

    divMoney.innerText = 'Saldo: T$ ' + profile.money.toFixed(2);
    return
}