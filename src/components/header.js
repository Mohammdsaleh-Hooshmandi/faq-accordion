import starIcon from '../assets/icon-star.svg';

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
        div {
            align-items: center;
            display: flex;
        }

        div img,
        div h1 {
            margin-left: 1rem;
        }

        div img {
            width: 3rem;
            height: 3rem;
        }

        div h1 {
            font-size: 3.5rem;
            color: hsl(292, 42%, 14%);
        }
        </style>

        <div>
            <img src="${starIcon}" alt="star icon"></img>
            <h1><slot></slot></h1>
        </div>
        `;
    }
}

export default Header;