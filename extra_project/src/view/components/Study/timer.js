import { LitElement, css, html } from 'lit'

export class Timer extends LitElement {
    static get properties() {
        return {
            time: { type:Number },
            setTime: { reflect:true },
        };
    }

    constructor() {
        super();
        this.time = 0;
        this.setTime = 0;
    }

    attributeChangedCallback(name, oldval, newval) {
        this.time = newval;
        super.attributeChangedCallback(name, oldval, newval);
    }
    
    timer(time) {
        if (time >= 0) {
            setTimeout(() => {
                this.time = time;
                time--;
                this.timer(time);
            }, 1000);
        }
    }

    addSec() {
        this.setTime += 60;
    }

    removeSec() {
        if (this.setTime >= 60) {
            this.setTime -= 60;
        } else {
            this.setTime = 0;
        }
        
    }


    render() {
        return html`
        <label>${this.time}</label>
        <button @click=${() => this.timer(this.time)}>Start</button>
        <button @click=${this.addSec}>+60</button>
        <button @click=${this.removeSec}>-60</button>
        `
    }

    static get styles() {
        return css`
      
        `
    }
}

window.customElements.define('timer-comp', Timer)
