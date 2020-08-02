/* eslint-disable consistent-return */
import app from '../app';

test('should work with promise and async/await', async () => {
  const expected = {
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };
  try {
    const GameSaving = await app.load();
    expect(GameSaving).toEqual(expected);
  } catch (err) {
    return err;
  }
});
