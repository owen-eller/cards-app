import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/accent-card/accent-card.js";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardsApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--cards-app-background-color);
    }
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: white;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    max-width: 400px;
    border: 4px solid navy;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    background-color: white;
  }

  .container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .card-content {
    margin-top: 0;
    text-align: center;
  }

  .card-title {
    margin: 16px;
    text-align: center;
  }

  .description {
    margin: 4px;
  }

  .description-toggle {
    cursor: pointer;
  }

  .toggle-button {
    display: block;
    text-align: center;
    padding: 8px;
    border: 4px solid black;
    border-radius: 4px;
    margin-top: 16px;
    color: black;
    background-color: lightblue;
  }
  .details-link {
    display: none;
    margin-top: 16px;
    text-align: center;
  }

  :host([dark]) .container {
    background-color: darkgray;
  }

  .toggle-button:hover,
  .toggle-button:focus {
    background-color: lightgray;
    color: black;
  }

  .hidden {
    display: none;
  }
  @media (max-width: 800px) {
    .button-details {
      display: none;
    }
}


    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;
   constructor() {
    super();
    this.image = 'https://picsum.photos/200/300';
    this.alt = 'Card Image';
    this.title = 'HAX PSU';
    this.description = 'Hax Camp 2022';
    this.link = 'https://hax.psu.edu';
  }

  
  render() {
    return html`
      <main>
      <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
</meme-maker>
<div class="wrapper">
        <div class="container" data-card="1">
          <div class="card">
            <div class="card-content">
              <h2 class="card-title">${this.title}</h2>
              <img src="${this.image}" alt="${this.alt}">
              <div class="description-toggle">
                <div class="description"><slot></slot>${this.description}</div>
                <div class="toggle-button" @click="${this.toggleDescription}">Toggle Description</div>
              </div>
              <a class="details-link" href="${this.link}">Details</a>
            </div>
          </div>
        </div>
      </div>

      <button class="duplicateButton" @click="${this.duplicateCard}">Duplicate Card</button>
      <button class="toggleColorButton" @click="${this.toggleColor}">Toggle Color</button>
      <button class="changeTitleButton" @click="${this.changeTitle}">Change Title</button>
      <button class="deleteCardButton" @click="${this.deleteLastCard}">Delete Last Card</button>
    
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/CardsApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('cards-app', CardsApp);