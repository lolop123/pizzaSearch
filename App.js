import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import FirScr from "./Screens/firstScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SecScr from "./Screens/seconScreen";
import ResultsShowScreen from "./Screens/ResultsShowScreen";

import SearchScreen from "./Screens/SearchScreen";
const Stack = createStackNavigator();

/* ID клиента
M0BNP5yTbYUbm0yDXjvNBg

Ключ API
Yx1mOgi7XXZzzK7uLo-pn1hVDFRGDKGiJTZQqAL9Cv9snv0s7vS5IYh02pebKdFVUxNLyZ5c-n-HB9cC-gQ0Vt6byglmFpAa9XfZGdYCHT */

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Homee"
					component={SearchScreen}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen
					name="Home"
					component={FirScr}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen name="Profile" component={SecScr} />
				<Stack.Screen name="res" component={ResultsShowScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
