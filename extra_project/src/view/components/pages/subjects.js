import { LitElement, css, html } from 'lit'

export class Subjects extends LitElement {
  render() {
    return html`
      <p>hallo</p>
    `
  }

  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('subjects-comp', Subjects)
