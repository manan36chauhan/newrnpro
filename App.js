// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import home from './src/home';



// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'

const App = () => {
    useEffect(()=>{
        checkToken();

    });

    const checkToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
           console.log(fcmToken);
        } 
       }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App