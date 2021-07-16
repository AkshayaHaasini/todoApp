import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
     <Header
     backgroundColor='pink'
     centerComponent={
       {
         text:'ToDo App',
         style:{
           fontSize:20,
           color:'blue'
         }
       }
     }
     />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
