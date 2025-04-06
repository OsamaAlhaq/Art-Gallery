import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  queryParams = ['page'];
  @tracked page = 1;

  @action
  prevPage() {
    if (this.page > 1) {
        this.page--;
    }
  }

  @action
  nextPage() {
    this.page++;
  }
}
