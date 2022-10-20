import React from 'react';
import{
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Platform
} from 'react-native'
const Encabezado = () => {
  return (
    <Text style={styles.titulo}>CRIPTOMONEDAS</Text>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:20,
        textAlign:'center',
        textTransform:'uppercase',
        backgroundColor:'#296dc3',
        paddingTop: Platform.OS==='ios'?50:10,
        paddingBottom:10,
        color:'#FFF',

    }
});

export default Encabezado;

