import test from 'ava';
import { map } from 'rxjs/operators';
import NotificationModel, {
  IJsonType,
  StatusType,
} from '../../src/notification/Notification.model';
import NotificationService from '../../src/notification/Notification.service';

// tslint:disable-next-line no-var-requires
const mockNotification = require('../../src/assets/mock/invitations.json');
// tslint:disable-next-line no-var-requires
const mockNotificationUpdate = require('../../src/assets/mock/invitations_update.json');

test('Notification service should return notifications', (t) => {
  t.plan(1);
  NotificationService.list()
    .pipe(
      map((results: NotificationModel[]) =>
        t.true(
          results.length === mockNotification.invites.length ||
            results.length === mockNotificationUpdate.invites.length,
        ),
      ),
    )
    .subscribe();
});

function unReads(invite: IJsonType) {
  return invite.status === StatusType.UNREAD;
}

test('Notification service should return unread notifications', (t) => {
  t.plan(1);
  NotificationService.unreads()
    .pipe(
      map((results: NotificationModel[]) =>
        t.true(
          results.length === mockNotification.invites.filter(unReads).length ||
            results.length ===
              mockNotificationUpdate.invites.filter(unReads).length,
        ),
      ),
    )
    .subscribe();
});
