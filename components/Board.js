import {View,Text,StyleSheet,Pressable} from 'react-native'

function Square({value, onSquarePress}) {
    return (
    <Pressable onPress={onSquarePress}>
      <View style={styles.viewBorder}>
        <Text style={styles.squareContainer}>{value}</Text>
      </View>
      </Pressable>
    );
  }

export default function Board(props) {
  function handlePress(i){
    const nextSquares = props.squares.slice()
    nextSquares[i] = props.xIsNext ? "X" : "O";
    props.onPlay(nextSquares)
  };
  const status = props.xIsNext ? "Next player: X" : "Next player: 0"
    return (
      <>
        <Text>{status}</Text>
        <View style={styles.container}>
          <Square value={props.squares[0]} onSquarePress ={() => handlePress(0)}/>
          <Square value={props.squares[1]} onSquarePress ={() => handlePress(1)}/>
          <Square value={props.squares[2]} onSquarePress ={() => handlePress(2)}/>
        </View>
        <View style={styles.container}>
          <Square value={props.squares[3]} onSquarePress ={() => handlePress(3)}/>
          <Square value={props.squares[4]} onSquarePress ={() => handlePress(4)}/>
          <Square value={props.squares[5]} onSquarePress ={() => handlePress(5)}/>
        </View>
        <View style={styles.container}>
          <Square value={props.squares[6]} onSquarePress ={() => handlePress(6)}/>
          <Square value={props.squares[7]} onSquarePress ={() => handlePress(7)}/>
          <Square value={props.squares[8]} onSquarePress ={() => handlePress(8)}/>
        </View>
      </>
    );
  }


const styles = StyleSheet.create({
    container:{
        flexDirection:'row'

    },
    squareContainer:{
        margin:5,
        padding:10,
    },
    viewBorder:{
      borderWidth:1
    }

})
