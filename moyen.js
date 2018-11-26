var inputVals = [];
var somme = 0;
var moyen = 0;

var inputInput1 = document.querySelector("#input1");
var inputInput2 = document.querySelector("#input2");
var inputResultat = document.querySelector("#resultat");
var inputResultat2 = document.querySelector("#resultat2")
var btnSolver = document.querySelector("#btn-solver");

btnSolver.addEventListener("click", solve);


function solve(event) {
    inputVals.push(parseInt(document.querySelector("#input1").value));
    inputVals.push(parseInt(document.querySelector("#input2").value));
    
    inputVals.forEach(function (val) {
        somme += val;
    })
    
    moyen = somme / inputVals.length;

    inputResultat.value = somme;
    inputResultat2.value = moyen;
    somme = 0;
}