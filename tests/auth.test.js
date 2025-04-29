const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../models/User');

const app = require('../server');

let mongoServer;
afterEach(async () => {
  await User.deleteMany({});
});


beforeAll(async () => {
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });
  
  afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
  });
describe('Auth Routes', () => {
  it('should signup a user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        email: 'test@auth.com',
        password: 'Password123!'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userId');
  });

  it('should not allow duplicate signup', async () => {
    await request(app).post('/api/auth/signup').send({
      email: 'test@auth.com',
      password: 'Password123!'
    });

    const res = await request(app).post('/api/auth/signup').send({
      email: 'test@auth.com',
      password: 'AnotherPassword!'
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe('Email already in use');
  });

  it('should login a user', async () => {
    await request(app).post('/api/auth/signup').send({
      email: 'test@auth.com',
      password: 'Password123!'
    });

    const res = await request(app).post('/api/auth/login').send({
      email: 'test@auth.com',
      password: 'Password123!'
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Logged in successfully');
  });

  it('should block login with wrong password', async () => {
    await request(app).post('/api/auth/signup').send({
      email: 'test@auth.com',
      password: 'Password123!'
    });

    const res = await request(app).post('/api/auth/login').send({
      email: 'test@auth.com',
      password: 'WrongPass123'
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe('Invalid credentials');
  });
});
