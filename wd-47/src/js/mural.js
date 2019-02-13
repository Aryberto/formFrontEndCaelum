const moduloMural = (function () {
//moduloMural é um objeto que sera retornado pela funcao e sera de acesso publico
//pois ele esta definido no escopo global.
// ele deixara disponivel o acesso a funcao de adicao de cartoes par aquem precisar na aplicacao
    let numeroDoCartao = 0;
    const adicionaCartaoNoMural = function (objCartao)
    // window.adicionaCartaoNoMural = function adicionaCartaoNoMural(objCartao)  // window deixa a funcao global 
    {
        numeroDoCartao++; // adiciona 1 ao numero do cartao
        let conteudoDoCartao = objCartao.conteudo;
        const cartaoNovo = $(` 
        <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color:${objCartao.cor}">
        <div class="opcoesDoCartao">
        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
        </button>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
        </label>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
        </label>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
        </label>

        <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
        <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
        </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
    </article>
    `);
        $('.mural').append(cartaoNovo); // adiciona o cartaoNovo como ultimo filho de .mural

        cartaoNovo.on('focusin', function () {
            cartaoNovo.addClass('cartao--focado');
        });

        cartaoNovo.on('focusout', function () {
            cartaoNovo.removeClass('cartao--focado');
        });

        cartaoNovo.on('keyup', '.opcoesDoCartao-opcao', function (event) {
            const opcaoSelecionada = $(event.target);
            if (event.key === 'Enter' || event.key === ' ') {
                opcaoSelecionada.click();
            }

        });

        cartaoNovo.on('change', '.opcoesDoCartao-radioTipo', function (event) {
            let opcaoSelecionada = $(event.target);
            cartaoNovo.css('background-color', opcaoSelecionada.val());
        });

        cartaoNovo.on('click', '.opcoesDoCartao-remove', function () {
            cartaoNovo.addClass('cartao--some');
            cartaoNovo.on('transitionend', () => cartaoNovo.remove());
        })
    } // fim da funcao adicionaCartaoNoMural();

    // puxar quando der refresh na pagina
    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: { usuario: 'arycunhanetto@gmail.com'},
        dataType: "jsonp",
        success: function(respostaServidor) {
            const listaDeCartoes = respostaServidor.cartoes;
            listaDeCartoes.forEach(function(cartao){
                adicionaCartaoNoMural(cartao);
            });
        }

    })

    return {
        // criamos um metodo no objeto que sera retronado chamado 'adicionaCartao'
        // quando ele for executado ele vai chamar internamente no modulo a funcao
        // adicionaCartaoMural();
        adicionaCartao: adicionaCartaoNoMural
    }

})();// isolar escopo

// Aryberto Pereira da Cunha Netto