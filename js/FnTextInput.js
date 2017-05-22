/**
 * @flow
 */

import React, { Component } from 'react';

import {
	TextInput,
	StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
	textInput: {
		fontSize: 16,
		color: '#000000',
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 2,
		height: 40,
		paddingLeft: 8
	}
});


export class FnTextInput extends Component {
	static propTypes = {
		...TextInput.propTypes
	};

	static defaultProps = {
		style: {}
	};

	props: {
		style?: any,
	};

	textInput: TextInput;

	focus() {
		this.textInput.focus();
	}

	render() {
		return (
			<TextInput
				{...this.props}
				id="textInput"
				ref={e => (this.textInput = e)}
				style={[styles.textInput, this.props.style]}
				selectionColor="#00aa00"
				placeholderTextColor='#000000'
				autoCapitalize="none"
				autoCorrect={false}
				clearButtonMode="while-editing"
			/>
		);
	}
}

FnTextInput.displayName = 'FnTextInput';
