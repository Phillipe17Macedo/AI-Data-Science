import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Platform } from 'react-native';

export default function Graficos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Gráficos gerados para cada cálculo de Função,
            desde o 1° Grau ao 10° Grau.
          </Text>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Função de 4° Grau foi a mais precisa.
          </Text>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 1° Grau</Text>
          <Image source={require('app/img/func-1.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 2° Grau</Text>
          <Image source={require('app/img/func-2.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 3° Grau</Text>
          <Image source={require('app/img/func-3.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 4° Grau</Text>
          <Image source={require('app/img/func-4.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 5° Grau</Text>
          <Image source={require('app/img/func-5.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 6° Grau</Text>
          <Image source={require('app/img/func-6.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 7° Grau</Text>
          <Image source={require('app/img/func-7.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 8° Grau</Text>
          <Image source={require('app/img/func-8.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 9° Grau</Text>
          <Image source={require('app/img/func-9.png')} style={styles.imagem}/>
        </View>
        <View>
          <Text style={styles.textFunc}>Função 10° Grau</Text>
          <Image source={require('app/img/func-10.png')} style={styles.imagem}/>
        </View>
        <View style={styles.separator}/>
        <View style={styles.separator}/>
        <View style={styles.separator}/>
        <View style={styles.separator}/>
        <View style={styles.separator}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CACACA',
  },
  separator: {
    height: 1,
    marginVertical: 15,
    width: '100%',
  },
  containerTitle: {
    alignSelf: 'center',
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#282A36",
    borderRadius: 20,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: "justify",
  },
  textFunc: {
    alignSelf: 'center',
    marginTop: 25,
    color: '#202022',
    fontWeight: 'bold',
    fontSize: 25,
  },
  imagem: {
    borderWidth: 1,
    borderColor: "#202022",
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
});
