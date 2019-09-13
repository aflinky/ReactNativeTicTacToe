import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Board from './components/Board.js'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Board />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
