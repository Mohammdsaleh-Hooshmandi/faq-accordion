class MainWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
        main {
            background: white;
            min-width: 35rem;
            max-width: 50rem;
            border-radius: 1rem;
            margin: 0 2rem;
        }
        </style>

        <main>
            <slot name="header"></slot>

            <slot name="main-content"></slot>
        </main>
        `;
    }
}

export default MainWrapper;