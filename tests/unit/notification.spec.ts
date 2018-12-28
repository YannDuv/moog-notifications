import test from 'ava';
import { map } from 'rxjs/operators';
import NotificationModel from '../../src/notification/Notification.model';
import NotificationService from '../../src/notification/Notification.service';

// tslint:disable-next-line no-var-requires
const mockNotification = require('../../src/assets/mock/invitations.json');
// tslint:disable-next-line no-var-requires
const mockNotificationUpdate = require('../../src/assets/mock/invitations_update.json');

test('Notification service should return notifications', (t) => {
    NotificationService
        .list()
        .pipe(
            map((results: NotificationModel[]) => {
                t.true(
                    results.length === mockNotification.invites.length ||
                    results.length === mockNotificationUpdate.invites.length,
                );
            }),
        )
        .subscribe();
});
