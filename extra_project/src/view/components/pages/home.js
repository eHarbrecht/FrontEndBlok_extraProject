import { LitElement, css, html } from 'lit'
import { Timer } from '../Study/timer'

export class Home extends LitElement {
  render() {
    return html`
    <timer-comp></timer-comp>
    `
  }

  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('home-comp', Home)
