/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { tsConstructorType } from '@babel/types';

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1
    }
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      gameState:
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
      currentPlayer: 1
    })
  }

  renderMove = (row, col) => {
    const value = this.state.gameState[row][col];
    switch (value) {
      case 1: return 'X';
      case -1: return 'O';
      case 0: return '';
    }
  }

  makeMove = (row, col) => {

  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.makeMove(0, 0)} style={[styles.box, { borderLeftWidth: 0, borderTopWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(0, 0)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.makeMove(0, 1)} style={[styles.box, { borderTopWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(0, 1)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.makeMove(0, 2)} style={[styles.box, { borderRightWidth: 0, borderTopWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(0, 2)}
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.makeMove(1, 0)} style={[styles.box, { borderLeftWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(1, 0)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.makeMove(1, 1)} style={styles.box} >
                <Text style={styles.move}>
                  {this.renderMove(1, 1)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.makeMove(1, 2)} style={[styles.box, { borderRightWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(1, 2)}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.makeMove(2, 0)} style={[styles.box, { borderLeftWidth: 0, borderBottomWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(2, 0)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.makeMove(2, 1)} style={[styles.box, { borderBottomWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(2, 1)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.makeMove(2, 2)} style={[styles.box, { borderRightWidth: 0, borderBottomWidth: 0 }]} >
                <Text style={styles.move}>
                  {this.renderMove(2, 2)}
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
      </Fragment >
    );
  };
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    borderWidth: 5,
  },
  move: {
    fontSize: 26,
    color: 'blue'
  },
})