import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { SearchBar } from "react-native-elements";
import useResults from "./Components/hooks/useResults";
import ResultsList from "./Components/ResultsList";

const SearchScreen = ({ navigation }) => {
	const [searchApi, results, errorMessage] = useResults();
	const [term, setTerm] = useState("");
	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
				placeholder="Type Here..."
				onChangeText={setTerm}
				value={term}
				onSubmitEditing={() => {
					searchApi(term);
				}}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList
					results={filterResultsByPrice("$")}
					title="Cost Effective"
					navigation={navigation}
				/>
				<ResultsList
					results={filterResultsByPrice("$$")}
					title="Bit Pricier"
					navigation={navigation}
				/>
				<ResultsList
					results={filterResultsByPrice("$$$")}
					title="Big Spender"
					navigation={navigation}
				/>
			</ScrollView>
		</>
	);
};

export default SearchScreen;
