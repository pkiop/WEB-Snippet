import templateLiteralForCreateElement from './test/templateLiteralForCreateElement 

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstElementChild; 
}

const component = createElementFromHTML(`
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul
`)

console.log(component);
