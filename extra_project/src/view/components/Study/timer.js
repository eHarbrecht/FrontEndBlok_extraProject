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
        <div class="grid">
            <div class="wrapper">
                <div class="overlay">
                    <label>${this.time}</label><br>
                    <div class="btns">
                        <button @click=${() => this.timer(this.time)} class="start">Start</button><br>
                        <button @click=${this.addSec}>+60</button>
                        <button @click=${this.removeSec}>-60</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    static get styles() {
        return css`
        .grid {
            display: grid;
            width: calc(100vw - 100px);
        }

        .wrapper {
            background-color: #FFFFFF;
            border-radius: 50%;
            padding: 50px;
            margin: auto;
            width: 300px;
            height: 300px;
            text-align: center;
        }
        
        .overlay {
            margin-top: 100px;
        }

        label {
            font-size: 70px;
        }

        .btns {
            margin-top: 25px;
        }

        button {
            width: 140px;
            height: 25px;
            margin-top: 5px;
            background-color: #FFFFFF;
            color: #014421;
            font-weight: 600;
        }

        button:hover {
            background-color: #014421;
            color: #FFFFFF;
        }

        .start {
            width: 280px;
        }
        `
    }
}

window.customElements.define('timer-comp', Timer)
