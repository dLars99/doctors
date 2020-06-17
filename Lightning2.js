// Lightning Exercise 2: Write a factory function that creates an object that represents a pet.
// (Continued in main.js)

const createNewPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

export default createNewPet