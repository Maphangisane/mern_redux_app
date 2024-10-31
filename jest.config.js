export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				useESM: true,
			},
		],
	},
	// testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	testMatch: ['**/__tests__/**/*.test.ts'],  // Only match TypeScript test files
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Ignore dist directory
};