const container = document.querySelector(".container");


// Draws a pad based on a given dimension 
function drawPad(dimension = 16){

    // Clear container content
    container.innerHTML = "";

    // Create the divs and append them to the container
    for(let i = 0; i < dimension * dimension; i++){
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.width = 640/dimension + "px";
        div.style.height = 640/dimension + "px";
        container.appendChild(div);
    }

    let brightness = 100;

    // Add hover change color effect for each item
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("mouseover", e => {
            const buttons = document.querySelectorAll(".controlBtn");
            let selected;

            //get the selected button
            for(let button of buttons){
                if(button.classList[2])
                {
                    selected = button.classList[0];
                }
            }

            if(selected === "black"){
                e.target.style.backgroundColor = "black";
            }
            else if(selected === "rainbow"){
                e.target.style.backgroundColor = randomColor();
            }
            else{
                const colorPicker = document.querySelector("input[type='color']");
                e.target.style.backgroundColor = colorPicker.value;
            }
            
             
        })
    })
}

// Draw the default pad
drawPad()


// Select mode
const buttons = document.querySelectorAll(".controlBtn");
buttons.forEach(button => {
    button.addEventListener("click", e => {
        //Remove selected class from all buttons
        buttons.forEach(btn => btn.classList.remove("selected"));

        e.target.classList.add("selected");
    })
})

// Clear the pad
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.backgroundColor = "white";
        item.style.filter = "brightness(100%)";
        
    });
})

// Generates random hex value 
function randomColor(){
    const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomHex = [];

    for(let i = 0; i < 6; i++){
        const randomNumber = Math.floor(Math.random() * 16);
        randomHex.push(hexCode[randomNumber]);
    }

    return "#" + randomHex.join("");
}

const range = document.querySelector("input[type='range']");
range.addEventListener("change", () => {
    const rangeText = document.querySelector(".rangeText");
    rangeText.textContent = range.value + " x " + range.value;
    drawPad(range.value);
})





