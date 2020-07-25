import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
const ShowText = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{color: '#fbd46d'}}>Kodluyoruz</Text> Ailesine Kocaman
        Merhaba!
      </Text>
      <Text style={styles.subTitle}>
        Benim adım <Text style={styles.name}>{name} !</Text>
      </Text>
    </View>
  );
};

ShowText.defaultProps = {
  name: 'Oktay!',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#f4f6ff',
    height: 500,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    color: '#07031a',
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    color: '#4f8a8b',
    fontSize: 25,
    fontWeight: '900',
  },
});
export default ShowText;
