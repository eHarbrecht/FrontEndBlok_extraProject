import { LitElement, css, html } from 'lit'

export class ChooseSubject extends LitElement {
  render() {
    return html`
    <label for="subjects">current subject</label>
    <select name="subjects">

    </select>
    `
  }

  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('choose-sub', ChooseSubject)
