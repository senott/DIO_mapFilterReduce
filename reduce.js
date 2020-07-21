const pets = [
    { name: `Rex`, type: `Dog`, age: 10, weight: 5.00 },
    { name: `Facundo`, type: `Cat`, age: 2 , weight: 8.00},
    { name: `Mel`, type: `Dog`, age: 4, weight: 10.00 },
    { name: `Agatha`, type: `Cat`, age: 3 , weight: 5.00},
    { name: `Guppy`, type: `Fish`, age: 1, weight: 0.10 },
    { name: `Pé de Pano`, type: `Horse`, age: 2, weight: 500.00 },
]
console.log(pets)

const totals = pets.reduce((total, pet) => {
    return {
        totalWeight: total.totalWeight + pet.weight,
        totalAge: total.totalAge + pet.age
    }
}, { totalWeight: 0, totalAge:0.00 })
console.log(totals)

const totalWeightDogs = pets.filter(pet => pet.type === `Dog`).reduce((total, pet) => total += pet.weight, 0)
console.log(totalWeightDogs)
