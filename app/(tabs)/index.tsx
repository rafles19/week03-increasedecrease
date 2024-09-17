import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Counter from './Pages/Counter'
import Profile from './Pages/Profile'

export default function Index () {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');
  const [showName, setShowName] = React.useState(false);
  const [displayName, setDisplayName] = React.useState('anonymous');
  const [age, setAge] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  }

  const handlePass = () => {
    setDisplayName(name);
    setAge(count);
    setShowName(true);
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Halo namaku, {showName ? displayName : 'anonymous'} !</Text>
      <Text style={styles.counterText}>Umurku: {age} tahun</Text>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} value={count} />
      <TextInput style={styles.input} value={name} onChangeText={handleNameChange} />
      <Button title="Pass Value" onPress={handlePass} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  counterText: {
    fontSize: 15,
    margin: 10,
  },
});
