import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

// tslint:disable-next-line no-var-requires
const mockNotification = require('../assets/mock/invitations.json');
// tslint:disable-next-line no-var-requires
const mockNotificationUpdate = require('../assets/mock/invitations_update.json');

import Notification, { IJsonType } from './Notification.model';

interface IData { invites: IJsonType[]; }

class NotificationService {

  public notifications$: Observable<IData> = new Observable((observer) => {
    observer.next(mockNotification as IData);
    setTimeout(() => observer.next(mockNotificationUpdate as IData), 11000);
  });

  public list(): Observable<Notification[]> {
    return this.notifications$
      .pipe(
        distinctUntilChanged(),
        map((data: IData) => data ? data.invites : []),
        map((invites) => invites.map((d: any) => new Notification(d))),
      );
  }
}

export default new NotificationService();
