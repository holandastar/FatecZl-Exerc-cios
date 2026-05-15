function mudarCor() {
  let letras = "0123456789ABCDEF";
  let cor = "#";
  for(let i = 0; i < 6; i++){
        cor += letras[Math.floor(Math.random() * 16)];
        }
  document.getElementById("Circulo").style.backgroundColor = cor;
        }
  let tamanho = 20;
function aumentarTexto(){
            tamanho += 5;
            document.getElementById("texto").style.fontSize = tamanho + "px";
        }
