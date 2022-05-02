//objects

let obj = {};

console.log(typeof obj);

obj.name = "Rian"

console.log(obj)

obj.age = 18

console.log(obj)

console.log(Object.values(obj))

console.log(Object.keys(obj))

let person = {
    name: "RD",
    age: 18,
    adress: "Rua da paz"
}

console.log(person)

console.log(person.name)

console.log(person["name"])

person["numberOfSiblings"] = 2

console.log(person)

let mom = "nameOfMom"

person[mom] = "Cristiane"

console.log(person)
