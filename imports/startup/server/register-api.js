import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionResolvers from '../../api/resolutions/resolvers';
import merge from 'lodash/merge';
// hi
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

const resolver = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  },
};

const resolvers = merge(resolver, ResolutionResolvers);

// console.log(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });