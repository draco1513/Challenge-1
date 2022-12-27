/*
  Declaramos nuestras constantes 
*/
const d = document,
  w = window;

const btnEncriptar = d.getElementById("encriptar");
const btnDesencriptar = d.getElementById("desencriptar");

/*
  Responsive
*/

function responsiveMedia(id, mq) {
  let breakpoint = w.matchMedia(mq);
  function responsive(e) {
    if (e.matches) {
      d.getElementById(
        id
      ).innerHTML = `<img src="munieco.png" alt="imagen de muñeco">`;
    } else {
      d.getElementById(id).innerHTML = "";
    }
  }
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
responsiveMedia("cont-img-munieco", "(min-width: 1025px)");
/*
  
*/
function encriptar() {
  let mensaje = d.getElementById("input-text").value;
  let arrSalida = [];
  let mensajeSalida = "";

  if (mensaje !== "") {
    for (let i = 0; i < mensaje.length; i++) {
      arrSalida.push(mensaje[i]);
    }

    for (let i = 0; i < arrSalida.length; i++) {
      if (arrSalida[i] === "a") arrSalida[i] = "ai";
      if (arrSalida[i] === "e") arrSalida[i] = "enter";
      if (arrSalida[i] === "i") arrSalida[i] = "imes";
      if (arrSalida[i] === "o") arrSalida[i] = "ober";
      if (arrSalida[i] === "u") arrSalida[i] = "ufat";
    }

    for (let i = 0; i < arrSalida.length; i++) {
      mensajeSalida = mensajeSalida + arrSalida[i];
    }

    imprimirEnElDom(mensajeSalida);

    d.getElementById("input-text").value = "";
    d.getElementById("btn-copiar").addEventListener("click", function () {
      let text = d.querySelector(".text-result").textContent;

      navigator.clipboard.writeText(text).then(() => {
        console.log("copiado");
      });
    });
  }
}
function desencriptar() {
  let mensaje = d.getElementById("input-text").value;
  let arrSalida = [];
  let mensajeSalida = "";
  if (mensaje !== "") {
    for (let i = 0; i < mensaje.length; i++) {
      arrSalida.push(mensaje[i]);
    }
    for (let i = 0; i < arrSalida.length; i++) {
      if (arrSalida[i] === "a") {
        arrSalida[i + 1] = "";
      }
      if (arrSalida[i] === "e") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
        arrSalida[i + 4] = "";
      }
      if (arrSalida[i] === "i") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
      }
      if (arrSalida[i] === "o") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
      }
      if (arrSalida[i] === "u") {
        arrSalida[i + 1] = "";
        arrSalida[i + 2] = "";
        arrSalida[i + 3] = "";
      }
    }

    for (let i = 0; i < arrSalida.length; i++) {
      if (arrSalida[i] === "") continue;

      if (arrSalida[i] !== "") {
        mensajeSalida = mensajeSalida + arrSalida[i];
      }
    }

    imprimirEnElDom(mensajeSalida);

    d.getElementById("input-text").value = "";

    d.getElementById("btn-copiar").addEventListener("click", function () {
      let text = d.querySelector(".text-result").textContent;
      navigator.clipboard.writeText(text).then(() => {
        console.log("copiado");
      });
    });
  }
}

function imprimirEnElDom(mensaje) {
  const outputResponse = d.querySelector(".output-text");
  outputResponse.innerHTML = `
    <div class="results">
      <div class="text-result">${mensaje}</div>
      <button id="btn-copiar">Copiar</button>
    </div>`;
}
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
