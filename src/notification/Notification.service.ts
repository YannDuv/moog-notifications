import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

// tslint:disable-next-line no-var-requires
const mockNotification = require('../assets/mock/invitations.json');
// tslint:disable-next-line no-var-requires
const mockNotificationUpdate = require('../assets/mock/invitations_update.json');

import Notification, { IJsonType, StatusType } from './Notification.model';

interface IData {
  invites: IJsonType[];
}

class NotificationService {
  public notifications$: Observable<Notification[]> = new Observable(
    (observer) => {
      observer.next(mockNotification as IData);
      setTimeout(() => observer.next(mockNotificationUpdate as IData), 11000);
    },
  ).pipe(
    // @ts-ignore
    distinctUntilChanged(),
    map((data: IData) => (data ? data.invites : [])),
    map((invites) => invites.map((d: any) => new Notification(d))),
    map((notifications) =>
      notifications.sort((a, b) => b.date.getTime() - a.date.getTime()),
    ),
  );

  public list(): Observable<Notification[]> {
    return this.notifications$;
  }

  public unreads(): Observable<Notification[]> {
    return this.notifications$.pipe(
      map((notifications) =>
        notifications.filter((n) => n.status === StatusType.UNREAD),
      ),
    );
  }
}

export default new NotificationService();
