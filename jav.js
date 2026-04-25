function ocultarImagem(){
    document.getElementById("imagem1").style.display ="none";
}
function inserirTexto(){
    const div = document.getElementById("texto");
    div.querySelector("p").style.display ="block";
}
function apagarTexto(){
    const div = document.getElementById("texto");
    div.querySelector("p").style.display ="none";
}
function perguntaErrada(){
    document.getElementById("resposta-errada").style.display = "block";
    document.getElementById("resposta-certa").style.display = "none";
}
function perguntaCerta(){
    document.getElementById("resposta-errada").style.display = "none";
    document.getElementById("resposta-certa").style.display = "block";
}
function lista(){
    const li = document.createElement('li');
}
function adicionarTexto(){
    inserir = document.getElementById('adicionarTexto');
    document.getElementById("lista").adicionarTexto.value.trim;
}