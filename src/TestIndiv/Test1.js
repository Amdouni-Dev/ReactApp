
import React from "react"
const FindLongestWord=()=>{
    return <h2>Hi Mouna !!!</h2>
   // console.log("hiiiiii")
}




function function1(){
    /************ 1-decalaration variables */
/*    var variable=1;
    function function2(){
        console.log(variable)
    }
    console.log(variable)
function2()
*/

/************ 2-Let && Const */
// const num=90;
// console.log(num) // resultat==> 90
// // num=77 // erreur khater num deja constante
// let x=10;
// x=100;
// if(x>5){
//     let y=5;
//     const z=20;
//     console.log(y+z) //25
//     console.log(x+y) // 105

//}
//console.log(z) //erreur car z est definit dans le bloc if

}


const person={
    nom:"john",
    prenom:"Doe",
    // fi west l objet aandi fonction
    afficherEmail:function(){
        console.log(`Mon nom est ${this.nom} ${this.prenom} `)
    }

}
const objet=Object.create(person);

/**
 * Object.assign()==> copier  les propriétes fi objet cible
 * Object.entries()==> retourne un tableu de tous les couples clés valeurs // yaani yraja3 objet key value
 * Object.is()==> comparer si deux valeurs sont strictement egales
 * Object.values()==> yraja3 les valeur de l'objet
 * Object.defineProperty()
 * Object.defineProperties()==> definir des nouvelles proprietes sur un objet ou de modifier des proprietés existantes avec plus de controle 
 * 
 *  
 */
// ken mena3mlch initialisation lel
// nom w prenom yekhou hedhom sinn yekhou illi deja initialisé 
//objet.nom="Jane"
//objet.prenom="Doee"

objet.afficherEmail();

console.log(person) // {nom: 'john', prenom: 'Doe', afficherEmail: ƒ} // f==> function fel objet

const Greet=()=><h1>Hi Mouna</h1>
//export default Greet
//export default FindLongestWord

/**
 * principe hoisting ==> peu importe la ligne elli fih instruction var 
 * la variable est declarée et accessible partout 
 */


/************* 3- fonctions fléches */
let somme =function(x,y){
   return x+y
}
console.log( somme(20000,2))

let sommeFlech=(x,y)=>{
    return x+y
}
console.log(sommeFlech(3000,4000))

export default function1
/********* 4-Tableaux */
const arr=[]
const nombre=[1,2,3,4,5]
const arr2=['chaine1','chaine2']



