import request from 'supertest';

import app from '../../../../../app';

describe('MonitController.health', () => {
  it('should response ok', async () => {
    const response = await request(app).get('/monit/health');

    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });
});
