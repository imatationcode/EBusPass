
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScrn from '../Components/SplashScrn';
import Home from '../Components/Home';
import AboutUs from '../Components/AboutUs';
import Communications from '../Components/Communications';
import ContactUs from '../Components/ContactUs';
import MyPass from '../Components/MyPass';
import Profile from '../Components/Profile';
import Renewal from '../Components/Renewal';


const NStack = createNativeStackNavigator(); 
  
const App = () => {
  return (
    
    <NavigationContainer >
      <NStack.Navigator initialRouteName='SplahsScrn' screenOptions={{headerTitle : 'E-Buss Pass', headerStyle: {
            backgroundColor: '#d4caf7',
          },}}>
        <NStack.Screen name='SplashScrn' component={SplashScrn} options={{headerShown : false}} />
        <NStack.Screen name='Home' component={Home} options={{headerBackVisible: false}}/>
        
        <NStack.Screen name='AboutUs' component={AboutUs} options={{}}/>
        <NStack.Screen name='Communications' component={Communications} options={{}}/>
        <NStack.Screen name='ContactUs' component={ContactUs} options={{}}/>
        <NStack.Screen name='MyPass' component={MyPass} options={{}}/>
        <NStack.Screen name='Profile' component={Profile} options={{}}/>
        <NStack.Screen name='Renewal' component={Renewal} options={{}}/>
        
        
      </NStack.Navigator>
      
    </NavigationContainer>
    
  )
};

export default App ;