/* eslint-disable no-console */

jest.mock('Linking', () => ({
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
	openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
	canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
	getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
}));


require('react-native-mock-render/mock');
const { jsdom } = require('jsdom');

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		global[property] = document.defaultView[property];
	}
});

const originalConsoleError = console.error;
console.error = (message) => {
	// see https://github.com/Root-App/react-native-mock-render/issues/6
	if (message.startsWith('Warning: Unknown prop')) {
		return;
	}

	originalConsoleError(message);
};
