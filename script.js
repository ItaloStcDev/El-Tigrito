const apostarBtn = document.querySelector('#apostarBtn');
apostarBtn.addEventListener('click', apostar);
const inputBet = document.querySelector('#apostarInput');
const divBet = document.querySelector('#divApostando');
const divRes = document.querySelector('#divRes');

const sorte = (valor) => {
        const numSort = Math.floor(Math.random()*100)+1;

        if (numSort <= 50) {return valor * 0}
        if (numSort <= 80) {return valor}
        if (numSort <= 95) {return valor * 1.5}
        if (numSort <= 99) {return valor * 2}
        return valor * 10
    };

function apostar() {
    const userBet = inputBet.value;
    const floatBet = parseFloat(userBet).toFixed(2);

    if (isNaN(floatBet) || floatBet < 1) {
        return divRes.innerHTML = `<p>Por favor, insira um número valido.</p>`;
    }

    const valorFinal = Number(sorte(floatBet)).toFixed(2);

    const vascado = `<p>Você apostou: <strong>T$ ${floatBet}</strong>, <strong>perdeu tudo e</strong> <div class="cft">FOI JOGAR NO VASCO</div></p><br><img src="https://www.ogol.com.br/img/logos/equipas/2258_imgbank_1683640645.png" alt="vasco"><h2 class="cft"><strong>BEM VINDO AO GIGANTE!!</strong></h2>`;

    if (valorFinal < 1) {
        divRes.innerHTML = vascado;
    }
    else if (valorFinal === floatBet) {
        divRes.innerHTML = `<p><strong>1x</strong> mais sorte na proxima</p>`;
    }
    else {
        divRes.innerHTML = `<p>Você ganhou <strong>T$ ${valorFinal}</strong></p>`;
    }
    
    return;
}

const cleanBet = () => {divRes.innerHTML = ''};
inputBet.addEventListener('input', cleanBet);