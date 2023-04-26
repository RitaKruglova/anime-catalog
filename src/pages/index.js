import {
  menuSetting,
  menuButton,
  searchForm
} from '../utils/constants.js';

import Validator from '../components/Validator.js';

fetch('https://api.jikan.moe/v4/anime?letter=Naruto&score=something')
.then(res => {
  return res.json();
})
.then(data => {
  console.log(data)
})

const searchValidator = new Validator(searchForm, '.header__input', 'header__input_type_error');
searchValidator.enableValidation();

function getAnimeByName() {

}

function openSearchSettings() {
  if (menuSetting.classList.contains('menu__fieldset_opened')) {
    menuSetting.classList.remove('menu__fieldset_opened')
  } else {
    menuSetting.classList.add('menu__fieldset_opened')
  }
}

menuButton.addEventListener('click', openSearchSettings);