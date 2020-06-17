// Lightning Exercise 1: Write a factory function that represents a doctor

const createNewDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

export default createNewDoctor