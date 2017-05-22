import React from 'react';
import { View } from 'react-native';
import { mount } from 'enzyme';

import { FnTextInput } from '../FnTextInput';

describe('<FnTextInput />', () => {
  let loginView;
  beforeEach(() => {
    loginView = mount(
      <View>
        <FnTextInput id="usernameInput" />
        <FnTextInput id="passwordInput" />
      </View>,
    );
  });

  it('component constructor', () => {
    expect(loginView.find(FnTextInput)).toHaveLength(2);
  });

  it('component displayName', () => {
    expect(loginView.find('FnTextInput')).toHaveLength(2);
  });

  it('css selector', () => {
    expect(loginView.find('[id="usernameInput"]')).toHaveLength(1);
  });

  it('component constructor and css selector', () => {
    expect(
      loginView.find(FnTextInput).find('[id="usernameInput"]'),
    ).toHaveLength(1);
  });
});
