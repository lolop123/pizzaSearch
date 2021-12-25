import React from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default class FirScr extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: "green",
		};
	}
	_ifLiked = () => {
		this.setState({
			isShow: "red",
		});
		console.log("kk");
	};
	render() {
		return (
			<View>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("Profile")}
				>
					<Text>Press Here</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ backgroundColor: this.state.isShow }}
					onPress={() => this._ifLiked()}
				>
					<Text>Press Here</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
