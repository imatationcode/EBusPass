import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined; 
};

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const SplashScrn: React.FC<SplashScreenProps> = ({ navigation }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  if (showSplash) {
    return (
      <View style={styles.container}>
        <Image source={require('./Splash.png')} style={styles.image} />
      </View>
    );
  } else {
    return <Text>Redirecting to Home...</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScrn;
