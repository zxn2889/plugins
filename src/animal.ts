const enum Animal {
    Cat,
    Dog,
    Fish
}

const animal = (name: Animal) => {
    console.log('I have a' + name);
}

export { animal, Animal }
