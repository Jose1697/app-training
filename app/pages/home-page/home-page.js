
import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-web-header-public-web/bbva-web-header-public-web.js';
import '@traning-cells/list-card-traing-noviembre/list-card-traing-noviembre.js';
import '@traning-igh/card-name/card-name.js';

class HomePage extends CellsPage{

  static get is(){
    return 'home-page';
  }
  static get properties(){
    return {};
  }
  constructor(){
    super();
    this.cards=[
      {
        title: 'Seguro Vehicular',
        info: 'BBVA y Rimac se unieron para brindar los siguientes beneficios a clientes del banco',
        listItems: [
          'Cubre autos de robo total',
          'Cubre daños de terceros',
          'Cuenta con auxilio mecánico y traslado de grúa',
          'Descuento en gasolina Repsol',
          'Tenemos 3 planes de protección para vehículo',
        ],
        buttonName: 'Cotizar'
      },
      {
        title: 'Seguro Hogar',
        info: 'BBVA y Rimac se unieron para brindar los siguientes beneficios a clientes del banco',
        listItems: [
          'Cubre autos de robo total',
          'Cubre daños de terceros',
          'Cuenta con auxilio mecánico y traslado de grúa',
          'Descuento en gasolina Repsol',
          'Tenemos 3 planes de protección para vehículo',
        ],
        buttonName: 'Cotizar'
      },
    ]
  }

  _onSelectionCard(){
    this.navigate('detail')
  }

  render(){
    return html`
    <cells-template-paper-drawer-panel>
        <div slot="app__header">
          <bbva-web-header-public-web description="Home de BBVA" logo-href="https://www.bbva.es" logo-target="_blank"
            tab-1-href="https://www.bbva.es/personas.html" tab-1-target="_blank"
            tab-2-href="https://www.bbva.es/empresas.html" tab-2-target="_blank">
          </bbva-web-header-public-web>
        </div>
        <div slot="app__main">
          <card-name title="SEGUROS" name="MARIELA MILAGROS QUISPE MINAYA" dni="12345678"></card-name>
          <list-card-traing-noviembre title="Seguros para ofrecer al cliente" list-cards="${JSON.stringify(this.cards)}" @selection-card="${this._onSelectionCard}">
          </list-card-traing-noviembre>
        </div>
     </cells-template-paper-drawer-panel>
    `;
  }

}
window.customElements.define(HomePage.is, HomePage);