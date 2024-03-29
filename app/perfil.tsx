import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Perfil() {
  const abrirLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={styles.title}>Minhas Conexões</Text>
      <View style={styles.iconesLink}>
        <View style={styles.iconeContainer}>
          <Pressable onPress={() => abrirLink('https://github.com/Phillipe17Macedo')}>
            {({pressed}) => (
              <AntDesign
                name="github"
                size={48}
              />
            )}
          </Pressable>
          <Text style={styles.iconeText}>GitHub</Text>
        </View>
        <View style={styles.iconeContainer}>
          <Pressable onPress={() => abrirLink('https://www.linkedin.com/in/phillipe-macedo-234524239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
            {({pressed}) => (
              <AntDesign
                name="linkedin-square"
                size={48}
              /> 
            )}
          </Pressable>
          <Text style={styles.iconeText}>LinkedIn</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '30%',
    marginTop: '50%',
  },
  iconesLink: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  iconeContainer: {
    alignItems: 'center',
  },
  iconeText: {
    marginTop: 5,
  },
});
