import { TrackedArray } from 'tracked-built-ins';
import Service from '@ember/service';

export default class HistoryService extends Service {
    history = new TrackedArray([]);

    add(item) {
        this.history.push(item);
    }

}
