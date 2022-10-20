import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image

} from 'react-native';
const Cotizacion = ({Estadisticas}) => {
  return (
    <View>
        <Text>Precio:{'   '}{Estadisticas.PRICE}</Text>
        <Text>Precio alto:{'   '}{Estadisticas.HIGHDAY}</Text>
        <Text>Precio bajo:{'   '}{Estadisticas.LOWDAY}</Text>
        <Text>Precio ultimas 24H:{'   '}{Estadisticas.LOW24HOUR}</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
    
  });
  
export default Cotizacion;
