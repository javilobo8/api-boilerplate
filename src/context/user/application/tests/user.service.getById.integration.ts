import { getById } from '../user.service.getById';

describe('[service] UserService - getById', () => {
  it('should return a user', async () => {
    const user = await getById({ id: '1' });

    expect(user).toEqual({
      id: '1',
      name: 'John Doe',
      email: '',
      password: '',
    });
  });
});
