const toys = [
    {
        id: 1,
        name: "Rubkis Cube",
        price: 3.99,
        needsBatteries: false,
    },
    {
        id: 2,
        name: "RC Car",
        price: 79.99,
        needsBatteries: true,
    },   
    {
        id: 3,
        name: "Mr. Potato Head",
        price: 19.99,
        needsBatteries: false,
    }
]




const yoyo = {
    id: 4,
    name: "Yo-Yo",
    price: 6.49,
    needBatteries: false
}

const xbox = {
    id: 5,
    name: "Xbox",
    price: 499.99,
    needsBatteries: true
}

toys.push(yoyo)
toys.push(xbox)



for (const toy of toys) {
    toy.price = toy.price * 1.05
}

for (const toy of toys) {
    console.log(`The ${toy.name} is $${toy.price} ${toy.needsBatteries}`)
}