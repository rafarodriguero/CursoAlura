const listaCompradosTitulo = document.getElementById('lista-comprados-titulo');
const listaCompradosLinha = document.getElementById('lista-comprados-linha');

export function verificarListaComprados(lista) {
    if (lista.childElementCount == 0) {
        listaCompradosTitulo.style.display = "none";
        listaCompradosLinha.style.display = "none";
    } else {
        listaCompradosTitulo.style.display = "block";
        listaCompradosLinha.style.display = "block";
    }
}