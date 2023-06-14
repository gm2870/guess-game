import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';
import { useState } from 'react';
import GameScreen from './screens/Game';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOver';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  const confirmHandler = (num) => {
    setUserNumber(num);
    setGameOver(false);
  };
  const onStartNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
  const gameOverHandler = (guessRounds) => {
    setGameOver(true);
    setGuessRounds(guessRounds);
  };

  let screen = <StartGame confirm={confirmHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={onStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require('./assets/background.png')}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
