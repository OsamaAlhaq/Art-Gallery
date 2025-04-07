import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';

export default class ArtworkController extends Controller {
    get description() {
        return htmlSafe(this.model.description);
    }
}
