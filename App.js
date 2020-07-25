/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import InputName from './components/InputName';
import ShowText from './components/ShowText';

const App: () => React$Node = () => {
  const [name, setName] = React.useState('-Adını yaz-');

  const handleOnPress = (text) => {
    setName(text);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <InputName handleOnPress={handleOnPress} />
        <ShowText name={name} />
      </SafeAreaView>
    </>
  );
};

export default App;
