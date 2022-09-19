import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SectionList, FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';

const width = Dimensions.get('window').width //obtiene ancho completo del dispositivo, con height se obtiene el alto
const data = [
  {key: '1', name: 'Gustavo'},
  {key: '2', name: 'Camila'},
  {key: '3', name: 'Ariel'},
  {key: '4', name: 'Rodrigo'},
  {key: '5', name: 'Rayen'},
  {key: '6', name: 'Gustavo'},
  {key: '7', name: 'Camila'},
  {key: '8', name: 'Ariel'},
  {key: '9', name: 'Rodrigo'},
  {key: '10', name: 'Rayen'},
  {key: '11', name: 'Gustavo'},
  {key: '12', name: 'Camila'},
  {key: '13', name: 'Ariel'},
  {key: '14', name: 'Rodrigo'},
  {key: '15', name: 'Rayen'},
]

//url: https://jsonplaceholder.typicode.com/users

export default function App() {

  const [loading, setLoading] = useState(true); 
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUser(data)
      setLoading(false)
    })
  }, [])

  if(loading){
    return(
      <View style={styles.center}>
        <Text>Cargando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '·ccc',
    borderBottomWidth: 1,

  }
});
