import { User, UserService } from '../user';

enum VectorType {
  EMAIL = 'Email',
  INTERNAL = 'Internal',
  TWITTER = 'Twitter',
}

export enum StatusType {
  READ = 'read',
  UNREAD = 'unread',
}

export interface IJsonType {
  invite_id: number;
  sender_id: string;
  sig_id: number;
  invite: string;
  vector: VectorType;
  invite_time: number;
  status: StatusType;
}

export default class Notification {
  public id: number;
  public message: string;
  public vector: VectorType;
  public status: StatusType;
  public date: Date;
  public user: User;

  constructor(json: IJsonType) {
    this.id = json.invite_id;
    this.message = decodeURI(json.invite.replace('\\n', '<br>'));
    this.vector = json.vector;
    this.status = json.status;
    this.date = new Date(json.invite_time * 1000);
    this.user = UserService.findUserByNameOrPushNewOne(json.sender_id);
  }

  get isRead() {
    return this.status === StatusType.READ;
  }

  get localeDate() {
    return this.date.toLocaleString();
  }
}
