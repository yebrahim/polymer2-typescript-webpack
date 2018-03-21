import { customElement, property } from 'polymer-decorators/src/decorators';
import 'polymer/polymer.html';
import { env } from '../../lib/config';
import './app-body.html';

@customElement('app-body')
export class AppBody extends Polymer.Element {

  @property({ type: String })
  public name = '';

  ready() {
    super.ready();
    if (env === 'dev') {
      this.name += ' (This is the development environment)';
    }
  }
}
