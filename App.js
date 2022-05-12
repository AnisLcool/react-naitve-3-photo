import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import Home from './components/Home';
import axios from 'axios';

export default function App() {


  useEffect(() => {
    // Faire des appels API
    // https://api.github.com/users
    console.log('useEffect App');
    // Promise
    axios.get('https://api.github.com/users').then(response => {
      console.log('REPONSE : ', response);
    }).catch(error => {
      console.log('error', error);
    });
  });

  console.log('return App');
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
