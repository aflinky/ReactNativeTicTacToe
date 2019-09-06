import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import Row from './Row.js'

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ],
      currentPlayer: 1,
      turns: 0
    }
    this.makeAMove = this.makeAMove.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }
  componentDidUpdate() {
    if (this.state.turns >= 5) {
      let three = false;
      //check rows
      for (let row of this.state.gameState) {
        let first = row[0];
        if (first === " ") continue
        if (row.every((curr) => curr === first)) {
          three = true;
          Alert.alert(`${first} won!`)
          return this.resetBoard()
        }
      }
      //check columns
      let first;
      for (let i = 0; i < 3; i += 1) {
        first = this.state.gameState[0][i];
        if (first === " ") continue
        for (let j = 1; j < 3; j += 1) {
          if (this.state.gameState[j][i] !== first) break;
          if (j === 2) {
            three = true
            i = 3
          };
        }
      }
      if (three) {
        Alert.alert(`${first} won!`)
        return this.resetBoard()
      };

      //check 2 diagonals
      if (this.state.gameState[1][1] !== " ") {
        if (this.state.gameState[0][0] === this.state.gameState[1][1] && this.state.gameState[1][1] === this.state.gameState[2][2]) three = true
        if (this.state.gameState[0][2] === this.state.gameState[1][1] && this.state.gameState[1][1] === this.state.gameState[2][0]) three = true
      }
      if (three) {
        Alert.alert(`${this.state.gameState[1][1]} won!`)
        return this.resetBoard()
      }
      //check for tie game
      if (this.state.turns === 9) {
        Alert.alert(`Tie Game!`)
        return this.resetBoard()
      }
    }
  }

  makeAMove = function (row, col) {
    const possibilities = ['X', 'O'];
    let move;
    let newGameState = JSON.parse(JSON.stringify(this.state.gameState));
    if (newGameState[row][col] === " ") {
      move = possibilities[this.state.turns % 2];
      this.state.turns += 1;
      newGameState[row][col] = move; //set new move
      this.setState({ gameState: newGameState }) //set new state
    }
  }

  resetBoard = function () {
    this.setState({
      gameState: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ],
      currentPlayer: 1,
      turns: 0
    })
  }

  render() {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(<Row key={"row" + i} row={i} rowMoves={this.state.gameState[i]} makeAMove={this.makeAMove} />)
    }
    return (
      <Fragment>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.board}>
          {rows}
        </View>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '500',
    marginBottom: 50
  }
});
