import { StyleSheet, Text, Modal, View, Dimensions, Button, Alert} from 'react-native';
import React, { useState } from 'react';

const width = Dimensions.get('window').width //obtiene ancho completo del dispositivo, con height se obtiene el alto

const crearDialogo = () => {
  Alert.alert(
    'Titulo',
    'Subtitulo o mensaje que podemos agregar a este dialogo',
    [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Aceptar',
        onPress: () => console.log('Boton presionado'),
        style: 'success',
      }
    ],
    { cancelable: false },
  )
}

export default function App() {

  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal} //esta propiedad viene dentro del hook de modal
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button
              title='Cerrar modal'
              onPress={() => setModal(!modal)}
            />
          </View>
        </View>
      </Modal>
      <Button title='Abrir modal'onPress={() => setModal(!modal)}/>
      <Button title='Abrir dialogo' onPress={crearDialogo}/>
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
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    backgroundColor: '#ccc',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 25,
  }
});
