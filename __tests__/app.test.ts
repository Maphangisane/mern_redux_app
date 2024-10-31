import request from 'supertest';
import app from '../src/app.js';

// Goal Routes test suite
describe('Goals API', () => {
	describe('GET /api/v1/goals', () => {
		it('should return 200 status and all.test.ts goals', async () => {
			const response = await request(app).get('/api/v1/goals');
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('message', 'get all goals');
		});
	});

	describe('POST /api/v1/goals', () => {
		it('should create a new goal and return 201', async () => {
			const goalData = {
				title: 'Test Goal',
				description: 'Test Description'
			};

			const response = await request(app)
				.post('/api/v1/goals')
				.send(goalData);

			expect(response.status).toBe(201);
			expect(response.body).toHaveProperty('message', 'create goal');
		});
	});

	describe('GET /api/v1/goals/:id', () => {
		it('should get a specific goal by id', async () => {
			const response = await request(app).get('/api/v1/goals/123');
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('message', 'get goal by id');
		});
	});

	describe('PUT /api/v1/goals/:id', () => {
		it('should update a specific goal', async () => {
			const updateData = {
				title: 'Updated Goal',
				description: 'Updated Description'
			};

			const response = await request(app)
				.put('/api/v1/goals/123')
				.send(updateData);

			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('message', 'update goal');
		});
	});

	describe('DELETE /api/v1/goals/:id', () => {
		it('should delete a specific goal', async () => {
			const response = await request(app).delete('/api/v1/goals/123');
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('message', 'delete goal');
		});
	});
});

// Auth Routes test suite
describe('Auth API', () => {
	describe('POST /api/v1/auth/register', () => {
		it('should register a new user and return 201', async () => {
			const userData = {
				email: 'test@email.com',
				password: 'password',
				firstName: 'Test',
				lastName: 'User'
			};
			const response = await request(app)
				.post('/api/v1/auth/register')
				.send(userData);

			expect(response.status).toBe(201);
			expect(response.body).toHaveProperty('message', 'user registered successfully');
		});

		describe('POST /api/v1/auth/login', () => {
			it('should login a user and return 200', async () => {
				const userData = {
					email: 'test@email.com',
					password: 'password',
				};

				const response = await request(app)
					.post('/api/v1/auth/login')
					.send(userData);
				expect(response.status).toBe(200);
				expect(response.body).toHaveProperty('message', 'user logged in successfully');
			});
		});
	});
});