import { module, test } from 'qunit';
import { setupTest } from 'art-gallery/tests/helpers';

module('Unit | Controller | artwork', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:artwork');
    assert.ok(controller);
  });
});
