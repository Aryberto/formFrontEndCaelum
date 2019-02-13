// IIFE
(function () {
    //pega a lista completa de botoes que fazem exclusao de cartoes (querySelecotrAll)
    //guarda a lista (Array) na constante 'btns'
    const btns = document.querySelectorAll('.opcoesDoCartao-remove');
    // percorre a lista de botoes de exclusao
    for (let i = 0; i < btns.length; i++) 
    {
        // a cada virada do looping, coloca a referencia do botao atual na variavel 'btn'
        let btn = btns[i];
        // adiciona o envento click em cada botao da lista
        btn.addEventListener('click', function () {
            const cartao = btn.parentNode.parentNode; // cartao (article.cartao)
            cartao.classList.add('cartao--some');
            cartao.addEventListener('transitionend', function() { // Arrow Function = apos o 'transitionend', () => cartao.remove());
                cartao.remove();
            });

        });
    }

})();
