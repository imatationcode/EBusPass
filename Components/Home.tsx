import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 30; // Adjust card width based on device width

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')} style={styles.card}>
          <Text style={styles.text}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('MyPass')} style={styles.card}>
          <Text style={styles.text}>MY PASS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {/* Add cards for Renewal and Communications */}
        <TouchableOpacity onPress={() => navigateToScreen('Renewal')} style={styles.card}>
          <Text style={styles.text}>RENEWAL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Communications')} style={styles.card}>
          <Text style={styles.text}>COMMUNICATIONS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {/* Add cards for About Us and Contact Us */}
        <TouchableOpacity onPress={() => navigateToScreen('AboutUs')} style={styles.card}>
          <Text style={styles.text} >ABOUT US</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('ContactUs')} style={styles.card}>
          <Text style={styles.text} >CONTACT US</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4caf7',
  },
  text: {
    
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginRight : 20,
    width: '100%',
  },
  card: {
    width: cardWidth,
    aspectRatio: 1, // Ensures square shape
    padding: 10,
    margin : 20,
    
    borderRadius: 10,
    backgroundColor: '#9276f9',
    shadowColor: '#554490',
    
    shadowOffset: {
      width: -20,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 30,
  },
});

export default Home;
