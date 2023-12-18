import plusIcon from '../assets/icon-plus.svg';
import minusIcon from '../assets/icon-minus.svg';

class Item extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        this._render();
    }

    _render() {
        this.shadowRoot.innerHTML = `
        <style>
            header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                user-select: none;
            }

            header h2 {
                font-weight: 700;
                color: hsl(292, 42%, 14%);
                font-size: 1.8rem;
                margin: 0;
            }

            header:hover h2 {
                color: hsl(292, 16%, 49%);
            }

            button {
                border: none;
                outline: none;
                background-color: transparent;
                cursor: pointer;
            }

            main {
                margin-top: 1.5rem;
                color: hsl(292, 16%, 49%);
                font-size: 1.6rem;
                height: 0;
                overflow-y: hidden;
            }

            :host([opened]) main {
                height: auto;
            }
        </style>

        <div>
            <header data-state="${this.isOpen ? 'close' : 'open'}">
                <h2><slot name="header"></slot></h2>
                <button type="button">
                    <img src="${this.isOpen ? minusIcon : plusIcon}" />
                </button>
            </header>

            <main>
                <slot></slot>
            </main>
        </div>
        `;

        const header = this.shadowRoot.querySelector('header');
        if (header.dataset.state === 'open') {
            header.addEventListener('click', this.open.bind(this));
        }
        if (header.dataset.state === 'close') {
            header.addEventListener('click', this.close.bind(this));
        }
    }

    open() {
        if (this.isOpen) return;
        this.isOpen = true;
        this._render();
        this.setAttribute('opened', '');
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;
        this._render();
        this.removeAttribute('opened');
    }
}

export default Item;