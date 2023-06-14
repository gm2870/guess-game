import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 40,
    padding: 12,
    width: '100%',
    elevation: 4,
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderColor: Colors.primary800,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 8,
  },
});
