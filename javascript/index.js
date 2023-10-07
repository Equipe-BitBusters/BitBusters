document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loading_screen").style.display = "none";
});

function formatarCPF(campo) {
    let valor = campo.value.replace(/\D/g, '');
    valor = valor.slice(0, 11);
    if (valor.length <= 9) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    } else {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    campo.value = valor;
}
