import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ArtworkRoute extends Route {
    @service('history') viewed;

    async model(params) {
        try {
            const { artwork_id } = params;
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artwork_id}`);
            const { data } = await response?.json();

            this.viewed.add(data);

            return data;
        } catch (error) {
            console.error('Error fetching artwork:', error);
        }
    }

}
