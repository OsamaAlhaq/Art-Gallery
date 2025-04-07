import { module, test } from 'qunit';
import { setupTest } from 'art-gallery/tests/helpers';

module('Unit | Service | favorites', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:favorites');
    assert.ok(service);
  });

  test('it adds and removes items to favorites list', function (assert) {
    let service = this.owner.lookup('service:favorites');
    assert.equal(service.favorites.length, 0, 'Favorites list is empty');
    
    service.add({ id: 1 });
    assert.equal(service.favorites.length, 1, 'Favorites list is not empty');

    service.remove({ id: 1 });
    assert.equal(service.favorites.length, 0, 'Favorites list is empty');

  });

});
