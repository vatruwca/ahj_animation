export default class Collapsible {
  constructor() {
    this.container = document.querySelector('.main_container');
  }

  init() {
    if (!this.container) return;
    const seeMoreHTML = `
      <div class="widget_collapsible">       
        <div class="widget_controls"> 
          <button class="widget_button">Collapse</button> 
        </div>
        <div class="widget_footer collapsed">         
          <div class="widget_footer_string">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.        
          </div>
        </div> 
      </div>`;
    this.container.insertAdjacentHTML('beforeEnd', seeMoreHTML);
    const btnText = document.querySelector('.widget_button');
    this.container.querySelector('.widget_collapsible').addEventListener('click', (e) => {
      if (e.target !== btnText) return;
      const widgetFooter = e.currentTarget.querySelector('.widget_footer');
      widgetFooter.classList.toggle('collapsed');
      widgetFooter.classList.toggle('show');
    });
  }
}
