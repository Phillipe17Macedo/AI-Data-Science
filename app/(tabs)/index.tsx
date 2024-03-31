import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView, Platform } from 'react-native';

const Funcoes = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultados, setResultados] = useState<string[]>([]);

  const primeiroGrau = (x: number) => {
    const a = 10.4425;
    const b = -1.0496013;
    // eslint-disable-next-line prettier/prettier
    return (a * x) + b;
  };

  const segundoGrau = (x: number) => {
    const a = 0.0136;
    const b = 0.0949;
    const c = 269.7083;
    return a * Math.pow(x, 2) + b * x + c;
  };

  const terceiroGrau = (x: number) => {
    const a = -0.0000122;
    const b = -0.0003;
    const c = 4.3436;
    const d = -2.7284;
    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
  };

  const quartoGrau = (x: number) => {
    const a = -0.0000000344;
    const b = 0.0000646;
    const c = -0.0261;
    const d = 8.719;
    const e = -172.3701;

    return a * Math.pow(x, 4) + b * Math.pow(x, 3) + c * Math.pow(x, 2) + d * x + e;
  };

  const quintoGrau = (x: number) => {
    const a = -0.0000000000462;
    const b = 0.0000000536;
    const c = 0.00000497;
    const d = -0.009;
    const e = 6.8439;
    const f = -123.4407;

    // eslint-disable-next-line prettier/prettier
    return a * Math.pow(x, 5) + b * Math.pow(x, 4) + c * Math.pow(x, 3) + d * Math.pow(x, 2) + e * x + f;
  };

  const sextoGrau = (x: number) => {
    const a = 0.00000000000075;
    const b = -0.00000000176;
    const c = 0.00000154;
    const d = -0.0006;
    const e = 0.1069;
    const f = -2.088;
    const g = 44.9152;

    // eslint-disable-next-line prettier/prettier
    return a * Math.pow(x, 6) + b * Math.pow(x, 5) + c * Math.pow(x, 4) + d * Math.pow(x, 3) + e * Math.pow(x, 2) + f * x + g;
  };

  const setimoGrau = (x: number) => {
    const a = 0.00000000000000399;
    const b = -0.00000000000989;
    const c = 0.00000000947;
    const d = -0.00000441;
    const e = 0.0011;
    const f = -0.1218;
    const g = 11.0321;
    const h = -142.9548;

    // eslint-disable-next-line prettier/prettier
    return a*Math.pow(x, 7) + b*Math.pow(x, 6) + c*Math.pow(x, 5) + d*Math.pow(x, 4) + e*Math.pow(x, 3) + f*Math.pow(x, 2) + g*x + h;
  };

  const oitavoGrau = (x: number) => {
    const a = -0.00000000000000000416;
    const b = 0.0000000000000167;
    const c = -0.0000000000257;
    const d = 0.0000000198;
    const e = -0.00000821;
    const f = 0.0018;
    const g = -0.2031;
    const h = 14.6458;
    const i = -183.7827;
    // eslint-disable-next-line prettier/prettier
    return a*Math.pow(x, 8) + b*Math.pow(x, 7) + c*Math.pow(x, 6) + d*Math.pow(x, 5) + e*Math.pow(x, 4) + f*Math.pow(x, 3) + g*Math.pow(x, 2) + h*x + i;
  };

  const nonoGrau = (x: number) => {
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
    // eslint-disable-next-line prettier/prettier
    return a*Math.pow(x, 9) + b*Math.pow(x, 8) + c*Math.pow(x, 7) + d*Math.pow(x, 6) + e*Math.pow(x, 5) + f*Math.pow(x, 4) + g*Math.pow(x, 3) + h*Math.pow(x, 2) + i*x + j;
  };

  const decimoGrau = (x: number) => {
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
    // eslint-disable-next-line prettier/prettier
    return a*Math.pow(x, 10) + b*Math.pow(x, 9) + c*Math.pow(x, 8) + d*Math.pow(x, 7) + e*Math.pow(x, 6) + f*Math.pow(x, 5) + g*Math.pow(x, 4) + h*Math.pow(x, 3) + i*Math.pow(x, 2) + j*x + k;
  };

  const handleButtonPress = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Atenção', 'Por favor, insira um número válido');
      return;
    }

    const x = parseFloat(inputValue);

    setResultados([
      `1° Grau: ${primeiroGrau(x).toFixed(3)}`,
      `2° Grau: ${segundoGrau(x).toFixed(3)}`,
      `3° Grau: ${terceiroGrau(x).toFixed(3)}`,
      `4° Grau: ${quartoGrau(x).toFixed(3)}`,
      `5° Grau: ${quintoGrau(x).toFixed(3)}`,
      `6° Grau: ${sextoGrau(x).toFixed(3)}`,
      `7° Grau: ${setimoGrau(x).toFixed(3)}`,
      `8° Grau: ${oitavoGrau(x).toFixed(3)}`,
      `9° Grau: ${nonoGrau(x).toFixed(3)}`,
      `10° Grau: ${decimoGrau(x).toFixed(3)}`,
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
          <View style={styles.containerDescribe}>
            <Text style={styles.textDescribe}>
              Digite um número que irá representar 
              o número de Dias da Guerra Rússia x Ucrânia.
            </Text>
          </View>
          <View style={styles.containerDescribe}>
            <Text style={styles.textDescribe}>
              O valor apresentado em cada Grau de Função
              representa o número aproximado de Drones gastos nesta Guerra.
            </Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Calcular Quantidade Gasta"
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
        <View style={styles.separator}/>
        <View style={styles.separator}/>
        <View style={styles.separator}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CACACA",
  },
  separator: {
    height: 1,
    marginVertical: 15,
    width: '100%',
  },
  containerDescribe:{
    alignSelf: 'center',
    backgroundColor: "#282A36",
    width:"90%",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
  textDescribe:{
    textAlign: "justify",
    fontWeight: 'bold',
    fontSize: 21,
    color: "#fff",
  },
  input: {
    alignSelf: 'center',
    width: '80%',
    height: 40,
    marginTop: 20,
    borderWidth: 4,
    borderColor: '#173540',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#161F30",
    fontWeight: "bold"
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#84B026',
    padding: 10,
    borderRadius: 20,
    width: 90,
  },
  buttonText: {
    textAlign: "center",
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202022',
  },
});

export default Funcoes;
