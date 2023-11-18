
//    let random = Math.random();
//if (random < 0.5){
//    console.log("Seu numero menor que 0.5")
//} else {
//    console.log ("Seu numero é maior que 0,5")
//}
//console.log(random);

//const dayOfWeek = prompt('Coloque um dia!').toLowerCase();
//
//if (dayOfWeek === 'Monday') {
//    console.log ("Eu odeio segunda")
//} else if (dayOfWeek === 'Sabado'){
//    console.log("Amo sabado!")
//}else if (dayOfWeek === 'sexta'){
//    console.log("Sexta é massa!")
//} else if (dayOfWeek === 'quarta'){
//    console.log ('tanto faz')
//} else {
//    console.log ('feriado?')
//}

//0-5 - FREE 
//5 - 10 - Child R$10
//10 - 65 - ADULT R$20
//65+ IDOSO R$10

//const age = 89;
//
//if (age < 5) {
//    console.log("Vc é bebe e come de graça")
//} else if (age < 10) {
//    console.log("Se vc é crinaça, paga 10 conto")
//} else if (age < 65) {
//    console.log("você é idoso, paga 10 conto")
//} else if (age < 50) {
//    console.log("você é adulto, paga 10 conto")
//} else{
//    console.log (' você é idoso, paga 10 conto')
//}


const password = prompt ('insira sua nova senha');
if (password.length >= 6) {
    if (password.indexOf (' ')=== -1){
        console.log("Senha valida!!");
    } else {
        console.log ("Senha não tem espaço!")
        console.log ("Senha invalida")
    }
} else {
    console.log ('Senha muito curta')
}

// 

