import React from 'react';
import {StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import GUIDemo from './src/components/GUIDemo';

const GUIScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <GUIDemo />
    </View>
  );
};

export default function App() {
  return (
    <>
      <GUIScreen />
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '60%',
    marginTop: -200,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 0,
  },

  buttonStyle: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 3,
    margin: 10,
    height: 30,
    width: 300,
    justifyContent: 'center',
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
});
