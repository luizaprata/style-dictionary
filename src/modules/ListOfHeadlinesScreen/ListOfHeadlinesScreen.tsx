import React from 'react';
import {View, Text, PixelRatio, StyleSheet} from 'react-native';
import useHeadlinesApi from './useHeadlinesApi';
import * as variables from '@resources/variables';

const ListOfCategoriesScreen: React.FC = () => {
  const {payload, isLoading, errorMessage} = useHeadlinesApi();

  console.log(payload);

  if (errorMessage) {
    return <Text>{errorMessage}</Text>;
  }

  if (isLoading) {
    return <Text style={styles.title}>Carregando</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing</Text>
      <Text style={styles.p}>All done!</Text>
    </View>
  );
};

export default ListOfCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.brandColorPrimary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeLg.number,
    color: variables.brandColorPrimary4,
  },
  p: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeSm.number,
    color: variables.neutralColor4,
  },
});
