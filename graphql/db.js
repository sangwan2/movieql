export const people = [
  {
    id: "0",
    name: "sangwan1",
    age: 18,
    gender: "male",
  },
  {
    id: "1",
    name: "sangwan2",
    age: 19,
    gender: "male",
  },
  {
    id: "2",
    name: "sangwan2",
    age: 20,
    gender: "male",
  },
  {
    id: "3",
    name: "sangwan4",
    age: 21,
    gender: "male",
  },
  {
    id: "4",
    name: "sangwan5",
    age: 22,
    gender: "male",
  },
  {
    id: "5",
    name: "sangwan6",
    age: 23,
    gender: "male",
  },
];

export const getById = (id) => {
  const filterPeople = people.filter((person) => person.id === String(id));
  return filterPeople[0];
};
