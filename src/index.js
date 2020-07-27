/* eslint-disable no-undef */
import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F36B7F" />
      <Routes />
    </>
  );
};

export default App;
