export const people = [
    {
        id: 0,
        name: "modolee",
        age: 35,
        gender: "male"
    },
    {
        id: 1,
        name: "Captain America",
        age: 100,
        gender: "male"
    },
    {
        id: 2,
        name: "Iron Man",
        age: 40,
        gender: "male"
    },
    {
        id: 3,
        name: "Black Widow",
        age: 70,
        gender: "female"
    },
    {
        id: 4,
        name: "Scarlet Witch",
        age: 23,
        gender: "female"
    },
    {
        id: 5,
        name: "Maria Hill",
        age: 32,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);

    return filteredPeople[0];
}