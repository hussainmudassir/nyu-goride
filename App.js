import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Image, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Location from './LocationScreen';
import UserScreen from "./UserScreen";
import ScheduleScreen from './ScheduleScreen';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'blue' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackground: () => (
        <Image source={require("./NYU-Logo.png")}
          style={{ width: '100%', height: '100%', resizeMode: 'center' }}
        />
      ),
    }}>
      <Stack.Screen name="Mudassir" component={UserScreen} options = {({ navigation }) => ({ title: '', headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
            {/* //   <<Ionicons name="alarm-outline" size={30} color="black" />> */}
            </View>
          ), 
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => navigation.navigate('User')}>
          //   <View style={{ marginRight: 10 }} >
          //     <Ionicons name="mail-outline" size={30} color="black" />
          //   </View>
          //   </TouchableOpacity>
          // )
           })}/>
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator barStyle = { {backgroundColor: '#772583', height: 80}} initialRouteName={HomeStack} theme={{colors: {secondaryContainer:'red'}}} activeColor={'red'}>

      <Tab.Screen 
        name="Home" 
        component={Location} 
        options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => <Ionicons name="location-outline" color={color} size={26} />,
        }}/>
      <Tab.Screen 
        name="Schedule" 
        component={ScheduleScreen} 
        options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => <Ionicons name="bus-outline" color={color} size={26} />,
        }}/>
        <Tab.Screen 
      name="Upload" 
      component={HomeStack} 
      options = {{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => <Ionicons name="person-outline" color={color} size={26}  /> }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
