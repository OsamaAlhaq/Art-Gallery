import EmberRouter from '@ember/routing/router';
import config from 'art-gallery/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('artwork', { path: '/artwork/:artwork_id' });
  this.route('favorites');
  this.route('history');
  this.route('not-found', { path: '/*path' })
});
