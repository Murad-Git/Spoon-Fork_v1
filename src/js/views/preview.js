import View from './view.js';
// const View = new URL('view.js', import.meta.url );

// const timeIcon = new URL('../../img//logo/time-icon.png', import.meta.url);
// const portionIcon = new URL('../../img/logo/portion-icon.png', import.meta.url);

import timeIcon from 'url:../../../src/img/logo/time-icon.png';
import portionIcon from 'url:../../../src/img/logo/portion-icon.png';

class Preview extends View{
    _parentElement = '';
    errorMessage = 'Could not find this recipe, please try another'

    _generateMarkup(){
      // console.log(`recieved following recipes: ${this._data.title}`);
        return`
        <li class="search__preview" >
          <a class="search__preview__link preview__link--active" href="#${this._data.id}">
            <figure class= "search__preview__fig" >
              <img src="${this._data.image}" alt="food image">
            </figure>
            <div class="search__preview__data">
              <h4 class="search__preview__title">${this._data.title} </h4>
              <div class="search__preview__dishInfo">
              <figure>
              <img src="${timeIcon}" alt="time-icon">
              </figure>
                <p>${this._data.cookingTime} m</p>
                <figure>
                <img src="${portionIcon}" alt="portion-icon">
                </figure>
                <p>${this._data.servings} portions</p>
              </div>
            </div>
          </a>
        </li>
        `
    }
}

export default new Preview();