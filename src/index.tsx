import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Text, View} from 'react-native';
import Home from './screens/Home';
import {createApolloClient} from './config/apollo-client';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
