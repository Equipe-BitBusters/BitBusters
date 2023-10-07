document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um atraso de 2 segundos (2000 milissegundos) antes de ocultar o elemento de carregamento
    setTimeout(function() {
        document.getElementById('loading_screen').style.display = 'none';
    }, 2000);

    // Adiciona um ouvinte de clique ao botão de login para ocultar o elemento de carregamento
    document.getElementById('login_button').addEventListener('click', function() {
        document.getElementById('loading_screen').style.display = 'none';
        // Se você deseja redirecionar após ocultar o elemento de carregamento, descomente a linha abaixo
        // window.location.href = "/Pagina_Secretarias/Pagina_Secretarias.html";
    });
});
