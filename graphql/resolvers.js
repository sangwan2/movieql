const yesdouble = {
  name: "sangwan2",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => yesdouble,
  },
};

export default resolvers;
