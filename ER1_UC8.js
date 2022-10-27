// Validar se o nome da peça possui mais de 3 caracteres.
var listadePeca = ["Filtro de ar", "Amortecedo", "Disco de Freio"]

if (listadePeca.length < 10 ){
    console.log("É possível cadastrar mais peças!")
} else {
    console.log("A lista esta já completa!")
}

let peso = 150
if (peso<100){
    console.log("A peça precisa de no mínimo 100g!")
} else{
    console.log("A peça possui tamanho adequado")
}

let nomePeca = "Caixa de Cambio"
if(nomePeca.length>3){
    console.log("O nome da peça está adequado")
}else{
    console.log("O nome da peça deve conter mais que 3 caracteres, digite um nome adequado")
}
console.log("Peça cadastrada com sucesso")