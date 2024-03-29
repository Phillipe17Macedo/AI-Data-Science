import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

const Money = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultados, setResultados] = useState<string[]>([]);

  const valorPrimeiroGrau = (x: number) => {
    const a = 10.4425;
    const b = -1.0496013;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return ((a * x) + b) * valor;
  };

  const valorSegundoGrau = (x: number) => {
    const a = 0.0136;
    const b = 0.0949;
    const c = 269.7083;
    const valor = 30000;
    return (a * Math.pow(x, 2) + b * x + c) * valor;
  };

  const valorTerceiroGrau = (x: number) => {
    const a = -0.0000122;
    const b = -0.0003;
    const c = 4.3436;
    const d = -2.7284;
    const valor = 30000;
    return (a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d) * valor;
  };

  const valorQuartoGrau = (x: number) => {
    const a = -0.0000000344;
    const b = 0.0000646;
    const c = -0.0261;
    const d = 8.719;
    const e = -172.3701;
    const valor = 30000;
    return (a * Math.pow(x, 4) + b * Math.pow(x, 3) + c * Math.pow(x, 2) + d * x + e) * valor;
  };

  const valorQuintoGrau = (x: number) => {
    const a = -0.0000000000462;
    const b = 0.0000000536;
    const c = 0.00000497;
    const d = -0.009;
    const e = 6.8439;
    const f = -123.4407;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return (a * Math.pow(x, 5) + b * Math.pow(x, 4) + c * Math.pow(x, 3) + d * Math.pow(x, 2) + e * x + f) * valor;
  };

  const valorSextoGrau = (x: number) => {
    const a = 0.00000000000075;
    const b = -0.00000000176;
    const c = 0.00000154;
    const d = -0.0006;
    const e = 0.1069;
    const f = -2.088;
    const g = 44.9152;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return (a * Math.pow(x, 6) + b * Math.pow(x, 5) + c * Math.pow(x, 4) + d * Math.pow(x, 3) + e * Math.pow(x, 2) + f * x + g) * valor;
  };

  const valorSetimoGrau = (x: number) => {
    const a = 0.00000000000000399;
    const b = -0.00000000000989;
    const c = 0.00000000947;
    const d = -0.00000441;
    const e = 0.0011;
    const f = -0.1218;
    const g = 11.0321;
    const h = -142.9548;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return (a*Math.pow(x, 7) + b*Math.pow(x, 6) + c*Math.pow(x, 5) + d*Math.pow(x, 4) + e*Math.pow(x, 3) + f*Math.pow(x, 2) + g*x + h) * valor;
  };

  const valorOitavoGrau = (x: number) => {
    const a = -0.00000000000000000416;
    const b = 0.0000000000000167;
    const c = -0.0000000000257;
    const d = 0.0000000198;
    const e = -0.00000821;
    const f = 0.0018;
    const g = -0.2031;
    const h = 14.6458;
    const i = -183.7827;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return a*Math.pow(x, 8) + b*Math.pow(x, 7) + c*Math.pow(x, 6) + d*Math.pow(x, 5) + e*Math.pow(x, 4) + f*Math.pow(x, 3) + g*Math.pow(x, 2) + h*x + i;
  };

  const valorNonoGrau = (x: number) => {
    const a = -0.000000000000000000105;
    const b = 0.000000000000000355;
    const c = -0.000000000000499;
    const d = 0.000000000376;
    const e = -0.000000164;
    const f = 0.0000421;
    const g = -0.0061;
    const h = 0.4512;
    const i = -8.6345;
    const j = 29.9811;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return (a*Math.pow(x, 9) + b*Math.pow(x, 8) + c*Math.pow(x, 7) + d*Math.pow(x, 6) + e*Math.pow(x, 5) + f*Math.pow(x, 4) + g*Math.pow(x, 3) + h*Math.pow(x, 2) + i*x + j) * valor;
  };

  const valorDecimoGrau = (x: number) => {
    const a = 0.000000000000000000000527;
    const b = -0.00000000000000000211;
    const c = 0.00000000000000362;
    const d = -0.00000000000345;
    const e = 0.000000002;
    const f = -0.000000723;
    const g = 0.0002;
    const h = -0.021;
    const i = 1.4503;
    const j = -37.7802;
    const k = 252.7128;
    const valor = 30000;
    // eslint-disable-next-line prettier/prettier
    return (a*Math.pow(x, 10) + b*Math.pow(x, 9) + c*Math.pow(x, 8) + d*Math.pow(x, 7) + e*Math.pow(x, 6) + f*Math.pow(x, 5) + g*Math.pow(x, 4) + h*Math.pow(x, 3) + i*Math.pow(x, 2) + j*x + k) * valor;
  };

  const formatarMoeda = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  const handleButtonPress = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Atenção', 'Por favor, insira um número válido');
      return;
    }

    const x = parseFloat(inputValue);

    setResultados([
    `1° Grau: ${formatarMoeda(valorPrimeiroGrau(x))}`,
    `2° Grau: ${formatarMoeda(valorSegundoGrau(x))}`,
    `3° Grau: ${formatarMoeda(valorTerceiroGrau(x))}`,
    `4° Grau: ${formatarMoeda(valorQuartoGrau(x))}`,
    `5° Grau: ${formatarMoeda(valorQuintoGrau(x))}`,
    `6° Grau: ${formatarMoeda(valorSextoGrau(x))}`,
    `7° Grau: ${formatarMoeda(valorSetimoGrau(x))}`,
    `8° Grau: ${formatarMoeda(valorOitavoGrau(x))}`,
    `9° Grau: ${formatarMoeda(valorNonoGrau(x))}`,
    `10° Grau: ${formatarMoeda(valorDecimoGrau(x))}`,
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Calcular valor gasto"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {resultados.map((resultado, index) => (
        // eslint-disable-next-line prettier/prettier
        <Text key={index} style={styles.resultado}>{resultado}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Money;
