(function () {
    const btn = document.querySelector('#btnMudaLayout');
    const mural = document.querySelector('.mural');

    btn.addEventListener('click', mudarTexto);
    btn.addEventListener('click', mudarLayout);

    function mudarTexto() {
        if (btn.textContent.trim() === 'Linhas') {
            btn.textContent = 'Blocos';
        }
        else {
            btn.textContent = 'Linhas';
        }
    }
    function mudarLayout() {
        mural.classList.toggle('mural--linha');
    }

    btn.classList.remove('no-js'); // libera o recurso para ser usado
})();


