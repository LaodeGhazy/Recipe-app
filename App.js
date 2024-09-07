import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import colors from "./src/theme/colors";

import MainScreen from "./src/screens/MainScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: colors.background,
          border: colors.border,
          card: colors.card,
          notification: colors.notification,
          primary: colors.primary,
          text: colors.text,
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{
            title: "RecipeDetail",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
