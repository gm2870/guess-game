import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

export default function StartGame(props) {
  const [enteredNumber, setEnteredNumber] = useState(null);
  const confirmHandler = () => {
    const num = parseInt(enteredNumber);
    if (isNaN(num) || num <= 0 || num > 99) {
      return Alert.alert('Invalid number', 'Number must be betwween 1 and 99', [
        { text: 'Okay', style: 'cancel', onPress: resetHandler },
      ]);
    }
    props.confirm(num);
  };

  const resetHandler = () => setEnteredNumber(null);

  const handleChange = (num) => setEnteredNumber(num);

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          autoFocus={false}
          autoCapitalize="none"
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },

  input: {
    width: 50,
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    textAlign: 'center',
    marginVertical: 8,
  },
});
