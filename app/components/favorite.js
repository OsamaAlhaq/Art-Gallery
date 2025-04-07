import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FavoriteComponent extends Component {
    @service('favorites') artworks;

    @action
    toggleFavorite(item) {
        if (this.isFavorited(item)) {
            this.artworks.remove(item);
        } else {
            this.artworks.add(item);
        }
    }

    @action
    isFavorited(item) {
        return !!this.artworks?.favorites?.find(artwork => artwork?.id == item.id);
    }
}
