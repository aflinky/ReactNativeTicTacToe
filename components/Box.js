import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Box = (props) => {
  
  let colStyle = rowStyle = "none"
  if (props.col === 0) colStyle = "noLeft"
  if (props.col === 2) colStyle = "noRight"
  if (props.row === 0) rowStyle = "noTop"
  if (props.row === 2) rowStyle = "noBottom"
  return (
    <Fragment>
      <TouchableOpacity style={[styles.box, styles[colStyle], styles[rowStyle]]} onPress={() => props.makeAMove(props.row, props.col)}>
        <Text style={styles.boxMove}>{props.boxMove}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  noLeft: {
    borderLeftWidth: 0
  },
  noRight: {
    borderRightWidth: 0
  },
  noTop: {
    borderTopWidth: 0
  },
  noBottom: {
    borderBottomWidth: 0
  },
  boxMove: {
    fontSize: 50,
  },
});

export default Box;
