import test from 'ava';
import { UserService } from '../../src/user';

test.serial('User list should be empty at first', (t) => {
  const users = UserService.getUsers();
  t.true(users.length === 0);
});

test('If not found, findUserByNameOrPushNewOne should create a new user', (t) => {
  const name = 'John';
  UserService.findUserByNameOrPushNewOne(name);
  const users = UserService.getUsers();
  t.true(users.length === 1);
  const user = users[0];
  t.deepEqual(user.name, name);
});
