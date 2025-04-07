import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    queryParams = {
        page: {
          refreshModel: true,
          type: 'number',
          defaultValue: 1
        }
      };

    async model(params) {
        try {
            const page = params.page || 1;
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?fields=id,title,thumbnail,artist_title,category_titles&page=${page}&limit=25`);
            const { data } = await response?.json();

            return data;
        } catch (error) {
            console.error('Error when fetching artworks:', error);
        }
    }
}