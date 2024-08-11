const btnencriptar = document.querySelector(".btn__encriptar");
const txttexto__encriptador = document.querySelector(".texto__encriptador");
const msjaviso = document.querySelector(".msj__aviso");
const esperar= document.querySelector(".msj__verificar");
const msje= document.querySelector(".msj__encriptado__container");
const copiar= document.querySelector(".btn__copiar");
const btnDesencriptar= document.querySelector(".btn__desencriptar");


btnencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto= txttexto__encriptador.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    

    if(texto==""){
        msjaviso.style.background = "#663399";
        msjaviso.style.color = "#FFFF";
        msjaviso.style.fontWeight = "800";
        msjaviso.textContent = "El aréa de texto no puede estar vacio";

        setTimeout(()=>{
            msjaviso.removeAttribute("style");
        },1500);
    }

    else if(texto !==txt){
        msjaviso.style.background = "#663399";
        msjaviso.style.color = "#FFFF";
        msjaviso.style.fontWeight = "800";
        msjaviso.textContent = "No puede tener acentos y caracteres especiales";

        setTimeout(()=>{
            msjaviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        msjaviso.style.background = "#663399";
        msjaviso.style.color = "#FFFF";
        msjaviso.style.fontWeight = "800";
        msjaviso.textContent = "El texto debe ser solo en minúscula";

        setTimeout(()=>{
            msjaviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        esperar.innerHTML = texto;
        copiar.style.visibility = "inherit";
        msje.remove(); 
    }
});

btnDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto= txttexto__encriptador.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    

    if(texto==""){
        msjaviso.style.background = "#663399";
        msjaviso.style.color = "#FFFF";
        msjaviso.style.fontWeight = "800";
        msjaviso.textContent = "El aréa de texto no puede estar vacio";

        setTimeout(()=>{
            msjaviso.removeAttribute("style");
        },1500);
    }

    else if(texto !==txt){
        msjaviso.style.background = "#663399";
        msjaviso.style.color = "#FFFF";
        msjaviso.style.fontWeight = "800";
        msjaviso.textContent = "No puede tener acentos y caracteres especiales";

        setTimeout(()=>{
            msjaviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        msjaviso.style.background = "#663399";
        msjaviso.style.color = "#FFFF";
        msjaviso.style.fontWeight = "800";
        msjaviso.textContent = "El texto debe ser solo en minúscula";

        setTimeout(()=>{
            msjaviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/ines/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        esperar.innerHTML = texto;
        copiar.style.visibility = "inherit";
        msje.remove(); 
    }
});

copiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = esperar;
    copiar.select();
    document.execCommand("copy");
});