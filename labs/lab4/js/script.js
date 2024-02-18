//Days of the Week

function changeColor() {
    let day = document.getElementById('days').value;
    switch(day) {
        case 'Monday':
            document.getElementById('daysDiv').style.backgroundColor = "red";
            break;
        case 'Tuesday':
            document.getElementById('daysDiv').style.backgroundColor = "orange";
            break;
        case 'Wednesday':
            document.getElementById('daysDiv').style.backgroundColor = "yellow";
            break;
        case 'Thursday':
            document.getElementById('daysDiv').style.backgroundColor = "green";
            break;
        case 'Friday':
            document.getElementById('daysDiv').style.backgroundColor = "blue";
            break;
        case 'Saturday':
            document.getElementById('daysDiv').style.backgroundColor = "indigo";
            break;
        case 'Sunday':
            document.getElementById('daysDiv').style.backgroundColor = "purple";
            break;
        default:
            document.getElementById('daysDiv').style.backgroundColor = "white";
    }
}

//Number Checker

function checkNumber() {
    let inputNumber = document.getElementById('number').value;
    let result = "The number entered is an ";

    // Check for even or odd
    if(inputNumber % 2 == 0) {
        result += "even ";
    } else {
        result += "odd ";
    }

    // Check for prime number
    if(inputNumber != 1) {
        for(let i = 2; i < inputNumber / 2; i++) {
            if(inputNumber % i == 0) {
                result += "composite number "
                break;
            }
        }
        result += "prime number "
    } else {
        result += "prime number "
    }
    
    // Check for range
    if(inputNumber <= 50) {
        result += "that is less than 50."
    } else if(inputNumber <= 75) {
        result += "that is greater than 50 and less than 75."
    } else if(inputNumber <= 100) {
        result += "that is greater than 75 and less than 100."
    } else {
        result += "that is greater than 100."
    }

    alert(result);
}