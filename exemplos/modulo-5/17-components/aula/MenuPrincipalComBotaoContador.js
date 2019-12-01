import BotaoContador from "./BotaoContador.js";

export default {
  name: "MenuPrincipal",
  template: `
    <div>
      <botao-contador></botao-contador>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  `,
  components: {
    BotaoContador
  }
}