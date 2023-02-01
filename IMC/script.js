
const button = document.getElementById("button");

// A função está fazendo várias coisas ao mesmo tempo. Fragmentar isso
function calculateBMI(){
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const output = document.getElementById("output");
    const bmi = (weight/(height)**2).toFixed(1);
    let classification = '';

    // Checar se os campos estão vazios
    if(name !== '' && height !== '' && weight !== ''){
        
        if(bmi < 18.5){
            classification = "under weight";
        }
        else if(bmi < 25){
            classification = "normal";
        }
        else if(bmi < 30){
            classification = "over weight";
        }
        else if(bmi < 35){
            classification = "obesity (class I)";
        }
        else if(bmi < 40){
            classification = "obesity (class II)";
        }
        else{
            classification = "extreme obesity";
        }

        output.textContent = `${name}, your BMI is ${bmi} and you are ${classification}.`;
    }
    else{
        output.textContent = "Preencha todos os campos!";
    }
}

button.addEventListener("click", calculateBMI);
