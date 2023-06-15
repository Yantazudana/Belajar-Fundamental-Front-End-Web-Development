import "./cocktailitem.js";

class CocktailList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set cocktails(cocktails) {
        this._cocktails = cocktails;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style> 
        .warning {
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          </style>
          
        <h2 class="warning">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._cocktails.forEach((cocktail) => {
            const cocktailItem = document.createElement("cocktail-item");
            cocktailItem.cocktail = cocktail;
            this.shadowDOM.appendChild(cocktailItem);
        });
    }
}

customElements.define("cocktail-list", CocktailList);