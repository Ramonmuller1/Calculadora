//Funções para adicionar os numeros no display
function addNumber(caracter){
    document.getElementById('display').value += caracter
}

//Função para limpar display
function cleanDisplay(){
    document.getElementById('display').value = ''
}

//Função para apagar caracter digitado
function delCaracter(){
    let display = document.getElementById('display').value
    document.getElementById('display').value = display.slice(0, -1)
    
}

//Função de operadores
function operadores(op){
    if(numero != ''){
        operadorAtual = op
        document.getElementById('display').value = ''
    }
}