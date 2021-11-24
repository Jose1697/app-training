import { CellsPage } from "@cells/cells-page";
import { html } from "lit-element";
import "@cells-components/cells-template-paper-drawer-panel";
import "@bbva-web-components/bbva-web-header-public-web/bbva-web-header-public-web.js";
import "@traning-cells/list-card-traing-noviembre/list-card-traing-noviembre.js";
import "@traning-igh/card-name/card-name.js";
import '@traning-igh/table-component/table-component.js';
class DetailPage extends CellsPage {
  static get is() {
    return "detail-page";
  }
  static get properties() {
    return {};
  }
  constructor() {
    super();
  }
  render() {
    return html`
      <cells-template-paper-drawer-panel>
        <div slot="app__header">
          <bbva-web-header-public-web
            description="Home de BBVA"
            logo-href="https://www.bbva.es"
            logo-target="_blank"
            tab-1-href="https://www.bbva.es/personas.html"
            tab-1-target="_blank"
            tab-2-href="https://www.bbva.es/empresas.html"
            tab-2-target="_blank"
          >
          </bbva-web-header-public-web>
        </div>
        <div slot="app__main">
          <card-name
            title="SEGUROS"
            name="MARIELA MILAGROS QUISPE MINAYA"
            dni="12345678"
          ></card-name>
          <table-component title="Seguro Vehicular"></table-component>
        </div>
      </cells-template-paper-drawer-panel>
    `;
  }
}
window.customElements.define(DetailPage.is, DetailPage);
