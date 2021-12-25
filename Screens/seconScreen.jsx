import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Greeting from "./Components/imageView";

export default function SecScr({ navigation }) {
	const [colors, setColor] = useState([]);
	<FlatList />;

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Home")}
			>
				<Text>Press Here</Text>
			</TouchableOpacity>
			<Greeting
				name="Rexxar"
				source={{
					uri: "https://reactnative.dev/img/tiny_logo.png",
				}}
			/>
			<TouchableOpacity
				style={{ backgroundColor: sex() }}
				onPress={() => {
					setColor([...colors, "red"]);
				}}
			>
				<Text>Press Here</Text>
			</TouchableOpacity>
		</View>
	);
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "white",
		padding: 10,
	},
});
