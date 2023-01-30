import { LitElement, css, html } from 'lit'

export class Navigation extends LitElement {
  render() {
    return html`
      <ul>
        <li><a href="/"><div class="txt">Home</div></a></li>
        <li><a href="/subjects"><div class="txt">Subjects</div></a></li>
      </ul>
    `
  }

  static get styles() {
    return css`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding: 10px;
    }

    a {
        text-decoration: none;
        color: #014421;
        font-size: 24px;
        font-weight: 600;
    }

    .txt {
        transition: transform 0.5s;
    }

    .txt:hover {
        color: #1a9555;
        transform: translateX(10px);
    }
    `
  }
}

window.customElements.define('nav-comp', Navigation)
