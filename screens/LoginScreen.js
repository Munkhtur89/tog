import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="click" onPress={() => navigation.navigate('Onboarding')} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
