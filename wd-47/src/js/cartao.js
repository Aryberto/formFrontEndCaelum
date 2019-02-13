(function () {
    const cartoes = document.querySelectorAll('.cartao');
    for (let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i]; // pega cada um dos cartoes
        cartao.addEventListener('focusin', function () {
            cartao.classList.add('cartao--focado');
        });
        cartao.addEventListener('focusout', function () {
            cartao.classList.remove('cartao--focado');
        });
        cartao.addEventListener('change', function (event) {
            const opcaoSelecionada = event.target;
            let isRadioTipo = opcaoSelecionada.classList.contains('opcoesDoCartao-radioTipo');
            if (isRadioTipo === true) {
                cartao.style.backgroundColor = opcaoSelecionada.value;
            }
        });
        cartao.addEventListener('keyup', function (event) {
            const opcaoSelecionada = event.target;
            let isOpcao = opcaoSelecionada.classList.contains('opcoesDoCartao-opcao');
            if (isOpcao && (event.key === 'Enter' || event.key === ' ')) {
                opcaoSelecionada.click();
            }
        });
        cartao.addEventListener('click', function () {
            const btn = event.target;
            let isBotaoExcluir = btn.classList.contains('opcoesDoCartao-remove');
            if (isBotaoExcluir === true) {
                cartao.classList.add('cartao--some');
                cartao.addEventListener('transitionend', () => cartao.remove());
                }
        });
    }
})();