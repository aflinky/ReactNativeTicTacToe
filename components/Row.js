import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Box from './Box.js'

const Row = (props) => {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    boxes.push(<Box key={"box" + i} row={props.row} col={i} boxMove={props.rowMoves[i]} id={`${props.row}, ${i}`} makeAMove={props.makeAMove} />)
  }
  return (
    <View style={styles.row} >
      {boxes}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});

export default Row;