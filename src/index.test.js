const request = require('supertest');
const app = require('./index');

describe('Express App', () => {
  it('should respond with Hello SonarQube!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello SonarQube!');
  });
});
