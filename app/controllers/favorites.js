import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class FavoritesController extends Controller {
    @service('favorites') artworks;

    get categoryStats() {
        const categories = {};

        this.artworks.favorites.forEach(artwork => {
            artwork.category_titles?.forEach(category => {
                categories[category] = (categories[category] || 0) + 1;
            });
        });

        return Object.entries(categories).map(([name, count]) => ({
            name,
            count
        }));
    }

}
