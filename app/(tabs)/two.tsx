import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Graficos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3D3D3D',
  },
  separator: {
    height: 1,
    marginVertical: 10,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textFunc: {
    alignSelf: 'center',
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
  },
  imagem: {
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
});
