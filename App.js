import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image

} from 'react-native';
import Encabezado from './components/Encabezado';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
const App = () => {
  const [Moneda, setMoneda] = useState('')
  const [Criptomoneda, setCriptomoneda] = useState('')
  const [Bandera, setBandera] = useState(false)
  const [Estadisticas, setEstadisticas] = useState({})

  useEffect(() => {
    if(Bandera){
      const llenaEstadistica=async()=>{
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Criptomoneda}&tsyms=${Moneda}`
        const respuesta=await fetch(url)
        const resultado=await respuesta.json()
        setEstadisticas(resultado.DISPLAY[Criptomoneda][Moneda])
      }
      llenaEstadistica()
    }
    setBandera(false)
  }, [Bandera])
  return (
    <SafeAreaView>
      <Encabezado />
      <Image
        style={styles.imagen}
        source={require('./img/cryptomonedas.png')}
      ></Image>
      <Formulario 
      Moneda={Moneda}
      setMoneda={setMoneda}
      Criptomoneda={Criptomoneda}
      setCriptomoneda={setCriptomoneda}
      setBandera={setBandera}
      />
      <Cotizacion
      Estadisticas={Estadisticas}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: 5
  }
});

export default App;
