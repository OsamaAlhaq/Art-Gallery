import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class HistoryController extends Controller {
    @service('history') viewed;
}
