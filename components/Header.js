import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Kodluyoruz!',
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbd46d',
    padding: 2,
  },
  textHeader: {
    color: '#07031a',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Header;
