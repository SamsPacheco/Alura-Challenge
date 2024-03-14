const textArea = document.querySelector(".encryptor__textArea");
const message = document.querySelector(".message__encryptado");
var textoCopiado = "";
const sizeWindows = window.innerWidth;
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

// btns 
const btnEncrypt = () => {
    const nameBtn = document.querySelector(".message__btnCopiar");
    nameBtn.innerHTML = "Copiar";
    document.querySelector('.message__container-img').style.display = "none";
    document.querySelector('.message__no-encryptado').style.display = "none";
    document.querySelector('.message__encryptado').style.display = "block";
    document.querySelector('.message__btnCopiar').style.display = "block";
    const messageEncrypted = encrypt(textArea.value);
    message.value = messageEncrypted;
    
}

const btnDecrypt = () => {
    const nameBtn = document.querySelector(".message__btnCopiar");
    nameBtn.innerHTML = "Copiar";
    document.querySelector('.message__container-img').style.display = "none";
    document.querySelector('.message__no-encryptado').style.display = "none";
    document.querySelector('.message__encryptado').style.display = "block";
    document.querySelector('.message__btnCopiar').style.display = "block";
    const messageDencrypted = dencrypt(textArea.value);
    message.value = messageDencrypted;
    
}

// methods 
const encrypt = (message) => {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    message = message.toLowerCase();
    for(let i = 0; i < matrix.length; i++){
        if(message.includes(matrix[i][0])){
            message = message.replaceAll(matrix[i][0], matrix[i][1]);
        }
    }
    return message;
}

const dencrypt = (message) => {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    message = message.toLowerCase();
    for(let i = 0; i < matrix.length; i++){
        if(message.includes(matrix[i][1])){
            message = message.replaceAll(matrix[i][1], matrix[i][0]);
        }
    }
    return message;
}

const copyText = () => {
    const text = document.querySelector(".message__encryptado").value;
    const copiado = document.querySelector(".message__btnCopiar");
    navigator.clipboard.writeText(text)
    .then( () => {
        copiado.innerHTML = '¡Copiado!'
        console.log('texto copiado!')
        textArea.value = '';
        message.value = '';
        textoCopiado = text
        console.log(textoCopiado);
    })
    if(sizeWindows >= 1440){
        setTimeout(() => {
            document.querySelector('.message__container-img').style.display = "block";
            document.querySelector('.message__no-encryptado').style.display = "block";
            document.querySelector('.message__encryptado').style.display = "none";
            document.querySelector('.message__btnCopiar').style.display = "none";
        }, 2000);
    }else{
        setTimeout(() => {
            document.querySelector('.message__encryptado').style.display = "none";
            document.querySelector('.message__btnCopiar').style.display = "none";
            document.querySelector(".message__no-encryptado").style.display = "block"; 
        }, 1000);
        }
    
    return text;
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === "v") {   
        console.log("texto copiado")
      }
})
