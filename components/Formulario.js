import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  Pressable
} from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Formulario = ({Moneda,setMoneda,Criptomoneda,setCriptomoneda,setBandera}) => {
  
  const [TopCripto, setTopCripto] = useState([])
  
  useEffect(() => {
    const consultaAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setTopCripto(resultado.Data)
    }
    consultaAPI()
  }, [])

  const cotizaMoneda=()=>{
    if(Moneda && Criptomoneda){
      setBandera(true)
    }
    else{
      setBandera(false)
      Alert.alert(
        'Error',
        'Seleccione la moneda y la criptomoneda',
        [
          {text:'Aceptar'}
        ]
      )
    }
  }
  return (
    <View>

      <Text style={styles.label}>Monedas</Text>
      <Picker
        selectedValue={Moneda}
        onValueChange={Item => setMoneda(Item)}
      >
        <Picker.Item label='- Seleccione -' value='' />
        <Picker.Item label='Dolar USA' value='USD' />
        <Picker.Item label='Peso MXN' value='MXN' />
        <Picker.Item label='Euro' value='EUR' />
        <Picker.Item label='Libra esterlina' value='GBP' />
      </Picker>

      <Text style={styles.label}>Criptomonedas</Text>
      <Picker
        selectedValue={Criptomoneda}
        onValueChange={Item => setCriptomoneda(Item)}
      >
        <Picker.Item label='- Seleccione -' value='' />
        {
          TopCripto.map(cripto => (
            <Picker.Item
              key={cripto.CoinInfo.Id}
              label={cripto.CoinInfo.FullName}
              value={cripto.CoinInfo.Name}
            />
          ))
        }
      </Picker>
      <Pressable 
      style={styles.btnCotizar}
      onPress={()=>cotizaMoneda()}
      >
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 10
  },
  btnCotizar:{
    padding:10,
    marginTop:15,
    backgroundColor:'#9034ff',
    marginHorizontal:20
  },
  textoCotizar:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    textTransform:'uppercase'
  }
});
export default Formulario;
