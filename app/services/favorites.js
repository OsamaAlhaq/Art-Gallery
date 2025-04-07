import { TrackedArray } from 'tracked-built-ins';
import Service from '@ember/service';

export default class FavoritesService extends Service {
    favorites = new TrackedArray([]);

    add(item) {
        this.favorites.push(item);
    }

    remove(item) {
        this.favorites.splice(this.favorites.indexOf(item), 1);
    }
}
