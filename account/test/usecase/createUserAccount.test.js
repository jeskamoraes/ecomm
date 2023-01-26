import app from '../../src/app.js';
import request from 'supertest';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';

describe('Account Creation', () => {
  afterEach(async () => {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.deleteMany({});
  });

  it('should create an user given correct user data', async () => {
    await request(app)
      .post('/accounts')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        name: 'Guilherme',
        email: 'gui@pagonxt.com',
        password: '123pago@00'
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual({
          id: expect.any(String),
          name: 'Guilherme',
          email: 'gui@pagonxt.com',
          date: new Date().toISOString().slice(0, 10)
        })
      });
  });
});