
const pullar = [500, 200, 100, 50, 20, 10, 5, 1];
const image=pullar.map((a)=>`${a}`.jpg)
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputValue = +prompt("daxil edin");
    document.getElementById("inputValue").value = inputValue;
    })
   
   