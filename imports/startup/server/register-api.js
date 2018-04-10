import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import UsersSchema from '../../api/users/User.graphql';

import ResolutionResolvers from '../../api/resolutions/resolvers';
import UsersResolvers from '../../api/users/resolvers';

import merge from 'lodash/merge';

// if errors, try to write some craps and update this page
// it might fix your problems maybe

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
    user: User
  }
`;

const typeDefs = [
  testSchema,
  ResolutionsSchema,
  UsersSchema
];

const resolver = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  },
};

const resolvers = merge(resolver, ResolutionResolvers, UsersResolvers);

// console.log(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
