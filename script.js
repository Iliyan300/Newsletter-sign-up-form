const form = document.querySelector("form");
const main = document.querySelector(".main-container");

const thanksSection = document.querySelector(".thanks-section");
const input = document.querySelector("input");

const error = document.querySelector(".error");
const dismissBtn = document.querySelector("#dismiss-btn");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    if(input.value !== "") {
        
        main.classList.add("hide");
        thanksSection.classList.remove("hide");
        
    } else  {

        error.style.display = "block";
        input.style.border = "1px solid red";
        input.classList.remove("input-red");
        input.style.backgroundColor = "#fbb0b055";

}

})


dismissBtn.addEventListener("click", () => {

    thanksSection.classList.add("hide");
    
})



