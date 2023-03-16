function change() {
    this.count += 1;
    let btn = 
    btn.innerText = `Times Clicked: ${this.count}`;
};

class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let count = 0;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const btn = document.createElement('button');
        btn.setAttribute('id', 'my_button');
        btn.innerText = `Times Clicked: ${count}`;
        btn.addEventListener("click", change)
        function change() {
            count += 1;
            btn.innerText = `Times Clicked: ${count}`;
        };
        shadowRoot.appendChild(btn);
    }
}
customElements.define('button-count', ButtonCount);