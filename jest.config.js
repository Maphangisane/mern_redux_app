export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		// '^.+\\.ts$': 'ts-jest', // Use ts-jest to handle TypeScript files
		'^.+\\.tsx?$': 'babel-jest', // Use Babel to handle TypeScript files
		'^.+\\.js$': 'babel-jest', // Use Babel to handle JavaScript files
	},
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
