import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const InputName = ({handleOnPress}) => {
  const [name, setName] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={styles.placeholder}
        placeholder="Adını yaz"
      />
      <TouchableOpacity onPress={() => handleOnPress(name)} style={styles.btn}>
        <Text style={styles.btnText}>Merhaba De!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    padding: 6,
    marginTop: 20,
    marginBottom: 20,
  },
  placeholder: {
    color: '#4f8a8b',
    fontSize: 16,
    height: 20,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#4f8a8b',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: '#f4f6ff',
    fontWeight: 'bold',
  },
});

export default InputName;
