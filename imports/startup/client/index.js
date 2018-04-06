import React, { Component } from 'react'
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from '../../ui/App';

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(
      <ApolloApp />,
      document.getElementById('app')
    )
});
