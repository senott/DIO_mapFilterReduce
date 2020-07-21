const pets = [
    { name: `Rex`, type: `Dog`, age: 10 },
    { name: `Facundo`, type: `Cat`, age: 2 },
    { name: `Guppy`, type: `Fish`, age: 1 }
]
console.log(pets)

const newPets = pets.filter(pet => pet.age < 5)
console.log(newPets)
