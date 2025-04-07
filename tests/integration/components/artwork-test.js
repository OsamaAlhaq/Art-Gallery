import { module, test } from 'qunit';
import { setupRenderingTest } from 'art-gallery/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | artwork', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('artwork', {
      artist_title: "Ancient Greek",
      category_titles: ["Arts of Greece, Rome, and Byzantium"],
      id: 161,
      image_id: "1bc27523-6b27-d9b1-4ea0-ec436d6fd95e",
      thumbnail: {
        alt_text: "A wide-mouthed drinking cup glazed in black with two handles extending from opposite sides."
      },
      alt_text: "A wide-mouthed drinking cup glazed in black with two handles extending from opposite sides.",
      height: 4805,
      lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAABEREiAgISYmJycnKXd3eHt7fI2Nj4+PkZCQkpOSlJOTlaCgoqGho7W1uLa2ube3ubm5ur6+wcDAwcDAwsTDxMTDxsTExcTExsXFx8fGx8fHyMfHycjIycvLzMzLzc3Nz8/P0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYfQMgEg6FEHo/FIYFYPDCJAUBgwHBAhQDho+kUhxpPEAA7",
      width: 6407,
      title: "Skyphos (Drinking Cup)",
    })

    await render(hbs`<Artwork @artwork={{this.artwork}} />`);

    assert.dom('[data-test-title]').hasText('Skyphos (Drinking Cup)');
    assert.dom('[data-test-artist]').hasText('Ancient Greek');

  });
});
