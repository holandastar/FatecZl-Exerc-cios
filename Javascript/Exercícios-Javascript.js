function ocultarImagem() {
    var img = document.getElementById("imagem1");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}
function inserirTexto(){
    var txt = document.getElementById("caixa-texto").value;
    document.getElementById("texto").textContent = txt;
}
function apagarTexto(){
    document.getElementById("texto").textContent = " ";
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
function adicionarTarefa() {
      var texto = document.getElementById("tarefa").value;

      if (texto !== "") {
        var li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("lista").appendChild(li);
        document.getElementById("tarefa").value = "";
      }
    }
function converterTemperatura(){
        input = document.getElementById("graus-input").value;
        var f = (input * 9/5) + 32;
        var p = document.createElement("p");
        document.getElementById("resultado-conversao").textContent = input + "°C " + "São: "+ f + " °F";
    }
function corVerde(){
      document.getElementById("vermelho").style.backgroundColor = "grey"
      document.getElementById("amarelo").style.backgroundColor = "grey"
      document.getElementById("verde").style.backgroundColor = "green"
}
function corAmarela(){
      document.getElementById("vermelho").style.backgroundColor = "grey"
      document.getElementById("amarelo").style.backgroundColor = "yellow"
      document.getElementById("verde").style.backgroundColor = "grey"
}
function corVermelha(){
      document.getElementById("vermelho").style.backgroundColor = "red"
      document.getElementById("amarelo").style.backgroundColor = "grey"
      document.getElementById("verde").style.backgroundColor = "grey"
}
    function gerarTabuada() {
      var num = document.getElementById("numero").value;
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "";
      for (var m = 1; m <= 10; m++) {
        var p = document.createElement("p");
        p.textContent = num + " x " + m + " = " + (num * m);
        resultado.appendChild(p);
      }
    }
    