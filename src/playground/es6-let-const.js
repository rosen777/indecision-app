var nameVar = 'Andrew';
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameLet', nameLet)

// Block scoping

const fullName = 'Rosen Toshev'
let firstName

if(fullName) {
    firstName = fullName.split(' ')[0] // function scope
    console.log(firstName);
}

console.log(firstName)