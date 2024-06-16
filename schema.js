import { makeExecutableSchema } from "graphql-tools";
import { nanoid } from "nanoid";
const typeDefs = `
    type User {
        id:ID!
        name:String
        age: Int
    }
    type Query{
        hello:String,
        user:User,

    }
`;
const resolvers = {
  Query: {
    hello: () => "Hello world",
    user: () => ({
      id: nanoid(),
      name: "Jason",
      age: 35,
    }),
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
