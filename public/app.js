
function year(){
const anoAtual = new Date().getFullYear();
var caixa = document.getElementById('data_id');

caixa.innerHTML ='BRITO.RUNNING | ' + anoAtual;
}

 window.onload = year;

 function carsky(){

    const onepicture = document.getElementById('one-picture');
    const secondpicture = document.getElementById('second-picture');

    if(secondpicture.style.display === 'none'){
        onepicture.style.display = 'none';
        secondpicture.style.display = 'inline-block';
    }else{
        onepicture.style.display = 'inline-block';
        secondpicture.style.display = 'none';
    }

    
    if(onepicture === null){
        console.log("one-picture nulo");
    }else{
        console.log("one-picture tem valor");
    }
    if(secondpicture === null){
        console.log("second-picture nulo");
    }else{
        console.log("second-picture tem valor");
    }
    //verificando se as variaveis estão chegando com valor
    
 
 };


 