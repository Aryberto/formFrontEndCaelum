(function() {

    const btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function(){
        // const ajudas = [
        //     "Bem vindo ao Ceep!",
        //     "Clique no btn linhas para mudar o layout"
        // ];
        // const ajudas = [
        //     { conteudo: 'Bem vindo ao Ceep!', cor: '#F05450'},
        //     { conteudo: 'Clique no btn kunhas para mudar o Layout!', cor: '#92C4EC'}
        // ];
        /* Cria objeto que ermite realizar requisicoes AJAX */
        const ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        ajax.responseType = 'json';
        ajax.send(); // faz a requisicao com  as configuracoes passdas
        console.log('Enviando requisição...');
        ajax.addEventListener('load', function() {
            console.log('Dados Retornados!');
            //pega o json retornado
            const json = ajax.response;
            const ajudas = json.instrucoes; // instrucoes retorna um Array de objetos
            ajudas.forEach(function(ajuda) {
                // alert(frase)
                // antes  adicionaCartaoNoMural(ajuda);
                moduloMural.adicionaCartao(ajuda);
            });
        });
       
    });
    btnAjuda.classList.remove('no-js');
    //$(btnAjuda).removeClass('no-js');
})();

// Aryberto Pereira da Cunha Netto