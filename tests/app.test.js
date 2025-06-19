const request = require('supertest');
const app = require('../'); 

describe('GET /', () => {
  it('responds with hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(`Hello World!`);
  });
});