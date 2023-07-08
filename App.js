import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Scanner from './screens/Scanner';
import Home from './screens/Home';

const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Scanner" component={Scanner}/>
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    )
}
