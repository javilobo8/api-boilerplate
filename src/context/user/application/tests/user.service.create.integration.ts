import create from '../user.service.create';

describe('UserService.create', () => {
  it('should return the sum of two numbers', async () => {
    const result = await create(1, 2);
    expect(result).toBe(3);
  });
});
