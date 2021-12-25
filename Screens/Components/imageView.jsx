import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default function Greeting(props) {
	return (
		<View style={{ alignItems: "center" }}>
			<Image source={props.source} style={styles.img} />
			<Text>Hello {props.name}!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	img: {
		width: 193,
		height: 110,
		marginTop: 50,
	},
});
