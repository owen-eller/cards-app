import { html } from 'lit';
import '../src/cards-app.js';

export default {
  title: 'CardsApp',
  component: 'cards-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <cards-app
      style="--cards-app-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </cards-app>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
