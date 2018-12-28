import { BehaviorSubject } from 'rxjs';
import { User } from '.';

class UserService {
  public users$: BehaviorSubject<User[]>;

  constructor() {
    this.users$ = new BehaviorSubject([] as User[]);
  }

  public getUsers() {
    return this.users$.getValue();
  }

  public findUserByNameOrPushNewOne(name: string): User {
    const users = this.users$.getValue();

    let user = users.find((u: User) => u.name === name);

    if (!user) {
      user = new User(name);
      users.push(user);
      this.users$.next(users);
    }

    return user;
  }
}

export default new UserService();
