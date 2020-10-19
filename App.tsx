import { NavigationContainer, useNavigation } from '@react-navigation/native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import {enableScreens} from "react-native-screens"

enableScreens()

const App = () => {
 return <NavigationContainer>
    <MyStack />
  </NavigationContainer>
}
export default App

  const Home = () => {
    const navigation = useNavigation()

    return <View style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("PinnedModal")}>
        <Text>Go to pinned modal</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("pinnedModal")}>
        <Text>Go to list modal</Text>
      </TouchableWithoutFeedback>
    </View>
  }

  const {Navigator: PinnedModalNavigator, Screen: PinnedModalScreen} = createNativeStackNavigator();

 const PinnedModalStack = () => (<PinnedModalNavigator>
   <PinnedModalScreen name="PinnedModalScreen" component={ScreenWithPinnedBottom}/>
 </PinnedModalNavigator>)

  const ScreenWithPinnedBottom = () => (
    <View style={{flex:1}}>
      <Text>Pull header upwards</Text>
      <View style={{position: "absolute", height: 500, bottom:0, left:0, right:0, backgroundColor: "blue", alignItems:"center", justifyContent:"center"}}>
        <Text>Wobble</Text>
      </View>
    </View>)
  
  const {Navigator: MainNavigator, Screen: MainScreen} = createNativeStackNavigator();

  function MyStack() {
    return (
      <MainNavigator initialRouteName={"Home"} screenOptions={{stackPresentation:"modal"}}>
        <MainScreen name="Home" component={Home} />
        <MainScreen name="PinnedModal" component={PinnedModalStack} />
      </MainNavigator>
    );
  }

