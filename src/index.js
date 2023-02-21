import './styles/index.css'

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

let text = Object.entries(anotherPerson);
console.log(person);
console.log(anotherPerson);
console.log(text);
