import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Home from './src/Home';
import Chawazi from './src/Chawazi';
import Payment from './src/Payment';

const Stack = createNativeStackNavigator();

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/*@ts-ignore  */}
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Chawazi' component={Chawazi} />
          <Stack.Screen name='Payment' component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
