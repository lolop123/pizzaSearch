import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../Screens/Components/Api/yelp";

const ResultsShowScreen = ({ route, navigation }) => {
	const [result, setResult] = useState(null);
	const { id } = route.params;

	console.log(result);

	const getResult = async (id) => {
		const response = await yelp.get(
			`/${id}`
		); /* добавляет к запросу в елепе дробь и айди */
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);
	if (!result) {
		return null;
	}

	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return (
						<Image style={styles.image} source={{ uri: item }} />
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
	},
});
export default ResultsShowScreen;
