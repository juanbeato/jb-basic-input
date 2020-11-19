import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import style from './JbBasicInput.scss';

export class JbBasicInput extends LitElement {
  static get styles() {
    return [css`${unsafeCSS(style)}`];
  }

  static get properties() {
    return {
      label: { type: String },
      rightIcon: { type: String },
      leftIcon: { type: String },
      inputType: { type: String },
      inputValue: { type: String },
      infoMessageIcon: { type: String },
      infoMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.label = '';
    this.infoMessage = '';
    this.inputValue = '';
    this.rightIcon = '';
    this.leftIcon = '';
    this.inputType = 'text';
    this.infoMessageIcon = 'error';
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <p>${this.label}</p>
      ${this._inputTemplate}
      ${this._infoMessageTemplate}
    `;
  }

  get _inputTemplate() {
    return html`
      <div class="jb-basic-input-container">
        ${this._inputIconTemplate(this.leftIcon)}
        <input class="jb-basic-input-container__input" type=${this.inputType} value=${this.inputValue}>
        ${this._inputIconTemplate(this.rightIcon)}
      </div>
    `;
  }

  get _infoMessageTemplate() {
    return this.infoMessage 
      ? html`<p>${this.infoMessage}</p>
      <iron-icon icon=${this.infoMessageIcon}></iron-icon>`
      : html``
  }

  _inputIconTemplate(icon) {
    return icon
      ? html`<iron-icon class="jb-basic-input-container__icon" icon=${icon}></iron-icon>`
      : html``
  }
}
