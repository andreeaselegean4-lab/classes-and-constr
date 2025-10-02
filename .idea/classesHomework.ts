
//Example 1

class Person {
    firstName: string
    lastName: string
    age: number


    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    getFullName(): string {
        return this.firstName + "  " + this.lastName;

    }

    introduce(): string {
        return "Hello, I am "  + this.getFullName() + " and I am " + this.age + " years old.";
    }
}
   const person = new Person("Anne","Marie", 21)
   console.log(person.getFullName());
   console.log(person.introduce());
   console.log(person.getFullName());


//Example 2


    class Rectangle {
        width: number
        height: number


        constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
        }


        calculateArea() {
            return this.width * this.height;
        }


        calculatePerimeter(): number {
            return 2 * (this.width + this.height);

    }

}

    const rectangle1 = new Rectangle(10, 5);
    console.log( "Perimeter"   +rectangle1.height)
    console.log(" Area"  + rectangle1.width) ;




