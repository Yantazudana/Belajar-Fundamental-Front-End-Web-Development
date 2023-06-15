class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set Click(event) {
    this._Click = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchEle").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
      .search-box {
        background-color: white;
        max-width: 700px;
        padding: 15px;
        margin: 20px auto;
        border-radius: 7px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        display: flex;
        position: sticky;
        top: 10px;
      }
      
      .search-box > input {
        color: #171717;
        font-weight: bold;
        width: 76%;
        padding: 16px;
        border: 0;
        border-bottom: 0.5px solid #171717;
      }

      .search-box >  input::placeholder {
        font-weight: normal;
        color: #171717;
      }
      
      .search-box > input:focus {
        outline: 0;
        color: #171717;
      }
      
      .search-box > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-box > button {
        background-color: #171717;
        font-weight: bold;
        color: white;
        width: 20%;
        padding: 15px;
        margin-left: auto;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
      }

      @media screen and (max-width: 500px){
        .search-box {
          position: static;
          flex-direction: column;
        }
        
        .search-box > button {
          width: 100%;
        }

        .search-box > input {
          margin-bottom: 15px;
          width: 100%;
        }
      }
      </style>
      
      <div class="search-box">
        <input placeholder="Search Any Cocktails" id="searchEle" type="search">
        <button id="ButtonElement" type="submit">SEARCH</button>
      </div>
      `;

    this.shadowDOM
      .querySelector("#ButtonElement")
      .addEventListener("click", this._Click);
  }
}

customElements.define("search-bar", SearchBar);
