import { module, test } from 'qunit';
import { setupRenderingTest } from 'art-gallery/tests/helpers';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | favorite', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders without label', async function (assert) {

    await render(hbs`<Favorite />`);

    assert.dom().hasText('');

  });

  test('it renders with label', async function (assert) {

    await render(hbs`<Favorite @showLabel={{true}} />`);

    assert.dom().hasText('Add to favorites');

  });

  test('it toggles favorite button color and label', async function (assert) {

    this.set('artwork', { id: 1 });

    this.set('isFavorited', (artwork) => false);

    this.set('toggleFavorite', function (artwork) {
      this.isFavorited = () => true;
    });

    await render(hbs`
      <Favorite 
      @toggleFavorite={{this.toggleFavorite}}
      @isFavorited={{this.isFavorited}}
      @artwork={{this.artwork}} 
      @showLabel={{true}}
      />
    `);

    const svg = find('svg');
    assert.equal(svg.getAttribute('fill'), 'grey', 'Initial color is grey');
    assert.dom().hasText('Add to favorites', 'Initial label');

    await click('[data-test-favorites-button]');

    const updatedSvg = find('svg');
    assert.equal(updatedSvg.getAttribute('fill'), 'red', 'Icon color changes to red');
    assert.dom().hasText('Remove from favorites', 'Label updated');

  });
});
