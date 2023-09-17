import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import { RootStack } from "../types";
import Details from "../views/Details";

const Stack = createNativeStackNavigator<RootStack>();
const routeScreenOptions = {
  headerStyle: {
    backgroundColor: "rgb(20, 39, 110)",
  },
  headerTintColor: "white",
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenOptions}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={routeScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
