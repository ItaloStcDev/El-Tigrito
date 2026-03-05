const localUser = JSON.parse(localStorage.getItem('userData'));

const divName = document.querySelector("#divName");
export const divMoney = document.querySelector('#money');

export const userProfile = {
    name: localUser?localUser.name:'user',
    money: localUser?localUser.money:100,
    id: localUser?localUser.id:0,
}

export function moneyTalks(val) {
    userProfile.money += val;
    localStorage.setItem('userData', JSON.stringify(userProfile));
    divMoney.innerText = 'Saldo: T$ ' + userProfile.money.toFixed(2);
    return
}

divName.innerText = userProfile.name;