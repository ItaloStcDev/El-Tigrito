import { profile , divMoney, moneyTalks} from "./profile.js";

const apostarBtn = document.querySelector('#apostarBtn');
apostarBtn.addEventListener('click', apostar);

const inputBet = document.querySelector('#apostarInput');
export const divBet = document.querySelector('#divApostando');
const divRes = document.querySelector('#divRes');
 
function strt () {
    return divMoney.innerText = 'Saldo: T$ ' + profile.money.toFixed(2);
};
strt()

const sorte = (valor) => {
        const numSort = Math.floor(Math.random()*100)+1;

        if (numSort <= 50) {return valor * 0}
        if (numSort <= 70) {return valor}
        if (numSort <= 85) {return valor * 1.5}
        if (numSort <= 94) {return valor * 2}
        if (numSort <= 98) {return valor * 3}
        if (numSort <= 99) {return valor * 4}
        return valor * 10
    };

function apostar() {
    const userBet = inputBet.value.replace(',','.');
    const floatBet = parseFloat(userBet);

    if (isNaN(floatBet) || floatBet < 1) {
        return divRes.innerHTML = `Por favor, insira um número valido.`;
    }
    if (floatBet > profile.money) {
        return divRes.innerText = 'Saldo insuficiente.';
    }
    
    profile.money -= floatBet;

    const valorFinal = sorte(floatBet);
    const fixedValue = valorFinal.toFixed(2);

    const vascado = `<p>Você apostou: <strong>T$ ${floatBet.toFixed(2)}</strong>, <strong>perdeu tudo e</strong> <div class="cft">FOI JOGAR NO VASCO</div></p><br><img src="https://www.ogol.com.br/img/logos/equipas/2258_imgbank_1683640645.png" alt="vasco"><h2 class="cft"><strong>BEM VINDO AO GIGANTE!!</strong></h2>`;

    if (valorFinal < 1) {
        divRes.innerHTML = vascado;
    }
    else if (valorFinal == floatBet) {
        divRes.innerHTML = `<p><strong>1x</strong> mais sorte na proxima</p>`;
    }
    else {
        divRes.innerHTML = `<p>Você ganhou <strong>T$ ${fixedValue}</strong></p>`;
    }

    moneyTalks(valorFinal);
    return 
}

const cleanBet = () => {divRes.innerHTML = ''};
inputBet.addEventListener('input', cleanBet);