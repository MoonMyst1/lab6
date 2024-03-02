// Global access to Map so can be used across both functions
const numberType = new Map([
    ["prime", 0],
    ["comp", 0],
    ["neither", 0]
]);

// Make array function
function main(event) {
    event.preventDefault();

    // Resets Map to zero after each instance.
    numberType.set('prime', 0);
    numberType.set('comp', 0);
    numberType.set('neither', 0);

    let numberList = document.getElementById('numbers').value;
    /* Using the array function 'split', it will take the string and separate each number into an array section
    ** every time it encounters a comma, meaning any range of numbers could be used.
    */
    const numberArray = numberList.split(",");

    numberArray.forEach(primeChecker);

    let results = ("The results for numbers: " + numberList + " are as follows: \n\nPrime Numbers: " 
    + numberType.get('prime') + "\nComposite Numbers: " + numberType.get('comp') + "\nNeither: " 
    + numberType.get('neither'));
    // Adds results to HTML file.
    document.getElementById('results').innerHTML = results;
    // Clears input values
    document.getElementById('numbers').value = '';
}

// Prime Checker function
function primeChecker(arrayValue) {
    // Using 'Number' function to turn array value that is a string into a number
    let temp = Number(arrayValue);

    if(temp == 1) {
        numberType.set('neither', numberType.get('neither') + 1);
    } else {
        let isComp = false;
        for(let i = 2; i <= temp / 2; i++) {
            if(temp % i == 0) {
                isComp = true;
                break;
            }
        }

        if(isComp) {
            numberType.set('comp', numberType.get('comp') + 1);
        } else {
            numberType.set('prime', numberType.get('prime') + 1);
        }
    }
}