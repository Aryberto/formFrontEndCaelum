(function () {

    let numeroDoCartao = 0;
    const form = document.querySelector('.formNovoCartao');
    form.addEventListener('submit', function (event) {
        // event.preventDefault(): bloquei o envio do formulario
        event.preventDefault();
        const textarea = form.querySelector('.formNovoCartao-conteudo');
        let isVazio = textarea.value.trim().length === 0;
        if (isVazio === true) {
            const msgErro = document.createElement('div');
            msgErro.classList.add('formNovoCartao-msg');
            // só texto TEXTCONTENT já INNERTHTML para interpreta tudo com HTML
            msgErro.textContent = 'Formulário inválido. Não digite vários nada!';
            form.append(msgErro); // adicona a mensagem de erro no final do formulário
            form.addEventListener('animationend', () => msgErro.remove());
        }
        else {
            let dadosCartao = { conteudo: textarea.value.trim()};
            moduloMural.adicionaCartao(dadosCartao);
            textarea.value = ""; // limpar o campo depois que inserir o cartão
        }
    });

    form.classList.remove('no-js');

})();

// Aryberto Pereira da Cunha Netto