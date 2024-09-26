// Function to perform calculations
function calculate(num1, num2, operation) {
    let result;

    switch (operation) 
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide'://
            result = num1 / num2;
            break;
        default:
            return 'Invalid Operation'; //
    }


    return `Result: ${result}`;
}


const num1 = 10 
const num2 = 5;
const operation = 'add';

console.log(calculate(num1, num2, operation));
