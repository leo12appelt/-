let display ='';

//processa a expreção para uma versao mais usual pra quem usa
//só usada para mostar no display
function processada(a) {
    a = String(a)
    let resultado = a.replaceAll('.',',').replaceAll('*','X').replaceAll('/','÷');
    
    return resultado;
}

//adiciona coisas no display
function add(a) {
    display += a;
    
    document.getElementById('display').value = processada(display);
}

//limpa o display
function limpar() {
    display = "";
    document.getElementById('display').value = display;
}

//apaga o ultimo caractere
function apagarCaractere() {
    display = display.slice(0, -1);
    document.getElementById('display').value = processada(display);
}

//salvar e colar
let salvo= '';
function salvar() {
        display == undefined ? salvo = '': salvo = eval(display);
        salvo = string(salvo)
}
function colar() {
    salvo == undefined ? add(""):add(salvo);
}

//calcula e exibe
function calcular() {
    try{
    display = eval(display);
    display = String(display)
    document.getElementById('display').value = processada(display);
    }catch{  //em caso de erro 
        display = '';
        document.getElementById('display').value = "erro"
    }
}
