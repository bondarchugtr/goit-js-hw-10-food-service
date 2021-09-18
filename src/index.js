import refs from './js/refs';
import Theme from './js/thems';
import menuTemplates from './templates/templates.handlebars'
import menu from '../menu.json/';
const { check, body, listMenu, switchControl } = refs;

const addListItem = menu.map((object) => {
    const { id, name, description, image, price } = object;
    const markup = menuTemplates(object);
    listMenu.insertAdjacentHTML('beforeend', markup)
});

switchControl.addEventListener('change', onClickHolderThem)

function onClickHolderThem(evt) {
    const them = evt.target;

    if (them) {
        body.classList.toggle('dark-theme')
    }

    if (evt.target.checked) {
        localStorage.setItem('Theme', 'dark-theme')
    } else {
        localStorage.removeItem('Theme')
    }
}

function fixingThem(params) {
    localStorage.setItem('light-theme')
    console.log(params)
}