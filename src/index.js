import refs from './js/refs';
import menuTemplates from './templates/templates.handlebars'
import menu from '../menu.json/';
const { switchToggle, body, listMenu, switchControl } = refs;

const addListItem = menu.map((object) => {
    const { id, name, description, image, price } = object;
    const markup = menuTemplates(object);
    listMenu.insertAdjacentHTML('beforeend', markup)
});

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const refBody = document.querySelector('body')
const refCheckBox = refBody.querySelector('.theme-switch__control')
const refInput = refCheckBox.querySelector('.theme-switch__toggle')
const refMenu = refBody.querySelector('.js-menu');
console.log(refCheckBox)
const localStorageValue = localStorage.getItem('Theme') || Theme.LIGHT
refInput.setAttribute("checked", "false")
refInput.checked = localStorageValue === Theme.DARK

addClass(localStorageValue)

function addClass(color) {
    refBody.classList.add(color)
}
switchControl.addEventListener('change', onClickHolderThem);
function onClickHolderThem(evt) {
    removeValue(Theme.LIGHT, Theme.DARK)
    if (evt.target.checked) {
        localStorage.setItem("Theme", 'dark-theme');
    } else {
        localStorage.removeItem('Theme')
    }
}

function removeValue(light, dark) {
    body.classList.toggle(light)
    body.classList.toggle(dark)
}