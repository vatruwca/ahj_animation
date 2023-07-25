import Collapse from './collapse';
import '../css/style.css';

const collapseWidget = new Collapse();

document.addEventListener('DOMContentLoaded', () => {
  collapseWidget.init();
});
