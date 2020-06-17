import createNewDoctor from "./Lightning1.js"
import createNewPet from "./Lightning2.js"

// Test Lightning Exercise 1 function
const drJohnson = createNewDoctor("John Johnson", "Splenectomy", "802 Street Rd., Nashville, TN 37217")

console.log(drJohnson)

// Lightning Exercise 2, cont.: Invoke the factory function 3 times and place each animal in an array
let BowWowKennels = []

BowWowKennels.push(createNewPet("Sammy", "Scottie"))
BowWowKennels.push(createNewPet("Chewy", "Chow Chow"))
BowWowKennels.push(createNewPet("A-hole", "Jack Russell Terrier"))

console.log(BowWowKennels)
