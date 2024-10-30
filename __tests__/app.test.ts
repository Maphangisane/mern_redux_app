import request from 'supertest'; // for API testing
import app from '../app';

describe('GET /', () => {
	it('should return 200 status and "TypeScript with Express!"', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(response.text).toBe('TypeScript with Express!');
	});
});
