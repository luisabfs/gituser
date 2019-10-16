import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function User({ navigation }) {
  console.log(navigation.getParam('user'));

  return (
    <View />
  );
}

User.navigationOptions = {
  title: 'Users',
};
