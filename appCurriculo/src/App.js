import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/foto.jpg';

export default function App() {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert(
          'Meu Linkedin',
          'https://www.linkedin.com/in/danylo-silva/',
        );
        break;
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/DanyloSilva');
        break;
      case 'instagram':
        Alert.alert(
          'Meu Instagram',
          'https://www.linkedin.com/in/danylo-silva/',
        );
        break;
      case 'twitter':
        Alert.alert('Meu Twitter', 'https://github.com/DanyloSilva');
        break;
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.containe_cabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>Kleber Danylo Mendes da Silva</Text>
        <Text style={styles.funcao}>DESENVOLVEDOR FULL STACK</Text>
        <View style={styles.redes_sociais}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon name="instagram" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            TouchableOpacity
            onPress={() => handleRedeSocial('twitter')}>
            <Icon name="twitter" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />

      <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.card_content_text}>HABILIDADES</Text>
          </View>

          <View style={styles.card_content}>
            <Text style={styles.card_content_subText}>
              PHP,Java, Larevel, JavaScript, React Native,
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.card_content_text}>FORMAÇÃO</Text>
          </View>

          <View style={styles.card_content}>
            <Text style={styles.card_content_subText}>
              Análise e Desenvolvimento de Sistemas (2019 – )
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#6A5ACD',
    flex: 1,
  },
  containe_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 225,
    height: 225,
    borderRadius: 125,
  },
  nome: {
    color: '#E7E7E7',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  funcao: {
    color: '#939393',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fffafa',
  },

  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    fontWeight: 'bold',
    marginTop: 2,
    textAlign: 'center',
  },
  card_content_subText: {
    color: '#6A5ACD',
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
});
