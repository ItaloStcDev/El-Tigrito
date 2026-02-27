const apostarBtn = document.querySelector('#apostarBtn').addEventListener('click', apostar);

function apostar() {
    const divApostando = document.querySelector('#divApostando');
    const valorApostado = document.querySelector('#apostarInput').value;
    const divRes = document.querySelector('#divRes');


    const valorFixado = Number(valorApostado).toFixed(2);

    if (valorApostado < 1) {
        return divRes.innerHTML = `<p>Por favor, insira um número valido.</p>`;
    }

    divRes.innerHTML = `<p>Você apostou: R$${valorFixado} <strong>perdeu tudo e</strong> <div id="cft">FOI JOGAR NO VASCO</div></p><br><img src="https://www.ogol.com.br/img/logos/equipas/2258_imgbank_1683640645.png" alt="vasco"><h2 id="cft"><strong>BEM VINDO AO GIGANTE!!</strong></h2>`;

    // const result = document.createElement("div").setAttribute()
    // divApostando.appendChild();
}