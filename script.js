
const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const input = document.querySelector("input");
    const convertedWeight = document.querySelector("span");
    let kgTOgram;

    if((isNaN(input.value)) || input.value <= 0){

        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "<p>Please enter a valid number!</p>"

        setTimeout(()=>{
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("error");  
        },2500);

        input.value = "";

    }else{

        kgTOgram = Number(input.value) * 1000;  
        convertedWeight.classList.add("successful");
        convertedWeight.innerHTML = `${kgTOgram.toFixed(3)}`;


        setTimeout(()=>{
            convertedWeight.innerHTML = "";
            convertedWeight.classList.remove("successful");  
            input.value = "";
        },10000);

    }

});