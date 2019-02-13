(function () {
    const btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', function () {
        btnSync.classList.add('botaoSync--esperando');
        btnSync.classList.remove('botaoSync--sincronizado');

        // cria o objeto ajax que fara a consulta na api
        const salvadorDeCartoes = new XMLHttpRequest();
        salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        // especifica pro servidor que recebera os dados que estamos enviando informacoes no formato JSON
        salvadorDeCartoes.setRequestHeader('Content-Type', 'application/json');
        const cartoes = document.querySelectorAll('.cartao');
        const infosMural = {
            usuario: "arycunhanetto@gmail.com",

            //Array.map() : essa funcao transforma o conteudo de um array, ou seja,
            // no caso abaixo, pega cada cartao retornado (ELEMENTO HTML) e retorna agora
            // uma lista contendo obejtos customizados que possuem apena as informacoes 
            // que eu preciso, no caso, só o conteudo e a cor ( {conteudo:'', cor:''})
            cartoes: Array.from(cartoes).map((cartao) => {
                return {
                    conteudo: $('.cartao-conteudo', cartao).text(),
                    cor: $(cartao).css('background-color')
                };
            })
        };
        //JSON.stringify: transforma o objeto em texto
        // send(): envia o objeto para o servidor
        salvadorDeCartoes.send(JSON.stringify(infosMural));
        salvadorDeCartoes.addEventListener('load', function() {
            const respostaServidor = JSON.parse(salvadorDeCartoes.response);
            console.log(`${respostaServidor.quantidade} cartões salvos em ${respostaServidor.usuario}`);
            btnSync.classList.remove('botaoSync--esperando');
            btnSync.classList.add('botaoSync--sincronizado');

        });
    });
    btnSync.classList.remove('no-js');
})();
// Aryberto Cunha 17/01/2019