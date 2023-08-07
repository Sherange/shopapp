import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useQuery} from '@apollo/client';
import {Character, GetCharactersDocument} from '../gql/graphql';

import CharacterCard from '../components/CharacterCard';

const Home = () => {
  const {data, loading} = useQuery(GetCharactersDocument);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.characters?.results}
        renderItem={({item}) => <CharacterCard data={item as Character} />}
        contentContainerStyle={styles.characterList}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  characterList: {
    padding: 16,
  },
});
