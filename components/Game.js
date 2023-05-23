import {View,ScrollView,Text,StyleSheet} from 'react-native'
import {useState} from 'react'
import Board from './Board'
import Move from './Move'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0)
    const xlsNext = currentMove % 2 === 0 ;
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
      }
    return (
        <>
        <View style={styles.boardContainer}>
            <Board xIsNext={xlsNext} squares={currentSquares} onPlay={handlePlay}/>
        </View>
        <ScrollView>
            <Move />
        </ScrollView>
        </>
    );
    }

const styles = StyleSheet.create({
  boardContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  movesContainer: {
    height: "50%",
    padding: 10,
  },
  movesContainerContent: {
    alignItems: "center",
    justifyContent: "top",
  },
});
