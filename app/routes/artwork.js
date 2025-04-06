import Route from '@ember/routing/route';

export default class ArtworkRoute extends Route {

    async model(params) {
        try {
            const { artwork_id } = params;
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artwork_id}`);
            const { data } = await response?.json();
            return data;
        } catch (error) {
            console.error('Error fetching artwork:', error);
        }
    }

}
