const person = {
    name:'John',
    age:28,
    gender:'male',
    job:'Teacher'
};

const anotherPerson = {
    ...person,
    name:'Reese'
}

let text = Object.entries(anotherPerson)
