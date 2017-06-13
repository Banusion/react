import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default class About extends React.Component {
	render() {
		return (
			<View>
				<Text style={style.title}>A propos de moi  </Text>
				<Text> bla bla </Text>
		    </View>
		)
	}
}

const style = StyleSheet.create({
	style: {
		margin: 20
	},
	title: {
		 fontSize: 22,
		 marginBottom: 20
	}
})
