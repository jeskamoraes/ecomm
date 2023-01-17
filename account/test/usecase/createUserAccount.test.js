import app from '../../src/app.js';
import request from 'supertest';
import { response } from 'express';
import { MongoClient } from 'mongodb';
import getUsersCollection from '../../src/repositories/accountRepository.js'

describe('insert', () => {
    let connection;
    let db;
  
    beforeAll(async () => {
      connection = await MongoClient.connect(globalThis.getUsersCollection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      db = await connection.db(globalThis.accounts);
    });
  
    afterAll(async () => {
      await connection.close();
    });

afterEach(() => {
    server.close()
});

describe('POST Account', () => {
    it('Registra uma conta', async () => {
        await request(app)
            .post('/accounts')
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json')
            .send({
                name: "Camila",
                email: "camila@gmail.com",
                password: "camis@123"
            })
            expect(response.ok).toBeTruthy();
    })
})