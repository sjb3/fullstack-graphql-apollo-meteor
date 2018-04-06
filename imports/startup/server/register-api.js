import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`;

const typeDefs = [
  testSchema,
  ResolutionsSchema
];

const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    },
    resolutions() {
      return [
        {
          _id: '1234',
          name: 'nana'
        }
      ]
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });