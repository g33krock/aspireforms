import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import FormInfo from './FormInfoComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DirectoryNavigator = () =>
    <Stack.Navigator>
        <Stack.Screen
            name="Directory"
            component={Directory}
        />
        <Stack.Screen
            name="FormInfo"
            component={FormInfo}
        />
    </Stack.Navigator>;

const HomeNavigator = () =>
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
        />
    </Stack.Navigator>;

const MainNavigator = () =>
    <Drawer.Navigator>
        <Drawer.Screen
            name="Home"
            component={HomeNavigator}
        />
        <Drawer.Screen
            name="Directory"
            component={DirectoryNavigator}
        />
    </Drawer.Navigator>

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        );
    }
}

export default Main;