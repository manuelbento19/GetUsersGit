const fs = require('fs');
const { dirname } = require('path');
function pegaImg(e){
    const ficheiro = e.target;
    const data = new FileReader();
    data.onload = function(){
        const dadosImg = data.result;
        document.getElementById('foto').src = dadosImg;
    }
    data.readAsDataURL(ficheiro.files[0]);
    
    
}
function saveImg(){
    let data = document.getElementById('foto').src;
    alert(dirname.toString());
}