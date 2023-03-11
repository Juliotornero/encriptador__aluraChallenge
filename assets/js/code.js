const entrada = document.querySelector('.main__box');
const salida = document.querySelector('.main__box2');



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar(stringEncriptado){

    let llavesCodigo = [["e",  "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i<llavesCodigo.length; i++){
        if(stringEncriptado.includes(llavesCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(llavesCodigo[i][0],llavesCodigo[i][1]);
        }
    }
    return stringEncriptado;
}


function btnEncriptar(){

    const textoEncriptado = encriptar(entrada.value);


    const mostrar = document.querySelector('.main__salida');
    const ocultar = document.querySelector('.main__alert');

    mostrar.classList.remove('oculto');
    ocultar.classList.add('oculto');
    
    salida.value = textoEncriptado;
    entrada.value= "";

}




function desencriptar(stringDesencriptado){

    let llavesCodigo = [["e",  "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i<llavesCodigo.length; i++){
        if(stringDesencriptado.includes(llavesCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(llavesCodigo[i][1],llavesCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
 

function btnDesencriptar(){

    const textoEncriptado = desencriptar(entrada.value);

    
    salida.value = textoEncriptado;
    entrada.value= "";

}