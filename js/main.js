let panino = 2;
let cheese = 1;
let egg = 2;
let mustard = 0.50;
let tomato = 1;
let lettuce = 1;
let ketchup = 0.50;

let ingredients = [panino];

console.log(ingredients)

document.getElementById("btn").addEventListener("click",
function() {
    let codes = ["AD1E5R4F"];
    let code = document.getElementById("code").value;
    console.log(code)
    let somma = 0;
    for(let i = 0; i < ingredients.length;i++) {
        somma += ingredients[i];
    }
    if(codes.includes(code)) {

        somma = somma * 0.8;
        return document.getElementById("prezzoFinale").innerHTML = somma + " €";
    }
    return document.getElementById("prezzoFinale").innerHTML = somma + " €";
}
);


// function// function// function// function// function// function// function// function// function// function// function// function



function yes1() {
    ingredients.push(cheese)
    return document.getElementById("check-1").style.display = "block";
    }
  
function no1() {
    
    return document.getElementById("check-1").style.display = "none";
}

function yes2() {
    ingredients.push(egg)
    return document.getElementById("check-2").style.display = "block";
    }
  
function no2() {
    return document.getElementById("check-2").style.display = "none";
}

function yes3() {
    ingredients.push(mustard)
    return document.getElementById("check-3").style.display = "block";
    }

function no3() {
    return document.getElementById("check-3").style.display = "none";
}

function yes4() {
    ingredients.push(tomato)
    return document.getElementById("check-4").style.display = "block";
    }
  
function no4() {
    return document.getElementById("check-4").style.display = "none";
}

function yes5() {
    ingredients.push(lettuce)
    return document.getElementById("check-5").style.display = "block";
    }
  
function no5() {
    return document.getElementById("check-5").style.display = "none";
}

function yes6() {
    ingredients.push(ketchup)
    return document.getElementById("check-6").style.display = "block";
    }
  
function no6() {
    return document.getElementById("check-6").style.display = "none";
}






