import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import axios from 'axios';

// export default function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Faire des appels API
//     // https://api.github.com/users
//     console.log('useEffect App');
//     // Promise
//     axios.get('https://api.github.com/users').then(response => {
//       console.log('REPONSE data : ', response.data);
//       setUsers(response.data);


//     }).catch(error => {
//       console.log('error', error);
//     });
//   }, []);
//   // [{id: ..., login : ...}, {id: ..., login : ...} ....]
//   const userListJsx = users.map((element) => {
//       return (
//       <View key={element.id} style={styles.user}>
//         <Text>ID : {element.id}</Text>
//         <Text>Username : {element.login}</Text>
//         <Image source={{uri: element.avatar_url}} style={styles.image} />
//       </View>
//       )
//   })

//   return (
//     <View style={styles.container}>
//       {userListJsx}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   user:{
//     backgroundColor:'lightblue',
//     borderRadius: 20,
//     padding: 10,
//     margin: 20,
//     alignItems:'center'

//   },
//   image:{
//     width:100,
//     height: 100
//   }
// });





const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
