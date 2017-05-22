
import React from 'react';
import { View } from 'react-native';
import { mount } from 'enzyme';

import { FnTextInput } from '../FnTextInput';


it('renders correctly', () => {
  const loginView = mount(
    <View>

			<FnTextInput
				id="usernameInput"
			/>

			<FnTextInput
				id="passwordInput"
			/>

		</View>
  );

	expect(loginView.find('FnTextInput').length).toEqual(2);
	expect(loginView.find(FnTextInput).length).toEqual(2);
  expect(loginView.find('[id="usernameInput"]').length).toEqual(1);
	expect(loginView.find(FnTextInput).find('[id="usernameInput"]').length).toEqual(1);
});
