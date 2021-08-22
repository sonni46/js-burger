
document.getElementById("btn").addEventListener("click",
function() { 
    let burger = document.getElementById("nameBurger").value;
    let codes = ["AD1E5R4F"]; // sconto
    let code = document.getElementById("code").value;
    let input = document.getElementsByName("ingredienti");  // ricordati che getElementsByName prende più elementi in value rispetto al getElementById
    let total = 2;
    for (let i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    if(codes.includes(code)) {
        total *= 0.8;
        return document.getElementById("total").innerHTML = total + " €";
    }
    if (burger == false) {
      return alert("Name no inserted ")
    }
    
    return document.getElementById("total").innerHTML = total + " €";
}
);





