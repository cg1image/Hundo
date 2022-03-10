//get the values from the page
// starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
   
    //We need to validate our input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    let numbers = [];
    
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){    
        //we call generateNumbers
     numbers = generateNumbers(startValue, endValue);
        
    }else {
        alert("You must enter integers");
    }

    
    
    //we call displayNumbers
    displayNumbers(numbers);
}

//generate numbers from startvalue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];


    //we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++){

        //this will execute in a loop until index = eValue
        numbers.push(index); 
    }

    return numbers;

}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers) {

    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        
    }

}