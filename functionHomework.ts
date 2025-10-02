///1. Temperature Converter

function convertToFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 1;
}

//or

function convertToFahrenheit2( celsius:number ) {
    const result = (celsius * 9 / 5 + 32)
    return result;
}

console.log("Convert to Fahrenheit " + convertToFahrenheit2 ( 25))

console.log(convertToFahrenheit(30));



///2. Greeting Generator
function greetUser(firstName: string, lastName: string): string {
    return firstName + " Hello " + lastName;
}

console.log(greetUser("Ana", "Banana"));


///3Rectangle Area Calculator)

function calculateArea(width: number, height: number): number {
    return width * height;
}

console.log(calculateArea(50, 50));


///4 Simple Sum

function addNumbers(a: number, b: number) {
    return a + b;
}

console.log(addNumbers(55, 88));