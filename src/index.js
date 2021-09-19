import './css/styles.css';
import refs from './js/refs';
import menuTemplates from './templates/templates.hbs';
import menu from '../menu.json';
const { switchToggle, body, listMenu, switchControl } = refs;
const addListItem = menu.map((object) => {
    const { id, name, description, image, price } = object;
    const markup = menuTemplates(object);
    listMenu.insertAdjacentHTML('beforeend', markup);
});

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const localStorageThem = localStorage.getItem('Theme') || Theme.LIGHT;
switchToggle.setAttribute("checked", "false");
switchToggle.checked = localStorageThem === Theme.DARK;

addClass(localStorageThem);

function addClass(theme) {
    body.classList.add(theme);
}
switchControl.addEventListener('change', onClickHolderThem);

function onClickHolderThem(evt) {
    if (evt.target.checked) {
        localStorage.setItem('Theme', 'dark-theme');
    } else {
        localStorage.removeItem('Theme');
    }
    removeValue(Theme.LIGHT, Theme.DARK);

}
function removeValue(light, dark) {
    body.classList.toggle(light);
    body.classList.toggle(dark);

}