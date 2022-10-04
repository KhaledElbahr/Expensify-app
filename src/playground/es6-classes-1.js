class Animal {
    constructor(type) {
        this.type = type;
    }

    getDescription() {
        return `The type of animal is ${this.type}`;
    }
}

class Cat extends Animal {
    constructor(type, breed, name) {
        super(type);
        this.breed = breed;
        this.name = name;
    }


    getDescription() {
        let description = super.getDescription();
        if(this.name) {
            description += `, It's name is ${this.name} of breed ${this.breed}.`
        }
        return description;
    }
}

const animal = new Animal('');
console.log(animal.getDescription());


const cat = new Cat('Cat', 'Fluffy', 'Sofy');
console.log(cat.getDescription());