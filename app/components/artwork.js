import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ArtworkComponent extends Component {
    @service('history') artworks;

    @action
    isViewed(item) {
        return this.artworks.isViewed(item)
    }
}
