import React, { Component } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
    console.log(this.state.stars);
  }

  render() {
     return (
      <View />
    );
  }
}
