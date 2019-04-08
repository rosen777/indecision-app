// function square (x) {
//     return x * x
// }

// console.log(square(3))

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// // Implicity return expression when we have only one argument

// const squareArrow = (x) => x * x

// console.log(squareArrow(4))

// Challenge – Use arrow functions
// getFirstName('Mike Smith') ->
// Create regular arrow functions
// Create arrow function using shorthand syntax

const fullName = 'Rosen Toshev'

const firstName = (fullName) => {
    return fullName.split(" ")[0];
}

console.log(firstName(fullName))

const firstNameShort = (fullName) => fullName.split(' ')[0]

console.log(firstNameShort(fullName))
