class ProfileMe extends HTMLElement {
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
          .about-info {
            padding: 120px;
            background-color: #171717;
            text-align: center;
            color: #EDEDED;
          }
          
          .about-info > p {
            margin: 10px auto;
            max-width: 600px;
          }

          .about-info > h2 {
            margin: 25px auto;
            font-size: 17px;
            max-width: 750px;
            color: #DA0037;
            text-decoration: underline;
          }

      </style>
      
      <div class="about-info">
          <h1>More Fun, More Enjoy, and More High</h1>
          <p>We provide some of the best drink recommendations we have. Forget your stress for a moment by ordering drinks with us. ENJOYY GUYSS </p>

          <h2> Note : Drink responsibly and don't cause any problems to other customers.</h2>
        </div>
      `;
  }
}
customElements.define("profile-me", ProfileMe);
