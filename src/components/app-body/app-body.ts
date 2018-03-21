import { customElement, property } from 'polymer-decorators/src/decorators';
import 'polymer/polymer.html';
import './app-body.html';

@customElement('app-body')
export class AppBody extends Polymer.Element {

  @property({ type: String })
  public name = '';
}
