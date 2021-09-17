import refs from './js/refs';
import thems from './js/thems';
import menuTemplates from './templates/templates.handlebars'
import menu from '../menu.json/';

const { list } = refs;

menu.map((object) => {
    const { id, name, description, image, price } = object;
    const markup = menuTemplates(object);
    list.insertAdjacentHTML('beforeend', markup)
});

refs.body = addEventListener('input', clickHolderThem)
function clickHolderThem(evt) {
    console.log(evt.target)
}