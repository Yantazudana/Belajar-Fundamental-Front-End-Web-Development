class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        nav {
            background-color: #da0037;
            padding: 10px;
        }
        
        nav li {
            display: inline;
            margin-right: 20px;
            padding-top: 5px;
        }
        
        nav a {
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: semibold;
            color: #EDEDED;
            margin: auto;
            padding: 0 15px 0 15px;
        }
        
        nav a:hover {
            color: #DA0037;
            font-weight: semibold;
            background-color: #171717;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;
        }

        .navtitle {
            color: #EDEDED;
            font-size: 40px;
            font-weight: bold;
        }
        @media screen and (max-width: 1000px) {

            nav li {
                display: inline;
                padding-top: 0px;
                margin-right: 0px;
            }

            nav a {
                font-size: 10px;
                margin: auto;
            }

            .navtitle {
                font-size: 30px;
            }
        }
      </style>
      
      <nav>
            <ul>
                <li ><a class="navtitle">Red Eagle</a></li>
                <li style="float:right"><a href="https://www.thecocktaildb.com/api.php">API</a></li>
                <li style="float:right"><a href="https://www.linkedin.com/in/ahmad-yanta-fairuz-zudana-094a05266/">CONTACT PERSON</a></li>
            </ul>
        </nav> 
      `;
  }
}
customElements.define("nav-bar", NavBar);
