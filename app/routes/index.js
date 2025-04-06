import Route from '@ember/routing/route';
import { action } from '@ember/object';

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

            console.info('params', params);
            const page = params.page || 1;
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=25`);
            const { data } = await response?.json();

            return data;
        } catch (error) {
            console.error('Error when fetching artworks:', error);
        }
    }


    @action
    handlePageUpdate(newPage) {
        this.transitionTo({ queryParams: { page: newPage } });
    }

}