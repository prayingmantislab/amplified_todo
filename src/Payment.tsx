import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
// @ts-ignore
const Payment = ({ navigation, route }) => {
  return (
    <>
      <View>
        <Text>Check Out</Text>
      </View>
    </>
  );
};

export default Payment;
