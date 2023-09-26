$(document).ready(() => {
    $("#story")[0].reset();
    generateRandomOptions();
    $(document).on('click','#slugBtn',generateURL);
});

function generateURL(){
    var titleArray = $("#title").val().toLowerCase().split(" ");
    var url='';
    
    for(let i = 0; i < titleArray.length; i++){
        if(titleArray[i+1] === undefined){
            url+=titleArray[i];
        }else{
            url+=titleArray[i].concat('-');
        }
    }

    // Set the value of the input field with the generated URL
    $("#slugInput").val(url);

    return url;
}
function generateRandomOptions(){
    let colors = ["Amarillo", "Rojo", "Azul", "Verde"];
    let transporte = ["Coche", "Avión", "Autobús","Metro"];
    let animales = ["Ratón", "Elefante" ,"Tigre", "Gallipato"];

    let optionPositions = generateRandomArray();
    let randomNumber = Math.floor(Math.random() * 100);
    let randomColor = Math.floor(Math.random() * 4);
    let radioArray = [$("#op1").val() ,$("#op2").val() ,$("#op3").val() ,$("#op4").val()]; 

    if(randomNumber % 2 === 0){
        radioArray[optionPositions[0]] = colors[randomColor];
        radioArray[optionPositions[1]] = transporte[0];
        radioArray[optionPositions[2]] = transporte[1];
        radioArray[optionPositions[3]] = transporte[2];
    }else{
        radioArray[optionPositions[0]] = colors[randomColor];
        radioArray[optionPositions[1]] = animales[0];
        radioArray[optionPositions[2]] = animales[1];
        radioArray[optionPositions[3]] = animales[3];
    }

    console.log(radioArray);

}

function generateRandomArray(){
    let numbers = [0,1,2,3];
    let randomArray = ["","","",""];

    for(var i of numbers){
        let randomPosition = Math.floor(Math.random() * 4);
        if(randomArray[randomPosition] === ""){
            randomArray[randomPosition] = i;
        }else{
            for(var j=0;j<randomArray.length;j++){
                if(randomArray[j] === ""){
                    randomArray[j] = i;
                    break;
                }
            }
        }
    }

    return randomArray;
}