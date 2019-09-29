import Component from '../lib/component.js';
import store from '../store/index.js';

export default class List extends Component {

    constructor() {
      super({
        store,
        element: document.querySelector('.js-items')
      });
    }
  
    render() {
      let self = this;
  
      if(store.state.items.length === 0) {
        self.element.innerHTML = `<p class="no-items">You've done nothing yet &#x1f622;</p>`;
        return;
      }
  
      self.element.innerHTML = `
        <ul class="app__items">
          ${store.state.items.map(item => {
            return `
              <li>${item}<button aria-label="Delete this item">×</button></li>
            `
          }).join('')}
        </ul>
      `;
  
      self.element.querySelectorAll('button').forEach((button, index) => {
        button.addEventListener('click', () => {
          store.dispatch('clearItem', { index });
        });
      });
    }
  };