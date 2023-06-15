class CocktailItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set cocktail(cocktail) {
        this._cocktail = cocktail;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        border-radius: 10px;
        overflow: hidden;
      }
      .images {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        object-position: center;
      }
      .cocktail-info {
        margin-top: -10px;
        padding: 20px;
        background-color: white;
        color: #DA0037;
      }
      .cocktail-info > h3 {
        margin-top: 10px;
      }
      .cocktail-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10;
      }

        </style>

        <img class="images" src="${this._cocktail.strDrinkThumb}" alt="Cocktail Images">
        <div class="cocktail-info">
          <h2>${this._cocktail.strDrink}</h2>
          <p>Alcohol : ${this._cocktail.strAlcoholic}</p>
          <h3>Main Ingredient</h3>
          <p>${this._cocktail.strIngredient1}</p>
          <p>${this._cocktail.strIngredient2}</p>
        </div>
      `;
    }
}

customElements.define("cocktail-item", CocktailItem);