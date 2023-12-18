import '../style.css';
import MainWrapper from "./components/main-wrapper";
import Header from './components/header';
import Item from './components/item';


customElements.define('main-wrapper', MainWrapper);
customElements.define('main-header', Header);
customElements.define('list-item', Item);